import React, { useEffect, useState } from "react";
import Bus from "./bus.js";
import "./css/flash-message/alert.css";

// https://medium.com/@jaouad_45834/building-a-flash-message-component-with-react-js-6288da386d53
export default function FlashMessage() {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    Bus.addListener("flash", (newMessage) => {
      setVisibility(true);
      setMessage(newMessage);
    });
  }, []);

  return (
    visibility && (
      <div className="alert">
        <p className="alert__message">{message}</p>
        <button
          className="alert__close-button"
          type="button"
          onClick={() => setVisibility(false)}
        >
          X
        </button>
      </div>
    )
  );
}
