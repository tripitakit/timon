var args = arguments[0] || {};

Ti.API.info("ROW Controller called with " + JSON.stringify(args));

$.row._id = $._id.text = args._id;

