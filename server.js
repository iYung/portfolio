var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Achievement = require('./models/achievement');
var User = require('./models/user');
var Home = require('./models/home');
var Project = require('./models/project');
var Education = require('./models/education');
var Experience = require('./models/experience');

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

//------------------------------------------------------------------------------
//user
router.route('/user')
    .post(function(req, res) {
        User.findOne({
            __v: 0
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user == null) {
                var newUser = new User();
                newUser.username = req.body.username;
                newUser.password = req.body.password;
                newUser.save(function(err) {
                    if (err)
                        return res.send(err);
                    res.json({ message: 'New user saved!' });
                });
            }else{ return res.send("Admin has already been created."); }
        });
    })
    .get(function(req, res) {
        User.findOne({
            __v: 0
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user == null) {
                return res.json({ message: 'No user found!' });
            }else{ return res.json(user); }
        });
    })
    .put(function(req, res) {
        User.findOne({
            __v: 0
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user == null){
                return res.send("User data not found.");
            } else {  
                user.username = req.body.username;
                user.password = req.body.password;
                user.save(function(err) {
                    if (err)
                        return res.send(err);
                    res.json({ message: 'New user data saved!' });
                });
            }
        });
    })
    .delete(function(req, res) {
        User.remove({
            __v: 0
        }, function(err, experience) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted all users' });
        });
    });

//------------------------------------------------------------------------------
//home
router.route('/home')
    .post(function(req, res) {
        Home.findOne({
            __v: 0
        },function(err, home) {
            if (err)
                return res.send(err);
            if (home == null) {
                var newHome = new Home();
                newHome.title = req.body.title;
                newHome.image = req.body.image;
                newHome.text = req.body.text;
                newHome.save(function(err) {
                    if (err)
                        return res.send(err);
                    res.json({ message: 'Home page data created!' });
                });
            } else { return res.json({ message: 'Home page data not found!' }); }
        });
    })
    .put(function(req, res) {
        Home.findOne({
            __v: 0
        },function(err, home) {
            if (err)
                return res.send(err);
            if (home == null){
                return res.send("Homepage data not found.");
            } else {  
                home.title = req.body.title;
                home.image = req.body.image;
                home.text = req.body.text;
                home.save(function(err) {
                    if (err)
                        return res.send(err);
                    res.json({ message: 'New home page data saved!' });
                });
            }
        });
    })
    .get(function(req, res) {
        Home.find({
            __v: 0
        },function(err, home) {
            if (err)
                return res.send(err);
            if (home == null){
                return res.json({ message: 'Home page data not found!' });
            } else {
                return res.json(home);
            }
        });
    })
    .delete(function(req, res) {
        Home.remove({
            __v: 0
        }, function(err, achievement) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted home page data!'});
        });
    });

//------------------------------------------------------------------------------
//education
router.route('/education')
    .get(function(req, res) {
        Education.find({
            __v: 0
        },function(err, educations) {
            if (err)
                return res.send(err);
            res.json(educations);
        });
    })
    .delete(function(req, res) {
        Education.remove({
            __v: 0
        }, function(err, education) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted all education posts' });
        });
    })
    .post(function(req, res) {
        var education = new Education();     
        education.name = req.body.name;
        education.date = req.body.date;
        education.text = req.body.text;
        education.save(function(err) {
            if (err)
                return res.send(err);
            res.json({ message: 'Education post created!' });
        });
    });
//find and edit a education
router.route('/education/:id')
    .put(function(req, res) {
        Education.findById(req.params.id, function(err, education) {
            if (education == null) {
                return res.send("Cannot find education post with id " + req.params.id);
            }else{
                education.name = req.body.name;
                education.date = req.body.date;
                education.text = req.body.text;
                education.save(function(err) {
                    if (err)
                        return res.send(err);
                });
                return res.send(education.name + " edited!");
            }
        });
    })
    .get(function(req, res) {
        Education.findById(req.params.id, function(err, education) {
            if (education == null) {
                return res.send("Cannot find education post with id " + req.params.id);
            }else{
                return res.json(education);
            }
        });
    })
    .delete(function(req, res) {
        Education.remove({
            _id: req.params.id
        }, function(err, education) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted ' + req.params.id});
        });
    });

