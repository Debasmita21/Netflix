
const GptSearchBar = () => {
  return (
    <div className="pt-[45%] md:pt-[15%] flex justify-center">
        <form className="bg-gray-800 grid grid-cols-12 w-full md:w-1/2 rounded-md">
            <input className="p-4 m-2 col-span-10 rounded-md" type="text" placeholder="What would you like to watch today?" />
            <button className="rounded-md bg-blue-600 col-span-2
            p-1 md:p-4 m-2">Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar