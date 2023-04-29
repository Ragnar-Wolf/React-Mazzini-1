import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
  return (
    <div>
      <header>
        <h1>Black-Wolf</h1>
        <nav>
            <ul>
                <li>Pc Gamers</li>
                <li>Hardware</li>
                <li>Accesorios</li>
            </ul>
        </nav>
        <CartWidget/>
      </header>
    </div>
  )
}

export default Navbar
