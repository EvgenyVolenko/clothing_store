import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import Subscribe from '../../components/general/Subscribe';
import TopHeadRegistration from './TopHeadRegistration';
import Registration from './Registration';

function RegistrationPage() {
    return (
        <div>
            <Header />
            <TopHeadRegistration />
            <Registration />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default RegistrationPage;