export default function TodoForm({
  labelText,
  sortInput,
  placeholder,
  setInput,
}) {
  return (
    <>
      <label>{labelText}</label>
      <input
        type="text"
        value={sortInput}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      ></input>
    </>
  );
}
