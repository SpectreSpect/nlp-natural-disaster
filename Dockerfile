FROM node:current-alpine3.17 as build-step
WORKDIR /app
COPY /front-end/node_modules node_modules/
COPY /front-end/package.json .
COPY /front-end/package-lock.json .
COPY /front-end/src src/
COPY /front-end/public public/
RUN npm install
RUN npm run build

FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip
WORKDIR /app
COPY --from=build-step /app/build build/
COPY /back-end/ .
COPY requirements.txt .
RUN python3 -m pip install -U pip
RUN pip install wheel setuptools pip --upgrade
RUN pip install --upgrade setuptools
RUN pip install -r requirements.txt

EXPOSE 80

CMD ["python3", "server.py"]