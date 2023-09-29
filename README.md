# NLP natural disaster
This project is a website that allows you to classify your text, whether it's about a natural disaster or not.

To classify a text a machine learning model is used, more specifically a reccurent neural network. The model is made using python and [TensorFlow](https://www.tensorflow.org/) library.
Data, used to train the model was taken from Kaggle, specifically from the [Natural Language Processing with Disaster Tweets](https://www.kaggle.com/competitions/nlp-getting-started/data) competition.

The website is made using two libraries: [React](https://react.dev/) for front-end and [Flask](https://flask.palletsprojects.com/en/2.3.x/) for back-end.

[Docker](https://www.docker.com/) and [TensorFlow/serving](https://www.tensorflow.org/tfx/guide/serving) was used to deploy the model.

# Pet project

This project is a pet project that is created only for practicing, learning and demonstrating my skills. Here are technologies that was used to create this project:

Languages:
* Python
* JavaScript
* HTML
* CSS

Libraries:
* TensorFlow (python)
* Flask (python)
* React (js, html, css)

Other:
* TensorFlow/serving
* Docker
* Git

Skills that was used to create this project:
* Ability to create a natural language processing models that can analyze a text and classify it.
* Ability to create a simple website using React as front-end and Flask as back-end.
* Ability to deploy a model on a site, allowing users to enter input data (text) and get subsequent model predictions.
* Ability to work with Docker.
* Ability to deploy a model and a website on a remote server.

# Installation

First, you need to download the project. Then open project directory in the terminal and enter the next command:

CHECK THIS COMMAND AGAIN
```python
python -m venv venv
```

After that you need to enter this:
```python
pip install -r requirements.txt
```
Now you have a virtual envorinment with all required packages installed. The next thing that you need to do is to open in the same
terminal the [project directory]/back-end directory and then enter this command:
```shell
python server.py
```
The back-end server is now running. Now, open another instance of a terminal in the [project directory]/front-end and enter this:
```shell
npm start
```
Now front-end is working, you can visit the website that you've just launched going to localhost:4000 url.
The last thing that we have to do is to start the machine learning model, that will classify text input.
In order to do that you need to pull the tensorflow/serving docker image. To do that, simply enter this command in the terminal:
```docker
docker pull tensorflow/serving
```
Now that you have the tensorflow/serving image installed, you need to enter the following command in the terminal:
```docker
docker run --rm -it -v [path to the model]:/models -p 8605:8605 --entrypoint /bin/bash tensorflow/serving
```
The tensorflow/serving container shell should be opened in the terminal. Now enter this command:
```tensorflow/serving
tensorflow_model_server --rest_api_port=8605 --model_name=nlp_natural_disaster --model_base_path=/models/
```
The model is running now.

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
