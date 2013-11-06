var args = arguments[0] || {};
var timon = args.toJSON();
var model = args;
$.name.value = timon.name || 'No name';
$.superpowers	.value = timon.superpowers || 'No superpowers';

var dialogs = require('alloy/dialogs');

function closeMe(e) {
	$.detail.close();
}

function updateTimon(e) {
	dialogs.confirm({message: 'Are you sure you want to make changes?', callback: function() {
		model.save({name: $.name.value, superpowers: $.superpowers.value});
	}});
}

function deleteTimon(e) {
	dialogs.confirm({message: 'Are you sure you want to delete this Timon?', callback: function() {
		model.destroy({
			wait: true,
			success: function(mod, response, options) {
				$.detail.close(); // Close the window
			},
			error: function(mod, response, options) {
				alert(response);
			}
		});
	}});
}