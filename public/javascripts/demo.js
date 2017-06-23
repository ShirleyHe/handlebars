$(document).ready(function() {
    showDaduiHelper();
});

function showDaduiHelper() {
    // console.log("/dadui/queryAll");
    $.get("/dadui/queryAll", function(result) {
        var data = {daduis:result};
        var source = $("#tableList_template").html();
        var template = Handlebars.compile(source);
        // console.log(data);
        $("#tableList").html(template(data));
        // testHandlebars();
    });
}