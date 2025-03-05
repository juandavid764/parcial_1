export const InputSearch = ({icon, inputValue, setInputValue}) => {
  return (
    <div className="flex flex-row border-2 border-gray-300 rounded-lg p-2">
      {icon()}
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
