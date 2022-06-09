import React, { useEffect, useState } from "react";
import "./styles.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { scorePlayOne, scorePlayTwo } from "../store/counterReducer";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";

const ToDoList = () => {
  const [playOne, setPlayOne] = useState(""); //campo de text
  const [scoreOne, setScoreOne] = useState([]); //array de tarefas

  const [playTwo, setPlayTwo] = useState("");
  const [scoreTwo, setScoreTwo] = useState([]);

  const [controllerScoreOne, setControllerScoreOne] = useState(false);
  const [controllerScoreTwo, setControllerScoreTwo] = useState(true);
  const [question, setQuestion] = useState(false);

  const scoreOneReducer = useSelector((state) => state.scoreReducerPlayOne);
  const scoreTwoReducer = useSelector((state) => state.scoreReducerPlayTwo);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setPlayOne(event.target.value);
  };
  const handleInputChangeTwo = (event) => {
    setPlayTwo(event.target.value);
  };

  const handleIncrementPlayOne = () => {
    dispatch(scorePlayOne());
    console.log(scoreOneReducer);
  };

  const handleIncrementPlayTwo = () => {
    dispatch(scorePlayTwo());
    console.log(scoreTwoReducer);
  };

  const handleFormSubmitPlayOne = (event) => {
    event.preventDefault();
    setQuestion(true);
    setTimeout(() => {
      setQuestion(false);
    }, 3000);
    setScoreOne((state) => [...state, scoreOne]);

    if (scoreOne.length === 4) {
      setControllerScoreOne(true);
      setControllerScoreTwo(false);
      setScoreOne([]);
    }

    if (scoreTwo.length === 4) {
      setControllerScoreOne(false);
      setControllerScoreTwo(true);
    }
    if (scoreOneReducer >= 20 || scoreTwoReducer >= 20) {
      if (scoreOne.length === 1) {
        setControllerScoreOne(true);
        setControllerScoreTwo(false);
        setScoreOne([]);
      }
    }
  };

  const handleFormSubmitPlayTwo = (event) => {
    event.preventDefault();
    setQuestion(true);
    setTimeout(() => {
      setQuestion(false);
    }, 3000);
    setScoreTwo((state) => [...state, scoreTwo]);

    if (scoreTwo.length === 4) {
      setControllerScoreOne(false);
      setControllerScoreTwo(true);
      setScoreTwo([]);
    }

    if (scoreOne.length === 4) {
      setControllerScoreOne(true);
      setControllerScoreTwo(false);
    }

    if (scoreOneReducer >= 20 || scoreTwoReducer >= 20) {
      if (scoreTwo.length === 1) {
        setControllerScoreTwo(true);
        setControllerScoreOne(false);
        setScoreTwo([]);
      }
    }
  };

  useEffect(() => {
    if (scoreOneReducer >= 21) {
      toast.success("Jogador 1 Ganhou");
      setControllerScoreTwo(true);
      setControllerScoreOne(true);
    }
    if (scoreOneReducer === 20 && scoreTwoReducer === 20) {
    } else {
      scoreOneReducer >= 21 &&
        scoreTwoReducer === scoreOneReducer - 2 &&
        toast.success("Jogador 1 Ganhou");
    }
  }, [scoreOneReducer, scoreTwoReducer]);

  useEffect(() => {
    if (scoreTwoReducer >= 21) {
      toast.success("Jogador 1 Ganhou");
      setControllerScoreTwo(true);
      setControllerScoreOne(true);
    }
    if (scoreOneReducer === 20 && scoreTwoReducer === 20) {
    } else {
      scoreTwoReducer >= 21 &&
        scoreOneReducer === scoreTwoReducer - 2 &&
        toast.success("Jogador 1 Ganhou");
    }
  }, [scoreOneReducer, scoreTwoReducer]);

  return (
    <div className="maincontainer">
      <div>
        <form onSubmit={"handleFormSubmitPlayOne"}>
          <>
            <Button
              onClick={handleFormSubmitPlayOne}
              variant="contained"
              disabled={controllerScoreOne}
            >
              {scoreOne.length === 4 ? "Último Saque" : "Saque Jogador 1"}

              {console.log("->", scoreOne.length)}
            </Button>
          </>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 50,
              },
            }}
          >
            <Paper className="paper" elevation={3}>
              {scoreOneReducer}
            </Paper>
          </Box>
        </form>
        <ul>
          {scoreOne.map((t, i) => (
            <div key={i} className="container">
              <div className="row">
                <li>{`${t.length + 1}${"º  Saque"}`}</li>
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
        <Button
          onClick={handleIncrementPlayOne}
          className="btnPlus"
          variant="contained"
          endIcon={<SendIcon />}
        >
          <AddIcon />
        </Button>
      </div>
      <div>
        {question && (
          <Alert className="alertScore" variant="filled" severity="warning">
            Quem fez o ponto!
          </Alert>
        )}
      </div>

      <div>
        <Button
          onClick={handleIncrementPlayTwo}
          variant="contained"
          endIcon={<SendIcon />}
        >
          <AddIcon />
        </Button>
      </div>

      <div>
        <form onSubmit={handleFormSubmitPlayTwo}>
          <Button
            onClick={handleFormSubmitPlayTwo}
            variant="contained"
            disabled={controllerScoreTwo}
          >
            {scoreTwo.length === 4 ? "Último Saque" : "Saque Jogador 2"}
          </Button>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 50,
              },
            }}
          >
            <Paper className="paper" elevation={3}>
              {scoreTwoReducer}
            </Paper>
          </Box>
        </form>
        <ul>
          {scoreTwo.map((d, i) => (
            <div key={i} className="container">
              {console.log("teste", scoreTwo.length)}
              <div className="row">
                <li>{`${d.length + 1}${"º  Saque"}`}</li>
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
