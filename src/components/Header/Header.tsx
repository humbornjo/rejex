import Logo from "./Logo";
import Info from "./Info";

function Header(): JSX.Element {
  return (
    <div
      className="h-12 bg-teal-950
      flex justify-between items-center
      px-4 min-w-fit"
    >
      <Logo />
      <Info />
    </div>
  );
}

export default Header;
