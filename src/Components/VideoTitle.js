const VideoTitle = ({ title, description }) => {
  return (
    <div className=" px-24 absolute text-white pt-[15%] bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="w-3/12 py-6 text-lg">{description}</p>
      <div>
        <button className="bg-white text-black  px-8 text-xl py-2 rounded-lg hover:opacity-70 ">
          ⫸ Play
        </button>
        <button className="bg-gray-500 mx-3 text-white  px-8 text-xl py-2 rounded-lg opacity-50 hover:opacity-30">
        &#128712; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
