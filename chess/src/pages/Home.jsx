import Carousel from "../features/Carousel.jsx";
import Header from "../features/common/Header.jsx";
import Middle from "../features/common/Middle.jsx";
const Home = () => {
    return(
        <div className="home-container">
            <Header/>
            <Middle/>
            <Carousel/>
        </div>
    )
}
export default Home;