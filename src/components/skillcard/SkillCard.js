import "./skillcard.scss"

function SkillCard({name, desc, img}) {
    return (
        <div className="skillcard">
            <img src={`../images/icons/${img}.svg`} alt={name}/>
            <div className="skillcard_info">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default SkillCard;