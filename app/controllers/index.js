/*
 * index.js
 * Listen for 'detail' event triggered in master 
 * to show document's data in detail win
 */

$.master.on('detail', function(e) {
	var controller = $.detail;
	//var win = controller.getView();
	controller.createAttributeView(e.row._id);
});

$.index.open();