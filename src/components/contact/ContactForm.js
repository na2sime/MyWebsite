import "./contactform.scss"
import {RiCloseLine} from "react-icons/ri";

function ContactForm({setIsOpen}) {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    return (
        <>
            <div className={"darkBG"} onClick={() => setIsOpen(false)}/>
            <div className={"centered"}>
                <div className={"modal"}>
                    <div className={"modalHeader"}>
                        <h5 className={"heading"}>Contact me ?</h5>
                    </div>
                    <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{marginBottom: "-3px"}}/>
                    </button>
                    <div className={"modalContent"}>
                        <div className={"modalContent_contact"}>
                            <p className={"footer_contact_button"} onClick={() => {openInNewTab("https://www.linkedin.com/in/nassime-abdiou-247743227/")}}>LinkedIn</p>
                            <p className={"footer_contact_button"} onClick={() => {openInNewTab("https://github.com/na2sime/")}}>GitHub</p>
                        </div>
                    </div>
                    <div className={"modalActions"}>
                        <div className={"actionsContainer"}>
                            <button className={"cancelBtn"} onClick={() => setIsOpen(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;