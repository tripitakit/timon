exports.definition = {
    config: {
        adapter: {
            type: "mongodb",
            collection_name: "timons",
            base_url: "http://192.168.1.100:3000/timons/"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            idAttribute: "_id"
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("timons", exports.definition, []);

collection = Alloy.C("timons", exports.definition, model);

exports.Model = model;

exports.Collection = collection;