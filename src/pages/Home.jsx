import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Brands/>
            <Footer/>            
        </div>
    );
};

export default Home;