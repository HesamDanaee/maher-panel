import Navs from "./components/Navs";
import Profile from "./components/Profile";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center border-b-[1px] border-accent py-3 px-20">
      <Profile />
      <Navs />
    </header>
  );
}
