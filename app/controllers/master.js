/*
 * master.js
 * List documents _id in a table,
 * triggers the 'detail' event to show doc's details 
 */ 

function refreshTable(){
	// fetch docs and set the master data
	Alloy.Globals.docs.fetch({

		success: function(collection){
			var data = [];
			_.each(collection.toJSON(), function(doc) {
				var row = Alloy.createController('row', { _id: doc._id }).getView();
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

refreshTable();	