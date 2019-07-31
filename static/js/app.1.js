
// Define variables
var button = d3.select("#filter-btn");
var inputDatetime = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {
  dataInput.forEach(ufo => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo[column])
    )
  });
}

// Initialize the site by populating the table with all data
populate(data);

button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputDatetime.property("value").trim();
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)
  tbody.html("");
  var response = {filterDate}
  if (response.filterDate.length !== 0) {
    populate(filterDate);
  }
})