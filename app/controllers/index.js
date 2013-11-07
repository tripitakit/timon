// Listener for detaoils view
$.master.on('detail', function(e) {
	// get the detail controller and window references
	var controller = $.detail;
	var win = controller.getView();

	// get doc by _id
	Ti.API.info("CALLING DETAIL WITH e.row._id " + e.row._id)
	controller.createAttributeView(e.row._id);
});


$.index.open();