//------------------------------------------------------------------------------
//experience
router.route('/experience')
    .get(function(req, res) {
        Experience.find({
            __v: 0
        },function(err, experiences) {
            if (err)
                return res.send(err);
            res.json(experiences);
        });
    })
    .delete(function(req, res) {
        Experience.remove({
            __v: 0
        }, function(err, experience) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted all experience posts' });
        });
    })
    .post(function(req, res) {
        var experience = new Experience();     
        experience.name = req.body.name;
        experience.date = req.body.date;
        experience.text = req.body.text;
        experience.save(function(err) {
            if (err)
                return res.send(err);
            res.json({ message: 'Experience post created!' });
        });
    });
//find and edit a experience
router.route('/experience/:id')
    .put(function(req, res) {
        Experience.findById(req.params.id, function(err, experience) {
            if (experience == null) {
                return res.send("Cannot find experience post with id " + req.params.id);
            }else{
                experience.name = req.body.name;
                experience.date = req.body.date;
                experience.text = req.body.text;
                experience.save(function(err) {
                    if (err)
                        return res.send(err);
                });
                return res.send(experience.name + " edited!");
            }
        });
    })
    .get(function(req, res) {
        Experience.findById(req.params.id, function(err, experience) {
            if (experience == null) {
                return res.send("Cannot find experience post with id " + req.params.id);
            }else{
                return res.json(experience);
            }
        });
    })
    .delete(function(req, res) {
        Experience.remove({
            _id: req.params.id
        }, function(err, experience) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted ' + req.params.id});
        });
    });

//------------------------------------------------------------------------------
//projects
router.route('/projects')
    .get(function(req, res) {
        Project.find({
            __v: 0
        },function(err, projects) {
            if (err)
                return res.send(err);
            res.json(projects);
        });
    })
    .delete(function(req, res) {
        Project.remove({
            __v: 0
        }, function(err, project) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted all projects' });
        });
    });
//create project
router.route('/project/new/:year')
    .post(function(req, res) {
        var project = new Project();     
        project.name = req.body.name;
        project.date = req.body.date;
        project.text = req.body.text;
        project.img = req.body.img;
        project.devpost = req.body.devpost;
        project.github = req.body.github;
        project.year = req.params.year;
        project.save(function(err) {
            if (err)
                return res.send(err);
            res.json({ message: 'Project created!' });
        });
    });
//get projects by year
router.route('/projects/:year')
    .get(function(req, res) {
        Project.find({
            year: req.params.year
        },function(err, projects) {
            if (err)
                return res.send(err);
            res.json(projects);
        });
    });
//find and edit a project
router.route('/project/:id')
    .put(function(req, res) {
        Project.findById(req.params.id, function(err, project) {
            if (project == null) {
                return res.send("Cannot find project with id " + req.params.id);
            }else{
                project.name = req.body.name;
                project.date = req.body.date;
                project.text = req.body.text;
                project.img = req.body.img;
                project.devpost = req.body.devpost;
                project.github = req.body.github;
                project.save(function(err) {
                    if (err)
                        return res.send(err);
                });
                return res.send(project.name + " edited!");
            }
        });
    })
    .get(function(req, res) {
        Project.findById(req.params.id, function(err, project) {
            if (project == null) {
                return res.send("Cannot find project with id " + req.params.id);
            }else{
                return res.json(project);
            }
        });
    })
    .delete(function(req, res) {
        Project.remove({
            _id: req.params.id
        }, function(err, project) {
            if (err)
                return res.send(err);
            res.json({ message: 'Successfully deleted ' + req.params.id});
        });
    });

//------------------------------------------------------------------------------
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