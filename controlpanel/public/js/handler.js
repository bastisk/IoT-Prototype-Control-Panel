startopenhab = function () {
    $.post("/openhab", { action: "start" }, function (data) {
        $('#console').append('\nstdout: ' + data.stdout);
        $('#console').append('\nsterr: ' + data.stderr);
        $('#console').append('error: ' + data.error);
    });
}
stopopenhab = function () {
    $.post("/openhab", { action: "stop" }, function (data) { 
        $('#console').append('stdout: ' + data.stdout);
        $('#console').append('sterr: ' + data.stderr);
        $('#console').append('error: ' + data.error);
    });
}

startvolume = function () {
    $.post("/volume", { action: "start" }, function (data) { 
        $('#console').append('stdout: ' + data.stdout);
        $('#console').append('sterr: ' + data.stderr);
        $('#console').append('error: ' + data.error);
    });
}

stopvolume = function () {
    $.post("/volume", { action: "stop" }, function (data) { 
        $('#console').append('stdout: ' + data.stdout);
        $('#console').append('sterr: ' + data.stderr);
        $('#console').append('error: ' + data.error);
    });
}
