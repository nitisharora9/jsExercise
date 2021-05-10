class DataGroup {
  constructor(options) {
    this.divID = options.divID;
    this.dataGroup = options.dataGroup;
    this.selectAll = options.selectAll;
  }
  
  init() {
    this.createDataGroup();
    this.selectAllClickEvent();
  }

  createDataGroup() {
    debugger;
    var rowDiv = $("<div class = 'row'></div>");
    

    for(var index=0; index<this.dataGroup.length; index++) {
      var currentGroup = this.dataGroup[index];

      var colDiv = $("<div class = 'column'></div>");
      rowDiv.append(colDiv);

      var fieldSet = $("<fieldset></fieldset>");
      colDiv.append(fieldSet);

      var legend = $('<legend><input type = "checkbox" id ="'+ currentGroup.id +'" class = "data_group">'+ currentGroup.name +'</legend>');
      fieldSet.append(legend);
      
      for(var fieldIndex=0; fieldIndex<currentGroup.fields.length; fieldIndex++){
        var field = $('<label for="'+ currentGroup.fields[fieldIndex].id + '">'+ currentGroup.fields[fieldIndex].name +'</label><input type="text" id="'+ currentGroup.fields[fieldIndex].id +'" name="'+ currentGroup.fields[fieldIndex].id +'"><br><br>');
        fieldSet.append(field);
      }

      $('#'+this.divID).append(rowDiv);
      
    }
  }

  selectAllClickEvent() {
    var _this = this;
    $('#'+_this.selectAll.id).click(function() {
      if($(this).prop("checked")) {
        $(".data_group").prop("checked", true);
      } 
      
      else {
        $(".data_group").prop("checked", false);
      }                
    });

    $('.data_group').click(function() {
      if($(this).prop("checked") == false) {
        $("#"+_this.selectAll.id).prop("checked", false);
      }
    })
  }
}

var options = {
	divID: 'content',
  dataGroup : [
		{
			id:'dataGroup1',
			name:'Data Group 1',
			fields :[
				{
					id:'field1',
					name:'Field 1'
				},

        {
          id:'field2',
					name:'Field 2'
        },

        {
          id:'field3',
					name:'Field 3'
        }
			]
		},

    {
			id:'dataGroup2',
			name:'Data Group 2',
			fields :[
				{
					id:'field4',
					name:'Field 4'
				},

        {
          id:'field5',
					name:'Field 5'
        },

        {
          id:'field6',
					name:'Field 6'
        }
			]
		},

    {
			id:'dataGroup3',
			name:'Data Group 3',
			fields :[
				{
					id:'field7',
					name:'Field 7'
				},

        {
          id:'field8',
					name:'Field 8'
        },

        {
          id:'field9',
					name:'Field 9'
        }
			]
		}
	],

	selectAll: {
    id: 'selectAll',
    name: 'Select All'
  }
}

$(document).ready(function() {
  new DataGroup(options).init();
});