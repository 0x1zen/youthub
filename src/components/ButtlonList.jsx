import Button from "./Button.jsx";
const ButtonList = () => {
  const list = [
    "All", "Trending", "Music", "Mixes", "Live", "Playlist",
    "Albums", "Gaming", "Cricket", "Football", "Movies", "Songs", "Drama",
  ];
  return (
    <div className="flex sticky top-0 z-40 bg-white overflow-y-auto">
      {list.map((item) => (
        <Button key={item} name={item}></Button>
      ))}
    </div>
  );
};


export default ButtonList;
