// from data.js
var tableData = data;

// YOUR CODE HERE!
//select tbody using d3
var tbody = d3.select("tbody");

function CreateTable(data){
tbody.html("");
data.forEach((placeObject) => {
    var row = tbody.append("tr");
    Object.entries(placeObject).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


//2 function 1st to build table 
// 2nd to filter your table 
//function FilterInput

function UserInput() {
    var fdata = tableData

    var user_input = d3.select("#datetime").property("value");
    if(user_input) {
    fdata = fdata.filter(row => row.datetime === user_input); 
    }

    CreateTable(fdata);

};
CreateTable(tableData);
d3.selectAll("#filter-btn").on("click", UserInput);