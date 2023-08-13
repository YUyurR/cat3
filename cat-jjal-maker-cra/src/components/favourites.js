import CatItem from "./CatItem";

function Favourites({ favourites }) {
  if (favourites.length === 0) {
    return <p>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</p>;
  } else
    return (
      <ul className="favorites">
        {favourites.map((cat) => (
          <CatItem img={cat} key={cat} />
        ))}
      </ul>
    );
}

export default Favourites