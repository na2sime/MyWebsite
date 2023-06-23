import "./footer.scss"

function Footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    return (
        <footer className="footer">
            <p>Made with ❤️ by Nassime ABDIOU ️</p>
            <div className={"footer_contact"}>
                <p className={"footer_contact_button"} onClick={() => {openInNewTab("https://www.linkedin.com/in/nassime-abdiou-247743227/")}}>LinkedIn</p>
                <p className={"footer_contact_button"} onClick={() => {openInNewTab("https://github.com/na2sime/")}}>GitHub</p>
            </div>
            <p>Nassime ABDIOU · 2023</p>
        </footer>
    )
}

export default Footer