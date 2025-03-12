import Friend from "./Friend";

export default function FriendList({
  friends,
  handleCurFriend,
  isSelected,
  setIsSelected,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleCurFriend={handleCurFriend}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      ))}
    </ul>
  );
}
