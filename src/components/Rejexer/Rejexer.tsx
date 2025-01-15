function Rejexer(): JSX.Element {
  return (
    <div
      className="w-full h-[calc(100%-48px)]
      grid grid-cols-2"
    >
      <div className="bg-red-500">Input</div>
      <div className="grid-rows-subgrid row-span-2 bg-green-500 flex">
        <div className="w-1 bg-slate-500"></div>
        <div className="">Rejexer</div>
      </div>
      <div className="bg-blue-500 flex flex-col">
        <div className="h-1 bg-slate-500"></div>
        <div className="grow"> Outcome</div>
      </div>
    </div>
  );
}

export default Rejexer;
