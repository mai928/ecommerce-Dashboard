// // /api/gemini/route.js (App Router)
// import { NextResponse } from "next/server";
// import { clientCommrerce } from "@/lib/sanity";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// export async function POST(req) {
//   const { question } = await req.json();

//   // fetch products from Sanity
//   const products = await clientCommrerce.fetch(`*[_type == "product"]{
//     title, price, stock, category, "imageUrl": img.asset->url
//   }`);

//   // init Gemini
//   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//   // send Q + context
//   const prompt = `
//   You are a shopping assistant.
//   User question: ${question}
//   Here are the products (JSON): ${JSON.stringify(products)}
//   Answer with relevant product info only.
//   `;

//   const result = await model.generateContent(prompt);
//   const reply = result.response.text();

//   return NextResponse.json({ answer: reply });
// }

// app/api/chat/route.js (or pages/api/chat.js if using Pages Router)
// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { clientCommrerce } from "@/lib/sanity"; // Make sure this path is correct

// // Initialize Google Generative AI
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // Define general store information (consider fetching this from Sanity for flexibility)
// const generalStoreInfo = `
//   Store Name: Catbot Online Store
//   Business Hours: Monday - Friday, 9 AM - 5 PM EST
//   Shipping Policy:
//   - Standard Shipping: 3-5 business days.
//   - Express Shipping: 1-2 business days.
//   - Free shipping on orders over $50.
//   Return Policy:
//   - Returns accepted within 30 days of purchase.
//   - Products must be unused and in original packaging.
//   - Customer is responsible for return shipping costs unless the item is faulty.
//   Contact Email: support@catbotstore.com
//   Phone: 1-800-CAT-BOTS (1-800-228-2687)
// `;

// export async function POST(req) {
//   try {
//     const { message, history = [] } = await req.json();

//     console.log("--- Chat API Request Start ---");
//     console.log("Received message:", message);
//     console.log("Received history length:", history.length);

//     if (!message) {
//       console.error("Error: Message is required.");
//       return NextResponse.json({ error: "Message is required" }, { status: 400 });
//     }

//     // 1️⃣ Classify current user message
//     const classifier = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const classificationPrompt = `
//       Classify this question as either "product" or "general".
//       A "product" question is directly asking about specific items, their features, price, stock, or categories.
//       A "general" question is about store policies, shipping, returns, contact info, or conversational greetings.

//       Question: "${message}"

//       Only return one word: product or general.
//     `;

//     console.log("Sending classification prompt to Gemini...");
//     const classificationResult = await classifier.generateContent(classificationPrompt);
//     let type = classificationResult.response.text().trim().toLowerCase(); // Use 'let' for reassigning

//     console.log("Message classified as:", type);
//     // Add a basic fallback if classification is not exact
//     if (!["product", "general"].includes(type)) {
//       console.warn(`Unexpected classification type: "${type}". Attempting to infer.`);
//       if (type.includes("product")) { // Heuristic: if it contains "product", treat as product
//         type = "product";
//       } else { // Default to general if unsure
//         type = "general";
//       }
//       console.warn(`Falling back to type: "${type}".`);
//     }

//     // 2️⃣ Prepare context based on classification
//     let context = "";
//     let systemInstructions = "";
//     let productsData = []; // To store fetched products for logging

//     if (type === "product") {
//       console.log("Fetching product data from Sanity...");
//       productsData = await clientCommrerce.fetch(`
//         *[_type == "product"]{
//           title,
//           label,
//           details,
//           price,
//           category,
//           stock
//         }
//       `);
//       console.log("Fetched products count:", productsData.length);

//       if (productsData.length > 0) {
//         context = productsData
//           .map(
//             (p) =>
//               `- ${p.title} (${p.category}): ${p.details || "No details available."} | Price: $${p.price} | Label: ${p.label || "N/A"} | Stock: ${p.stock ? "Available" : "Out of stock"}`
//           )
//           .join("\n");
//         systemInstructions = `Here is product data from Sanity:\n${context}\nAnswer only using this product data. If you cannot find information about a specific product in the provided data, politely state that you couldn't find it. If the user asks for a recommendation, recommend a relevant product from the list and explain why based on its details.`;
//       } else {
//         systemInstructions = `I couldn't find any product data in the system. Please inform the user that you don't have product information at the moment, and suggest they ask about general store policies instead.`;
//       }
//     } else { // type === "general"
//       context = generalStoreInfo;
//       systemInstructions = `This is a general support question. Use the provided store information to answer. If the information is not available, state that you don't have that specific detail. Be naturally conversational.`;
//     }

