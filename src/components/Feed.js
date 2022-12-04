import React from "react";
import Contest from "./Contest";
import FeedHeader from "./FeedHeader";
import Freelancer from "./Freelancer";
import Project from "./Project";
import FeedElement from "./FeedElement";

function Feed({ type, data }) {
    let Component
    switch (type) {
        case "freelancers":
            console.log('freelancers match')
            Component = Freelancer
            break;
        case "projects":
            console.log('projects match')
            Component = Project
            break;
        case "contests":
            console.log('contests match')
            Component = Contest
            break;
        default:
            Component = <div>nothing matched</div>
            break;
    }
    console.log(Component)
    return (
        <div className="feed">
            <FeedHeader />
            {data.map(el => (
                <FeedElement key={el.id} type={type.slice(0, -1)} data={el} />
            ))}
        </div>
    )
}

export default Feed