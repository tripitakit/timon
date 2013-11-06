var dialogs = require('alloy/dialogs');

function closeMe(e) {
	$.add.close();
}

function saveTimon(e) {
	dialogs.confirm({message: 'Are you sure you want to save?', callback: function() {
		Alloy.Collections.timons.create(
			{
				title: $.name.value,
				author: $.superpowers.value
			},
			{
				wait: true,
				success: function(model, response, options) {
					var message = 'Successfully created '  + response.name + ' with the following superpowers:' + response.superpowers + ' !'
					alert(message);
					$.name.value = $.superpowers.value = ''; 
				},
				error: function(model, response, options) {
					alert(response);
				}
			}
		);
	}});
}