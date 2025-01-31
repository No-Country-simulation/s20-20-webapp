import Balance from "./_components/Balance/Balance";
import MenuNav from "./_components/MenuNav/MenuNav";
import './Menu.css'

export default function Menu() {
  return <>
    <main className="menu">
      <Balance />
      <nav>
        <MenuNav />
      </nav>
    </main>
  </>
}