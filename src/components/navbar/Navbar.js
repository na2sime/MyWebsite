import "./navbar.scss"
import {useState} from "react";

function Navbar() {

    const [currentSection, setSection] = useState("home");

    const navigate = (section) => {

    };

    return (
        <div className={"navbar"}>
            <ul className={"nav_list"}>
                <li className={currentSection === "home" ? "nav_item_active" : "nav_item"}
                    onClick={navigate("home")}>
                    Accueil
                </li>
                <li className={currentSection === "me" ? "nav_item_active" : "nav_item"}
                    onClick={navigate("me")}>
                    Me
                </li>
                <li className={currentSection === "works" ? "nav_item_active" : "nav_item"}
                    onClick={navigate("works")}>
                    Works
                </li>
                <li className={currentSection === "contact" ? "nav_item_active" : "nav_item"}
                    onClick={navigate("contact")}>
                    Contact
                </li>
            </ul>
        </div>
    );
}

export default Navbar;