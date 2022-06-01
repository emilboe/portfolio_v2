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

const Project = memo(({ handlescroll }) => {
    let h1, h2, info, improvement;
    const { id } = useParams();
    switch (id) {
        case "hamle":
            h1 = "Hamle - Bachelor Project"
            h2 = "For my Bachelor Project I made a PWA to help reduce food waste"
            info = "In an interdisciplinary group of 3 students we worked using an agile methodology across 2 semesters in cooperation with Gjøvik Commune to develop a digital solution to reduce food waste. Our solution helps users plan their grocery shopping and collaborate with groups in order to not overpurchase food items. Throughout the whole project we completed research, design and development as a team. Research methods like semi-structured interviews, surveys, personas and scenario were used. When designing we utilized sketching, wireframes, lo-fi and hi-fi prototyping.The final product is a functional live progressive web app (PWA) with the option to share shopping list and inventory management with several groups."
            improvement = "The goal of this project was to develop an MVP to test on users to get feedback on wether this app was effective in reducing food waste. Considering this, we prioritized certain functionality in order to shorten the development process for more time dedicated to testing. A clear improvement would be to include the inventory management functionality that was planned. For example we had planned to include item categories with sorting functionality along with a live counter for how long an item has existed in the fridge. Since we made a PWA we could implement mobile push notificaions if an item is nearing expected expiration date. Removing redundant features like the checkbox in inventory and delete button in shopping list should also be in order. Another improvement could be better commenting of the code, to make future iterations easier to pick back up should this project continue in the future."
            break
        case "gardenview":
            h1 = "Gardenview - Plant Organizer"
            h2 = ""
            info = "GardenView is my first full stack school project I made with a group of 3 other students in my class. During this project i was given the responsibility and role of lead developer. The application we made uses the MERN software stack (Mongo, Express, React and Node). The aim of this project was to create a fully fledged functional website for taking care of your plants. We achieved this by allowing those with access to water and fertilize plants from the database, as well as change any relevant information (such as where the plant is located) to make sure the plants live long lives. We worked together as a team for 2 months to plan, design and code this website from scratch in accordance with requirements set by our product owner. Through several meetings with the product owner and user testing sessions we improved our site to achieve the best user experience possible."
            improvement = "Considering this was my first full-stack web project there were some issues with security. We utilized bcrypt for password hashing and MongoDB as a database as well as Json web tokens to verify which users are logged in to make sure the logged in user was certified to process data for each plant. As the designer of the back end I know there are security vulnerabilities regarding the role management, this should be fixed. Besides that the application could really make use of an option to upload photos for each plant and some UX updates based on more user testing."
            break
        case "tjohei":
            h1 = "Tjohei - Cabin Rental"
            info = "Tjohei is the name of a fictional, modern website for renting a cabin, with simple, conventional and intuitive solutions for a user to quickly find the perfect cabin to rent. I worked along on this project as part of a school project in the first year of my degree. Throughout the process of designing this prototype, I learned a lot about the use of Adobe XD and what kind of processes are common when developing an efficient prototype that meets all the requirements of design principles and universal design. I made a version for desktop as well as a mobile version, both available in clickable format via the links above"
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
                        <a className="button" target="_blank" rel="noreferrer" href="https://hamle.netlify.app/">live site</a>
                        <a className="button" target="_blank" rel="noreferrer" href="https://github.com/emilboe/hamle">github repo</a>
                    </>
                }
                {id === "gardenview" &&
                    <>
                        <a className="button" target="_blank" rel="noreferrer" href="https://github.com/emilboe/GardenView-Frontend">github repo</a>
                        <a className="button" target="_blank" rel="noreferrer" href="https://gardenview.netlify.app/#/about">live site</a>
                    </>
                }

                {id === "tjohei" &&
                    <>
                        <a className="button" target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/e9b00e11-e810-41ed-5c66-83d405e985c7-9f81/?fullscreen">clickable prototype (Desktop)</a>
                        <a className="button" target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/1fcae14f-0da4-40a6-6f91-5b7f4b4de3ac-69fb/screen/425e0014-5839-4e29-b72c-4a1f5ee18ad1/?fullscreen">clickable prototype (Mobile)</a>
                    </>
                }

            </div>
            <p>{info}</p>
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
            <p>{improvement}</p>
        </section>
    );
});
export default Project;
