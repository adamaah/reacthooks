//import React from 'react';
import React, { useEffect, useRef, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import endgame from './endgame.jpeg';
import ironman from './ironman1.jpeg';
import rag from './rag.jpeg';
import ultron from './ultron.jpg';




function App() {

  let[name1, setName1] = useState("Iron Man 1");
  let[description1, setDescription1] = useState("AHHH Stark il peut pas s'empecher de se retenir ...");
  let[lien1, setLien1] = useState("https://www.marvel.com/");
  let[note1, setNote1] = useState("4,3");


  let[name2, setName2] = useState("Thor Ragnarok");
  let[description2, setDescription2] = useState("L'un des films Marvel les plus éclatés, mdr");
  let[lien2, setLien2] = useState("https://www.marvel.com/");
  let[note2, setNote2] = useState("4,1");


  let[name3, setName3] = useState("Age of Ultron");
  let[description3, setDescription3] = useState("Ca fait peur si jamais les machine seront indépendants");
  let[lien3, setLien3] = useState("https://www.marvel.com/");
  let[note3, setNote3] = useState("4,4");


  let[name4, setName] = useState("Avengers END GAME");
  let[description4, setDescription4] = useState("Juste WAOUW !!! Marvel a frappé fort !");
  let[lien4, setLien4] = useState("https://www.marvel.com/");
  let[note4, setNote4] = useState("4,8");


  return (

    <div className="container">

      <div className="row">
        <h1 className="titreHome">Movie app</h1>

        <div className="col-3">
        <img src={ironman} className="imagetaille" />
          <h2 className="lestitres" >Nom film : {name1} </h2>
          <p> Une description : {description1} </p>
          <a href="{lien1}">Plus de détails </a>
          <p>Note : {note1} </p>
        </div>

        <div className="col-3">
        <img src={rag} className="imagetaille" />
          <h2 className="lestitres" >Nom film : {name2} </h2>
          <p> Une description : {description2} </p>
          <a href="{lien2}">Plus de détails </a>
          <p>Note : {note2} </p>
        </div>

        <div className="col-3">
        <img src={endgame} className="imagetaille" />
          <h2 className="lestitres" >Nom film : {name3} </h2>
          <p> Une description : {description3} </p>
          <a href="{lien3}">Plus de détails </a>
          <p>Note : {note3} </p>
        </div>

        <div className="col-3">
        <img src={endgame} className="imagetaille" />
          <h2 className="lestitres" >Nom film : {name4} </h2>
          <p> Une description : {description4} </p>
          <a href="{lien4}">Plus de détails </a>
          <p>Note : {note4} </p>
        </div>

        <div className="addmovie">
          <h3>Ajouter un nouveau film</h3>

          <form>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control champform" placeholder="Nom film"></input>
              </div>
              <div class="col">
                <input type="text" class="form-control champform" placeholder="Une petite description film"></input>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control champform" placeholder="Lien vers film"></input>
              </div>
              <div class="col">
                <input type="text" class="form-control champform" placeholder="Une note à ce film"></input>
              </div>
            </div>

            <div class="row">
            <label for="exampleFormControlFile1">Uploader l'image de couverture</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
            </div>

            <button type="submit" class="btn btn-primary">Ajouter</button>
          </form>
          

        </div>

      </div>

    </div>

  );

}

export default App;
