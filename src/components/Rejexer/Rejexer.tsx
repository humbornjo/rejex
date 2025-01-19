import { useEffect, useState, useRef } from "react";

function Rejexer(): JSX.Element {
  const isResizing = useRef(false);
  const [width, setWidth] = useState(300);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResizing.current) return;
      console.log(e.movementX);
      setWidth((prev: number) => prev + e.movementX / 2);
    });
    window.addEventListener("mouseup", () => {
      isResizing.current = false;
    });
  }, []);
  return (
    <div className="w-full h-[calc(100%-48px)] flex">
      <div
        style={{ width: `${width / 16}rem` }}
        className="h-full flex flex-col"
      >
        <div className="bg-red-500">Input</div>
        <div className="bg-blue-500 flex flex-col grow">
          <div className="h-1 bg-slate-500"></div>
          <div className="grow"> Outcome</div>
        </div>
      </div>
      <div className="bg-green-500 flex grow">
        <div
          className="w-1 bg-slate-500 hover:cursor-ew-resize"
          onMouseDown={(e) => {
            isResizing.current = true;
            e.preventDefault();
          }}
        ></div>
        <div className="">Rejexer</div>
      </div>
    </div>
  );
}

export default Rejexer;
