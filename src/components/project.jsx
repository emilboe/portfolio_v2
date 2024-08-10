import React, { memo } from "react";
import { useParams } from "react-router-dom";

import "../styles/projects.scss";
import tjohei from "../images/tjohei_screenshot.png";
import hamle from "../images/hamle.jpg";
import gardenview from "../images/plant_screenshot.png";

import {
    ReactJs,
    Firebase,
    Sass,
    Express,
    Nodedotjs,
    Adobephotoshop,
    Heroku,
    Netlify,
    Adobexd,
    Mongodb
} from "@icons-pack/react-simple-icons";

import {
    IoDesktopOutline,
    IoLogoGithub,
    IoPhonePortraitSharp
} from "react-icons/io5";

const Project = memo(({ handlescroll }) => {
    let h1, h2, info, improvement;
    const { id } = useParams();
    switch (id) {
        case "hamle":
            h1 = "Hamle - Bachelor Project"
            h2 = "For my Bachelor Project I made a PWA to help reduce food waste"
            info = "In an interdisciplinary group of three students, we worked together using an agile methodology over two semesters to develop a digital solution in collaboration with Gjøvik Commune aimed at reducing food waste. Our solution assists users in planning their grocery shopping and collaborating with others to avoid over-purchasing food items.<br><br>Throughout the project, we worked as a team to conduct research, design, and development. We employed research methods such as semi-structured interviews, surveys, personas, and scenario analysis. For the design phase, we utilized sketching, wireframes, and both low-fidelity and high-fidelity prototyping.<br></br>The final product is a functional, live Progressive Web App (PWA) that allows users to share shopping lists and manage inventories across multiple groups."
            improvement = "The goal of this project was to develop a Minimum Viable Product (MVP) to test with users and gather feedback on whether the app was effective in reducing food waste. With this in mind, we prioritized certain functionalities to streamline development and allocate more time for testing.<br/><br/>One clear improvement would be to include the planned inventory management features. For example, we intended to add item categories with sorting options and a live counter to track how long an item has been in the fridge. Additionally, since we developed a Progressive Web App (PWA), we could implement mobile push notifications to alert users when an item is nearing its expiration date.<br/><br/>Removing redundant features, such as the checkbox in the inventory and the delete button in the shopping list, would also enhance the app. Finally, better commenting of the code would make future iterations easier to pick up if the project continues."
            break
        case "gardenview":
            h1 = "Gardenview - Plant Organizer"
            h2 = ""
            info = "GardenView is my first full-stack school project, developed in collaboration with three other students. As the lead developer, I was responsible for overseeing the technical aspects of the project.<br/><br/>We built the application using the MERN stack (MongoDB, Express, React, and Node.js). The goal was to create a fully functional website dedicated to plant care. Our application allows users to manage their plants by watering and fertilizing them directly from the database. Users can also update important information, such as the plant's location, to ensure their plants thrive.<br/><br/>The project spanned two months, during which our team worked together to plan, design, and develop the website from scratch. We followed the requirements set by our product owner, holding several meetings and conducting user testing sessions to refine the site and deliver the best possible user experience."
            improvement = "Since this was my first full-stack web project, there were some security issues that need addressing. We used bcrypt for password hashing, MongoDB for the database, and JSON Web Tokens to authenticate logged-in users, ensuring they had the proper authorization to manage plant data. However, as the backend designer, I'm aware of some security vulnerabilities related to role management that should be resolved.<br/><br/>Additionally, the application would benefit from the ability to upload photos for each plant, as well as further UX enhancements based on additional user testing."
            break
        case "tjohei":
            h1 = "Tjohei - Cabin Rental"
            info = "Tjohei is the name of a fictional, modern website for renting cabins, designed with simple, conventional, and intuitive solutions to help users quickly find the perfect cabin to rent.<br/><br/>I worked on this project as part of a school assignment in the first year of my degree. During the process of designing this prototype, I gained valuable experience with Adobe XD and learned about the common processes involved in developing an efficient prototype that adheres to design principles and universal design standards.<br/><br/>I created both a desktop and mobile version of the website, both of which are available in clickable format via the links above."
            improvement = "To improve this project I would do more user testing to get feedback on design decisions and make adujstments based on the results. A fun continuation of this project could be to actually develop this project into an actual functional application by utilizing a public API of some kind, maybe not even cabins. "
            break
        default:
            break
    }
    return (
        <section className="project-container">

            <div className="cover-image" >
                {id === "hamle" && <img src={hamle} alt="Branding screenshots of Hamle." />}
                {id === "gardenview" && <img src={gardenview} alt="Branding screenshots of Hamle." />}
                {id === "tjohei" && <img src={tjohei} alt="Branding screenshots of Hamle." />}
            </div>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <div className="button-group">
                {id === "hamle" &&
                    <>
                        <a className="button" target="_blank" rel="noreferrer" href="https://hamle.netlify.app/">
                            <IoDesktopOutline color="white" size={25} />
                            View Live Site
                        </a>
                        <a className="button" target="_blank" rel="noreferrer" href="https://github.com/emilboe/hamle">
                            <IoLogoGithub color="white" size={25} />
                            View Code
                        </a>
                    </>
                }
                {id === "gardenview" &&
                    <>
                        <a className="button" target="_blank" rel="noreferrer" href="https://gardenview.netlify.app/#/about">
                            <IoLogoGithub color="white" size={25} />
                            View Live Site
                        </a>
                        <a className="button" target="_blank" rel="noreferrer" href="https://github.com/emilboe/GardenView-Frontend">
                            <IoDesktopOutline color="white" size={25} />
                            View Code
                        </a>
                    </>
                }

                {id === "tjohei" &&
                    <>
                        <a className="button" target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/e9b00e11-e810-41ed-5c66-83d405e985c7-9f81/?fullscreen">
                            <IoDesktopOutline color="white" size={25} />
                            Clickable Prototype (Desktop)
                        </a>
                        <a className="button" target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/1fcae14f-0da4-40a6-6f91-5b7f4b4de3ac-69fb/screen/425e0014-5839-4e29-b72c-4a1f5ee18ad1/?fullscreen">
                            <IoPhonePortraitSharp color="white" size={25} />
                            Clickable Prototype (Mobile)
                        </a>
                    </>
                }

            </div>
            <p dangerouslySetInnerHTML={{ __html: info }} />
            <h2>Tech Stack</h2>
            <div className="skills-infos">
                {id === "hamle" &&
                    <>
                        <div className="skill-group">
                            <div className="skill">
                                <ReactJs color="#61DAFB" size={50} />
                            </div>
                            <p className="skill-info">React.js</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Firebase color="#F5820D" size={50} />
                            </div>
                            <p className="skill-info">Firebase</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Netlify color="#00AD9F" size={50} />
                            </div>
                            <p className="skill-info">Netlify</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Sass color="#CC6699" size={50} />
                            </div>
                            <p className="skill-info">SASS</p>
                        </div>
                    </>
                }
                {id === "gardenview" &&
                    <>
                        <div className="skill-group">
                            <div className="skill">
                                <ReactJs color="#61DAFB" size={50} />
                            </div>
                            <p className="skill-info">React.js</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Nodedotjs color="green" size={50} />
                            </div>
                            <p className="skill-info">NodeJS</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Express color="white" size={50} />
                            </div>
                            <p className="skill-info">ExpressJS</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Mongodb color="green" size={50} />
                            </div>
                            <p className="skill-info">Mongodb</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Heroku color="RebeccaPurple" size={50} />
                            </div>
                            <p className="skill-info">Heroku</p>
                        </div>
                    </>
                }
                {id === "tjohei" &&
                    <>
                        <div className="skill-group">
                            <div className="skill">
                                <Adobexd color="#ff61f6" size={50} />
                            </div>
                            <p className="skill-info">Adobe XD</p>
                        </div>
                        <div className="skill-group">
                            <div className="skill">
                                <Adobephotoshop color="#31a8ff" size={50} />
                            </div>
                            <p className="skill-info">Photoshop</p>
                        </div>
                    </>
                }

            </div>
            <h2>Potential Improvements</h2>
            <p dangerouslySetInnerHTML={{ __html: improvement }} />
        </section>

    );
});
export default Project;
