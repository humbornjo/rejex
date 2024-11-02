import { useState } from "react"

import Jinput from "./Jinput"
import Joutput from "./Joutput"
import Routput from "./Routput"
import Preview from "./Preview"


function FuncBtnLeft(): JSX.Element {
  const funcLeft: Array<string> = [
    "Toggle mode", "Reset All", "Toggle Value",
  ]
  return (
    <div
      className="absolute top-1/2 left-4
        transform -translate-y-1/2
        flex flex-col gap-16"
    >
      {funcLeft.map(f => <div>{f}</div>)}
    </div>
  )
}

function FuncBtnRight(): JSX.Element {
  const funcRight: Array<string> = [
    "Clear All", "Toggle Theme"
  ]
  return (
    <div
      className="absolute top-1/2 right-4
        transform -translate-y-1/2
        flex flex-col gap-16"
    >
      {funcRight.map(f => <div>{f}</div>)}
    </div>
  )
}

function Rejexer(): JSX.Element {
  const [jtext, setJtext] = useState("")
  const [jstate, setJstate] = useState(true)

  // TODO: jstate should include <inputing?>, <show_val?>
  // setJstate(true)

  return (
    <>
      <FuncBtnLeft />
      <FuncBtnRight />
      <div
        className="h-full w-5/6 mx-auto
          flex justify-between pt-4 pb-2 px-4"
      >
        <div className="h-full w-1/2 p-2">
          <div className="h-full w-full flex
            border-4 border-stone-600 rounded-xl"
          >
            {jstate ? <Jinput /> : <Joutput text={jtext} />}
          </div>
        </div>
        <div className="h-full w-1/2 p-2">
          <div className="h-full w-full 
            flex flex-col gap-3 px-1"
          // border-2 border-stone-600" // TODO: border is used to indicate, will be removed later
          >
            <Routput />
            <Preview />
          </div>
        </div>
      </div >
    </>
  )
}

export default Rejexer
