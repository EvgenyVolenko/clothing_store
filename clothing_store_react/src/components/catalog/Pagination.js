function Pagination() {
    return (
        <div className="pagination-box center">
            <div className="pagination">
                <a className="pagination__link" href="#"><svg width="8" height="14"
                    viewBox="0 0 8 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.995 2L2.995 7L7.995 12L6.995 14L-0.00500488 7L6.995 0L7.995 2Z"
                        fill="black" />
                </svg>
                </a>
                <a className="pagination__link" href="#">1</a>
                <a className="pagination__link" href="#">2</a>
                <a className="pagination__link" href="#">3</a>
                <a className="pagination__link" href="#">4</a>
                <a className="pagination__link" href="#">5</a>
                <a className="pagination__link" href="#">6</a>
                <a className="pagination__link" href="#">...</a>
                <a className="pagination__link" href="#">20</a>
                <a className="pagination__link" href="#">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
                            fill="black" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Pagination;