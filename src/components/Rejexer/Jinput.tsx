
function Jinput(): JSX.Element {
  const mockData: string = '{"we": "robot", "year": 2024}'
  return (
    <textarea
      className="w-full h-full bg-white
        font-mono text-base text-nowrap
        border-1 rounded-lg px-3 py-2         
        focus:outline-none resize-none"
      placeholder={"Put your Json data here\nThen click \"Parse\""}
      defaultValue={mockData}
    />
  )
}

export default Jinput
