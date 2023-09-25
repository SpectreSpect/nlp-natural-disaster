
function PredictForm() {
    return (
        <form className="predict-form">
          <label className="input-text-label">Input text</label>
          <textarea className="input-textarea" placeholder="Enter a text..."></textarea>
          <button className="predict-button">Predict</button>
        </form>
    );
}

export default PredictForm;