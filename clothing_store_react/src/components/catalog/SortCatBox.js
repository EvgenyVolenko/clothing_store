import { useContext, useState } from "react";
import { CheckBoxSort } from "./CatalogPage";

function SortCatBox() {

    const checBoxList = useContext(CheckBoxSort);

    const [isChecked, setIsChecked] = useState(checBoxList);

    const handleSingleCheck = e => {
        setIsChecked({ ...isChecked, [e.target.id]: e.target.checked });
    };

    return (
        <div className="sort-cat__box">
            <div className="sort-cat__check">
                <input
                    id="sortCart__check1"
                    type="checkbox"
                    onChange={(e) => handleSingleCheck(e)}
                />
                <label htmlFor="sort-cart__check1">XS</label>
            </div>
            <div className="sort-cat__check">
                <input
                    id="sortCart__check2"
                    type="checkbox"
                    onChange={(e) => handleSingleCheck(e)}
                />
                <label htmlFor="sort-cart__check2">S</label>
            </div>
            <div className="sort-cat__check">
                <input
                    id="sortCart__check3"
                    type="checkbox"
                    onChange={(e) => handleSingleCheck(e)}
                />
                <label htmlFor="sort-cart__check3">M</label>
            </div>
            <div className="sort-cat__check">
                <input
                    id="sortCart__check4"
                    type="checkbox"
                    onChange={(e) => handleSingleCheck(e)}
                />
                <label htmlFor="sort-cart__check4">L</label>
            </div>
        </div>
    );
}

export default SortCatBox;