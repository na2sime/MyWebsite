import "./home.scss"
import Header from "../../components/header/Header";
import Book from "../../components/book/Book";
import Banner from "../../components/banner/Banner";

function Home () {
    return (
        <div className={"home"}>
            <Header/>
            <Banner/>
            <Book/>
        </div>
    );
}

export default Home;