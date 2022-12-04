import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

// SVGs

import freelancerLogo from "../assets/freelancer-logo.svg";
import browseIcon from "../assets/browse.svg";
import manageIcon from "../assets/manage.svg";
import groupsIcon from "../assets/groups.svg";
import notificationIcon from "../assets/notification.svg";
import messagesIcon from "../assets/messages.svg";
import freelancerIcon from "../assets/freelancer.svg";
import flagIcon from "../assets/flag.svg";
import examsIcon from "../assets/exams.svg";
import webIcon from "../assets/web.svg";
import recruiterIcon from "../assets/recruiter.svg";
import preferredIcon from "../assets/preferred.svg";
import verifiedIcon from "../assets/verified.svg";
import locationPointerIcon from "../assets/locationBluePointer.svg";
import diamondIcon from "../assets/diamond.svg";
import notesIcon from "../assets/notes.svg";
import groupsGreenIcon from "../assets/groupsGreen.svg";
import aboutIcon from "../assets/about.svg";
import projectIcon from "../assets/standard-project.svg";
import contestIcon from "../assets/get-awarded.svg";
import freelancerLargeIcon from "../assets/work.svg";
import navMenuIcon from "../assets/navMenu.svg"
import bookmarkIcon from "../assets/bookmarkProject.svg";

function Navbar() {
  let hoverMenu = useRef();
  let browse = useRef();
  function handleNavbarClick(e) {
    if (window.innerWidth > 900) {
      e.preventDefault()
      e.currentTarget.classList.remove("active");
    }
    else
      e.currentTarget.classList.add("active");
  }

  function activateHoverMenu() {
    const elementPos = browse.current.getBoundingClientRect();
    hoverMenu.current.style.left = `${elementPos.x}px`;
    hoverMenu.current.style.top = `${elementPos.y + elementPos.height}px`;
    if (window.innerWidth > 900)
      hoverMenu.current.classList.add("active");
  }

  function deactivateHoverMenu(e) {
    let hoverEls
    setTimeout(() => {
      hoverEls = document.querySelectorAll(":hover");
      console.log(hoverEls);
      let isFound = [...hoverEls].find(el => el.classList.contains("hoverMenuContainer") || el === browse.current);
      if (!isFound)
        //   // if (e.target.classList.contains("hoverMenu"))
        setTimeout(() => hoverMenu.current.classList.remove("active"), 0)
    }, 50);
  }

  return (
    <div className="navbarContainer">
      <nav className="mainNavbar">
        <div className="navLogo mainNavItem sm-inactive">
          <img src={freelancerLogo} alt="" />
        </div>
        <div className="navSections">
          <NavLink
            to="/projects"
            className="mainNavItem"
            onClick={handleNavbarClick}
            onMouseEnter={activateHoverMenu}
            onMouseLeave={deactivateHoverMenu}
            ref={browse}
          >
            <img src={browseIcon} alt="" className="navbarIcon" />
            <span className="lg-inactive">Browse</span>
            {/* <div className="hoverMenu"></div> */}
          </NavLink>
          <div className="mainNavItem">
            <img src={manageIcon} alt="" className="navbarIcon" />
            <span className="lg-inactive">Manage</span>
          </div>
          <div className="mainNavItem">
            <img src={groupsIcon} alt="" className="navbarIcon" />
            <span className="lg-inactive">Groups</span>
          </div>
        </div>
        <div className="notificationCenter">
          <div className="mainNavItem">
            <img src={notificationIcon} alt="" className="navbarIcon" />
          </div>
          <div className="mainNavItem">
            <img src={messagesIcon} alt="" className="navbarIcon" />
          </div>
        </div>
        <hr className="sm-inactive" />
        <div className="quoteSection sm-inactive">
          <button className="freelancerBtn createQuote">Create a Quote</button>
          <button className="freelancerBtn pinkBtn">Post a Project</button>
        </div>
        <div className="profileSection sm-inactive">
          <img src={"https://www.freelancer.com/img/unknown.png"} alt="" />
          <div>
            <span className="userName">@Asolof</span>
            <span>0.00 EUR</span>
          </div>
        </div>
        <div className="mainNavItem mid-active navMenu">
          <img src={navMenuIcon} alt="" className="navbarIcon" />
        </div>
      </nav>
      <div className="hoverMenuContainer mid-inactive" ref={hoverMenu}>
        <div
          className="hoverMenu"

          onMouseEnter={activateHoverMenu}
          onMouseLeave={deactivateHoverMenu}
        >
          <SearchBar placeholder="Search Freelancer.com" />
          <h4>Search by Type</h4>
          <NavLink to="projects" className="hoverMenuItem largeItem">
            <img src={projectIcon} alt="" className="hoverMenuLargeIcon" />
            <p className="hoverMenuItemTitle">Projects</p>
          </NavLink>
          <NavLink to="contests" className="hoverMenuItem largeItem">
            <img src={contestIcon} alt="" className="hoverMenuLargeIcon" />
            <p className="hoverMenuItemTitle">Contests</p>
          </NavLink>
          <div className="hoverMenuItem largeItem">
            <img src={freelancerLargeIcon} alt="" className="hoverMenuLargeIcon" />
            <p className="hoverMenuItemTitle">Freelancers</p>
          </div>
          <div className="hoverMenuItem largeItem">
            <img src={bookmarkIcon} alt="" className="hoverMenuLargeIcon" />
            <p className="hoverMenuItemTitle">Bookmarks</p>
          </div>
          <h4>Freelancing Tools</h4>
          <div className="hoverMenuItem">
            <img src={verifiedIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Verified by Freelancer</div>
              <p>Increase your chances of winning projects</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={preferredIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Preferred Freelancer</div>
              <p>Access exclusive projects and stand out</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={freelancerIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Memberships</div>
              <p>Get earning opportunities and savings</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={examsIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Exams</div>
              <p>Prove your skills to win more work</p>
            </div>
          </div>
          <h4>Client Tools</h4>
          <div className="hoverMenuItem">
            <img src={recruiterIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Recruiter</div>
              <p>Get assistance finding the perfect freelancer</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={flagIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Technical Co-pilot</div>
              <p>Prove your skills to win more work</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={webIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Enterprise</div>
              <p>Turn your organization’s ideas into reality</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={locationPointerIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Local jobs</div>
              <p>Get help in any location, anywhere in the world
                Explore Freelancer</p>
            </div>
          </div>
          <h4>Explore Freelancer</h4>
          <div className="hoverMenuItem">
            <img src={diamondIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Showcase</div>
              <p>Get inspiration from the world’s best</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={notesIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Community</div>
              <p>Browse resources for your business and career</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={groupsGreenIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Discover</div>
              <p>Discover featured work from our best freelancers</p>
            </div>
          </div>
          <div className="hoverMenuItem">
            <img src={aboutIcon} alt="" className="hoverMenuIcon" />
            <div>
              <div className="hoverMenuItemTitle">Customer Support</div>
              <p>Browse the Help Center or get in touch with us</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar