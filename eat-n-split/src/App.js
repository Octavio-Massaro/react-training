import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import Button from "./Button";
import FormSpliteBill from "./FormSpliteBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [isSelected, setIsSelected] = useState(null);
  const [curFriend, setCurFriend] = useState();

  function handleAddFriends(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setIsOpen((isOpen) => !isOpen);
  }

  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleCurFriend(friend) {
    setCurFriend(friend);
  }

  function updateBill(id, money) {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + money }
          : friend
      )
    );
    setIsSelected((isSelected) => !isSelected);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          handleCurFriend={handleCurFriend}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        {isOpen && <FormAddFriend onAddFriends={handleAddFriends} />}
        <Button onClick={handleIsOpen}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {isSelected && (
        <FormSpliteBill curFriend={curFriend} onUpdateBill={updateBill} />
      )}
    </div>
  );
}
