Objective
===

Create a search app that utilizes an API (omdbAPI) and returns paginated results and detailed pages using react, react-router, and webpack. 
  - Prompt the user on initial load to enter criteria
    - aka not searched is different than nothing found
  - Allow the user to search on one or more criteria
  - Call the API and display a loading indicator
  - Present the search results and clear the loading indicator
  - Display the Search Terms used and total count of results as well as "page of pages"
  - Account for "page size". Does not have to be user settable.
  - Show Paging Controls
  - Previous and Next
  - Disable when not possible
  - routes to different parts of the app
  - use css grid and flexbox for responsive design

Steps Taken
===

Choose API and use Postman to see how returned data is presented. Create components within app based off of app needs (search, pagination, results). Create functionality for each component. Create a movie detail component and use jest to test with snapshots. Add routes to different pages from App.js with a ``Switch`` statement. Create links to those routes. Make the app responsive and enjoyable to use.

Reflection / Changes
===

This was a good test to use a third party API with react. I initially had trouble getting my loading image to appear and learned that the image had to be imported like other resources! 

I learned that jest cannot work with API calls, so I had to separate out my movie detail API call from the presentation of that movie detail (logic from presentation). I learned that routes will make components appear, but a ``Switch`` statement helps cause other components to disappear that do not belong on that route!