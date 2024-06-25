import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import Subscribe from '../../components/general/Subscribe';
import Advantages from '../../components/index/Advantages';
import ButtonBrowse from '../../components/index/ButtonBrowse';
import Catalog from '../../components/general/Catalog';
import Offer from '../../components/index/Offer';
import Promo from '../../components/index/Promo';

function StartPage() {
    return (
        <div>
            <Header />
            <Promo />
            <Offer />
            <Catalog />
            <ButtonBrowse />
            <Advantages />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default StartPage;