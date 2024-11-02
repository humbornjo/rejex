
type Jnode = {
  inferredType: string
  reg: string
  regPlain: string
  regOverride: string
  selected: boolean
  modified: boolean
  children: Jnode | null
}

function ParseJson(text: string): Jnode {
  console.log(text)

  const node: Jnode = {
    inferredType: "dict",
    reg: "",
    regPlain: "",
    regOverride: "",
    selected: false,
    modified: false,
    children: null,
  }

  return node
}

function Render({ node }: { node: Jnode }): JSX.Element {

  return (
    <div>
      {node.reg}
    </div>
  )
}

function Joutput({ text }: { text: string }): JSX.Element {
  const parsedNode = ParseJson(text)

  return (
    <Render node={parsedNode} />
  )
}

export default Joutput
