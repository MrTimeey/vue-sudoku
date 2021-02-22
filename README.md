# Sudoku ![main](https://github.com/MrTimeey/vue-sudoku/workflows/main/badge.svg?branch=main)

Simple sudoku game build with vue.js, vuetify, vuex, vue-router and vue-i18n.
Used as a learning project for various technologies.

The game currently uses external libraries for grid generation and validation.

![game-preview](vue-sudoku.gif)

## Project setup
```shell
npm install
```

### Compiles and hot-reloads for development
```shell
npm run serve
```

### Build docker image and run
```shell
docker build . --tag sudoku:latest
docker run -d -p 8095:80 --name sudoku sudoku
```

### Build and run Docker-Compose
```shell
docker-compose up --build -d
```

### Run released version
Use release images: [Github-Packages](https://github.com/MrTimeey/vue-sudoku/packages/)