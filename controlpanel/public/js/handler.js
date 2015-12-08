document.getElementById("startopenhab").onclick = startopenhab;
document.getElementById("stopopenhab").onclick = stopopenhab;
document.getElementById("startvolume").onclick = startvolume;
document.getElementById("stopvolume").onclick = stopvolume;
document.getElementById("shutdown").onclick = shutdown;
function startopenhab() {
    $.post("/api/openhab", { action: "start" }, function (data) {
        $('#console').append('\nstdout: ' + data.stdout);
        $('#console').append('\nsterr: ' + data.stderr);
        $('#console').append('\nerror:' + data.error);
    });
}

function stopopenhab() {
    $.post("/api/openhab", { action: "stop" }, function (data) {
        $('#console').append('\nstdout: ' + data.stdout);
        $('#console').append('\nsterr: ' + data.stderr);
        $('#console').append('\nerror:' + data.error);
    });
}

function shutdown() {
    $.post("/api/power", { action: "shutdown" }, function (data) {
        $('#console').append('\nstdout: ' + data.stdout);
        $('#console').append('\nsterr: ' + data.stderr);
        $('#console').append('\nerror:' + data.error);
    });
}
function startvolume() {
    $.post("/api/volume", { action: "start" }, function (data) {
        $('#console').append('\nstdout: ' + data.stdout);
        $('#console').append('\nsterr: ' + data.stderr);
        $('#console').append('\nerror:' + data.error);
    });
}

function stopvolume() {
    $.post("/api/volume", { action: "stop" }, function (data) {
        $('#console').append('\nstdout: ' + data.stdout);
        $('#console').append('\nsterr: ' + data.stderr);
        $('#console').append('\nerror:' + data.error);
    });
}