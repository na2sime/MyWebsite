import "./navbar.scss"
import {useState} from "react";

function Navbar() {

    const [currentSection, setSection] = useState("home");

    const navigate = (section) => {

    };

    return (
        <div className={"navbar"}>
            <ul className={"nav_list"}>
                <li className={currentSection === "home" ? "nav_item_active button" : "nav_item button"}
                    onClick={navigate("home")}>
                    Home
                </li>
                <li className={currentSection === "contact" ? "nav_item_active button" : "nav_item button"}
                    onClick={navigate("contact")}>
                    Contact
                </li>
            </ul>
        </div>
    );
}

export default Navbar;