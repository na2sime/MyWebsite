import "./scroll.scss"

function Scroll() {
    const handleClickScroll = () => {
        const element = document.getElementById('book');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (
        <div className="mouse_scroll" onClick={handleClickScroll}>

            <div className="mouse">
                <div className="wheel"></div>
            </div>
            <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
            </div>
        </div>
    );
}

export default Scroll;