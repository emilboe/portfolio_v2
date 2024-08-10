import React, { useCallback, useState, memo } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

import { MdMenu, MdArrowBackIos  } from "react-icons/md";
import logo from "../images/eb.png";

const Navbar = memo(({ handleScroll, hideButtons }) => {
  const [active, setActive] = useState(false);

  const click = useCallback(() => {
    setActive(!active);
  }, [active]);
  console.log(hideButtons)
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/">
            <div className="navbar__logo">
              <img src={logo} alt="Branding screenshots of Hamle." />Emil Bøen
            </div>
          </Link>
          {hideButtons ?
            <ul className="navbar__menu">
              <li>
                <Link to="/">
                  <button>
                    <MdArrowBackIos /> 
                    Go Back
                  </button>
                </Link>
              </li>
            </ul>
            :
            <ul className="navbar__menu">
              <li>
                <button onClick={() => handleScroll("about")}>About me</button>
              </li>
              <li>
                <button onClick={() => handleScroll("skills")}>Skills</button>
              </li>
              <li>
                <button onClick={() => handleScroll("portfolio")}>
                  Projects
                </button>
              </li>
            </ul>
          }

          <div className="toggleBtn" onClick={click}>
            <MdMenu />
          </div>
        </nav>
      </header>
      {
        active && (
          <div className="toggle__menu">
            {hideButtons ?
              <ul className="navbar__menu">
                <li>
                  <Link to="/">
                    <button
                      onClick={() => {
                        click();
                      }}
                    >
                      Go Back
                    </button>
                  </Link>
                </li>
              </ul>
              :
              <ul>
                <li>
                  <button
                    onClick={() => {
                      handleScroll("about");
                      click();
                    }}
                  >
                    About me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleScroll("skills");
                      click();
                    }}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleScroll("portfolio");
                      click();
                    }}
                  >
                    Projects
                  </button>
                </li>
              </ul>
            }
          </div>
        )
      }
    </>
  );
});

export default Navbar;
