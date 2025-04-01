import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';

import './styles/global.css';
import './styles/theme.css';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
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
              labelText='Task:'
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
