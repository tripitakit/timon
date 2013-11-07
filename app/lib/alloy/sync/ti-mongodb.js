/*
 * ti-mongodb.js
 * 
 * Copyright (c) 2013 Patrick De Marta
 * Licensed under the MIT license.
 */

var BASE_URL; // set in beforeModelCreate from the model config

// Override the Backbone.sync method with the following
module.exports.sync = function(method, model, options) {
	
	var payload = model.toJSON();
	var doc_id = payload._id;
	delete(payload._id); // or mongo db will complain for its presence in update
	var error;

	switch(method) {
		case 'read':
			if (doc_id) {
				http_request('GET', BASE_URL + doc_id, null, callback);
			}
			else {
				http_request('GET', BASE_URL, null, callback);
			}
			break;

		case 'create':
			http_request('POST', BASE_URL, payload, callback);
			break;

		case 'delete':
			if (doc_id) {
				http_request('DELETE', BASE_URL + doc_id, null, callback);
			}
			else {
				error = 'ERROR: Model does not have an ID!';
			}
			break;

		case 'update':
			if (doc_id) {
				http_request('PUT', BASE_URL + doc_id, payload, callback);
			}
			else {
				error = 'ERROR: Model does not have an ID!';
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
		BASE_URL = config.adapter.base_url;
	}
	return config;
};


module.exports.afterModelCreate = function(Model, name) {};

