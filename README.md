
# NLP natural disaster

[![Docker](https://img.shields.io/badge/Docker-%231D63ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![CSS3](https://img.shields.io/badge/CSS-%23214CE5?logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)
[![HRML5](https://img.shields.io/badge/HTML5-%23E44D26?logo=HTML5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7E018?logo=javascript&logoColor=white)](https://en.wikipedia.org/wiki/JavaScript)
[![ReactJS](https://img.shields.io/badge/ReactJS-%2311C8E8?logo=react&logoColor=white)](https://react.dev/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF9300?logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![Python](https://img.shields.io/badge/Python-%233572A5?logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-grey?logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.3.x/)
[![Git](https://img.shields.io/badge/Git-%23EA330E?logo=git&logoColor=white)](https://git-scm.com/)
[![TensorFlowServing](https://img.shields.io/badge/TensorFlow%2Fserving-%23F0910E?logo=tensorflow&logoColor=white)](https://www.tensorflow.org/tfx/guide/serving)

This project is a website that allows you to classify your text, whether it's about a natural disaster or not.

To classify a text a machine learning model is used, more specifically a reccurent neural network. The model is made using python and [TensorFlow](https://www.tensorflow.org/) library.
Data, used to train the model was taken from Kaggle, specifically from the [Natural Language Processing with Disaster Tweets](https://www.kaggle.com/competitions/nlp-getting-started/data) competition.

The website is made using two libraries: [React](https://react.dev/) for front-end and [Flask](https://flask.palletsprojects.com/en/2.3.x/) for back-end.

[Docker](https://www.docker.com/) and [TensorFlow/serving](https://www.tensorflow.org/tfx/guide/serving) was used to deploy the model.

# Running Locally

In order to run the project locally, you need to enter the commands below. For that
you have to open three instances of a terminal that you will use. 
Each instance will be associated with back-end, front-end or tensorflow/serving model. 

> **Note**
> 
> In the following commands the path to the project that you've just cloned will be indicated by ``[project dir]``.
> 
> **Example**
> 
> Assume that you cloned this project to this directory:
> ```shell
> C:\Projects\
> ```
>  Then ``[project dir]`` is:
> ```shell
> C:\Projects\nlp-natural-disaster\
> ```
> So if the command, that you need to enter is:
> ```shell
> cd [project dir]
> ```
> Then you should enter:
> ```shell
> cd C:\Projects\nlp-natural-disaster\
> ```

### Terminal instance #1 (back-end)
Make sure that you have [python](https://www.python.org/downloads/release/python-3115/) installed.
```shell
cd [project dir]
```
```shell
python -m venv venv
```
> **Important**
> 
> Windows Powershell:
> ```shell
> venv\Scripts\activate.ps1
> ```
>
> Windows Command Prompt:
> ```shell
> venv\Scripts\activate
> ```
```shell
pip install -r requirements.txt
```
```shell
cd back-end
```
```shell
python server.py -d
```

### Terminal instance #2 (front-end)
Make sure that you have [node.js](https://nodejs.org/en) installed.
```shell
cd [project dir]
```
```shell
cd front-end
```
```shell
npm install
```
```shell
npm start
```
### Terminal instance #3 (tensorflow/serving)
Make sure that you have [Docker](https://www.docker.com/) installed and running.
> **Note**
>
> ``[project dir]`` in this command should be substituted by you project directory path.
```shell
docker run --rm -it -v [project dir]\tensorflow-model\models:/models -p 8605:8605 --entrypoint /bin/bash tensorflow/serving
```
```shell
tensorflow_model_server --rest_api_port=8605 --model_name=nlp_natural_disaster --model_base_path=/models/
```
Your app should now be running on [localhost:4000](http://localhost:4000/).

# Techonlogies used

These are all the technologies that was used during creation of this project:

> **Languages**
>
> [![JavaScript](https://img.shields.io/badge/JavaScript-%23F7E018?logo=javascript&logoColor=white)](https://en.wikipedia.org/wiki/JavaScript)
> [![Python](https://img.shields.io/badge/Python-%233572A5?logo=python&logoColor=white)](https://www.python.org/)
> [![HRML5](https://img.shields.io/badge/HTML5-%23E44D26?logo=HTML5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
> [![CSS3](https://img.shields.io/badge/CSS-%23214CE5?logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)


> **Frameworks/Libraries**
>
> [![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF9300?logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
> [![Flask](https://img.shields.io/badge/Flask-grey?logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.3.x/)
> [![ReactJS](https://img.shields.io/badge/ReactJS-%2311C8E8?logo=react&logoColor=white)](https://react.dev/)



> **Other**
>
> [![TensorFlowServing](https://img.shields.io/badge/TensorFlow%2Fserving-%23F0910E?logo=tensorflow&logoColor=white)](https://www.tensorflow.org/tfx/guide/serving)
> [![Docker](https://img.shields.io/badge/Docker-%231D63ED?logo=docker&logoColor=white)](https://www.docker.com/)
> [![Git](https://img.shields.io/badge/Git-%23EA330E?logo=git&logoColor=white)](https://git-scm.com/)

# Preview
Here is how application looks like when you run it:
![app_preview](https://github.com/SpectreSpect/nlp-natural-disaster/assets/52841087/25cd1fc0-7c4a-4dcc-90c0-b3e69b12d2d7)


