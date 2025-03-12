import Button from "./Button";

export default function Friend({
  friend,
  isSelected,
  setIsSelected,
  handleCurFriend,
}) {
  const isOpen = isSelected === friend.id;

  function handleOnClick(friend) {
    handleCurFriend(friend);
    setIsSelected(isOpen ? null : friend.id);
  }

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      <Button onClick={() => handleOnClick(friend)}>
        {isOpen ? "Close" : "Select"}
      </Button>
    </li>
  );
}
