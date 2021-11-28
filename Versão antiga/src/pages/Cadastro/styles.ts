import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: rgb(0,0,0,0.8);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  `;
export const Content = styled.div`
max-width: 1000px;
width: 60vw;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem;
border-radius: 8px;

background-color: var(--bg_cadastro);
box-shadow: 0 2px 8px rgba(255, 255, 255,0.4);
`;
export const CadastroContainer = styled.div`
width: 100%;
/* height: 50vh; */
background-color: var(--bg_frame);
border-radius: 8px;
display: flex;
/* flex: 1; */
justify-content: center;
align-items: center;
padding: 3rem;

`;
export const Inputs = styled.div`
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
p{
  color: var(--shape);
  font-size: 1.2rem;
}
label{
  width: 4rem;
  color: var(--secondary);
  font-size: 1.2rem;
}
`;
export const Input = styled.div`
padding: 0.7rem;
display: flex;
align-items: center;
justify-content: right;

input{
  height: 1.8rem;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
}
`;
export const Buttons = styled.div`
width: 30%;
background-color: var(--bg_frame);
display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
align-items: flex-end;
border-radius:  0 8px 8px 0;

padding-top: 0.7rem;

button{
  background-color: var(--bg_cadastro);
  color: var(--shape);
  width: 7rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  margin: 8px;
}
`;

export const ListaAlunos = styled.div`
width: 100%;
height: 30vh;
background-color: var(--bg_frame);
display: flex;
justify-content: center;
align-items: flex-start;
border-radius: 8px;
margin-top: 1rem;
padding-top: 1rem;
table{
  width: 90%;
  text-align: center;
  border: 1px solid #000000;
};
th{
  border: 1px solid #000000;
}
td{
  padding: 8px 0;
}

`;