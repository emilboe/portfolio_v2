import React, { memo } from "react";
import { useParams } from "react-router-dom";

import "../styles/projects.scss";
import tjohei from "../images/Animated_Mockup_v3.gif";
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
            info = "In an interdisciplinary group of 3 students we worked using an agile methodology across 2 semesters in cooperation with Gjøvik Commune to develop a digital solution to reduce food waste. Our solution helps users plan their grocery shopping and collaborate with groups in order to not overpurchase food items. Throughout the whole project we completed research, design and development as a team. Research methods like semi-structured interviews, surveys, personas, scenario were used. When designing we utilized sketching, wireframes, lo-fi and hi-fi prototyping.The final product is a functional live progressive web app (PWA) with the option to share shopping list and inventory management with several groups."
            improvement = "The goal of this project was to develop an MVP to test on users to get feedback on weather this app was effective in reducing food waste. Considering this, we prioritized certain functionality in order to shorten the development process for more time dedicated to testing. A clear improvement would be to include an the inventory management functionality that was planned, including, but not limited to; Item categories with sorting functionality, live counter for how long an item has existed in the fridge, push updates if an item is nearing expected expiration date and removal of redundant features like the checkbox in inventory and delete button in shopping list. Another improvement could be in the commenting of the code."
            break
        case "gardenview":
            h1 = "Gardenview - Plant Organizer"
            h2 = ""
            info = "GardenView is a project made by a group of 4 students at the Norwegian University of Science and Technology. It is made using the common MERN(Mongo, Express, React and Node) software stack. The aims of the project is to create a full usable website for taking care of your plants and we achieve this by allowing those with access to water and fertilize plants, as well as change any relevant information (such as where the plant is placed) to make sure the plants live long lives. We worked together as a team for 2 months to plan, design and code this website so it would fulfill the requirements set by our product owner.             Through several meetings with the product owner and user testing sessions we improved our site to achieve the best user experience possible."
            improvement = ""
            break
        case "tjohei":
            h1 = "Tjohei - Cabin Rental"
            info = "tjohei is the name of a fictional, modern website for renting a cabin, with simple, conventional and intuitive solutions for a user to quickly find the perfect cabin to rent. Throughout the process of designig this prototype, I learned a lot about the use of Adobe XD and what kind of process it is common to go through to develop an efficient prototype that meets all the requirements of design principles and universal design. I made a version for desktop as well as a mobile version, both available in clickable format via the links above"
            improvement = "To improve this project I could do something i guess... "
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
            <div className="tech-stack">
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
