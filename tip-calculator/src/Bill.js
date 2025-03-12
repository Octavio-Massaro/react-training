export default function Bill({ num, handleSetBill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="text"
        value={num}
        onChange={(e) => handleSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
