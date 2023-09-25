import React, { useState } from "react";

const handle_prediction_submit = (e, input_text, set_result) => {
  e.preventDefault();

  const request_options = {
    method: 'POST',
    body: JSON.stringify({"text": input_text})
  }
  
  fetch('/api/predict', request_options)
  .then((res) => res.json()
  .then((data) => {
    set_result(data)
  }))
}

function PredictForm({set_result}) {
  const [input_text, set_input_text] = useState('');

  return (
      <form className="predict-form" onSubmit={(e) => handle_prediction_submit(e, input_text, set_result)}>
        <label className="input-text-label">Input text</label>
        <textarea required
          className="input-textarea"
          placeholder="Enter a text..."
          value={input_text}
          onChange={(e) => set_input_text(e.target.value)}></textarea>
        <button className="predict-button">Predict</button>
      </form>
  );
}

export default PredictForm;