sendcommand= function (item, action){
    $.post("/api/" + item, { action: action }, function (data) {
        $('#console').append('\nstdout: ' + data.stdout);
        $('#console').append('\nsterr: ' + data.stderr);
        $('#console').append('\nerror:' + data.error);
    });
}
