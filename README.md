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

In order to start the project in the development mode, you need to enter the commands below. For that
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
Enter these commands to start back-end local server:
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
Enter these commands to start fron-end local server:
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
Enter these commands to start the ML model using tensorflow/serving image:
> **Note**
>
> [project dir] in this command should be substituted by you project directory path.
```shell
docker run --rm -it -v [project dir]\tensorflow-model\models:/models -p 8605:8605 --entrypoint /bin/bash tensorflow/serving
```
```shell
tensorflow_model_server --rest_api_port=8605 --model_name=nlp_natural_disaster --model_base_path=/models/
```
### Open the application
To open the application you need to go to http://localhost:4000 url.

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
