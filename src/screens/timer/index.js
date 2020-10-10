import React, { useState, useEffect } from 'react';
import logo from '../../assets/logotopgame.PNG';
import {
  Container,
  Logo,
  ContainerContador,
  Contador,
  ContainerTimeUm,
  NomeTimeUm,
  ContainerTimeDois,
  NomeTimeDois,
  ContainerTimes,
  Vs,
  CardM,
  CardS,
  CardText,
  CardSubText,
  ControlButtons,
  BStart,
  BReset
} from '../styles/styles';

function Timer(Props) {
  useEffect(() => {
    document.title = "TOPGAME"
  }, []);

  const TimeUm = localStorage.getItem('TimeUm');
  const TimeDois = localStorage.getItem('TimeDois');

  const [iniciado, setIniciado] = useState(false);
  const [pausado, setPausado] = useState(false);

  const handleStart = (start, resume, pause) => {
    if (!iniciado) {
      setIniciado(true);
      start();
    } else if (iniciado && !pausado) {
      setPausado(true);
      pause();
    } else {
      setPausado(false);
      resume();
    }
  }

  const handleReset = (reset, stop) => {
    setIniciado(false);
    setPausado(false);
    reset();
    stop();
  }

  return (
    <Container>
      <Logo src={logo} />
      <ContainerContador>
        <Contador
          initialTime={600000} //10 minutos.
          direction="backward" //Contagem regressiva.
          startImmediately={false} //Não inicia sozinho.
        >
          {({ start, resume, pause, stop, reset }) => (
            <React.Fragment>
              <CardM>
                <CardText>
                  <Contador.Minutes />
                </CardText>
                <CardSubText>
                  Minutos
                </CardSubText>
              </CardM>
              <CardS>
                <CardText>
                  <Contador.Seconds />
                </CardText>
                <CardSubText>
                  Segundos
                </CardSubText>
              </CardS>
              <ControlButtons>
                <BStart onClick={() => handleStart(start, resume, pause)}>{!iniciado ? "INICIAR" : iniciado && !pausado ? "PAUSAR" : "RETOMAR"}</BStart>
                <BReset onClick={() => handleReset(reset, stop)}>RESETAR</BReset>
              </ControlButtons>
            </React.Fragment>
          )}
        </Contador>
      </ContainerContador>
      {
        //Caso nenhum dos times seja informado
        //Não será exibo o VS.
        TimeUm.length > 0 &&
          TimeDois.length > 0 ? (
            <ContainerTimes>
              <ContainerTimeUm>
                <NomeTimeUm>{TimeUm}</NomeTimeUm>
              </ContainerTimeUm>
              <Vs>vs</Vs>
              <ContainerTimeDois>
                <NomeTimeDois>{TimeDois}</NomeTimeDois>
              </ContainerTimeDois>
            </ContainerTimes>
          ) : null
      }
    </Container>
  );
}

export default Timer;
