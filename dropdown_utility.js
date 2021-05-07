class DropdownUtility {

    constructor(options) {
        this.tableID= options.tableID;
        this.dropdownID = options.dropdownID;
        this.defaultTable = options.defaultTable;
        this.values= options.values; 
    }

    init() {
      var index = this.findIndex();
      this.setData(index);

      this.dropdownChangeEvent();
    }

    dropdownChangeEvent()
    {
      $('#'+this.dropdownID).change(function() {
        this.destroyTable();
        index = $('#'+this.dropdownID+' option:selected').index();
        this.setData(index);
    
      });
    }
    findIndex() {
      var _this = this;
      debugger
      for(var index = 0; index<_this.values.length; index++){
        if(_this.defaultTable == _this.values[index].id){
          return index;
        }
      }
    }

    setData(index) {
      var url = this.values[index].url;
      var columnsData = this.values[index].columnsData;
      this.loadRecords(url, columnsData)
    }
  
    destroyTable() {
      $('#'+this.tableID).DataTable().destroy();
      $('#'+this.tableID).empty();
    }

    loadRecords(url, columnsData) {
      var _this = this;
        $.get(url, function(data) {
            _this.populateDataTable(data, columnsData);
        })
    }

    populateDataTable(data, columnsData) {
      var _this = this;
      this.table = $("#"+_this.tableID).DataTable({
        data: data,
        columns: columnsData,
      });
    }
}

var options = {
  tableID : "presentation_table",
  dropdownID : "presentation_dropdown",
  defaultTable : "generic_present",
  values : [   
    {
      id: "generic_present",
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
  
    {
      id: "account_present",
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
}

$(document).ready(function() {
  new DropdownUtility(options).init();
});