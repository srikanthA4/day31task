import { useState } from "react";
import * as React from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Addpoke() {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [weakness, setWeakness] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");//setting hooks for getting user inputs
  const history = useNavigate();
  return (
    <div>
      {/* input section starts here */}
      <div className="main">
        <div className="inputfield">
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setPower(e.target.value);
            }}
            id="standard-basic"
            label="Power"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setWeakness(e.target.value);
            }}
            id="standard-basic"
            label="Weakness"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setImg(e.target.value);
            }}
            id="standard-basic"
            label="img"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="standard-basic"
            label="discription"
            variant="standard"
          />
          <Button
            onClick={() => {
              const newpoke = {
                name,
                power,
                weakness,
                img,
                description,
              };
              // using fetch with POST method to post the data collected from the user
              fetch("https://61c412fdf1af4a0017d99285.mockapi.io/Pokemon", {
                method: "POST",
                body: JSON.stringify(newpoke),
                headers: { "Content-Type": "application/json" },
              })
                .then((data) => data.json())
                .then(() => history.push("/"));
            }}
            variant="contained"
          >
            Add Pokemon
          </Button>
        </div>
      </div>
    </div>
  );
}