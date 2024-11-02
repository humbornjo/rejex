
function Routput(): JSX.Element {
  const feats: Array<string> = ["Loop", "Unique", "Intermediate"]

  return (
    <div className="font-serif h-3/5 flex flex-col">
      <div className="text-xl mb-2">Regex Output: </div>
      <div className="flex justify-between mb-2 gap-4">
        {feats.map(feat => {
          return (
            <button
              className="border-2 border-stone-600 rounded-lg 
                flex-1"
            >
              {feat}
            </button>
          )
        })}
      </div>
      <input
        className="w-full px-2 mb-2
          rounded-lg
          py-1"
        placeholder="left blank cause random string as file name"
      />
      <div
        className="h-full
          bg-gray-100 border border-gray-300
          p-2 relative"
      >
        <button
          className="absolute right-0 top-0 
            bg-stone-500 p-1"
          onClick={e => { console.log(e) }} // TODO: copy to clipboard
        >
          <img src="/copy.svg" className="h-4 w-4" />
        </button>
        <p
          className="text-stone-300 font-sans"
        >
          This text can be copied but not edited. akhsdglahksdlfhsalgda
        </p>
      </div>

    </div>
  )
}

export default Routput
