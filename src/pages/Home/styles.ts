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
background-color: var(--bg_home);
box-shadow: 0 2px 8px rgba(255, 255, 255,0.4);
`;
export const Icons = styled.div`
/* height: 120px; */
width: 100%;
display: flex;
flex-direction: rows;
justify-content: center;
align-items: flex-start;
`;
export const Buttons = styled.div`
width: 100%;
background-color: var(--bg_frame);
display: flex;
/* flex-direction: column; */
flex: 1;
justify-content: space-around;
align-items: flex-start;
padding: 15px;
border-radius:  8px;

padding-top: 0.7rem;

button{
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius:  8px;
  background-color: var(--icon);


  p{
    font-weight: bold;
    font-size: 10px;
    padding-top: 5px;
  }
}
`;

export const Icon = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
  img{
  width: 2rem;
  height: 2rem;
  };
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