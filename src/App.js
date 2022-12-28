import React, { Component } from "react";
import Personne from "./components/Personne/Personne";
import Horloge from "./containers/Horloge/Horloge";
import AgePersonne from "./components/Personne/AgePersonne/AgePersonne";
import "./App.css";


class App extends Component {
    state = {
        personnes: [
            { id: 1, nom: "Christophe", age: 50, sexe: true },
            { id: 2, nom: "Tya", age: 25, sexe: false },
            { id: 5, nom: "Milo", age: 43, sexe: true },
            { id: 7, nom: "Toto", age: 23, sexe: true },
        ]
    }

    anniversaireHandler = (id) => {
        const numCaseTabPersonne = this.state.personnes.findIndex(element => {
            return element.id === id;
        })

        const newPersonne = { ...this.state.personnes[numCaseTabPersonne] }; //génére une copie de la personne sur laquelle on a cliqué
        newPersonne.age++; //augmente l'age de la personne copiée

        const newTab = [...this.state.personnes]; //on duplique le tableau de personnes
        newTab[numCaseTabPersonne] = newPersonne; // on remplace la personne à l'indice du tableau sur lequel on a cliqué par la nouvelle personne qu'on a créer
        this.setState({ personnes: newTab }); // on remplace dans le state le tableau de personnes par le nouveau tableau
    }

    render() {
        return (
            <>
                <button onClick={this.anniversaireHandler}>Anniversaire</button>
                <Horloge />
                {
                    this.state.personnes.map(personne => {
                        return (
                            <Personne key={personne.id} {...personne} clic={() => this.anniversaireHandler(personne.id)}>
                                <AgePersonne age={personne.age} />
                            </Personne>
                        );
                    })
                }
            </>
        );
    }
}

export default App;