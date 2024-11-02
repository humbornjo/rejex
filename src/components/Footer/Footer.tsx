
function Footer(): JSX.Element {
  const yyyy: number = new Date().getFullYear()
  return (
    <div className="mx-auto mb-2 font-serif text-stone-400">
      &copy;  {yyyy} rejex - All Rights Reserved.
    </div>
  )
}

export default Footer

