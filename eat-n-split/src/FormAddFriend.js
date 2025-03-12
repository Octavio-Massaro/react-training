import { useState } from "react";
import Button from "./Button";
export default function FormAddFriend({ onAddFriends }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("https://i.pravatar.cc/48");

  function handleAdd() {
    if (!name || !photo) return;
    const newFriend = {
      id: Date.now(),
      name: name,
      image: photo,
      balance: 0,
    };

    onAddFriends(newFriend);
    setName("");
    setPhoto("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={(e) => e.preventDefault()}>
      <label>🧍‍♂️Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>😎 Image URL</label>
      <input
        type="text"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      ></input>

      <Button onClick={() => handleAdd()}>Add</Button>
    </form>
  );
}
