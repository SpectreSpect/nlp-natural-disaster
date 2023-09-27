import './App.css';
import { ReactComponent as GithubLogo } from './svg/github-mark-white.svg'
import PageHeader from './PageHeader';
import PredictForm from './PredictForm';
import PredictionResult from './PredictionResult';
import React, { useState } from "react";

function App() {
  const [result, set_result] = useState({'result': 'no_result',
                                         'not_disaster': 0,
                                         'disaster': 0});
  const [is_loading, set_is_loading] = useState(false);

  return (
    <div className="app">
      <PageHeader />
      <div className="predict-form-container">
        <PredictForm set_result={ set_result } set_is_loading={ set_is_loading } />
      </div>
      <PredictionResult result={ result } is_loading={ is_loading } />
    </div>
  );
}

export default App;
