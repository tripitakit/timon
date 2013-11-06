function Controller() {
    function closeMe() {
        $.detail.close();
    }
    function updateTimon() {
        dialogs.confirm({
            message: "Are you sure you want to make changes?",
            callback: function() {
                model.save({
                    name: $.name.value,
                    superpowers: $.superpowers.value
                });
            }
        });
    }
    function deleteTimon() {
        dialogs.confirm({
            message: "Are you sure you want to delete this Timon?",
            callback: function() {
                model.destroy({
                    wait: true,
                    success: function() {
                        $.detail.close();
                    },
                    error: function(mod, response) {
                        alert(response);
                    }
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "Timon Details",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    closeMe ? $.__views.detail.addEventListener("androidbackbutton", closeMe) : __defers["$.__views.detail!androidbackbutton!closeMe"] = true;
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "Close",
        id: "__alloyId6"
    });
    closeMe ? $.__views.__alloyId6.addEventListener("click", closeMe) : __defers["$.__views.__alloyId6!click!closeMe"] = true;
    $.__views.detail.rightNavButton = $.__views.__alloyId6;
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Name:",
        id: "__alloyId7"
    });
    $.__views.detail.add($.__views.__alloyId7);
    $.__views.name = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "name"
    });
    $.__views.detail.add($.__views.name);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Superpowers:",
        id: "__alloyId8"
    });
    $.__views.detail.add($.__views.__alloyId8);
    $.__views.superpowers = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "superpowers"
    });
    $.__views.detail.add($.__views.superpowers);
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "Save Edits",
        id: "__alloyId9"
    });
    $.__views.detail.add($.__views.__alloyId9);
    updateTimon ? $.__views.__alloyId9.addEventListener("click", updateTimon) : __defers["$.__views.__alloyId9!click!updateTimon"] = true;
    $.__views.__alloyId10 = Ti.UI.createButton({
        title: "Remove",
        id: "__alloyId10"
    });
    $.__views.detail.add($.__views.__alloyId10);
    deleteTimon ? $.__views.__alloyId10.addEventListener("click", deleteTimon) : __defers["$.__views.__alloyId10!click!deleteTimon"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var timon = args.toJSON();
    var model = args;
    $.name.value = timon.name || "No name";
    $.superpowers.value = timon.superpowers || "No superpowers";
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.detail!androidbackbutton!closeMe"] && $.__views.detail.addEventListener("androidbackbutton", closeMe);
    __defers["$.__views.__alloyId6!click!closeMe"] && $.__views.__alloyId6.addEventListener("click", closeMe);
    __defers["$.__views.__alloyId9!click!updateTimon"] && $.__views.__alloyId9.addEventListener("click", updateTimon);
    __defers["$.__views.__alloyId10!click!deleteTimon"] && $.__views.__alloyId10.addEventListener("click", deleteTimon);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;