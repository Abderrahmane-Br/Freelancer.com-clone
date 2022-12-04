import React, { useState } from "react";

function FeedHeader() {
    const [showModal, setShowModal] = useState(false);
    const [modalValue, setModalValue] = useState("Latest");
    function handleClick(event) {
        const { tagName, textContent } = event.target;
        console.log(event.target.textContent);
        if (tagName === "DIV")
            setModalValue(textContent);
        setShowModal(prevShowmodal => !prevShowmodal)
    }

    return (
        <div className="feedHeader">
            <div className="feedHeader__topRow">
                <h3>Top Results</h3>
                <div
                    className="feedHeader__filterContainer"
                    onClick={handleClick}
                >
                    <span className="filter__sortby">Sort by</span>
                    <button
                        className={`feedHeader__filter ${showModal ? "active" : ""}`}
                    >
                        {modalValue}
                    </button>
                    {showModal && <FeedHeaderMoldal handleClick={handleClick} />}
                </div>
            </div>
            <span className="resultsCounter">Showing - of - results</span>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    )
}

function FeedHeaderMoldal({ handleClick }) {
    return (
        <div
            className="feedHeader__modal"
        // onClick={handleClick}
        >
            <div className="modalChild">Latest</div>
            <div className="modalChild">Oldest</div>
            <div className="modalChild">Lowest</div>
            <div className="modalChild">Highest</div>
            <div className="modalChild">Fewest</div>
            <div className="modalChild">Most</div>
        </div>
    )
}
export default FeedHeader