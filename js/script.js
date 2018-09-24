$(document).ready(function(){
    $("#textArea").keyup(function() {
        var text = $(this).text();

        // Words Count
        var numberOfWord = 0;
        var textString = text.replace(/\s/g,' ').split(' ');
        for (i = 0; i < textString.length; i++) { 
            if (textString[i].length > 0) {
                numberOfWord++;
            }
        }
        $("#word_count").html(numberOfWord);


        // Character Count
        var numberOfChar = text.length;
        $("#char_count").html(numberOfChar);
    });

    $("#upperCase").click(function() {
        $("#textArea").text(($("#textArea").text()).toUpperCase());
    });

    $("#lowerCase").click(function() {
        $("#textArea").text(($("#textArea").text()).toLowerCase());
    });

    $("#clearCase").click(function() {
        $("#textArea").text("");
        $("#word_count").html("0");
        $("#char_count").html("0");
    });

    $("#sentenceCase").click(function(){
        var str = $('#textArea').text();
        $('#textArea').text(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
    });

    $("#titleCase").click(function() {
        var str = $('#textArea').text();
        new_str = str.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
            return txtVal.toUpperCase();
        });
        $('#textArea').text(new_str);
    });
});