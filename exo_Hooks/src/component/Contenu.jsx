import React, {useState} from 'react'

export default function Contenu() {

    const [monState, setMonState] = useState(1)

    const changeState = () => {
        setMonState(5)
    }

    return (
        <div className="container bg-primary">
            <p>elias</p>
            <button onClick={() => changeState()} > Click Here </button>
            <p>
                {monState}
            </p>
        </div>
    )
}
