import './App.css';
import { ReactComponent as GithubLogo } from './svg/github-mark-white.svg'
import PageHeader from './PageHeader';
import PredictForm from './PredictForm';
import PredictionResult from './PredictionResult';

function App() {
  return (
    <div className="app">
      <PageHeader />
      <div className="predict-form-container">
        <PredictForm />
      </div>  
      <PredictionResult />
    </div>
  );
}

export default App;
