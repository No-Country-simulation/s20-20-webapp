import Balance from "./_components/Balance/Balance";
import MenuNav from "./_components/MenuNav/MenuNav";
import Statics from "./_components/Statics/Statics";
import './Menu.css'

export default function Menu() {
  return <>
    <main className="menu">
      <Balance />
      <nav>
        <MenuNav />
      </nav>
      <Statics />
    </main>
  </>
}