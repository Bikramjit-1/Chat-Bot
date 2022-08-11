import React from "react";
import { render } from "react-dom";

import ChatBot from "react-simple-chatbot";

const styles = {
  // height:"100%",
  // width:"100%",
  fontFamily: "sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "lightblue",
  Background: "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)"
};

const steps = [
  {
    id: "0",
    message: "Hi there!",
    trigger: "1"
  },
  {
    id: "1",
    message: "I'm Wysa-an Al chatbot built by therapists",
    trigger: "2"
  },
  {
    id: "2",
    message:
      "I'm here to understand your concerns and connect you with the best resources available to support you.",
    trigger: "3"
  },
  {
    id: "3",
    message: "Can I help?",
    trigger: "4"
  },
  {
    id: "4",
    user: true,
    trigger: "2"
  }
];

const App = () => (
  <div style={styles}>
    <h1>Chat Bot!!</h1>
    <ChatBot steps={steps} />
  </div>
);

render(<App />, document.getElementById("root"));
