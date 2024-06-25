import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import Subscribe from '../../components/general/Subscribe';
import TopHeadBasket from './TopHeadBasket';
import CartBox from './CartBox';

function BasketPage() {
    return (
        <div>
            <Header />
            <TopHeadBasket />
            <CartBox />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default BasketPage;