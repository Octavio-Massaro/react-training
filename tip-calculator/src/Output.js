export default function Output({ num, tip }) {
  return (
    <div>
      <h1>
        <em>{`You pay ${num + tip} ($${num} + $${tip} tip)`}</em>
      </h1>
    </div>
  );
}
