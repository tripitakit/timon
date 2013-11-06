function Controller() {
    function closeMe() {
        $.add.close();
    }
    function saveTimon() {
        dialogs.confirm({
            message: "Are you sure you want to save?",
            callback: function() {
                Alloy.Collections.timons.create({
                    title: $.name.value,
                    author: $.superpowers.value
                }, {
                    wait: true,
                    success: function(model, response) {
                        var message = "Successfully created " + response.name + " with the following superpowers:" + response.superpowers + " !";
                        alert(message);
                        $.name.value = $.superpowers.value = "";
                    },
                    error: function(model, response) {
                        alert(response);
                    }
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.add = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "Add a Timon",
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    closeMe ? $.__views.add.addEventListener("androidbackbutton", closeMe) : __defers["$.__views.add!androidbackbutton!closeMe"] = true;
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Close",
        id: "__alloyId1"
    });
    closeMe ? $.__views.__alloyId1.addEventListener("click", closeMe) : __defers["$.__views.__alloyId1!click!closeMe"] = true;
    $.__views.add.rightNavButton = $.__views.__alloyId1;
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Name:",
        id: "__alloyId2"
    });
    $.__views.add.add($.__views.__alloyId2);
    $.__views.name = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "name",
        width: "200dp"
    });
    $.__views.add.add($.__views.name);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "SuperPowers:",
        id: "__alloyId3"
    });
    $.__views.add.add($.__views.__alloyId3);
    $.__views.superpowers = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "superpowers",
        width: "200dp"
    });
    $.__views.add.add($.__views.superpowers);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Save",
        id: "__alloyId4"
    });
    $.__views.add.add($.__views.__alloyId4);
    saveTimon ? $.__views.__alloyId4.addEventListener("click", saveTimon) : __defers["$.__views.__alloyId4!click!saveTimon"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.add!androidbackbutton!closeMe"] && $.__views.add.addEventListener("androidbackbutton", closeMe);
    __defers["$.__views.__alloyId1!click!closeMe"] && $.__views.__alloyId1.addEventListener("click", closeMe);
    __defers["$.__views.__alloyId4!click!saveTimon"] && $.__views.__alloyId4.addEventListener("click", saveTimon);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;