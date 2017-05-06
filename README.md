# This branch shows the completed API.

### Follow-on exercises:
- How can we merge the `home` and `subreddit` routes into just one?
- Can you add query params to the URLs so that we can add pagination?
  - Reddit pages are paginated using the 'after' param:
    https://www.reddit.com/r/pics/top/.json?after=t3_69dhl7
  - The value for 'after' is the `data.name` field of the item in the list you want to start after.