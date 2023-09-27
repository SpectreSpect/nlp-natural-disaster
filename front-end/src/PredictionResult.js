
function PredictionResult({result, is_loading}) {
    return (
        <div className="prediction-result-container">
            
            {
                is_loading &&
                <div className='loading_text'>Loading...</div>
            }

            {
                !is_loading &&
                result.result == 'no_result' &&
                <div className='prediction-result prediction-result--no_result'>No result</div>
            }

            {
                !is_loading &&
                result.result == 'disaster' && 
                <div className='prediction-result prediction-result--disaster'>Disaster</div>
            }

            {
                !is_loading &&
                result.result == 'not_disaster' && 
                <div className='prediction-result prediction-result--not_disaster'>Not a disaster</div>
            }
            
            {
                !is_loading &&
                result.result != 'no_result' &&
                <div className='prediction-clarification'>
                    Model guess is: <span className='prediction-result--disaster'>
                    { result.disaster }% disaster
                    </span> and <span className='prediction-result--not_disaster'>{ result.not_disaster }% not a disaster</span>.
                </div>
            }
            
            {
                !is_loading &&
                result.result == 'no_result' &&
                <div className='prediction-clarification'>
                    Enter a text and click the "predict" button to get model's predictions.
                </div>
            }
        </div>
    );
}

export default PredictionResult;