//     console.log("Context type for main prompt:", type);
//     console.log("Context snippet (first 100 chars):", context.substring(0, 100) + (context.length > 100 ? "..." : ""));
//     console.log("System Instructions snippet (first 100 chars):", systemInstructions.substring(0, 100) + (systemInstructions.length > 100 ? "..." : ""));

//     // 3️⃣ Build conversation history for the AI model
//     // This format assumes history is [{ role: 'user' | 'model', text: string }]
//     const formattedHistoryParts = history.map((h) => {
//         const role = h.role === 'user' ? 'USER' : 'ASSISTANT'; // Use uppercase for clarity in prompt
//         return `${role}: ${h.text}`;
//     });
//     const formattedHistoryString = formattedHistoryParts.join("\n");
//     console.log("Formatted history string length:", formattedHistoryString.length);


//     // 4️⃣ Final AI prompt with memory and context
//     // Using gemini-2.5-flash for main response, consistent with your working code
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//     const prompt = `
//       You are a friendly and helpful customer support assistant for "Catbot Online Store".
//       Your goal is to assist customers with their questions about products and general store policies.

//       Current date: ${new Date().toLocaleDateString()}

//       Conversation so far:
//       ${formattedHistoryString}

//       User just asked: "${message}"

//       ${type === "product" ? `
//         --- Product Data ---
//         ${context}
//         --------------------
//       ` : `
//         --- General Store Information ---
//         ${context}
//         ---------------------------------
//       `}

//       ${systemInstructions}

//       Always be clear, friendly, and use bullet points for lists when appropriate.
//       Do not ask the user to repeat information you already know from the conversation history or the provided context.
//       Maintain a helpful and positive tone.
//       Crucially, if the user asks a product question and no relevant product is found in the provided Product Data,
//       kindly inform them that you couldn't find that specific product and suggest browsing the store or asking about other items.
//       If a general question cannot be answered from the General Store Information, state that the information isn't available.
//     `;

//     console.log("Final prompt length:", prompt.length);
//     // Uncomment the line below to see the full prompt if you suspect prompt construction issues
//     // console.log("Final prompt:", prompt);

//     console.log("Sending final prompt to Gemini...");
//     const response = await model.generateContent(prompt);
//     const reply = response.response.text();

//     console.log("Gemini raw response object (for debugging):", response.response);
//     console.log("Gemini extracted reply (first 200 chars):", reply.substring(0, 200) + (reply.length > 200 ? "..." : ""));

//     return NextResponse.json({ answer: reply });
//   } catch (error) {
//     console.error("--- Chat API Error ---");
//     console.error("An error occurred in the Chat API:", error);

//     // More detailed error logging for Gemini specific issues
//     if (error.response) {
//       console.error("Gemini API Error details:", JSON.stringify(error.response.error, null, 2));
//       // You might get status codes, error messages from Google's API here
//     }
//     // Also check if Sanity fetch failed
//     if (error.message && error.message.includes("Sanity")) {
//       console.error("Possible Sanity client error:", error.message);
//     }
//     return NextResponse.json({ error: "Something went wrong with the AI assistant. Please try again later." }, { status: 500 });
//   } finally {
//     console.log("--- Chat API Request End ---");
//   }
// }


// app/api/chat/route.js (Simplified to ONE Gemini Call)

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { clientCommrerce } from "@/lib/sanity";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generalStoreInfo = `
  Store Name: Catbot Online Store
  Business Hours: Monday - Friday, 9 AM - 5 PM EST
  Shipping Policy:
  - Standard Shipping: 3-5 business days.
  - Express Shipping: 1-2 business days.
  - Free shipping on orders over $50.
  - If the user asks for shipping to a specific country or region, state that current shipping is only within the US.
  Return Policy:
  - Returns accepted within 30 days of purchase.
  - Products must be unused and in original packaging.
  - Customer is responsible for return shipping costs unless the item is faulty.
  Contact Email: support@catbotstore.com
  Phone: 1-800-CAT-BOTS (1-800-228-2687)
`;

