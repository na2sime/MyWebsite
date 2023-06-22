import "./studies.scss"
import StudiesCard from "../StudiesCard/StudiesCard";

function Studies() {
    return (
        <section className="studies">
            <h2 className={"studies_title"}>Studies</h2>
            <div className={"studies_container"}>
                <StudiesCard
                    name={"Bachelor's degree in Mathematics, Computer Science, Physics"}
                    desc={"Sorbonne University, Paris, France (2019-2022)"}
                    img={"https://upload.wikimedia.org/wikipedia/fr/0/09/Logo_officiel_de_l%27Universit%C3%A9_Paris-Sorbonne.png"}
                    key={0}
                />
                <StudiesCard
                    name={"Web developer training"}
                    desc={"Openclassrooms, Paris, France (2022-2023)"}
                    img={"https://www.radins.com/uploads/merchant-logo/code-promo-openclassrooms.jpg"}
                    key={1}
                />
                <StudiesCard
                    name={"Master's degree in computer science specializing in programming"}
                    desc={"Ynov, Aix-En-Provence, France (2023-2025)"}
                    img={"https://www.ynov-aix.com/app/uploads/2021/02/logo_ynov_campus_aix_rvb.jpg"}
                    key={1}
                />
            </div>
        </section>
    )
}

export default Studies