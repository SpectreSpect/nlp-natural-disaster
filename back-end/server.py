from flask import Flask, request

app = Flask(__name__, static_folder='build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/predict')
def predict():
    return {'predictioon': [[0.1, 0.2]]}


@app.route('/test')
def get_test_data():
    return {
        'Name':'geek',
        'Age':'22',
        'Date':'test date',
        'programming':'python'
        }


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80,debug=True)
