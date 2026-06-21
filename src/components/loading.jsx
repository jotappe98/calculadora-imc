import { useEffect, useState } from "react";
import "./loading.css";

const messages = [
  "Analisando seus dados...",
  "Calculando resultado...",
  "Verificando classificação...",
  "Preparando resultado..."
];

const MESSAGE_DURATION = 2000;
export const LOADING_TOTAL_TIME = messages.length * MESSAGE_DURATION;

const Loading = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timers = messages.map((_, i) =>
      setTimeout(() => setMessageIndex(i), i * MESSAGE_DURATION)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div id="loading-container">
      <h2 key={messageIndex}>
        {messages[messageIndex]}
      </h2>
    </div>
  );
};

export default Loading;