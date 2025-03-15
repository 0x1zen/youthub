import Button from "./Button.jsx";

const ButtonList = () => {
  const list = [
    "All",
    "Trending",
    "Music",
    "Mixes",
    "Live",
    "Playlist",
    "Albums",
    "Gaming",
    "Cricket",
    "Football",
    "Indian Movies",
    "Songs",
    "Drama",
  ];
  return (
    <div className="flex">
      {list.map((item) => {
        return <Button key={item} name={item}></Button>;
      })}
    </div>
  );
};

export default ButtonList;
