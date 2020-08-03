# UFOs
Columbia Data Analytics and Visualization Boot Camp Module 11

## CHALLENGE 

## RECOMENDATIONS
An obvious improvement to be considered focuses on improving the user's search experience:
- Enable the user to select one or multiple values from a pre-populated drop down for each column
- Enable the user to choose whether or not they want multiple filters applied using AND or OR
- Enable the user to see search results as soon as they type or make a selection in any filter

## Objectives
The goals of this challenge:

- Create, update, and deploy JavaScript functions to provide additional table filters.
- Update and deploy forEach (for loop) to loop through the filters and update them with user input.
- Update and populate the dynamic filters and table using JavaScript and HTML.

## Instructions
Include five total filters in the table:
- Date
- City
- State
- Country
- Shape

To create these additional filters, keep the following points in mind:
- Create a new function replacing handleClick(); function. This function saves the element, value, and the id of the filter that was changed.
    - Create an if-else statement to add filter data from input, or clear the filter if no input data exists.
- Additionally, create a function named filterTable(); that will perform the following actions:
    - Set the filtered data to the table.
    - Loop through all of the filters and keep any data that matches the filter values.
    - Rebuild the table by calling the buildTable(); function created earlier.
- Finally, using d3.selectAll();, attach an event listener to pick up changes that are made to each filter.

Below are links to starter code to help you build the additional filters. One of the files contains pseudocode, while the other is a blank slate.  You can work with either file, though one provides an additional challenge.
- pseudoCode.js
- starterCode.js

## Submission
Make sure your repo is up to date and includes the following:
- A README.md file containing a short description of your project
- The completed code saved in the proper folder structure.
- NOTE: Make sure your JavaScript file is saved as app.js
- A clean website with a functioning filter table