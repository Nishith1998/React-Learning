import './App.css';
import { Dashboard } from './components/Layout/Dashboard';
import { Card } from './components/UI/Card/Card';

function App() {
  return (
    <Card className='justify-center items-center'>
      <Dashboard />
    </Card>
  );
}

export default App;
