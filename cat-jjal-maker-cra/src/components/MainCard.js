function MainCard({ img, onHeartClick, alreadyFavourite }) {
  const heartIcon = alreadyFavourite ? "💖" : "🤍";
  return (
    <div className="main-card">
      <img src={img} alt="고양이" width="400" />
      <button onClick={onHeartClick}>{heartIcon}</button>
    </div>
  );
}

export default MainCard