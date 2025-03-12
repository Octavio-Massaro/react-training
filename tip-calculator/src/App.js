import { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import Output from "./Output";
import ServiceSelection from "./ServiceSelection";
import Reset from "./Reset";

export default function App() {
  const [bill, setBill] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = (yourTip + friendTip) / 2;

  function handleYourTip(tip) {
    setYourTip(tip);
  }

  function handleFriendTip(tip) {
    setFriendTip(tip);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSetBill(num) {
    setBill(num);
  }

  function reset() {
    setBill(0);
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Bill num={bill} handleSetBill={handleSetBill} />
      <ServiceSelection handleServiceTip={handleYourTip} serviceTip={yourTip}>
        How did you like the service?
      </ServiceSelection>
      <ServiceSelection
        handleServiceTip={handleFriendTip}
        serviceTip={friendTip}
      >
        How did your friend like the service?
      </ServiceSelection>
      <Output num={bill} tip={tip} />
      <Reset reset={reset} />
    </form>
  );
}
