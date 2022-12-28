import React, {Component} from "react";
import classes from "./Personne.module.css";


class Personne extends Component {
  render() {
    const monStyle = {
      // backgroundColor:"green",
      color:"white"
    }
    monStyle.fontSize = "15px";

    if(this.props.sexe) {
        monStyle.backgroundColor= "green";
    } else {
        monStyle.backgroundColor= "red"
    }
    
      return (
          <>
            <h1 className={classes.monTitre}>{this.props.nom}</h1>
            {this.props.children}            
            <div style={monStyle}>Sexe : {this.props.sexe ? "Homme" : "Femme"}</div>
            <button onClick={this.props.clic}>Anniversaire</button>
          </>                    
      );
    }           
  }

export default Personne;