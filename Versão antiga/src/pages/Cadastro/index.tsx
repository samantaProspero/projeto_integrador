import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Content,
  CadastroContainer,
  Inputs,
  Input,
  Buttons,
  ListaAlunos,
} from "./styles";
// import logo from "../../assets/logo.png";

export function Cadastro() {
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
        <CadastroContainer>
          <Inputs>
            <Input>
              <label>Código: </label>
              <input placeholder="Código" />
            </Input>
            <Input>
              <label>Nome:</label>
              <input placeholder="Digite o nome" />
            </Input>
            <Input>
              <label>Fone:</label>
              <input placeholder="Digite o telefone" />
            </Input>
            <Input>
              <label>Email:</label>
              <input placeholder="Digite e email" />
            </Input>
          </Inputs>
          <Buttons>
            <button type="button" onClick={() => {}}>
              Novo
            </button>
            <button type="button" onClick={() => {}}>
              Limpar
            </button>
            <button type="button" onClick={() => {}}>
              Apagar
            </button>
            <button type="button" onClick={handleReturn}>
              Sair
            </button>
          </Buttons>
        </CadastroContainer>
        <ListaAlunos>
          <table>
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
          </table>
        </ListaAlunos>
      </Content>
    </Container>
  );
}
