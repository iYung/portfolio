var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Achievement = require('./models/achievement');
var User = require('./models/user');

mongoose.connect('mongodb://admin:password@ds117889.mlab.com:17889/portfolio');

var port = 3000;

//allow CORS
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

//user
router.route('/user')
    .post(function(req, res) {
        User.findOne({
            __v: 0
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user == null) {
                return res.send("Admin creation.");
            }else{ return res.send("Admin has already been created."); }
        });
    });
    
//achievements
router.route('/achievements')
    .get(function(req, res) {
        Achievement.find({
            __v: 0
        },function(err, achievements) {
            if (err)
                return res.send(err);
            res.json(achievements);
        });
    })
    .delete(function(req, res) {
        Achievement.remove({
            __v: 0
        }, function(err, achievement) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted all achievements' });
        });
    });
//get achievements by year
router.route('/achievements/:year')
    .get(function(req, res) {
        Achievement.find({
            year: req.params.year
        },function(err, achievements) {
            if (err)
                return res.send(err);
            res.json(achievements);
        });
    });
//create achievement
router.route('/achievement/new/:year')
    .post(function(req, res) {
        var achievement = new Achievement();     
        achievement.name = req.body.name;
        achievement.date = req.body.date;
        achievement.text = req.body.text;
        achievement.year = req.params.year;
        achievement.save(function(err) {
            if (err)
                return res.send(err);
            res.json({ message: 'Achievement created!' });
        });
    });
//find and edit a achievement
router.route('/achievement/:id')
    .put(function(req, res) {
        Achievement.findById(req.params.id, function(err, achievement) {
            if (achievement == null) {
                return res.send("Cannot find achievement with id " + req.params.id);
            }else{
                achievement.name = req.body.name;
                achievement.date = req.body.date;
                achievement.text = req.body.text;
                achievement.save(function(err) {
                    if (err)
                        return res.send(err);
                });
                return res.send(achievement.name + " edited!");
            }
        });
    })
    .get(function(req, res) {
        Achievement.findById(req.params.id, function(err, achievement) {
            if (achievement == null) {
                return res.send("Cannot find achievement with id " + req.params.id);
            }else{
                return res.json(achievement);
            }
        });
    })
    .delete(function(req, res) {
        Achievement.remove({
            _id: req.params.id
        }, function(err, achievement) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted ' + req.params.id});
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);