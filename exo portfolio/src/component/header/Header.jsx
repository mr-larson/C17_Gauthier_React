/*-------------- lien JSX --------------*/
import Typed from "react-typed"

export default function Header() {
    return (
        <header className="header">
            <div className="container title">
                <h1>web development front-end and back-end</h1>
                <Typed
                    className="typed-text text-success"
                    strings={["HTML", "CSS", "SASS", "Bootstrap", "Java Script", "React", "Python"]}
                    typeSpeed={90}
                    backSpeed={70}
                    loop
                />
                <button type="button" class="btn">Contact me</button>
            </div>
        </header>
    )
  }
