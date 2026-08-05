
import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import styles from './styles.module.css';


export function CountDown() {
  const taskContext = useTaskContext();
  console.log('taskContext', taskContext);

  return <div className={styles.container}>00:00</div>;
}
