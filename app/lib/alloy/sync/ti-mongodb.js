/****
 * ti-mongodb.js
 * Custom Alloy Sync Adapter 
 * CRUD operation with REST API of a remote mongoDB server application.
 *
 * Copyright (c) 2013 Patrick De Marta
 * Licensed under the MIT license.
 */


/* The complete url set in beforeModelCreate from the model config
 *  with the collection name that the adapter will request for.
 */
var API_URL; 

// Override the Backbone.sync method with the following
module.exports.sync = function(method, model, options) {
	
	var payload = model.toJSON(),
		doc_id = payload._id,
		error;
	
	// to succesfully update mongoDB documents
	delete(payload._id);

	switch(method) {
		case 'read':
			if (doc_id) {
				http_request('GET', API_URL + doc_id, null, callback);
			}
			else {
				http_request('GET', API_URL, null, callback);
			}
			break;

		case 'create':
			http_request('POST', API_URL, payload, callback);
			break;

		case 'delete':
			if (doc_id) {
				http_request('DELETE', API_URL+'/'+doc_id, null, callback);
			}
			else {
				error = 'ERROR: Document does not have an ID!';
			}
			break;

		case 'update':
			if (doc_id) {
				http_request('PUT', API_URL+'/'+doc_id, payload, callback);
			}
			else {
				error = 'ERROR: Document does not have an ID!';
			}
			break;

		default :
			error = 'ERROR: Sync method not recognized!';
		};

		if (error) {
			options.error(model, error, options);
			Ti.API.error(error);
			model.trigger('error');
		}

		function callback(success, response, error) {
			res = JSON.parse(response);
			if (success) {
				options.success(res, JSON.stringify(res), options);
			} else {
				// Calls the default Backbone error callback
				// and invokes a custom callback if options.error was defined.
				var err = res.error || error;
				Ti.API.error('ERROR: ' + err);
				options.error(model, error, options);
				model.trigger('error');
			}
	};
};


function http_request(method, url, payload, callback) {
	var client = Ti.Network.createHTTPClient({
		onload: function(e) {
			if (callback) callback(true, this.responseText, null);
		},
		onerror: function(e) {
			if (callback) callback(false, this.responseText, e.error);
		},
		timeout : 5000
	});
	client.open(method, url);
	client.send(payload);
};



module.exports.beforeModelCreate = function(config, name) {
	config = config || {};
	if (config.adapter.base_url) {
		API_URL = config.adapter.base_url + "/" + config.adapter.collection_name;
	}
	return config;
};


module.exports.afterModelCreate = function(Model, name) {};

