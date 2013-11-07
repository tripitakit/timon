exports.definition = {

	config: {
	    	adapter: {
			type: "ti-mongodb",
			collection_name: "timons",
			base_url: "http://192.168.1.100:3000/timons/"
		}
	},
	

	extendModel: function(Model) {
		_.extend(Model.prototype, {
			
			idAttribute : "_id",
			
			validate: function(attrs) {
				// add here validation for single attributes returning errors 
			}
		});
		return Model;
	},
	

	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		return Collection;
	}

};


