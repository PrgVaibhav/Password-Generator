import React from "react";
import { SecurityTips } from "../data/Data";
import "./SecurityTips.scss";
export const SecurityTIps = () => {
  return (
    <section className="section">
      <h2>Some Security tips:</h2>

      <ol>
        {SecurityTips.map((tip) => (
          <li key={tip.id}>
            <h3>{tip.title}:</h3>
            <p>{tip.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
