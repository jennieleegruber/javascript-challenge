//create a descriptive variable for the data
var tableData = data;

// create a variable for tbody you'll append based on the user's iinput
var tbody = d3.select("tbody");

//create function that prints a table based on the data provided 
function CreateTable(data){
//you're saying that in the blank space for tbody you're updating the html with data
tbody.html("");
// iterate through the data and take each object in the data array and do something with it
data.forEach((placeObject) => {
    //create a variable for the rows of the table you want to append to the webpage usting table row tags
    var row = tbody.append("tr");
    // take the placeObjects of the data 
    Object.entries(placeObject).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

function UserInput() {
  var fdata = tableData;

  var user_input = d3.select("#datetime").property("value");
  if(user_input) {
  fdata = fdata.filter(row => row.datetime === user_input); 
  }
    CreateTable(fdata);

};
CreateTable(tableData);
d3.selectAll("#filter-btn").on("click", UserInput);