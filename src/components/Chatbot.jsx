"use client";
import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    const existing = document.getElementById("voiceflow-widget");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "voiceflow-widget";
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      try {
        (window).voiceflow.chat.load({
          verify: { projectID: "670ac09d16b3c8f70b3303e9" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          autostart: false, 
          assistant: {
            title: "Vedic Pedia Assistant",
            avatar: "/images/vh1.png",
          },
          theme: {
            primaryColor: "#8b5cf6",
          },
        });

        (window).openChatbot = () => {
          try {
            (window ).voiceflow.chat.open();
          } catch (err) {
            console.error("Chatbot not ready yet:", err);
          }
        };

        console.log("✅ Voiceflow chatbot loaded successfully");
      } catch (error) {
        console.error("❌ Voiceflow widget failed to initialize", error);
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
