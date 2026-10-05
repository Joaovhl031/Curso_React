import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../template/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionsTypes } from '../../context/TaskContext/taskActions';

export function Settings() {
  useEffect(() =>{  
      document.title = 'Configurações - Chronos Pomodoro'
    }, [])

  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formError = []

    const workTime =  Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)){
      formError.push('Digite apenas números para TODOS os campos');
    }

    if (workTime < 1 || workTime > 99){
      formError.push('Digite um valor entre 1 ou 60 para o foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30){
      formError.push('Digite um valor entre 1 ou 30 para um descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 60){
      formError.push('Digite um valor entre 1 ou 60 para um descanso longo');
    }

    if (formError.length > 0){
      formError.forEach(error => {
        showMessage.error(error)
      })
      return;
    }
    dispatch({ type: TaskActionsTypes.CHANGE_SETTINGS, payload: {
      workTime,
      shortBreakTime,
      longBreakTime,
    },
  });
  showMessage.sucess('Configurações salvas')
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>Em breve...</p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='ShortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
