exports.createAttributeView = function(_id) {
	
	// find the doc by _id
	var doc = Alloy.Globals.docs.where({_id:_id})[0].toJSON();
	
	var attributes_keys = _.keys(doc).sort(function(a, b) {
		return a - b;
	});
	
	$.data_box &&  $.detail.remove($.data_box);
	
	var factory = function(attribute) {
		var self = Ti.UI.createView({
			top: "10dp",
			left: "10dp",
			width:Ti.UI.FILL,
			height: Ti.UI.SIZE,
			layout: "horizontal"
		});
		var keyLabel = Ti.UI.createLabel({
			width:Ti.UI.SIZE,
			font: {
				fontSize:"15dp",
				fontWeight:"bold"
			},
			text: attribute+": "
		});
		var valueLabel = Ti.UI.createLabel({
			width:Ti.UI.SIZE,
			text: doc[attribute],
		});
		self.add(keyLabel);
		self.add(valueLabel);
		return self;
	};
	
	$.data_box = Ti.UI.createView({
		top:"60dp",
		layout:"vertical",
		left:"20dp",
		backgroundColor: "#fff",
		width:"90%",
		height:Ti.UI.SIZE
		
	});
	
	for (var i=0; i<attributes_keys.length; i++) {
		var attribute = attributes_keys[i];
		Ti.API.info("ATTRIBUTE IS " + attribute);
		// add new data
		$[attribute] = factory(attribute)
		$.data_box.add($[attribute]);
	}
	
	$.detail.add($.data_box);

};














