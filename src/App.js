import { useState, useEffect } from "react";

function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log(`🔵 Schedule Logging: "${text}"`);
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log(`🟡 Cancel Logging: "${text}"`);
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="centered">
      <label>
        Log After Three Seconds
        <br />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the Component
      </button>
      <br />
      {show && <Playground />}
    </>
  );
}
