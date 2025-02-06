import Activity from "@/components/Activity";
import AddCard from "./_components/AddCard/AddCard";
import Balance from "./_components/Balance/Balance";
import Market from "./_components/Market/Market";
import MenuNav from "./_components/MenuNav/MenuNav";
import Statics from "./_components/Statics/Statics";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <main className="menu">
        <Balance />
        <nav>
          <MenuNav />
        </nav>
        <Statics />
        <AddCard />
        <Market />

        <Activity />
      </main>
    </>
  );
}
