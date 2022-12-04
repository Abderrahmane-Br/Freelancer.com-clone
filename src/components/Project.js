import React from "react";
import { jobs as projects } from "../data";
import { NavLink, useMatch, useParams } from "react-router-dom";
import BidUpgrade from "./BidUpgrade";
import { ratingStars } from "./FeedElement";

// SVGs

import locationIcon from "../assets/locationPointer.svg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import timerIcon from "../assets/timer.svg";
import depositIcon from "../assets/deposit.svg";
import paymentIcon from "../assets/payment.svg";
import profileIcon from "../assets/profile.svg";
import identityIcon from "../assets/identity.svg";
import ClientVerification from "./ClientVerification";
import phoneActiveIcon from "../assets/phoneActive.svg";
import emailActiveIcon from "../assets/emailActive.svg";
import depositActiveIcon from "../assets/depositActive.svg";
import paymentActiveIcon from "../assets/paymentActive.svg";
import profileActiveIcon from "../assets/profileActive.svg";
import identityActiveIcon from "../assets/identityActive.svg";

function Project() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId));
    return (
        <>
            <section className="headerContainer ">
                <div className="header detailsHeader">
                    <h1 className="detailsTitle mid-inactive">{project.title}</h1>
                    <ul className="header__navbar">
                        <NavLink
                            to={`/projects/${projectId}`}
                            className={useMatch(`/projects/${projectId}`) ? "navlink active" : "navlink"}
                        >
                            Details
                        </NavLink>

                        {/* normally we would use another navlink */}

                        <NavLink
                            to=" "
                            className="navlink"
                            onClick={(e) => e.preventDefault()}
                        >
                            Proposals
                        </NavLink>
                    </ul>
                </div>
            </section>
            <section className="bodyContainer">
                <div className="bodyContent">
                    <div className="projectSide project">
                        <div className="card">
                            <div className="cardHeader">
                                <h3 className="mid-inactive">About this Project</h3>
                                <h4 className="mid-inactive">{project.budget}</h4>
                                <h3 className="mid-active">{project.title}</h3>
                            </div>
                            <div className="cardBody">
                                <div className="description">{project.description}</div>
                                <h3>Skills Required</h3>
                                <ul className="skillsList">
                                    {
                                        project.skills.map((skill, index) =>
                                            <li key={index} className="skill">{skill}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="card bidContainer">
                            <div className="cardHeader">
                                <h3>Place a Bid on this Project</h3>
                            </div>
                            <div className="cardBody">
                                <p>you'll be able to edit this bid </p>
                                <div className="bidConfig">
                                    <div className="filtersInputContainer">
                                        <label className="filtersInputLabel">
                                            Bid amount
                                        </label>
                                        <div className="filtersInput blue--border">
                                            <span>$</span>
                                            <input
                                                type="text"
                                                placeholder="0"
                                                className="textInput"
                                            />
                                            <span>USD</span>
                                        </div>
                                    </div>
                                    <div className="filtersInputContainer">
                                        <label className="filtersInputLabel">
                                            This project will be delivered in
                                        </label>
                                        <div className="filtersInput blue--border">
                                            <span></span>
                                            <input
                                                type="text"
                                                placeholder="0"
                                                className="textInput"
                                            />
                                            <span>Days</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4>Describe your proposal</h4>
                                    <textarea
                                        name=""
                                        id=""
                                        placeholder="What makes you the best candidate for this project?"
                                        className="blue--border bidDescription"
                                    ></textarea>
                                </div>
                                <hr />
                                <div>
                                    <h4>Suggest a milestone payment</h4>
                                    <p>Define the tasks you will complete for this</p>
                                    <div className="milestoneConfig">
                                        <div className="filtersInputContainer">
                                            <div className="filtersInput blue--border">
                                                <span></span>
                                                <input
                                                    type="text"
                                                    placeholder="Describe your milestone request"
                                                    className="textInput"
                                                />
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="filtersInputContainer">
                                            <div className="filtersInput blue--border">
                                                <span>$</span>
                                                <input
                                                    type="text"
                                                    placeholder="0"
                                                    className="textInput"
                                                />
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="blueBtn freelancerBtn" disabled>Add another milestone payment</button>
                                </div>
                                <hr />
                                <div className="optionalUpgrades">
                                    <h4>Optional upgrades</h4>
                                    <BidUpgrade
                                        tag="sponsored"
                                        text="Your current bid will rank at #2. Sponsoring will boost your bid rank to #1, allowing your bid to be seen first. There can only be one sponsored bid per project."
                                        price="$1.90 USD"
                                    />
                                    <hr />
                                    <BidUpgrade
                                        tag="sealed"
                                        text="Upgrading to a sealed entry will hide your bid from other freelancers. This keeps others from copying your work, making your bid one-of-a-kind."
                                        price="$0.10 USD"
                                    />
                                    <hr />
                                    <BidUpgrade
                                        tag="highlighted"
                                        text="Highlight your bid in yellow for greater visibility and a higher chance of being awarded the project. Highlighted bids have a 213% higher chance of being awarded."
                                        price="$0.49 USD"
                                    />
                                </div>
                                <button className="blueBtn freelancerBtn bidBtn" >Place a bid</button>
                            </div>
                        </div>
                    </div>
                    <div className="clientSide project">
                        <div className="card">
                            <div className="cardHeader">
                                <h4>About the client</h4>
                            </div>
                            <div className="cardBody">
                                <ul className="clientStatus">
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={locationIcon}
                                            text={project.client.location}
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={locationIcon}
                                            text={project.client.country}
                                        />
                                    </li>
                                    <li className="clientStatusItem clientRating">
                                        <ClientVerification
                                            icon={profileIcon}
                                            text={[ratingStars(project.client.rating), `(${project.client.reviews} reviews)`]}
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={timerIcon}
                                            text={`Memeber since ${project.client.dateJoined}`}
                                        />
                                    </li>
                                    <li>
                                        <h3>Client Verification</h3>
                                    </li>

                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={project.client.isIdentityVerified ?
                                                identityActiveIcon :
                                                identityIcon
                                            }
                                            text="Identity verified"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={project.client.isPaymentVerified ?
                                                paymentActiveIcon :
                                                paymentIcon
                                            }
                                            text="Payment verified"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={project.client.isDepositMade ?
                                                depositActiveIcon :
                                                depositIcon
                                            }
                                            text="Deposit made"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={project.client.isEmailVerified ?
                                                emailActiveIcon :
                                                emailIcon
                                            }
                                            text="email verified"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={project.client.isProfileCompleted ?
                                                profileActiveIcon :
                                                profileIcon
                                            }
                                            text="Profile completed"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={project.client.isPhoneVerified ?
                                                phoneActiveIcon :
                                                phoneIcon
                                            }
                                            text="Phone verified"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project