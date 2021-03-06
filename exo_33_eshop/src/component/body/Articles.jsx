import React, { Component } from 'react'


export default class Articles extends Component {

    //Tableau d'article
    state = {
        articles:[
        {
            id: 1,
            nom : "Pure Infusion Black Tea",
            prix : 1,
            stock : 5,
            image : "https://www.di.be/dw/image/v2/AATN_PRD/on/demandware.static/-/Sites-master-catalog-di/default/dw9c62a160/zoom/40045615_M.jpg?sw=980&sh=980&sm=fit"
        },
        {
            id: 2,
            nom : "Pure Infusion White Tea",
            prix : 1,
            stock : 5,
            image : "https://www.di.be/dw/image/v2/AATN_PRD/on/demandware.static/-/Sites-master-catalog-di/default/dw41dbf2a0/zoom/40045613_M.jpg?sw=980&sh=980&sm=fit"
        },
        {
            id: 3,
            nom : "Pure Infusion Green Tea",
            prix : 1,
            stock : 5,
            image : "https://www.di.be/dw/image/v2/AATN_PRD/on/demandware.static/-/Sites-master-catalog-di/default/dw6d94363b/zoom/40045614_M.jpg?sw=2000&sh=2000&sm=fit"
        }
        ],
        money: 10  
    }

    // Evenement du button acheter
    handleClick = () =>{
        this.setState({money: this.state.money - 1})
        console.log(this.state)
        
       
        const nom = this.state.newArticle
        const article = {id: this.i, nom: nom}
        this.i++
        const articles =  [...this.state.articles]
        articles.push(article)
        this.setState({articles:articles})
    
          
        
    }

    render() {
        
        // Structure de la box articles
        const card = this.state.articles.map((article) =>(
            <div key={article.id} className="col-md-4 bg-primary p-3"> 
                <div className="myBox bg-danger text-center p-2">
                    <img src={article.image} alt="Article Boisson Tao"/>
                    <h4 className="py-4">{article.nom}</h4>
                    <p>Prix: {article.prix}€</p>
                    <p>Stock: {article.stock} unités</p>
                    <button onClick={ () => this.handleClick()}  className=" btn bg-success rounded text-white p-2 ">Acheter</button>
                </div>               
            </div>
        ))

        const myMoney =
            <div className="py-3">
                <h3>Mon argent : {this.state.money} €</h3>
            </div>

        return (
            // Affichage de la box articles
            <div>
                {myMoney}
                <section  className="myRow row justify-content-around align-items-center"> 
                    {card}
                </section>
            </div>
        )
    }
}
