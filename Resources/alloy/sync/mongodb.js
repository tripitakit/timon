function http_request(method, url, payload, callback) {
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            callback && callback(true, this.responseText, null);
        },
        onerror: function(e) {
            callback && callback(false, this.responseText, e.error);
        },
        timeout: 5e3
    });
    client.open(method, url);
    client.send(payload);
}

var BASE_URL = "http://192.168.1.100:3000/";

module.exports.sync = function(method, model, options) {
    function callback(success, response, error) {
        res = JSON.parse(response);
        if (success) options.success(res, JSON.stringify(res), options); else {
            var err = res.error || error;
            Ti.API.error("ERROR: " + err);
            options.error(model, error, options);
            model.trigger("error");
        }
    }
    var payload = model.toJSON();
    var error;
    switch (method) {
      case "read":
        payload[model.idAttribute] ? http_request("GET", BASE_URL + payload[model.idAttribute], null, callback) : http_request("GET", BASE_URL, null, callback);
        break;

      case "create":
        payload.name ? http_request("POST", BASE_URL, {
            name: payload.name
        }, callback) : error = "ERROR: Cannot create model without an author or title!";
        break;

      case "delete":
        payload[model.idAttribute] ? http_request("DELETE", BASE_URL + payload[model.idAttribute], null, callback) : error = "ERROR: Model does not have an ID!";
        break;

      case "update":
        payload[model.idAttribute] ? http_request("PUT", BASE_URL + payload[model.idAttribute], {
            name: payload.name
        }, callback) : error = "ERROR: Model does not have an ID!";
        break;

      default:
        error = "ERROR: Sync method not recognized!";
    }
    if (error) {
        options.error(model, error, options);
        Ti.API.error(error);
        model.trigger("error");
    }
};

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    config.adapter.base_url && (BASE_URL = config.adapter.base_url);
    return config;
};

module.exports.afterModelCreate = function() {};