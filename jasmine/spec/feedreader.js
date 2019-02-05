/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); expect(allFeeds.length).not.toBe(0);
        });

   
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each has url', function(){
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.constructor).toBe(String);
                expect(feed.url).toBeDefined(0);
                
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each has name', function(){
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.constructor).toBe(String);
                expect(feed.name).toBeDefined(0);
                
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
       
        describe('The Menu', function() {

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked.
         * The expectations are that the menu will display when
         * clicked and will hide when clicked again.
         * Reference: https://api.jquery.com/click/
         */
        it('is visible when hidden and then clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        it('is hidden when visible and then clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    
   describe('Initial Entries', function() {

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single 'article' element in the feed.
         */
        beforeEach(function(done) {
            //load the first feed, async method
            loadFeed(0, done);
        });

        //checks to make sure that the feed contains at least one entry and is //thus not 0
        it('contains at least one entry element', function() {
            //corrected the error thanks to reviewer reference //https://www.w3schools.com/jquery/sel_parent_descendant.asp
            expect($('.feed .entry').length).not.toBe(0);
        })
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var firstFeed;
        var secondFeed;

        /* This test ensures that the content actually changes
         * when a new feed is loaded by the loadFeed function.
         * beforeEach() is an async call
         */

        beforeEach(function(done) {
            loadFeed(0, function() { //load the first feed
                firstFeed = $('.feed').html(); //assign the first feed's html to variable
                done();
            });
        });
        
        //compares the first loaded feed with the next (current)
        //loaded feed
        it('has new content', function(done) {
            loadFeed(1, function() { //load the second feed
                secondFeed = $('.feed').html(); //assign the second feed's html to variable
                expect(secondFeed).not.toEqual(firstFeed); //compare the feeds
                done();
            })
        });
    });

      
}());
