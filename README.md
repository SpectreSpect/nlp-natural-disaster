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

In order to install this project first you have to download the project using git. To do that you need to copy this link:
![image](https://github.com/SpectreSpect/nlp-natural-disaster/assets/52841087/b15d91e2-ab5d-475f-a145-c765f0985e23)
Then you need to open a terminal and go to the folder where you are going to put this project. The you need to write the following command using 
the link you have just copied:

```shell
git clode https://github.com/SpectreSpect/nlp-natural-disaster.git
```
After that the project will be downloaded in the previously chosen folder.

In order to open this project for development it is good to open this folder in some text editor (VScode, sublime text, etc). I personally use VSCode.
To start the project for development you need to open in the terminal a folder called "front-end" and write the following command:
```shell
npm start
```
It will start the react server, which is a front-end of the application. The website should be open automatically. If it didn't you can open it manually
by opening the following url in your browser:
```url
http://localhost:4000/
```

Now we need to start the back-end server. In order to do that you need to open another tab in your terminal (or just open another instans of the ternimal) and then go to the back-end folder
that is located in the main folder of the project. Then you need to enter the following command:
```py
python server.py
```

The next step is to start the model for server to be able to send requests to it. For that you need to have Docker installed.
Then you need to pull the tensorflow/serving image. You can do that by entering the following command in the terminal:
```docker
docker pull tensorflow/serving
```

Then you need to create a ...

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
