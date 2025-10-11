import { se } from "date-fns/locale";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {

    try {
        const body = await req.json();
        const { items, customer } = body; // <--- Potential issue here

        // Log received items and customer for debugging
        console.log("Received items:", items);
        console.log("Received customer:", customer);

        // --- IMPORTANT: Check if items and customer are valid ---
        if (!items || !Array.isArray(items) || items.length === 0) {
            throw new Error("Missing or invalid 'items' in the request body.");
        }
        if (!customer || !customer.email) {
            throw new Error("Missing or invalid 'customer' or 'customer.email' in the request body.");
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer_email: customer.email, 
            line_items: items.map((item) => ({
                price_data: {
                    currency: 'egp',
                    product_data: { name: item.title },
                    unit_amount: Math.round(parseFloat(item.price) * 100)
                },
                quantity: item.quantity
            })),
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Store/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Store/cancel`,

            shipping_address_collection: {
                allowed_countries: ["US", "CA", "EG"],
            },
        });

        console.log(body)
        console.log(session)

        return NextResponse.json({ id: session.id });

    } catch (err) {
        console.error("Stripe API error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}