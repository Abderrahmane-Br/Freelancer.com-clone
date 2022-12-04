import React from "react";
import { jobs as contests } from "../data";
import { NavLink, useMatch, useParams } from "react-router-dom";
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

function Contest() {
    const { contestId } = useParams();
    const contest = contests.find(p => p.id === parseInt(contestId));
    return (
        <>
            <section className="headerContainer ">
                <div className="header detailsHeader">
                    <h1 className="detailsTitle mid-inactive">{contest.title}</h1>
                    <ul className="header__navbar">
                        <NavLink
                            to={`/contests/${contestId}`}
                            className={useMatch(`/contests/${contestId}`) ? "navlink active" : "navlink"}
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
                    <div className="projectSide contest">
                        <div className="card">
                            <div className="cardHeader">
                                <h3 className="mid-inactive">Description</h3>
                                <h4 className="mid-inactive">{contest.budget}</h4>
                                <h3 className="mid-active">{contest.title}</h3>
                            </div>
                            <div className="cardBody">
                                <div className="description">{contest.description}</div>
                                <h2>Supported Submission File Types</h2>
                                <hr />
                                <p className="submissionFileTypes">JPEG, JPG, GIF</p>
                                <hr />
                                <button className="freelancerBtn pinkBtn">Post a Contest like this</button>
                            </div>
                        </div>
                        <div className="card bidContainer">
                            <div className="cardHeader">
                                <h3>Recommended Skills</h3>
                            </div>
                            <div className="cardBody">
                                <ul className="skillsList">
                                    {
                                        contest.skills.map((skill, index) =>
                                            <li key={index} className="skill">{skill}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clientSide contest">
                        <div className="card">
                            <div className="cardHeader">
                                <h3>About the client</h3>
                                <div className="clientReview">
                                    <span>{contest.client.rating}</span>
                                    {ratingStars(contest.client.rating)}
                                </div>
                            </div>
                            <div className="cardBody">
                                <div className="contestHolder">
                                    <img src={contest.client.imgUrl} alt="" className="contestHolderImage" />
                                    <div className="contestHolderInfo">
                                        <div>
                                            <span>Member Since</span> : {contest.client.dateJoined}
                                        </div>
                                        <div>
                                            <span>Location</span> : {contest.client.country}
                                        </div>
                                    </div>
                                </div>
                                <ul className="contestHolderVerification">
                                    <li><img
                                        src={contest.client.isIdentityVerified ?
                                            identityActiveIcon :
                                            identityIcon}
                                        alt="" />
                                    </li>
                                    <li><img
                                        src={contest.client.isPaymentVerified ?
                                            paymentActiveIcon :
                                            paymentIcon}
                                        alt="" />
                                    </li>
                                    <li><img
                                        src={contest.client.isDepositMade ?
                                            depositActiveIcon :
                                            depositIcon}
                                        alt="" />
                                    </li>
                                    <li><img
                                        src={contest.client.isEmailVerified ?
                                            emailActiveIcon :
                                            emailIcon}
                                        alt="" />
                                    </li>
                                    <li><img
                                        src={contest.client.isProfileCompleted ?
                                            profileActiveIcon :
                                            profileIcon}
                                        alt="" />
                                    </li>
                                    <li><img
                                        src={contest.client.isPhoneVerified ?
                                            phoneActiveIcon :
                                            phoneIcon}
                                        alt="" />
                                    </li>

                                </ul>
                                {/* <ul className="clientStatus">
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={locationIcon}
                                            text={contest.client.location}
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={locationIcon}
                                            text={contest.client.country}
                                        />
                                    </li>
                                    <li className="clientStatusItem clientRating">
                                        <ClientVerification
                                            icon={profileIcon}
                                            text={[ratingStars(contest.client.rating), `(${contest.client.reviews} reviews)`]}
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={timerIcon}
                                            text={`Memeber since ${contest.client.dateJoined}`}
                                        />
                                    </li>
                                    <li>
                                        <h3>Client Verification</h3>
                                    </li>

                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={contest.client.isIdentityVerified ?
                                                identityActiveIcon :
                                                identityIcon
                                            }
                                            text="Identity verified"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={contest.client.isPaymentVerified ?
                                                paymentActiveIcon :
                                                paymentIcon
                                            }
                                            text="Payment verified"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={contest.client.isDepositMade ?
                                                depositActiveIcon :
                                                depositIcon
                                            }
                                            text="Deposit made"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={contest.client.isEmailVerified ?
                                                emailActiveIcon :
                                                emailIcon
                                            }
                                            text="email verified"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={contest.client.isProfileCompleted ?
                                                profileActiveIcon :
                                                profileIcon
                                            }
                                            text="Profile completed"
                                        />
                                    </li>
                                    <li className="clientStatusItem">
                                        <ClientVerification
                                            icon={contest.client.isPhoneVerified ?
                                                phoneActiveIcon :
                                                phoneIcon
                                            }
                                            text="Phone verified"
                                        />
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contest