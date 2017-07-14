var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Achievement = require('./models/achievement');

mongoose.connect('mongodb://admin:password@ds117889.mlab.com:17889/portfolio');

var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log('req made');
  next();
});

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

//achievements
router.route('/achievements')

    .post(function(req, res) {
        var achievement = new Achievement();     
        achievement.name = req.body.name;
        achievement.date = req.body.date;
        achievement.text = req.body.text;
        achievement.year = req.body.year;
        achievement.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Achievement created!' });
        });
    })
    
    .delete(function(req, res) {
        Achievement.remove({
            __v: 0
        }, function(err, chord) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted all achievements' });
        });
    });
    
router.route('/achievements/2016')

    .get(function(req, res) {
        Achievement.find(function(err, achievements) {
            if (err)
                res.send(err);
            res.json(achievements);
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);