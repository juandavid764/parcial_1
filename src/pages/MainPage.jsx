import { useEffect, useState, useCallback } from "react";

import { InputSearch } from "../Components/InputSearch.jsx";
import { ButtonAdd } from "../Components/ButtonAdd.jsx";

import { AddIcon } from "../assets/AddIcon.jsx";
import { SearchIcon } from "../assets/SearchIcon.jsx";
import { CardImg } from "../Components/CardImg.jsx";

const defaultImgs = [
  { url: "https://picsum.photos/id/900/200/200", titulo: "900" },
  { url: "https://picsum.photos/id/901/200/200", titulo: "901" },
  { url: "https://picsum.photos/id/902/200/200", titulo: "902" },
];

export const MainPage = () => {
  const [counter, setCounter] = useState(1);

  const [imgs, setImgs] = useState(defaultImgs);
  const [filteredImgs, setFilteredImgs] = useState(imgs);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    setCounter((prev) => prev + 1);
    const newImg = {
      url: `https://picsum.photos/id/${902 + counter}/200/200`,
      titulo: `${902 + counter}`,
    };
    setImgs((prevImgs) => [...prevImgs, newImg]);
    setInputValue("");
    setFilteredImgs((prevImgs) => [...prevImgs, newImg]);
  };

  const handleSearch = () => {
    const filtered = imgs.filter((img) => img.titulo.includes(inputValue));
    setFilteredImgs(filtered);
  };

  useEffect(() => {
    handleSearch(inputValue);
  }, [inputValue]);

  return (
    <div className="flex flex-col p-4 gap-4 w-full items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Parcial 1</h1>
        <h2 className="text-xl">Juan David Trujillo Erazo</h2>
        <h3 className="text-lg">2226089</h3>
      </div>
      <div className="flex flex-col justify-between items-center gap-4">
        <ButtonAdd icon={AddIcon} text={"Agregar"} handleClick={handleAdd} />
        <InputSearch
          icon={SearchIcon}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div className="overflow-y-scroll h-[500px] w-[1000px] grid grid-cols-4 gap-4 justify-center">
        {filteredImgs.map((img, index) => (
          <CardImg key={index} img={img.url} title={img.titulo} />
        ))}
      </div>
    </div>
  );
};
