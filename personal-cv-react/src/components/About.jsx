import React from 'react';
import profilePic from '../assets/images/profile.jpg';

function About() {
    return (
        <><main>
                <div className="container">
                    <section id="About_Me" className="card">
                        <h2>About Me</h2>
                        <img id="ProfilePic" src={profilePic} alt="Profile photo"></img>

                            <p>Email:
                                <a href="mailto:flores.zyra0605@gmail.com">flores.zyra0605@gmail.com</a><br></br>
                                    GitHub:
                                    <a href="https://github.com/FloresZyra" target="_blank">github.com/FloresZyra</a>
                                </p>


                            <p> Hi! <strong>I'm Zyra Nadine A. Flores </strong>
                                A scholar and a student at the University of Science and Technology of
                                Southern Philippines (USTP).  I study Bachelor of Science in Information Technology,
                                focusing on innovation and coding/programming. I graduated senior high school (SHS)
                                from Liceo de Cagayan University, ICT major. I am proficient in Python, HTML, and CSS.
                                a tech enthusiast and student from Canitoan, Cagayan de Oro City.
                            </p>

                            <p>As someone who loves both logic and creativity, I am currently navigating the exciting
                                world of Information Technology at USTP. Whether I am writing code in Python or designing
                                layouts with CSS, I am always looking for new ways to learn and innovate.
                                This portfolio is designed to help you get to know the person behind the code.
                                Feel free to browse through my introduction, check out my hobbies, or reach out to me
                                directly in the Send Me A Message section
                            </p>
                    </section>
                </div>   
        </main></>
    );
}
 
export default About;