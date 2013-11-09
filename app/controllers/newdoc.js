
/**
 * Draw an action bar to show exit, add-field, save-documents buttons
 */
	$.actionBar = Ti.UI.createView({
		top:"40dp",
		layout:'horizontal',
		height:"30dp",
		backgroundColor:"#bcbcbc"
	});

	$.exitBtn = Ti.UI.createButton({
		title:"[ Exit ]",
		width: "33%",
	});
	$.exitBtn.addEventListener('click', function() {
		$.newdoc.close()
	});

	$.addFormfieldBtn = Ti.UI.createButton({
		title:"[ Add a field ]",
		width: "33%",
	});
	$.addFormfieldBtn.addEventListener('click', function() {
		$.doc.add(createFormfield());
	})

	$.saveDocdBtn = Ti.UI.createButton({
		title:"[ Save the document ]",
		width: "33%"
	});
	$.saveDocdBtn.addEventListener('click', function() {
		saveDocument();
	});

	$.actionBar.add($.exitBtn);
	$.actionBar.add($.addFormfieldBtn);
	$.actionBar.add($.saveDocdBtn);

	$.newdoc.add($.actionBar)
// the action bar is on stage now


// Title input
	$.doc_title = Ti.UI.createTextField({
			top:"20dp",
			width:"90%",
			hintText:"Give the document a title...",
			height:"40dp",
			font:{fontSize: 22, fontWeight:"bold"},
	}); 
	$.newdoc.add($.doc_title)


/**
 * The new document's ScrollView field container
 */
	$.doc = Ti.UI.createScrollView({
		layout:"vertical",
		showVerticalScrollIndicator: true,
	});
	// With the first empty field pre-dispalyed
	$.doc.add( createFormfield() );

	$.newdoc.add($.doc);
// Doc's Scrollview is on stage now


/****
 * Functions
 */ 

	// save the current document
	function saveDocument(){
		var payload = {
			_title_: $.doc_title.value,
		};
		// create a new model with the doc 
		var formFields = $.doc.children
		_.each(formFields, function(field){
			var key = field.children[1].value;
			var val = field.children[2].value;
			payload[key] = val;
		});
	
		var model = Alloy.createModel("docs");
		var dialog = require('alloy/dialogs');
		dialog.confirm({
			message: 'Confirm and save this document?',
			callback: function(){
				model.save(payload, {
					wait:true,
					success:function(model,response){
						// close this window
						$.newdoc.close();
					},
					error:function(model,response){
						model.destroy()
						alert("An error occurred while saving.\nDebug: "+ response);
						Ti.API.debug(response)
					}
				});
			}
		});
	}	

	// return a formField, with key/value textFields
	function createFormfield(){
		var self = Ti.UI.createView({
			top:"20dp",
			height:"40dp",
			width: "90%",
			backgroundColor:"#fff",
			layout:"horizontal"
		});
	
		var removeBtn = Ti.UI.createButton({
			top:"5dp",
			title:"[ X ]",
			width: "10%",
		});
		removeBtn.addEventListener('click', function(){
			$.doc.remove(this.parent)
		});
		self.add(removeBtn);
	
		var key_name = Ti.UI.createTextField({
			top:"10dp",
			width:"20%",
			hintText:"key"
		});
		self.add(key_name);

		var data = Ti.UI.createTextField({
			top:"10dp",
			width:"70%",
			hintText:"value"
		})
		self.add(data);
	
		return self;
	}