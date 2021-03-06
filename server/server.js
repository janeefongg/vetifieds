let express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express(),
  logger = require('morgan'),
  dotenv = require('dotenv'),
  cookieParser = require('cookie-parser'),
  jwt = require('jsonwebtoken'),
  db = require('./db/db'),
  morgan = require('morgan'),
  moment = require('moment'),
  router = require('./router')

dotenv.load();

app.use(bodyParser.json({extended: false}));
app.use(cors());

app.set("env", process.env.NODE_ENV || "development");
app.set("host", process.env.HOST || "0.0.0.0");
app.set("port", process.env.PORT || 1337);

app.use(logger('dev'));

app.use(express.static('build'));

router(app, require('./controllers/controllers')).init();

app.listen(app.get('port'), function() {
  console.log('[' + moment().format('hh:mm:ss') + ']' + ' Express Server listening on port', app.get('port'));
});
