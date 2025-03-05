export const ButtonAdd = ({ icon, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
    >
      <div className="flex flex-row">
        {icon()}
        <span>{text}</span>
      </div>
    </button>
  );
};
