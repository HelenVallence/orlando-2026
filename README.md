# Orlando 2026 PWA — Version 7

Upload these files over the matching files in your existing GitHub repository.

## V7 update — one easy GitHub data file
The app now keeps the information you are most likely to change in **`trip-data.js`** instead of burying it inside `app.js`.

`trip-data.js` now controls:
- trip start/end dates and the date text shown at the top of the app
- number of nights
- the full day-by-day itinerary
- ticket windows / ticket summary cards
- flight routes, times, seats, aircraft and connection notes

The current Disney plan remains:
- 26 Oct — Animal Kingdom
- 27 Oct — EPCOT
- 29 Oct — Mickey's Not-So-Scary Halloween Party (separate ticket)
- 30 Oct — Magic Kingdom

## The simple way to make a permanent change from GitHub
For normal trip changes, you should **not need to edit `app.js`**.

1. Open your `orlando-2026` repository on GitHub.
2. Click **`trip-data.js`**.
3. Click the **pencil / Edit** button.
4. Find the item you want to change.
5. Edit only the text/date/value you need, keeping the surrounding quotes, commas, `{ }` and `[ ]` intact.
6. Click **Commit changes**.
7. Wait a minute for GitHub Pages to redeploy, then refresh the web app.

### Example: change a park day
Find a line like:

```js
{date:"2026-10-27", label:"Tue 27 Oct", title:"EPCOT 🌐", plan:"...", extras:"..."},
```

Change the `title`, `plan` or `extras`, then commit.

### Example: change a travel date
At the top of `trip-data.js`, edit:

```js
startDate: "2026-10-24",
endDate: "2026-11-05",
displayDates: "24 October – 5 November 2026",
nights: 12
```

If changing the trip dates, also add/remove/update itinerary day rows as needed.

### Example: change a flight time or seat
In the `flights` section of `trip-data.js`, find the flight number and edit the relevant `depart`, `arrive` or `detail` value.

## Important: v7 automatically refreshes `trip-data.js`
The v7 service worker treats `trip-data.js` differently from the main app files: while online it asks GitHub for the newest copy first, then keeps that copy for offline use.

That means **data-only changes in `trip-data.js` do not require you to change the cache version** every time.

After committing a change, refresh the GitHub Pages site once. If the installed PWA was already open, fully close and reopen it if necessary.

## In-app quick edits still work
The existing **More → Edit trip** screen is still available for quick personal changes. Those edits are saved only on the device/browser where you made them.

Important: a local edit can override the GitHub itinerary text on that device. If you make a permanent itinerary change in `trip-data.js` and want that device to use the new GitHub version, go to:

**More → Edit trip → Reset itinerary to GitHub version**

Your separate day notes are not removed by that reset.

## When would I still edit app.js?
Only for actual app features/layout/behaviour — for example adding a brand-new section, changing how the spending tracker works, or changing navigation.

For itinerary, ticket-summary, trip-date or flight-detail updates: **edit `trip-data.js` only.**

## Current itinerary
- 24 Oct: Arrive / Coco Key / easy evening
- 25 Oct: Costume shopping + easy I-Drive day
- 26 Oct: Animal Kingdom
- 27 Oct: EPCOT
- 28 Oct: Easy day / pool / Disney Springs
- 29 Oct: Mickey's Not-So-Scary Halloween Party
- 30 Oct: Magic Kingdom
- 31 Oct: Old Town Kissimmee Halloween
- 1 Nov: Islands of Adventure
- 2 Nov: Kennedy Space Center
- 3 Nov: Universal Studios Florida
- 4 Nov: Epic Universe
- 5 Nov: Fly home
