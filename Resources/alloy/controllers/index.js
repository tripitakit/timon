function Controller() {
    function __alloyId22() {
        __alloyId22.opts || {};
        var models = __alloyId21.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId19 = models[i];
            __alloyId19.__transform = {};
            var __alloyId20 = Ti.UI.createTableViewRow({
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                title: "undefined" != typeof __alloyId19.__transform["name"] ? __alloyId19.__transform["name"] : __alloyId19.get("name"),
                color: "black"
            });
            rows.push(__alloyId20);
            showTimon ? __alloyId20.addEventListener("click", showTimon) : __defers["__alloyId20!click!showTimon"] = true;
        }
        $.__views.__alloyId17.setData(rows);
    }
    function showTimon(e) {
        var timon = timons.at(e.index);
        var detail = Alloy.createController("detail", timon).getView();
        detail.open();
    }
    function addTimon() {
        var add = Alloy.createController("add").getView();
        add.open();
    }
    function refreshTable() {
        timons.fetch();
    }
    function loadExtras() {
        $.index.activity.onCreateOptionsMenu = function(e) {
            var menu = e.menu;
            var addItem = menu.add({
                title: "Add",
                icon: "ic_menu_add.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            });
            addItem.addEventListener("click", addTimon);
            var refreshItem = menu.add({
                title: "Refresh",
                icon: "ic_menu_refresh.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            });
            refreshItem.addEventListener("click", refreshTable);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("timons");
    $.__views.index = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "My Timons",
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    loadExtras ? $.__views.index.addEventListener("open", loadExtras) : __defers["$.__views.index!open!loadExtras"] = true;
    $.__views.__alloyId17 = Ti.UI.createTableView({
        top: "40dp",
        id: "__alloyId17"
    });
    $.__views.index.add($.__views.__alloyId17);
    var __alloyId21 = Alloy.Collections["timons"] || timons;
    __alloyId21.on("fetch destroy change add remove reset", __alloyId22);
    refreshTable ? $.__views.__alloyId17.addEventListener("dragEnd", refreshTable) : __defers["$.__views.__alloyId17!dragEnd!refreshTable"] = true;
    exports.destroy = function() {
        __alloyId21.off("fetch destroy change add remove reset", __alloyId22);
    };
    _.extend($, $.__views);
    var timons = Alloy.Collections.timons;
    timons.fetch();
    $.index.open();
    __defers["$.__views.index!open!loadExtras"] && $.__views.index.addEventListener("open", loadExtras);
    __defers["$.__views.__alloyId16!click!addTimon"] && $.__views.__alloyId16.addEventListener("click", addTimon);
    __defers["__alloyId20!click!showTimon"] && __alloyId20.addEventListener("click", showTimon);
    __defers["$.__views.__alloyId17!dragEnd!refreshTable"] && $.__views.__alloyId17.addEventListener("dragEnd", refreshTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;