import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Services from "../components/Services";
import Trending from "../components/Trending";

const Home = () => {
    return (
        <div className="dark:bg-black ">
            <Navbar/>
            <Banner/>
            <Brands/>
            <Services/>
            <Offer/>
            <Trending/>
            <Footer/>            
        </div>
    );
};

export default Home;