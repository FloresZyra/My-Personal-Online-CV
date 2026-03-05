import { useState } from "react";

function Skills({ skills }) {
    const [visible, setVisible] = useState(true);

    return (
        <div className="skills-group">
            <button 
                id="toggleSkills" 
                onClick={() => setVisible(!visible)}
            >           
                {visible ? "Hide" : "Show"} Skills
            </button>

            {visible && (
                <section className="card">
                    <h2>Skills</h2>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default Skills;