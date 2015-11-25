var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    exec("sudo /etc/init.d/openhab status", function (error, stdout, stderr) {
        var feedback = { stdout: stdout, stderr: stderr, error: error };
        var output = 'Error: Openhab is not running! You can try to <a href="/console?item=openhab&action=start"> start OpenHab</a>';
        if (feedback.stdout.indexOf('running') > -1) {
            running = true;
            output = 'OK! <a href="/openhab"> Visit OpenHab Page...';
        }
        res.render('index', { openhab: feedback, running: output});

    });
});

router.get('/console', function (req, res) {
        var action = req.query.action;
        var item = req.query.item;
        console.log(item, action);
        res.render('console', { log: { error: "", stdout: "", stderr: "" } });
});

router.get('/openhab', function (req, res) {
    res.render('openhab');
});

router.post('/console', function (req, res) {
    var command = req.body.command;
    exec(command, function (error, stdout, stderr) {
        res.render('console', { log: { error: error, stdout: stdout, stderr: stderr } });
    });

    
});

module.exports = router;