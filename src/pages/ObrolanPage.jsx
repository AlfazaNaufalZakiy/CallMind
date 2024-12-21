import React, { useState } from "react";
import "./ObrolanPage.css"; // Pastikan file CSS terhubung

const ObrolanPage = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      message:
        "Halo, saya CallMind, penasihat kesehatan mental berbasis AI. Ceritakan apapun yang Anda rasakan, saya siap mendengarkan dan membantu!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput.trim()) {
      alert("Pesan tidak boleh kosong.");
      return;
    }

    const newChat = [...chatHistory, { sender: "user", message: userInput }];
    setChatHistory(newChat);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Pastikan model ini tersedia di akun Anda
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: userInput },
          ],
        }),
      });

      if (response.status === 429) {
        alert("Terlalu banyak permintaan. Tunggu beberapa saat sebelum mencoba lagi.");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setChatHistory([
        ...newChat,
        { sender: "bot", message: data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error during OpenAI request:", error);
      setChatHistory([
        ...newChat,
        { sender: "bot", message: "Maaf, terjadi kesalahan. Silakan coba lagi nanti." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="obrolan-container">
      <div className="obrolan-header">
        <h1>CallMind Obrolan</h1>
        <p>Berbagi cerita dan dapatkan dukungan empatik</p>
      </div>
      <div className="obrolan-content">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.sender === "user" ? "user" : "bot"}`}
          >
            {chat.message}
          </div>
        ))}
        {isLoading && <div className="chat-loading">CallMind sedang mengetik...</div>}
      </div>
      <div className="obrolan-input">
        <input
          type="text"
          placeholder="Ketik pesan Anda di sini..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ObrolanPage;
