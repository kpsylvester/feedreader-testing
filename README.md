# Feed Reader Testing Project

This is a web-based application that reads RSS feeds. I used Jasmine to run tests on the app to make sure it is running properly.

# How to run the application

- local download - I recommend downloading the the repository and opening up the index.html to run the tests
- here is the url to the website https://kpsylvester.github.io/feedreader-testing/

## The tests that were used for the project

1. Write a test that loops through each feed in the ```allFeeds``` object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the ```allFeeds``` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named ```"The menu"```.
4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Write a test suite named ```"Initial Entries"```.
7. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single ```.entry``` element within the ```.feed``` container.
8. Write a test suite named ```"New Feed Selection"```.
9. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
