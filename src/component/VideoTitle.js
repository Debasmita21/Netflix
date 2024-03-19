
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen pt-[20%] px-24  aspect-video absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/3 ">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-3 px-8 text-lg rounded-md font-bold hover:bg-opacity-70">Play</button>
            <button className="bg-gray-700 text-white p-3 px-10 rounded-md text-lg font-bold mx-2 hover:bg-opacity-70">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle