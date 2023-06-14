import "./banner.scss"
import Logo from "../../assets/images/banner.png";
import Scroll from "../scroll/Scroll";

function Banner() {
    return (
        <main className={"bannerModule"}>
            <div className={"banner"}>
                <div className={"banner_info"}>
                    <h1 className={"banner_info_title"}>Making your Dream Real</h1>
                    <p className={"banner_info_text"}>My name is Nassime and I'm a fullstack developer. I am at your
                        disposal to bring your dreams to life!</p>
                </div>
                <img className={"banner_logo"} src={Logo} alt="Logo représentant Nassime Abdiou"/>
            </div>
            <Scroll/>
        </main>
    );
}

export default Banner;