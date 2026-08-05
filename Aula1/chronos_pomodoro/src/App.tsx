import { Home } from './pages/Home';

import './styles/global.css';
import './styles/theme.css';
import { TaskContextProvider } from './context/TaskContext/taskContextProvider';

export function App() {
  return (
  <TaskContextProvider>
    <Home />
  </TaskContextProvider>
)}
