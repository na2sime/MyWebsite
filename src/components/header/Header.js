import './header.scss'
import Logo from "../../assets/images/logo.png"
import Navbar from "../navbar/Navbar";

function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} alt="Logo représentant Nassime Abdiou"/>
            </h1>
            <Navbar/>
        </header>
    )
}

export default Header;