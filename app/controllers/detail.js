exports.createAttributeView = function(_id) {
	
	Ti.API.info("createAttributeView called with _id = " + _id);
	
	var doc = Alloy.Globals.docs.where({_id:_id});
	
	var factory = function(attribute) {
		var self = Ti.UI.createView({
			top: "20dp",
			width:Ti.UI.SIZE,
			height: Ti.UI.SIZE,
			layout: "horizontal"
		});
	
		var keyLabel = Ti.UI.createLabel({
			width:Ti.UI.SIZE,
			text: attribute + " : "
		});
	
		var valueLabel = Ti.UI.createLabel({
			width:Ti.UI.SIZE,
			text: doc[attribute],
		});
	
		self.add(keyLabel);
		self.add(valueLabel);

		return self;
	};
	
	for (attribute in doc.attributes) {
		$[attribute] = factory(attribute);
		$.detail.add($[attribute]);	
	}
};
















