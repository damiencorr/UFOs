// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {
  // Save the element, value, and id of the filter that was changed
  // Grab the value from each filter
  const x = document.getElementsByTagName("input");
  for (let e of x) {
    //console.log(e.id)
    filters[e.id] = d3.select("#" + e.id.toString()).property("value");
    //console.log(filters[e.id])
  }
  console.log(filters);

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  const keys = Object.keys(filters);
  console.log(keys);
  keys.forEach((key, index) => {
    console.log({ key }, filters[key]);
    // If filter is empty then remove from list
    if (!filters[key]) {
      delete filters[key];
    }
  });
  console.log(filters);

  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {
  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches ALL the filter values - in effect an AND filter combination
  const fKeys = Object.keys(filters);
  console.log(filters, fKeys);
  fKeys.forEach((filter) => {
    console.log("Key: " + filter + " val: " + filters[filter]);
    filteredData = filteredData.filter(
      (row) => row[filter] === filters[filter]
    );
  });
  console.log(filteredData);

  /* ALTERNATIVELY
  // Loop through rows, then for each row loop through and apply each filter - AND or OR TBD!!
  // PSEUDOCODE
  filteredData = filteredData.filter((row) => {
    var colKeys = Object.keys(row);
    colKeys.forEach((key) => {
      console.log("Key:" + key + " Val:" + row[key] + !!!filters[fKeys]);
    });
  });
  */

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

function handleClick() {
  // Grab the value from each filter
  let date = d3.select("#datetime").property("value");

  /*
  // Grab the value from each filter explicitly - NOT FLEXIBLE
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
 */

  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    console.log("Date = ", date);
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter((row) => row.datetime === date);
  }

  /*
  // If ANY of the filters have a value then execute data.filter() to apply the filters
  // This requires EXPLICIT definition of each filter, not flexible if more columns and hence filters added later
  if (date || city || state || country || shape) 
  {
    console.log("Date = ", date);
    console.log("City = ", city);
    console.log("State = ", state);
    console.log("Country = ", country);
    console.log("Shape = ", shape);
    // Apply `filter` to the table data to only keep the
    // rows where ANY column value matches any available filter value
    filteredData = filteredData.filter(
        (row) =>
        row.datetime === date ||
        row.city === city ||
        row.state === state ||
        row.country === country ||
        row.shape === shape
    );
  } 
  */

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
//d3.selectAll("#filter-btn").on("click", handleClick);

// Attach an event to listen for changes to each filter
// Select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
