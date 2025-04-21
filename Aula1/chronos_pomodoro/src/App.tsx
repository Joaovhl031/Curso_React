import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

import './styles/global.css';
import './styles/theme.css';

import { useState } from 'react';

export function App() {
  const [numero, setNumber] = useState(0);

  function handClick() {
    //  setNumber(prevState => prevState +1);
     setNumber(1);
  }
  return (
    <>
     <Heading>
      Numero: {numero} 
     </Heading>
      <button onClick={handClick}>aumenta</button>
      <Container>
          <Logo />
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      <Container>
        <CountDown></CountDown>
      </Container>
      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>
              Nesse ciclo <strong>foque</strong> por <strong>25 min.</strong>
            </p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}
