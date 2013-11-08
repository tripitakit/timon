/**
 * docs.js
 * 
 * No need to define a columns obejct in the the model config.
 * Define collection name as the name of mongoDB collection to use.
 */

exports.definition = {

	config: {
	    	adapter: {
			type: "ti-mongodb",
			collection_name: "docs",
			base_url: "http://192.168.1.100:3000"
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


