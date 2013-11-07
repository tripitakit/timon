Alloy.Globals.docs.fetch({
	success: function(coll, res){
		Ti.API.info("Docs FETCHED : " + JSON.stringify(coll.models));
		setMasterData(coll.toJSON())
	},
	error: function(err, res){
		Ti.API.info("Docs FETCH ERROR ! " + err);
	}
});

function setMasterData(docs) {
	
	Ti.API.info("DOCS is " + JSON.stringify(docs));

	var data = [];
	_.each(docs, function(doc) {
		Ti.API.info("doc keys are " + Object.keys(doc));
		
		data.push(Alloy.createController('row', {
			_id: doc._id
		}).getView());
	});

	$.table.setData(data);

};

function openDetail(e) {
	Ti.API.info("TRIGGERING detail WITH e " + JSON.stringify(e));
	$.trigger('detail', e);
};

