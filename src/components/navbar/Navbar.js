import "./navbar.scss"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ContactForm from "../contact/ContactForm";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden';
            return ()=> document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div className={"navbar"}>
            <ul className={"nav_list"}>
                <Link to={"/"}>
                    <li className={"home nav_item button"}>
                        Home
                    </li>
                </Link>
                <div>
                    <li className={"contact nav_item button"} onClick={() => setIsOpen(true)}>
                        Contact
                    </li>
                    {isOpen && <ContactForm setIsOpen={setIsOpen} />}
                </div>
            </ul>
        </div>
    );
}

export default Navbar;