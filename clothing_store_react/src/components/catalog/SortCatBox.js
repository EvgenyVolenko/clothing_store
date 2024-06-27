import { useDispatch } from "react-redux";
import { changeCheckboxs } from "../reducers/checkboxsSlice";

function SortCatBox() {

    const dispatch = useDispatch();

    const handleSingleCheck = (e) => {
        dispatch(changeCheckboxs({ id: e.target.closest('div').lastElementChild.textContent, checked: e.target.checked }));
    }

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