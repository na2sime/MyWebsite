import "./home.scss"
import Header from "../../components/header/Header";
import Book from "../../components/book/Book";
import Banner from "../../components/banner/Banner";
import Skills from "../../components/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home () {
    return (
        <div className={"home"}>
            <Header/>
            <Banner/>
            <Book/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default Home;