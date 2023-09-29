import argparse
from flask import Flask, request
import json
import pickle
import requests
from keras.preprocessing.text import Tokenizer

parser = argparse.ArgumentParser()

parser.add_argument("-d", "--debug", action=argparse.BooleanOptionalAction, help="Enable debug mode")
args = parser.parse_args()

tokenizer = Tokenizer()
app = Flask(__name__, static_folder='build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/predict', methods=['POST'])
def predict():
    data = json.loads(request.get_data().decode(encoding='ascii'))
    text = data['text']
    
    sequences = tokenizer.texts_to_sequences([text])
    
    model_ip = ''
    if app.debug == True:
        model_ip = 'localhost'
    else:
        model_ip = '175.75.0.7'
    
    data_to_send = json.dumps({'instances': sequences})
    predict_url = f'http://{model_ip}:8605/v1/models/nlp_natural_disaster:predict'
    r = requests.post(predict_url, data=data_to_send) 
    predictions = r.json()['predictions'][0]
    
    result = 'disaster'
    if predictions[0] >= 0.5:
        result = 'not_disaster'
    
    parsed_predictions = [round(p * 100.0, 1) for p in predictions]
    
    return {'result': result,
            'not_disaster': parsed_predictions[0],
            'disaster': parsed_predictions[1]}


@app.route('/api/test')
def get_test_data():
    return 'The server is working!'


if __name__ == "__main__":
    with open('tokenizer/tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)
    app.run(host="0.0.0.0", port=80,debug=args.debug)
