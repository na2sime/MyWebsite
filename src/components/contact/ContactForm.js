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
                        <form>
                            <div className={"formGroup"}>
                                <label htmlFor={"name"}>NAME</label>
                                <input type={"text"} id={"name"} placeholder={"Enter your name"}/>
                            </div>
                            <div className={"formGroup"}>
                                <label htmlFor={"email"}>EMAIL</label>
                                <input type={"email"} id={"email"} placeholder={"Enter your email"}/>
                            </div>
                            <div className={"formGroup"}>
                                <label htmlFor={"message"}>MESSAGE</label>
                                <textarea id={"message"} placeholder={"Enter your message"}/>
                            </div>
                        </form>
                    </div>
                    <div className={"modalActions"}>
                        <div className={"actionsContainer"}>
                            <button className={"cancelBtn"} onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                            <button className={"sendBtn"} onClick={() => setIsOpen(false)}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;