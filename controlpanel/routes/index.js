var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/openhab', function (req, res) {
    if (req.body.action == "start") {
        exec("sudo /etc/init.d/openhab start", function (error, stdout, stderr) { 
            res.send({ stdout: stdout, stderr: stderr, error: error });
        });
    }
    if (req.body.action == "stop") {
        exec("sudo /etc/init.d/openhab stop", function (error, stdout, stderr) {
            res.send({ stdout: stdout, stderr: stderr, error: error });
        });
    }
    if (req.body.action == "status") {
        exec("sudo /etc/init.d/openhab status", function (error, stdout, stderr) {
            res.send({ stdout: stdout, stderr: stderr, error: error });
        });
    }
});

router.post('/volume', function (req, res) {
    if (req.body.action == "start") {
        exec("sudo /etc/init.d/volumesensor start", function (error, stdout, stderr) {
            res.send({ stdout: stdout, stderr: stderr, error: error });
        });
    }
    if (req.body.action == "stop") {
        exec("sudo /etc/init.d/volumesensor stop", function (error, stdout, stderr) {
            res.send({ stdout: stdout, stderr: stderr, error: error });
        });
    }
    if (req.body.action == "status") {
        exec("sudo /etc/init.d/volumesensor status", function (error, stdout, stderr) {
            res.send({ stdout: stdout, stderr: stderr, error: error });
        });
    }
});

module.exports = router;