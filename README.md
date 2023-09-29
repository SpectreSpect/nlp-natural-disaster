
# NLP natural disaster

[![Docker](https://img.shields.io/badge/Docker-%231D63ED?logo=docker&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![CSS3](https://img.shields.io/badge/CSS-%23214CE5?logo=css3&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![HRML5](https://img.shields.io/badge/HTML5-%23E44D26?logo=HTML5&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7E018?logo=javascript&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![ReactJS](https://img.shields.io/badge/ReactJS-%2311C8E8?logo=react&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF9300?logo=tensorflow&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![Python](https://img.shields.io/badge/Python-%233572A5?logo=python&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![Flask](https://img.shields.io/badge/Flask-grey?logo=flask&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![Git](https://img.shields.io/badge/Git-%23EA330E?logo=git&logoColor=white)](https://www.python.org/downloads/release/python-3115/)
[![TensorFlowServing](https://img.shields.io/badge/TensorFlow%2Fserving-%23F0910E?logo=tensorflow&logoColor=white)](https://www.python.org/downloads/release/python-3115/)

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
> In the following commands the path to the project that you've just cloned will be indicated by [project dir].
> 
> **Example**
> 
> Assume that you cloned this project to this directory:
> ```shell
> C:\Projects\
> ```
>  Then [project dir] is:
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
> [project dir] in this command should be substituted by you project directory path.
```shell
docker run --rm -it -v [project dir]\tensorflow-model\models:/models -p 8605:8605 --entrypoint /bin/bash tensorflow/serving
```
```shell
tensorflow_model_server --rest_api_port=8605 --model_name=nlp_natural_disaster --model_base_path=/models/
```
Your app should now be running on [localhost:4000](http://localhost:4000/).

# Techonlogies used

These are all the technologies that was used during creation of this project:

* Languages
   - Python
   - JavaScript
   - HTML
   - CSS
* Frameworks/Libraries
   - TensorFlow
   - Flask
   - React
* Other
   - Docker
   - TensorFlow/serving
   - Git

# Preview
This is what you will see once you ran the application:

![image](https://github.com/SpectreSpect/nlp-natural-disaster/assets/52841087/a5c350b5-82e2-44da-895d-ab13109e3468)

Let's enter some text for the model to anylize:

![image](https://github.com/SpectreSpect/nlp-natural-disaster/assets/52841087/ff3ff15a-5c11-42b6-b958-ffeb30c9205f)

After you click the "predict" button, the website will send a request to the model to analyze the entered text and return results. Let's try it:
![image](https://github.com/SpectreSpect/nlp-natural-disaster/assets/52841087/314dd991-ad1d-4c44-8266-449a07fd6ed3)
As you can see, the model thinks that the text "Everyone loves cats!" is not a text about natural disasters (which is correct, as you understand), hence the green text "not a disaster". 
Below the green text you can see more concrete information about the model prediction, specifically, the model is 46.8% sure that this text is about a disaster and 53.2% that it's not about a disaster.

Now let's try to use another prompt:
![image](https://github.com/SpectreSpect/nlp-natural-disaster/assets/52841087/2afd9ee4-ef78-49ad-8eb2-0d1c54395ea1)
Now, as you can see, the model thinks that this text is about a natural disaster, which is also correct.
