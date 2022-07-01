$(".submit").click(function() {
	$(".enter").hide();
    $(".redo, .end").show();
    let name= $(".name-input").val();
    let age = $(".age-input").val();
    let time= $(".time-input").val();
    $(".end").text(name+ ", you will be " +(2050-age)+ " in the year 2050. By that time, you will have spent " +(time*10220)+ " hours online.");
});

$(".redo").click(function() {
    $(".enter").show();
    $(".end, .redo").hide();
    $(".name-input, .age-input, .time-input").val("");
});