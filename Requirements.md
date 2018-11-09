# FeedReader
1. Have a consistent UI and UX design, across all interfaces.
    If you have, say, the Bookmarks screen, and the Favorites screen, make sure that they are consistent.
2. Have responsive design
    There are a plethora of screens. Making sure that the software display well in most screens is essential.
3. Allow users to log-in and save information
4. Ability to collect and display the newsfeeds from real sources
    This is the bread and butter of the software, and what it really does.
5. Display the selected list of user feeds according with the user preferences
    Make sure that user preferences are overriding the regular list of feeds that the user has.
6. Display sources by showing a preview of the source
    We defined "a preview of the source" by displaying a Title, an Image, and an excerpt that shouldn't be over 200 characters
7. Sort feed by most recently updated source by default
    As a default, the software should display the feeds in linear time
8. Allow users to choose how to filter their feed, but always use linear dates for it
    Users will be able to adjust their feed by Bookmarks, Favorites, Prior Inserted Search, or Default. In other words, those are different sorts.
9. Prior Inserted Search™
    - Instead of giving the trouble to users on searching things by themselves, make the selection of their favorite topics, and return to them - in order of importance, and "freshness" - a list of those topics. What it intends to solve the most is the non-linearization of feeds while also giving the users a better return of content
10. Favorites
    A favorite is a link that is saved in a different list with the purpose of being accessed several times and not being deleted later (although deletion should be possible)
11. Bookmarks
    A bookmark is a link that is saved in a different list with the purpose of being read later. User should be able to save a bookmark by tapping and holding for 2 seconds on top of the news that they want to bookmark
12. Search
    Does a search on all of the lists available (all news, bookmarks, favorites). Ideally, log(n) time should be used (SkipList, or Red-Black Tree)
13. Opening links:
    When user taps twice on a news, the app should find the default browser on the phone, and open that link on it.
