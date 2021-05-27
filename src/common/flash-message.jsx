import React, { useEffect, useState } from "react";
import Bus from "./bus.js";
import "./flash-message.css";

// https://medium.com/@jaouad_45834/building-a-flash-message-component-with-react-js-6288da386d53
export default function FlashMessage() {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    Bus.addListener("flash", (newMessage) => {
      setVisibility(true);
      setMessage(newMessage);
      setTimeout(() => {
        setVisibility(false);
      }, 4000);
    });
  }, []);

  useEffect(() => {
    if (document.querySelector(".close") !== null) {
      document
        .querySelector(".close")
        .addEventListener("click", () => setVisibility(false));
    }
  });

  return (
    visibility && (
      <div className="alert">
        <p>{message}</p>
        <p className="close">X</p>
      </div>
    )
  );
}
