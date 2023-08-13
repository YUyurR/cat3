import logo from './logo.svg';
import './App.css';
import React from "react";
import Title from './components/Title'
import jsonLocalStorage from './components/jsonLocalStorage'
import Form from './components/Form'
import fetchCat from './components/fetchCat'
import CatItem from './components/CatItem';
import Favourites from './components/favourites';
import MainCard from './components/MainCard';

const App = () => {
  const CAT1 = "https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react";
  const CAT2 = "https://cataas.com/cat/BxqL2EjFmtxDkAm2/says/inflearn";
  const CAT3 = "https://cataas.com/cat/18MD6byVC1yKGpXp/says/JavaScript";

  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("counter");
  });

  const [mainCat, setMainCat] = React.useState("");
  const [favourites, setFavourites] = React.useState(() => {
    return jsonLocalStorage.getItem("favourites") || [];
  });

  const alreadyFavourite = favourites.includes(mainCat);

  async function setInitialCat() {
    const newCat = await fetchCat("First cat");
    setMainCat(newCat);
  }

  React.useEffect(() => {
    setInitialCat();
  }, []);

  React.useEffect(() => {
    console.log("hello");
  }, [counter]);

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);

    setMainCat(newCat);

    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
  }

  function handleHeartClick() {
    const nextFavourites = [...favourites, mainCat];
    setFavourites(nextFavourites);
    jsonLocalStorage.setItem("favourites", nextFavourites);
  }

  let titleText =
    counter <= 0 ? "고양이 가라사대" : counter + "번째 고양이 가라사대";

  return (
    <div>
      <Title>{titleText}</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard
        img={mainCat}
        onHeartClick={handleHeartClick}
        alreadyFavourite={alreadyFavourite}
      />
      <Favourites favourites={favourites} />
    </div>
  );
};

export default App;
