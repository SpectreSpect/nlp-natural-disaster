
function PredictionResult() {
    return (
        <div className="prediction-result-container">
            <div className='prediction-result prediction-result--not_disaster'>Not a disaster</div>
            {/* <div className='prediction-result prediction-result--disaster'>Disaster</div> */}
            <div className='prediction-clarification'>
                Model guess is: <span className='prediction-result--disaster'>
                25% disaster
                </span> and <span className='prediction-result--not_disaster'>40% not a disaster</span>.
            </div>
        </div>
    );
}

export default PredictionResult;