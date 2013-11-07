Alloy.Globals.docs.fetch({
	success: function(coll, res){
		Ti.API.info("Docs FETCHED : " + JSON.stringify(coll.models));
		setMasterData(coll.models)
	},
	error: function(err, res){
		Ti.API.info("Docs FETCH ERROR ! " + err);
	}
});

function setMasterData(docs) {
	
	Ti.API.info("DOCS is " + JSON.stringify(docs));

	var data = [];
	_.each(docs, function(doc, i) {
		Ti.API.info("doc keys are " + Object.keys(doc));
		
		data.push(Alloy.createController('row', {
			_id: doc.attributes._id
		}).getView());
	});

	$.table.setData(data);

};

function openDetail(e) {
	Ti.API.info("TRIGGERING detail WITH e " + JSON.stringify(e));
	$.trigger('detail', e);
};

