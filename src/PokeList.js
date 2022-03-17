import { useState, useEffect } from "react";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Cards } from "./Cards";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
export function PokeList() {
  //  in this part we are adding delete button and creating card view
  const getPoke = () =>
    fetch("https://61c412fdf1af4a0017d99285.mockapi.io/Pokemon", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((poke) => setData(poke));
  useEffect(getPoke, []);
  const deletepoke = (id) =>
    fetch(`https://61c412fdf1af4a0017d99285.mockapi.io/Pokemon/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getPoke());
  const [datas, setData] = useState([]);
  console.log(datas);
  const history = useNavigate();
  return (
    <div>
      <div className="App">
        {datas.map(({ name, power, weakness, img, description, id }) => (
          <Cards
            name={name}
            power={power}
            weakness={weakness}
            img={img}
            description={description}
            deleteButton={
              <IconButton
                onClick={() => {
                  deletepoke(id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton onClick={() => history.push(`/EditPoke/${id}`)}>
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}