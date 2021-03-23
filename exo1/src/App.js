import Header from './component/header/Header'
import './App.css';

//exo1
/* function App() {

  let dateCourante = new Date()
  let tempsJavaScript =dateCourante.getTime()
  return (
    <div className="App">
      <h1>Bonjour à tous</h1>
      <p>
        temps Javascript: {tempsJavaScript} milliseconde
      </p>
      <p>
        date pour humain: {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()}
      </p>
    </div>
  );
} */

//exo2
/* import React, { Component } from 'react'

let titre = <h1>bonjour Cem</h1>

export default class App extends Component {
  render() {
    return (
      <div>
        {titre}
      </div>
    )
  }
} */

//exo3
/* import React, { Component } from 'react'

let dateCourante = new Date()

export default class App extends Component {
  render() {
    return (
      <div>
        <p>
          date pour humain: {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()}
        </p>
      </div>
    )
  }
} */

// exo3 variante
/* let dateCourante = new Date()
export default function App() {
  return (
    <div>
      <p>
        date pour humain: {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()}
      </p>
    </div>
  )
} */

//exo4
import React, { Component } from 'react'

function App() {
  return (

    <div className="bg-danger">
      <Header />
      <div className="bg-warning container">
      <p>trololo</p>
      </div>
    </div>
  );
}

export default App;

// exo5
