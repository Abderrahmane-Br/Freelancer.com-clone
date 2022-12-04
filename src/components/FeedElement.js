import React, { useEffect, useRef } from "react";
import leftStar from "../assets/leftStar.svg";
import rightStar from "../assets/rightStar.svg";
import lightLeftStar from "../assets/lightLeftStar.svg";
import lightRightStar from "../assets/lightRightStar.svg";
import review from "../assets/review.svg";
import lightReview from "../assets/lightReview.svg";
import { useNavigate } from "react-router-dom";

function FeedElement({ type, data }) {
    let extender = useRef();
    let descr = useRef();
    let descrContainer = useRef();

    let navigate = useNavigate();

    useEffect(() => {
        // const myObserver = new ResizeObserver((descr, descrContainer) => {
        //     if (descr.contentRect.height > descrContainer.contentRect.height) {
        //         extender.current.classList.add("active");
        //     }
        //     else
        //         extender.current.classList.remove("active");
        // });
        // myObserver.observe(descr.current, descrContainer.current);

        const descrHeight = descrContainer.current.scrollHeight;
        const containerHeight = parseInt(getComputedStyle(descrContainer.current).height);
        if (descrHeight > containerHeight)
            extender.current.classList.add("active");
    }, [])


    function handleClick(e) {
        if (e.target.classList.contains("descriptionExtender")) {
            descrContainer.current.classList.add("extended");
            extender.current.classList.remove("active");
        }
        else
            navigate(`/${type}s/${data.id}`);
    }
    return (
        <div className={`feedElement ${type}`} onClick={handleClick}>
            <div className="titleRow">
                <div className="titleContainer">
                    <h3 className="title">{data.title}</h3>
                    <span className="budget">{data.budget}</span>
                    <div className="tags">
                        {data.tags.map((tag, index) =>
                            <span
                                key={index}
                                className={`projectTag ${tag.toLowerCase()}`}
                            >
                                {tag}</span>)
                        }
                    </div>
                </div>
                <div className="priceContainer">
                    <span className="bids">{
                        data.bids
                    } {
                            type !== "freelancers" && (type === "project" ? "Bids" : "Entries")
                        }</span>
                    <span className="price">${data.price} USD</span>
                </div>
            </div>
            <div className="descriptionContainer" ref={descrContainer} >
                <div className="description" ref={descr}>{
                    data.description
                }</div>

                <span
                    className="descriptionExtender"
                    ref={extender}
                    onClick={() => {
                        descrContainer.current.classList.add("extended");
                        extender.current.classList.remove("active")
                    }}
                >
                    ...more</span>

            </div>
            <div className="skillsContainer">
                <ul className="skills">
                    {data.skills.map((skill, index) =>
                        <li key={index}>
                            <span className="skillText">{skill}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className="clientReview">
                <div className="ratingContainer">
                    <div className="starsContainer">
                        {ratingStars(data.client.rating).map(el => el)}
                    </div>
                    <span className="rating">{data.client.rating}</span>
                </div>
                <div className="reviews">
                    <img
                        src={data.client.reviews > 0 ? lightReview : review}
                        alt=""
                        className="review"
                    />
                    {data.client.reviews}
                </div>
            </div>
        </div>
    )
}

export default FeedElement

function ratingStars(rating) {
    let left = true;
    let stars = [];
    let i = 0;
    if (rating > 0) {
        for (i = 0; i < rating; i += 0.5) {
            stars.push(<img
                src={left ? lightLeftStar : lightRightStar}
                alt=""
                className={left ? "leftStar" : "rightStar"}
            />)
            left = !left;
        }
    }
    for (i; i < 5; i += 0.5) {
        stars.push(
            <img
                src={left ? leftStar : rightStar}
                alt=""
                className={left ? "leftStar" : "rightStar"}
            />)
        left = !left;
    }

    return stars;
}

export { ratingStars }