// --- NEW HELPER FUNCTION FOR GEMINI API CALLS WITH RETRY ---
// (Keep this, as it's still good for handling sporadic 429s)
async function callGeminiWithRetry(modelInstance, prompt, maxRetries = 3) {
  let attempts = 0;
  let delay = 10000; // Initial delay of 10 seconds, as suggested by the error

  while (attempts < maxRetries) {
    try {
      console.log(`Gemini API Call Attempt ${attempts + 1} for prompt (first 50 chars): ${prompt.substring(0, 50)}...`);
      const result = await modelInstance.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      if (error.response && error.response.error && error.response.error.status === 429) {
        attempts++;
        console.warn(`Rate limit hit (429). Retrying in ${delay / 1000} seconds... (Attempt ${attempts}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 1.5; // Exponential backoff
      } else {
        console.error("Non-429 error during Gemini API call:", error);
        throw error;
      }
    }
  }
  throw new Error("Failed to get response from Gemini after multiple retries due to persistent rate limits.");
}
// -----------------------------------------------------------


export async function POST(req) {
  try {
    const { message, history = [] } = await req.json();

    console.log("--- Chat API Request Start ---");
    console.log("Received message:", message);
    console.log("Received history length:", history.length);

    if (!message) {
      console.error("Error: Message is required.");
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // 1️⃣ Fetch products from Sanity (always fetch, as context will be dynamic in prompt)
    console.log("Fetching product data from Sanity...");
    const products = await clientCommrerce.fetch(`
      *[_type == "product"]{
        title,
        label,
        details,
        price,
        category,
        stock
      }
    `);
    console.log("Fetched products count:", products.length);

    let productsContext = "No product data available.";
    if (products.length > 0) {
      productsContext = products
        .map(
          (p) =>
            `- ${p.title} (${p.category}): ${p.details || "No details available."} | Price: $${p.price} | Label: ${p.label || "N/A"} | Stock: ${p.stock ? "Available" : "Out of stock"}`
        )
        .join("\n");
    }

    // 2️⃣ Build conversation history for the AI model
    const formattedHistoryParts = history.map((h) => {
        const role = h.role === 'user' ? 'USER' : 'ASSISTANT';
        return `${role}: ${h.text}`;
    });
    const formattedHistoryString = formattedHistoryParts.join("\n");

    // 3️⃣ Final AI prompt with combined classification and generation
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" }); // Use the same model for everything now

    const prompt = `
      You are a friendly and helpful customer support assistant for "Catbot Online Store".
      Your goal is to assist customers with their questions about products and general store policies.

      Current date: ${new Date().toLocaleDateString()}

      --- Available Information ---
      **General Store Information:**
      ${generalStoreInfo}

      **Product Data:**
      ${productsContext}
      -----------------------------

      --- Instructions ---
      1.  **First, determine the user's intent:** Is the user asking a "product" question (about specific items, their features, price, stock, or categories) or a "general" question (about store policies, shipping, returns, contact info, or conversational greetings)?
      2.  **If "product":** Use ONLY the provided "Product Data" to answer. If a specific product or its detail is not found, politely state that you couldn't find it. If asked for a recommendation, suggest a relevant product from the list and explain why based on its details.
      3.  **If "general":** Use ONLY the provided "General Store Information" to answer. If the information is not available, state that you don't have that specific detail.
      4.  Always be clear, friendly, and use bullet points for lists when appropriate.
      5.  Do not ask the user to repeat information you already know from the conversation history or the provided context.
      6.  Maintain a helpful and positive tone.

      --- Conversation So Far ---
      ${formattedHistoryString}

      --- User's Current Question ---
      "${message}"

      --- Your Answer ---
      `;

    console.log("Sending combined prompt to Gemini...");
    // Only one call to callGeminiWithRetry now
    const reply = await callGeminiWithRetry(model, prompt);

    console.log("Gemini extracted reply (first 200 chars):", reply.substring(0, 200) + (reply.length > 200 ? "..." : ""));

    return NextResponse.json({ answer: reply });
  } catch (error) {
    console.error("--- Chat API Error ---");
    console.error("An error occurred in the Chat API:", error);

    if (error.response) {
      console.error("Gemini API Error details:", JSON.stringify(error.response.error, null, 2));
    }
    if (error.message && error.message.includes("Sanity")) {
      console.error("Possible Sanity client error:", error.message);
    }
    // Return a more user-friendly error after retries fail
    return NextResponse.json({ error: "The AI assistant is currently very busy. Please try again in a moment." }, { status: 500 });
  } finally {
    console.log("--- Chat API Request End ---");
  }
}