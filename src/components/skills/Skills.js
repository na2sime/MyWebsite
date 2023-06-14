import "./skills.scss"
import skills from "../../data/skills"
import SkillCard from "../skillcard/SkillCard"

function Skills() {
    return (
        <section className="skills">
            <h2 className={"skills_title"}>Skills</h2>
            <p className={"skills_p"}>I am eager to take on new challenges and contribute to the success of your team.<br/>
                I look forward to the opportunity to work with you and further develop my skills.</p>
            <div className={"container"}>
                {skills.map((skill, index) => {
                    return (
                        <SkillCard
                            name={skill.name}
                            desc={skill.description}
                            img={skill.image}
                            key={index}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Skills