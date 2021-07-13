# Welcome to Performance Analytics API 👋

## ℹ️ Small Info

I create a REST API with NodeJS, ExpressJS and MongoDB for [Performance Analytics JS](https://github.com/selinoykunergiz/perf-js). You can use [MongoDB Cloud Atlas](https://www.mongodb.com/cloud/atlas).

## ✨ Demo

You can view live from Heroku page: https://oyku-perf-api.herokuapp.com/

## 🚀 Usage

First of all, you can install with NPM or YARN

```js
npm install
```

After that:

```js
npm start
```

Thats all, project will start working your localhost with 8080 port.

## 🚀 REST API Usage

Send Data:
```js
POST /api/analytics
```

```js
BODY {url, ttfb, fcp, domLoad, windowLoad}
```

Get Data by x minute (dafult 30 min):
```js
GET /api/analytics/getByMin/:min
```

Get Data between dates:
```js
POST /api/analytics/getByDate
```

```js
BODY {start, end}
```

## 🗄️ ENV File

You can insert DB connection info to ENV file.

## 👧 Author

- Github: [@selinoykunergiz](https://github.com/selinoykunergiz)

