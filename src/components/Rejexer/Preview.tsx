
function Preview(): JSX.Element {

  return (
    <div className="grow flex flex-col">
      <div className="text-xl font-serif mb-2">Preview: </div>
      <div
        className="h-full
          bg-gray-100 border border-gray-300
          p-2 mb-1 relative"
      >
        <p
          className="text-stone-300 font-sans"
        >
          This text can be copied but not edited. akhsdglahksdlfhsalgda
        </p>
      </div>
    </div>
  )
}

export default Preview
