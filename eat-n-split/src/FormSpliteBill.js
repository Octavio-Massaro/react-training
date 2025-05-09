import { useState } from "react";
import Button from "./Button";

export default function FormSpliteBill({ curFriend, onUpdateBill }) {
  const [name, setName] = useState("user");
  const [bill, setBill] = useState("");
  const [yourMoney, setYourMoney] = useState("");
  const [theyMoney, setTheyMoney] = useState("");

  function whoSplitTheBill() {
    if (!bill || !yourMoney) return;

    if (name === "user") {
      onUpdateBill(curFriend.id, theyMoney);
    } else {
      onUpdateBill(curFriend.id, -yourMoney);
    }

    setBill("");
    setName("user");
    setYourMoney("");
    setTheyMoney("");
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => e.preventDefault()}>
      <h2>Split a bill with {curFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => {
          setBill(e.target.value);
        }}
      ></input>

      <label>Your expense</label>
      <input
        type="number"
        value={yourMoney}
        onChange={(e) => {
          setYourMoney(e.target.value);
        }}
      ></input>

      <label>{curFriend.name}'s expense</label>
      <input type="number" value={bill - yourMoney} disabled></input>

      <label>Who is paying the bill</label>
      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{curFriend.name}</option>
      </select>

      <Button onClick={whoSplitTheBill}>Split the bill</Button>
    </form>
  );
}
