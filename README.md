# Orlando 2026 PWA — Version 6

Upload these files over the matching files in your existing GitHub repository.

## V6 update — EPCOT + easy itinerary editing
- Swapped **Hollywood Studios** for **EPCOT** on Tuesday 27 October.
- Disney 3-Day Base Ticket notes now show **Animal Kingdom, EPCOT and Magic Kingdom**.
- Replaced the Hollywood Studios food suggestion with an EPCOT option.
- Added **More → Edit trip** inside the app.
- You can now change each day's **title, plan and extra note** without editing the GitHub code.
- These quick edits are saved in your browser/app on the device you make them on. They do **not** change the GitHub repository or automatically sync to another phone/computer.
- Added a **Reset itinerary to GitHub version** button. This resets the editable itinerary but keeps your separate day notes.
- Service-worker cache bumped to v6.

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

## How to change an itinerary day without touching GitHub
1. Open the web app.
2. Tap **More**.
3. Tap **Edit trip**.
4. Find the date you want to change.
5. Edit the **Day title**, **Plan**, or **Extra note**.
6. Tap **Save this day**.
7. The Trip page and Today card will immediately use the updated version.

### Important: device-only edits
Edits made in the app use browser local storage. That means an edit made on your phone stays on that phone unless you make the same edit on another device. Clearing browser/site data can also remove these local edits.

For a permanent master change that every device receives, edit `defaultItinerary` near the top of `app.js`, commit the change to GitHub, and bump the cache name in `service-worker.js` (for example `orlando-2026-v7`).

## Updating GitHub
Upload all files in this folder to the root of your existing `orlando-2026` repository and replace the matching files. Commit the changes. GitHub Pages should redeploy automatically.

If the installed PWA still shows an older version, close it fully and reopen it. If needed, refresh the GitHub Pages site once in the browser before reopening the installed app. The v6 service worker will replace the previous cache. Existing locally saved notes, spending and checklists should remain because their storage keys have not changed.
