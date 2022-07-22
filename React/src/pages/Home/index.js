import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

import github from "../../assets/github.png";

export default function App() {
  const history = useNavigate();
  const [user, setUser] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisar() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.forEach((item) => {
          repositoriesName.push(item.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setErro(false);
        history("/repositories");
      })
      .catch((err) => {
        setErro(true);
      });
  }
  return (
    <S.Container>
      <S.ImgGitHub src={github} />
      <S.Content>
        <S.Input
          autoFocus
          value={user}
          className="userInput"
          placeholder="User"
          onChange={(e) => setUser(e.target.value)}
        />
        <S.Button onClick={handlePesquisar} type="button">
          Search
        </S.Button>
      </S.Content>
      {erro ? (
        <S.ErroMessage>Error, please try again!</S.ErroMessage>
      ) : (
        ""
      )}
    </S.Container>
  );
}