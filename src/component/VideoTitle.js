
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen px-12 pt-[20%]   
    aspect-video absolute
     text-white bg-gradient-to-r from-black">
        <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-md w-1/3 text-wrap">{overview}</p>
        <div className=" mt-1 md:mt-0">
            <button className="bg-white text-black py-1 md:py-3 px-1 md:px-8 text-sm md:text-lg rounded-md font-bold hover:bg-opacity-70">Play</button>
            <button className="bg-gray-700 text-white py-1 md:py-3 px-1 md:px-10 rounded-md text-sm md:text-lg md:font-bold mx-2 hover:bg-opacity-70">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle