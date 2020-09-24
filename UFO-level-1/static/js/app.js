// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");

//show all data at start
tableData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

//event handler function for entering date
function  filterTable() {
	// Prevent the page from refreshing
	d3.event.preventDefault();

	//clear any existing data
	var table =d3.select("tbody");
	table.html("");

	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");

	// Get the value property of the input element
	var inputValue = inputElement.property("value");

	var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

	console.log(inputValue)
	console.log(filteredData)
	console.log(tableData)

	filteredData.forEach((ufoSightings) => {
	  var row = tbody.append("tr");
	  Object.entries(ufoSightings).forEach(([key, value]) => {
	    var cell = row.append("td");
	    cell.text(value);
	  });
	});


};


