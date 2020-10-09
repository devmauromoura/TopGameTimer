import React, {useState, useEffect} from 'react';
import logo from './logotopgame.PNG';
import {
  Container,
  Logo,
  FormContainer,
  TimeUmInput,
  TimeDoisInput,
  ButtonSalvar
} from './styles';

function Config(Props) {
  useEffect(() => {
    document.title = "TOPGAME"
 }, []);

  const [TimeUm, setTimeUm] = useState("");
  const [TimeDois, setTimeDois] = useState("");

  const handleSave = () => {  
    const {history} = Props;
    localStorage.setItem('TimeUm', TimeUm);
    localStorage.setItem('TimeDois', TimeDois);
    history.push("/timer");
  }
  
  return (
    <Container>
      <Logo src={logo} />
      <FormContainer>
        <TimeUmInput placeholder="NOME DO TIME 1" onChange={e => setTimeUm(e.target.value)}/>
        <TimeDoisInput placeholder="NOME DO TIME 2" onChange={e => setTimeDois(e.target.value)}/>
        <ButtonSalvar onClick={() => handleSave()}>Salvar</ButtonSalvar>
      </FormContainer>
    </Container>
  );
}

export default Config;
