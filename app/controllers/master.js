/*
 * master.js
 * List documents _id in a table,
 * triggers the 'detail' event to show doc's details 
 */ 

var header = Alloy.createController('header').getView();
$.table.setHeaderView(header)

var refreshTable = function() {
	// fetch docs and set the master data
	Alloy.Globals.docs.fetch({
		success: function(collection){
			var data = [];
			_.each(collection.toJSON(), function(doc) {
				var row = Alloy.createController('row', { _id: doc._id, _title_:doc._title_}).getView();
				data.push(row);
			});
			$.table.setData(data);
		},
		error: function(err, res){
			Ti.API.debug(err)
		}
	});
};


function openDetail(e) {
	$.trigger('detail', e);
};


function deleteDoc(e){
	
	var dialog = Ti.UI.createAlertDialog({
	    cancel: 1,
	    buttonNames: ['Confirm', 'Cancel'],
	    message: 'Would you like to delete the document?',
	    title: 'Delete'
	  });
	  dialog.addEventListener('click', function(e){
	    if (e.index === e.source.cancel){
			refreshTable();
	    } else if (e.index === 0) {
			var model = Alloy.Globals.docs.where({_id:e.row._id})[0];
			model.destroy({
				wait: true,
				success: function(mod, response, options) {
					// clean data-box in detail win
					$.trigger("cleandetail")
				},
				error: function(mod, response, options) {
					alert(response);
				}
			});
	    }
	  });
	  dialog.show();
};

exports.refreshTable = refreshTable;


