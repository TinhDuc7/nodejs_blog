const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = 2000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
      extended: true,
    }),
)
app.use(express.json());
// XHLHttpRequest, fetch, axios,...  các thư viện có thể dùng tạo request

// //HTTP logger
app.use(morgan('combined'));

// //Template engine
app.engine(
    'hbs',
    exphbs.engine({
      extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(__dirname);
// console.log('PATH:', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  // console.log(`Example app listening on port at http://localhost:${port}`);
});
