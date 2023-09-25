import './App.css';
import { ReactComponent as GithubLogo } from './svg/github-mark-white.svg'
import PageHeader from './PageHeader';
import PredictForm from './PredictForm';

function App() {
  return (
    <div className="app">
      <PageHeader />
      <div className="predict-form-container">
        <PredictForm />
      </div>
    </div>
  );
}

export default App;
