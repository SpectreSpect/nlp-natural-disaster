import React, { useState } from "react";

const handle_prediction_submit = (e, input_text, set_result, set_is_loading) => {
  e.preventDefault();
  set_is_loading(true);

  const request_options = {
    method: 'POST',
    body: JSON.stringify({"text": input_text})
  }
  
  fetch('/api/predict', request_options)
  .then((res) => res.json()
  .then((data) => {
    set_result(data);
    set_is_loading(false);
  }))
}

function PredictForm({set_result, set_is_loading}) {
  const [input_text, set_input_text] = useState('');

  return (
      <form className="predict-form" onSubmit={(e) => handle_prediction_submit(e, input_text, 
                                                                                set_result, 
                                                                                set_is_loading)}>
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