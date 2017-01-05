
var fname;
var lname;
var joliObj = new Object();

$('input').bind('keyup', function(e) {
	if (e.which !== 13) {
		id = $(this).attr('id');
		input = $(this).val();
	}
	else if (e.which == 13){
		$('input').each(function(){
			tId = $(this).attr('id');
			tInput = $(this).val();

			if (tInput.length > 0){
				joliObj[tId] = tInput;
				console.log(tInput + " " + input)
				console.log(joliObj);
			}
			else {
				console.log('rien');
			}
		}
		)
	}
});

$('button').click(function(){
	$('#username').html(joliObj.first_name + " " + joliObj.last_name);
	console.log(joliObj);
})

