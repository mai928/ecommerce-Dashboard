import React from "react";
import { Inter as FontSans } from "next/font/google";
import Banner from "../../StoreComponents/Banner";
import Footer from "../../StoreComponents/Footer";
import { ClerkProvider } from "@clerk/nextjs";


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "E-Commerce",
    description: "E-Commerce ",
};

export default function StoreLayout({ children }) {
    return (
        <ClerkProvider signInUrl="/Store/sign-in" signUpUrl="/Store/sign-up">
            <div className={`min-h-screen  font-sans antialiased `}>
                <Banner />
                {children}
                <Footer />
            </div>
        </ClerkProvider>
    );
}
