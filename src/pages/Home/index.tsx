import React from "react";
import { useHistory } from "react-router-dom";
import printer from "../../assets/icons/printer.svg";
import dollar from "../../assets/icons/dollar.svg";
import search from "../../assets/icons/search.svg";
import settings from "../../assets/icons/settings.svg";
import aula from "../../assets/icons/aula.svg";
import user from "../../assets/icons/user.svg";
import users from "../../assets/icons/users.svg";
import {
  Container,
  Content,
  Icons,
  Icon,
  Buttons,
  ListaAlunos,
} from "./styles";
// import logo from "../../assets/logo.png";

export function Home() {
  const history = useHistory();

  async function handleReturn() {
    history.goBack();
  }

  const cliente = [
    {
      codigo: 1,
      nome: "Zé da Silva",
      telefone: "11 999999-9999",
      email: "zedasilva@gmail.com",
    },
    {
      codigo: 2,
      nome: "Zé da Silva",
      telefone: "11 999999-9999",
      email: "zedasilva@gmail.com",
    },
  ];

  return (
    <Container>
      <Content>
        <Icons>
          <Buttons>
            <button type="button" onClick={() => {}}>
              <Icon>
                <img src={user} alt="matricula" />
              </Icon>
                <p>MATRÍCULA</p>
            </button>
            <button type="button" onClick={() => {}}>
              <Icon>
                <img src={users} alt="alunos" />
              </Icon>
                <p>ALUNOS</p>
            </button>
            <button type="button" onClick={() => {}}>
              <Icon>
                <img src={aula} alt="aula" />
              </Icon>
                <p>AULA</p>
            </button>
            <button type="button" onClick={() => {}}>
              <Icon>
                <img src={dollar} alt="caixa" />
              </Icon>
                <p>CAIXA</p>
            </button>
            <button type="button" onClick={() => {}}>
              <Icon>
                <img src={printer} alt="print" />
              </Icon>
                <p>IMPRIMIR</p>
            </button>
            <button type="button" onClick={() => {}}>
              <Icon>
                <img src={search} alt="pesquisa" />
              </Icon>
                <p>PESQUISA</p>
            </button>
            <button type="button" onClick={() => {}}>
              <Icon>
                <img src={settings} alt="sistema" />
              </Icon>
                <p>SISTEMA</p>
            </button>
          </Buttons>
        </Icons>
        <ListaAlunos>
          {/* <table>
            <thead>
              <th>Código</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
            </thead>
            <tbody></tbody>
            <tr>
              <td>{cliente[0].codigo}</td>
              <td>{cliente[0].nome}</td>
              <td>{cliente[0].telefone}</td>
              <td>{cliente[0].email}</td>
            </tr>
            <tr>
              <td>{cliente[1].codigo}</td>
              <td>{cliente[1].nome}</td>
              <td>{cliente[1].telefone}</td>
              <td>{cliente[1].email}</td>
            </tr>
          </table> */}
        </ListaAlunos>
      </Content>
    </Container>
  );
}
