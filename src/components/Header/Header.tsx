import Logo from "./Logo";
import Info from "./Info";

function Header() {
  return (
    <div className="flex justify-between items-center h-12 px-6 bg-teal-950">
      <Logo />
      <Info />
    </div>
  );
}

export default Header;
