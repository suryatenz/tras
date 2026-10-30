import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lan.css";

export default function Languages() {
  const [options, setOptions] = useState([]);
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("es");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  
  return (
    <>
      <div className="app">
        <div className="hee">
          From ({from}):
          <select onChange={(e) => setFrom(e.target.value)}>
            {options.map((opt) => (
              <option key={opt.language} value={opt.language}>
                {opt.name}
              </option>
            ))}
          </select>
          To ({to}):
          <select onChange={(e) => setTo(e.target.value)}>
            {options.map((opt) => (
              <option key={opt.language} value={opt.language}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            cols="70"
            rows="30"
            onInput={(e) => setInput(e.target.value)}
          ></textarea>
          <textarea cols="70" rows="30" value={output}></textarea>
        </div>
        <div className="">
          <button onClick={translate}>Translate</button>
        </div>
      </div>
    </>
  );
}
