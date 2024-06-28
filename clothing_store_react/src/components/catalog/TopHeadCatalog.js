import { useContext } from 'react';
import { Chapter } from '../../App';

function TopHeadCatlog() {

    const chapter = useContext(Chapter).toUpperCase();

    return (
        <div className="top-head top-head_two-string center">
            <h2 className="top-head__heading">NEW ARRIVALS</h2>
            <nav className="breadcrumbs">
                <a href="#" className="breadcrumbs__link">HOME</a>
                <a href="#" className="breadcrumbs__link">{chapter}</a>
                <a href="#"
                    className="breadcrumbs__link breadcrumbs__link__site">NEW
                    ARRIVALS</a>
            </nav>
        </div>
    );
}

export default TopHeadCatlog;