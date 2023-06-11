import "./arrow.scss"

function Arrow({direction, handleClick}) {
    return (
        <div className={`arrow ${direction}`} onClick={handleClick}/>
    )
}

export default Arrow;