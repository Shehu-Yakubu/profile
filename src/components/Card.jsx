import shehuPicture from "../assets/shehu.png"

function Card() {
    return (
        <div className="card">
            <div className="card-contents">
                <h3 className="card-contents-greetings">Hi there!</h3>

                <p className="card-contents-text">
                    My name is Shehu Yakubu
                </p>

                <br/>

                <p className="card-contents-text">
                    I am a Junior Frontend Developer with experience in 
                    <br/>HTML, CSS, JavaScript, React JS, Java, and Python
                </p>

                <br/>

                <p className="card-contents-text">
                    I have a Bachelor's Degree in Software Engineering
                </p>

                <br/>

                <p className="card-contents-text">
                    I am a good listener, I play DLS, FIFA, Spider Solitaire,
                    <br/>and have a problem solving skills
                </p>
            </div>

            <div className="card-picture">
                <img src={shehuPicture} className="card-img" />
            </div>
        </div>
    )
}

export default Card