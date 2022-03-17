
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import { Typography } from "@mui/material";
import { Addpoke } from "./Addpoke";
import { PokeList } from "./PokeList";
import { Editpoke } from "./Editpoke";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div>
      <div className="navbar">
        {/* nav bar section */}
        <Button><Link id="navbarcontent" to="/">Home</Link></Button> 
        <Button><Link id="navbarcontent" to="/AddPokemon">Add Pokemon</Link></Button>
      </div>
      <Typography className="heading" gutterBottom variant="h5" component="div">
        Welcome to the Rarest{" "}
        <img
          className="pokimg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokimon"
        />{" "}
        Collection! Feel free to add your favourite{" "}
        <img
          className="pokimg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokimon"
        />{" "}
        and alter the collection as you see fit.
      </Typography>

      {/* switch for routing */}
      <Routes>
        <Route exact path="/">
          <PokeList />
        </Route> 
        <Route path="/AddPokemon">
          <Addpoke />
        </Route>
        <Route path="/EditPoke/:id">
          <Editpoke />
        </Route>
      </Routes>
    </div>
  );
}