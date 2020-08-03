# UFOs
Columbia Data Analytics and Visualization Boot Camp Module 11

## CHALLENGE 

This challenge adds filtering on five columns to the existing UFO Sightings simple page, developed during the course of the Module's classwork.
The additional filters allow the user to filter by one up to five attributes of the UFO Sightings data.
The filters are shown on the left-hand column of the following screenshot.

Screenshot of webpage
![UFOs with multiple filters](https://github.com/damiencorr/UFOs/blob/master/UFOs%20homepage%20screenshot%20-%20Annotation%202020-08-03%20183721.png)

Approach
- The application uses a combination of Javascript, CSS with Bootstrap, HTML, images and a static file of data
- The data is basically stored as a list of records readily consumable by Javascript (JS)
- When the page is initially rendered, JS is used to read the data which is then presented & styled in the index.html template
- The user is presented with five input text boxes, each one corresponding to one of the file columns of data (see the instructions section below for the list)
- When the user provides one or more values and then clicks the button, a button event handler does the following:
    - Creates a list of filters with non-blank values
    - Iterates through the filter list and for each filter applies the filter's value against the relevant data's column
- The end result is then shown back to the user, with only those data rows with values that match all the user provided value
- The user can easily change and resubmit thier filters as often as they wish
- The page is styled using responsive elements, allowing ready use on multiple form factors

## RECOMENDATIONS
An obvious improvement to be considered focuses on improving the user's search experience:
- Enable the user to select one or multiple values from a pre-populated drop down for each column, rather than typing as the only option
- Enable the user to choose whether or not they want multiple filters applied using AND or OR
- Enable the user to see search results as soon as they type or make a selection in any filter
Regarding potential data enhancements
- If more information is made available in terms of extra data attributes, the HTML can be readily adapted to include the extra columns with matching input elements.
- The JS on the other hand is writen to adapt to a variable number of input elements. If e.g. a new column and matching input element is added, the JS should be able to find and include it when applying user's filters to the data.


## APPENDIX - CHALLEND DETAILS
### Objectives
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
