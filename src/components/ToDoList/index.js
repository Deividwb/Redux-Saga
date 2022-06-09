import React, { useState } from "react";
import "./styles.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const ToDoList = () => {
  const [playOne, setPlayOne] = useState(""); //campo de text
  const [scoreOne, setScoreOne] = useState([]); //array de tarefas

  const [playTwo, setPlayTwo] = useState("");
  const [scoreTwo, setScoreTwo] = useState([]);

  const handleInputChange = (event) => {
    setPlayOne(event.target.value);
  };
  const handleInputChangeTwo = (event) => {
    setPlayTwo(event.target.value);
  };

  const handleFormSubmitPlayOne = (event) => {
    event.preventDefault();
    setScoreOne((state) => [...state, playOne]);
    setPlayOne("");
  };

  const handleFormSubmitPlayTwo = (event) => {
    event.preventDefault();

    setScoreTwo((state) => [...state, playTwo]);

    setPlayTwo("");
  };

  return (
    <div className="maincontainer">
      <div>
        <form onSubmit={handleFormSubmitPlayOne}>
          <input onChange={handleInputChange} value={playOne} />
          {scoreTwo.length !== 5 && (
            <>
              {scoreOne.length !== 5 ? (
                <Button onClick={handleFormSubmitPlayOne} variant="contained">
                  Jogador 1
                </Button>
              ) : (
                <Button variant="contained" disabled>
                  Saque Cancelado
                </Button>
              )}
            </>
          )}
        </form>
        <ul>
          {scoreOne.map((t, i) => (
            <div key={i} className="container">
              <div className="row">
                <li>{t}</li>
              </div>
            </div>
          ))}
          {scoreOne.length === 5 && (
            <>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  Jogador 2 deve jogar!
                </Alert>
              </Stack>
            </>
          )}
        </ul>
      </div>

      <div>
        <form onSubmit={handleFormSubmitPlayTwo}>
          <input onChange={handleInputChangeTwo} value={playTwo} />

          {scoreTwo.length !== 5 ? (
            <Button onClick={handleFormSubmitPlayTwo} variant="contained">
              Jogador 2
            </Button>
          ) : (
            <Button variant="contained" disabled>
              Saque Cancelado
            </Button>
          )}
        </form>
        <ul>
          {scoreTwo.map((d, i) => (
            <div key={i} className="container">
              {console.log("teste", scoreTwo.length)}
              <div className="row">
                <li>{`${scoreTwo.length} ${" Saque"}`}</li>
              </div>
            </div>
          ))}
          {scoreTwo.length === 5 && (
            <>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  Jogador 1 deve jogar!
                </Alert>
              </Stack>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
