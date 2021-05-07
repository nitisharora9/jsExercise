class DropdownUtility {

    constructor(options) {
        this.url = options.url;
        this.columnsData = options.columnsData;
    }

    init() {
        this.loadRecords(this.url)
    }
  
    loadRecords(url) {
      var _this = this;
        $.get(url, function(data) {
            _this.populateDataTable(data);
        })
    }

    populateDataTable(data) {
        var _this = this;
        this.table = $("#presentation_table").DataTable({
          data: data,
          columns: _this.columnsData,
        });
    }
}

var options = [
  generic = {
    url: "https://my.api.mockaroo.com/generic_present.json?key=6070af90",
    columnsData: [
        { 
            "data": "selection",
            "title": "Selection"
        },

        {
            "data": "name",
            "title": "Name"
        },

        {
            "data": "viewer",
            "title": "Viewer"
        }
    ]
  },
  
  account = {
    url: "https://my.api.mockaroo.com/account_present.json?key=6070af90",
    columnsData: [
        {   
             "data": "selection",
            "title": "Selection" 
        },
        {   
            "data": "name",
            "title": "Name" 
        },
        { 
            "data": "appointment",
            "title": "Appointment"
        },
        { 
            "data": "app_start_time",
            "title": "Appointment Start Time"
        },
        { 
            "data": "viewer",
            "title": "Viewer" 
        }
    ]
  }
]

$(document).ready(function() {
  new DropdownUtility(options[0]).init();


  function destroyTable(tableID) {
    $('#'+tableID).DataTable().destroy();
    $('#'+tableID).empty();
}

  $("#presentation_dropdown").change(function() {
    if($("#presentation_dropdown option:selected").index() == 1){
        
      destroyTable('presentation_table');
      new DropdownUtility(options[1]).init();
    }

    else{

      destroyTable('presentation_table');
      new DropdownUtility(options[0]).init();
    }
  });
});