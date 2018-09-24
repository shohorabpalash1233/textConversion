$(document).ready(function(){
    $("#textArea").keyup(function() {
        var text = $(this).val();

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
        $("#textArea").val(($("#textArea").val()).toUpperCase());
        str = $
    });

    $("#lowerCase").click(function() {
        $("#textArea").val(($("#textArea").val()).toLowerCase());
    });
});