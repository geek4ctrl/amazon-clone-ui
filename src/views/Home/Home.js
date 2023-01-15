import './Home.css';
import Header from '../../components/Header/Header';
import Product from '../Product/Product';

import { ProductsProvider } from '../../context/ProductsContext';

function Home() {
    return (
        <div>
            <Header />
            <Product />
        </div>
    )
}

export default Home;
