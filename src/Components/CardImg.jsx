export const CardImg = ({ img, title }) => {
  return (
    <div className="flex flex-col p-4">
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
