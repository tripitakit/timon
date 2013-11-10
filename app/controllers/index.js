/*
 * index.js
 * Listen for 'detail' event triggered in master 
 * to show document's data in detail win
 */
'use strict'

$.master.on('detail', function(e) {
	var controller = $.detail;
	controller.createAttributeView(e.row._id);
});

$.master.on('cleandetail', function() {
	var controller = $.detail;
	controller.cleanDataBox();
});

$.index.addEventListener('focus', function(){
	var controller = $.master;
	controller.refreshTable();
})

$.index.open();