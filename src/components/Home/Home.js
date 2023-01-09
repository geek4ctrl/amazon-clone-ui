import './Home.css';
import Header from '../Header/Header';
import Product from '../Product/Product';

function Home() {
    return (
        <div>
            <Header></Header>
            <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673177067/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada_elmk9g.jpg" alt="Smiley face" style={{ width: "100%" }} />
            <Product></Product>
        </div>
    )
}

export default Home;
