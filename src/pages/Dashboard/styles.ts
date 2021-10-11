import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: gray;
display: flex;
align-items: center;
justify-content: center;
  `;
export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;
display: flex;
flex: 1;
justify-content: center;
align-items: center;
padding: 2.5rem 1rem;
`;
export const LogoContainer = styled.div`
width: 30%;
height: 50vh;
background-color: var(--secondary);
display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
align-items: center;
border-radius: 8px 0 0 8px;
p{
  color: var(--shape);
  font-size: 0.8rem;
  font-weight: bold;
}
/* box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04); */
/* max-width: 1120px;*/
`;
export const LoginContainer = styled.div`
width: 70%;
height: 50vh;
background-color: var(--primary);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0 8px 8px 0;
/* box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04); */
p{
  color: var(--shape);
  font-size: 1.5rem;
}
label{
  color: var(--shape);
  font-size: 2rem;
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
padding-top: 0.7rem;

button{
  font-size: 1.4rem;
  padding: 0.3rem 1.8rem;
  border-radius: 5px;
  margin: 50px 20px 0;
}
`;
export const LogoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-sizing: cover; */
  img{
    width: 200px;
  }
`;

