import { useHistory } from "react-router-dom";

import {
  Container,
  Content,
  LogoContainer,
  LoginContainer,
  Input,
  Buttons,
  LogoImg,
} from "./styles";
import logo from "../../assets/logo.png";

export function Dashboard() {
  const history = useHistory();

  async function handleCadastro() {
    // if (!user) {
    //   await signInWithGoogle();
    // }

    history.push("/cadastro");
  }

  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoImg>
            <img src={logo} alt="logo" />
          </LogoImg>
          <p>ESCOLA D LIONS KUNG FU</p>
        </LogoContainer>
        <LoginContainer>
          <Input>
            <label>Login : </label>
            <input placeholder="Login" />
          </Input>
          <Input>
            <label>Senha:</label>
            <input placeholder="Digite sua senha" />
          </Input>
          <Buttons>
            <button type="button" onClick={handleCadastro}>
              Login
            </button>
            <button type="button" onClick={()=> {}}>
              Sair
            </button>
          </Buttons>
        </LoginContainer>
      </Content>
    </Container>
  );
}
