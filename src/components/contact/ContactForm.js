import "./contactform.scss"

function ContactForm({setIsOpen}) {

    return (
        <>
            <div className={"darkBG"} onClick={() => setIsOpen(false)}/>
            <div className={"contactor"}>
                <div className="background">
                    <div className="container">
                        <div className="screen">
                            <div className="screen-header">
                                <div className="screen-header-left">
                                    <div className="screen-header-button close"></div>
                                    <div className="screen-header-button maximize"></div>
                                    <div className="screen-header-button minimize"></div>
                                </div>
                                <div className="screen-header-right">
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <div className="screen-body">
                                <div className="screen-body-item left">
                                    <div className="app-title">
                                        <span>CONTACT</span>
                                        <span>ME</span>
                                    </div>
                                    <div className="app-contact">CONTACT INFO : +33 6 52 12 41 86</div>
                                </div>
                                <div className="screen-body-item">
                                    <div className="app-form">
                                        <div className="app-form-group">
                                            <input className="app-form-control" placeholder="NAME"/>
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" placeholder="EMAIL"/>
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" placeholder="CONTACT NO"/>
                                        </div>
                                        <div className="app-form-group message">
                                            <input className="app-form-control" placeholder="MESSAGE"/>
                                        </div>
                                        <div className="app-form-group buttons">
                                            <button className="app-form-button"
                                                    onClick={() => setIsOpen(false)}>CANCEL
                                            </button>
                                            <button className="app-form-button" onSubmit={() => setIsOpen(false)}>SEND
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;