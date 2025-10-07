"use client";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import { chatbotIcon, gripLine, headerChat, sendIcon, settingDots } from "../../data";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [openChat, setOpenChat] = useState(false)
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);




  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  async function sendMessage() {

    if (!input.trim() || loading) return

    const userMsg = { role: "user", text: input };
    const newHistory = [...messages, userMsg];

    setMessages(newHistory);
    setInput('')
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg.text,
          history: newHistory,
        }),


      });

      const data = await res.json();
      const botMsg = { role: "chatbot", text: data.answer };
      setMessages((prev) => [...prev, botMsg]);


    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "chatbot", text: "⚠️ Something went wrong. Try again." },
      ]);
    }
    finally {
      setLoading(false)
    }



  }


  function handleKeyPress(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div className="">
      <button className="fixed z-50 bottom-5 right-1  shadow-lg rounded-full bg-e_secondaryColor border p-2" onClick={() => setOpenChat(!openChat)}>
        {chatbotIcon('white', 35)}
      </button>
      {openChat &&
        <div className="fixed z-50 bottom-20 right-5 lg:right-20 w-80 lg:w-96 shadow-lg rounded-xl bg-gray-100 border p-4">

          {/* header */}
          <div className="flex items-center pb-2 justify-between border-b-[1px] border-gray-300">
            <p>{settingDots(20)}</p>
            <p className="flex items-center font-semibold"> {headerChat('rgb(59 130 246)', 30)}Chatbot</p>
            <button onClick={() => setOpenChat(false)} className="font-bold">{gripLine('black', 20)}</button>
          </div>

          <div className="h-64 overflow-y-auto mb-2 pr-2">{
            messages.length > 0 ? (

              <div className="">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex mt-3 ${m.role === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div
                      className={` rounded-2xl px-2  max-w-[80%] ${m.role === "user"
                        ? "text-gray-500 bg-white text-sm py-1"
                        : "text-white bg-yellow-50  py-2 text-sm flex gap-2"
                        }`}
                    >
                      {m.role === "user" ? null : (
                        <div className="mb-1 ">{headerChat("rgb(59 130 246)", 30)}</div>
                      )}

                      {m.role === "chatbot" ? (
                        <div className="prose prose-sm prose-indigo"> 
                         <ReactMarkdown>
                          {m.text}
                        </ReactMarkdown>
                        </div>
                      
                      ) : (
                        <p>{m.text}</p>
                      )}
                    </div>
                  </div>
                ))}


                <div ref={chatEndRef} />

              </div>) : (<p className="flex justify-center items-center  h-[16rem]">How Can I help you ?</p>)
          } </div>


          {loading && <p className="text-gray-400 text-xs">Chatbot is typing...</p>}

          <div className="flex gap-1">
            <input
              disabled={loading}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}

              className="flex-1 border rounded-xl ps-2 py-2 text-sm"
              placeholder="Ask me anything..."
            />
            <button
              disabled={loading || !input.trim()}
              onClick={sendMessage}
              className="border-gray-200 pe-2 text-sm"
            >
              {sendIcon('rgb(59 130 246)', 30)}
            </button>
          </div>
        </div>}

    </div>
  );
}
