const VideoTitle = ({ title, description }) => {
  return (
    <div className=" px-12 absolute text-white pt-[20%] bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="w-3/12 py-6 text-lg">{description}</p>
      <div>
        <button className="bg-gray-500  px-8 text-xl py-2 rounded-lg  opacity-50">
          ⫸ Play
        </button>
        <button className="bg-gray-500 mx-3   px-8 text-xl py-2 rounded-lg opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
