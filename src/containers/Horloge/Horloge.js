import React, {Component} from "react";
import classes from "./Horloge.module.css";

class Horloge extends Component {    
state = {
    date: new Date(),
    compteur: 1
}

tick = () => {
    this.setState((oldState,props) => {
        return {
            date:new Date(),
            compteur : oldState.compteur + 1
        }
    });
}

componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
}

componentWillUnmount() {
    clearInterval(this.timerID);
}

    render(){
        return (
            <>
                <h2 className={classes.monTitre}>Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <div> Compteur : {this.state.compteur} </div>
            </>
        );
        
    }
}

export default Horloge;