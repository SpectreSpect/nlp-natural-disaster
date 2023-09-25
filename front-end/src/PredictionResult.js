
function PredictionResult({result}) {
    return (
        <div className="prediction-result-container">
            {result.result == 'disaster' && 
            <div className='prediction-result prediction-result--disaster'>Disaster</div>}

            {result.result == 'not_disaster' && 
            <div className='prediction-result prediction-result--not_disaster'>Not a disaster</div>}
            
            
            <div className='prediction-clarification'>
                Model guess is: <span className='prediction-result--disaster'>
                { result.disaster }% disaster
                </span> and <span className='prediction-result--not_disaster'>{ result.not_disaster }% not a disaster</span>.
            </div>
        </div>
    );
}

export default PredictionResult;