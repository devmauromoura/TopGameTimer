import styled from 'styled-components';
import Timer from 'react-compound-timer';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    padding: 10px;
    height: 100vh;
`;

export const Logo = styled.img`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 200px;
`;

export const ContainerContador = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const Contador = styled(Timer)`
  
`;

export const CardM = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #008000;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;

`;
export const CardText = styled.h1`
    font-size: 80px;
    color: #ffffff;
`;

export const CardSubText = styled.h1`
    font-size: 30px;
    color: #ffffff;
    margin-top: -40px;
`;

export const CardS = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #00b300;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
`;


export const ContainerTimes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerTimeUm = styled.div`
    margin-right: 10px;
`;
export const NomeTimeUm = styled.h3`
    font-size: 30px;
    color: #ffffff;
`;

export const Vs = styled.h3`
    font-size: 30px;
    color: #FF0000;
`;

export const ContainerTimeDois = styled.div`
    margin-left: 10px;
`;
export const NomeTimeDois = styled.h3`
    font-size: 30px;
    color: #ffffff;
`;



export const FormContainer = styled.div`
    display: flex; 
    flex-direction: column;
`;

export const TimeUmInput = styled.input`
    width: 500px;
    height: 30px;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const TimeDoisInput = styled.input`
    width: 500px;
    height: 30px;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const ButtonSalvar=  styled.button`
    width: 506px;
    height: 40px;
    font-size: 20px;
`;

export const ControlButtons  = styled.div`
    position: absolute;
    bottom: 0;
    right: 10;
    left: 10;
`;

export const BStart  = styled.text`
    font-size: 20px;
    color: #ffffff;
    margin-right: 20px;
    background-color: #008000;
    border-radius: 5px; 
    padding: 5px;
`;

export const BReset  = styled.text`
    font-size: 20px;
    color: #ffffff;
    background: #FF0000;
    border-radius: 5px; 
    padding: 5px;
`;

