import './App.css';
import { ReactComponent as GithubLogo } from './svg/github-mark-white.svg'
import PageHeader from './PageHeader';
import PredictForm from './PredictForm';
import PredictionResult from './PredictionResult';
import React, { useState } from "react";

function App() {
  const [result, set_result] = useState({'result': 'not_disaster',
                                         'not_disaster': 0,
                                         'disaster': 0});

  return (
    <div className="app">
      <PageHeader />
      <div className="predict-form-container">
        <PredictForm set_result={ set_result } />
      </div>
      <PredictionResult result={ result } />
    </div>
  );
}

export default App;
