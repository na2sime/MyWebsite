import "./studiescard.scss"

function StudiesCard({name, desc, img}) {
    return (
        <div className="studiescard">
            <img src={img} alt={name}/>
            <div className="studiescard_info">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default StudiesCard;