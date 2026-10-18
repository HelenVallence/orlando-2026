/*
  ORLANDO 2026 — EASY-EDIT DATA FILE
  ----------------------------------
  For normal trip changes, edit THIS FILE in GitHub rather than app.js.
  Keep the punctuation/quotes/brackets intact, commit the change, then refresh the site.
  Data-only changes here do NOT require a service-worker version bump in v7.
*/

window.TRIP_DATA = {
  trip: {
    name: "Orlando 2026 🌴",
    startDate: "2026-10-24",
    endDate: "2026-11-05",
    displayDates: "24 October – 5 November 2026",
    nights: 12
  },

  itinerary: [
    {date:"2026-10-24", label:"Sat 24 Oct", title:"Arrival + Coco Key / I-Drive", plan:"Hotel check-in, food nearby and an easy first evening.", extras:"No park ticket needed."},
    {date:"2026-10-25", label:"Sun 25 Oct", title:"Costume shopping + easy I-Drive day 🎃", plan:"Shop for Halloween costumes first thing, then groceries, pool time and an easy evening.", extras:"Try Walmart / Target first for value, Spirit Halloween for the biggest choice, and Five Below for accessories."},
    {date:"2026-10-26", label:"Mon 26 Oct", title:"Animal Kingdom 🦒", plan:"First Disney ticket day. Early start, Safari, shows, animal trails and Pandora.", extras:"Disney 3-Day Base Ticket window: 26–30 Oct."},
    {date:"2026-10-27", label:"Tue 27 Oct", title:"EPCOT 🌐", plan:"World Showcase, Frozen, Ratatouille, Spaceship Earth and a more relaxed Disney day.", extras:"Second Disney ticket day. Food & Wine Festival is running during the trip."},
    {date:"2026-10-28", label:"Wed 28 Oct", title:"Easy day / pool / Disney Springs / Cirque De Soleil", plan:"Sleep in, pool time, shopping or Disney Springs. Cirque de Soleil @ 16:30. Keep the pace light before the Halloween party.", extras:"Cirque tickets in Google Wallet."},
    {date:"2026-10-29", label:"Thu 29 Oct", title:"Mickey's Not-So-Scary Halloween Party 🎃", plan:"Keep the morning easy, get into costume and aim to arrive before 4pm entry. Save energy for Boo-to-You later.", extras:"Separate Halloween Party ticket — does not use a Disney Base Ticket day."},
    {date:"2026-10-30", label:"Fri 30 Oct", title:"Magic Kingdom 🏰", plan:"Third and final Disney Base Ticket day. Take this as the normal Magic Kingdom day after enjoying the party atmosphere the night before.", extras:"Final day inside the 26–30 Oct Disney ticket window."},
    {date:"2026-10-31", label:"Sat 31 Oct", title:"Old Town Kissimmee Halloween 👻", plan:"Easy daytime at Coco Key, then head to Old Town for the free Halloween event in the evening.", extras:"Trick-or-treat / costume atmosphere without another park ticket."},
    {date:"2026-11-01", label:"Sun 1 Nov", title:"Islands of Adventure 🎢", plan:"Start the Universal 3-Day Park-to-Park ticket. Hogsmeade, Jurassic Park and family-friendly attractions.", extras:"Universal ticket window: 1–5 Nov. Park-to-Park and Hogwarts Express included."},
    {date:"2026-11-02", label:"Mon 2 Nov", title:"Kennedy Space Center 🚀", plan:"Full day. Aim for opening and prioritise Atlantis, the bus tour and Saturn V.", extras:"A different pace between Universal days."},
    {date:"2026-11-03", label:"Tue 3 Nov", title:"Universal Studios Florida 🎬", plan:"Diagon Alley, Minions, Transformers and other family favourites. Use Park-to-Park if you want the Hogwarts Express.", extras:"Second Universal ticket day."},
    {date:"2026-11-04", label:"Wed 4 Nov", title:"Epic Universe 🌌", plan:"Full day. Arrive early and start with the area that matters most — Nintendo, How to Train Your Dragon, Ministry of Magic or Dark Universe.", extras:"Third Universal ticket day. Epic Universe may reach capacity on select days, so make this an early-arrival day."},
    {date:"2026-11-05", label:"Thu 5 Nov", title:"Fly home ✈️", plan:"Breakfast, pack up and head to the airport with plenty of time.", extras:"Check the United app and baggage allowance before leaving Coco Key."}
  ],

  tickets: [
    {title:"Disney 3-Day Base Ticket", icon:"🏰", url:"https://disneyworld.disney.go.com/", note:"3 park days within 26–30 Oct 2026 — Animal Kingdom, EPCOT and Magic Kingdom. One park per day; no Park Hopper."},
    {title:"Mickey's Not-So-Scary Halloween Party", icon:"🎃", url:"https://disneyworld.disney.go.com/events-tours/magic-kingdom/mickeys-not-so-scary-halloween-party/", note:"29 Oct 2026. Separate party admission; aim for 4pm entry and keep the morning easy."},
    {title:"Universal 3-Day Park-to-Park", icon:"🎢", url:"https://www.universalorlando.com/", note:"Valid within 1–5 Nov 2026. Covers Universal Studios Florida, Islands of Adventure and Epic Universe; Park-to-Park access and Hogwarts Express included."},
    {title:"Cirque Du Soleil", icon:"🎪", url:"https://www.cirquedusoleil.com/usa/orlando/drawn-to-life/buy-tickets", note:"Tickets in Google Wallet"},
    {title:"Kennedy Space Center", icon:"🚀", url:"https://www.kennedyspacecenter.com/", note:"Planned for 2 Nov. Keep admission and transport details together once booked."},
    {title:"Coco Key Hotel", icon:"🏨", url:"https://www.google.com/maps/search/?api=1&query=Coco+Key+Hotel+Orlando", note:"Quick directions back to the hotel."},
    {title:"Old Town Kissimmee", icon:"👻", url:"https://www.google.com/maps/search/?api=1&query=Old+Town+Kissimmee+Florida", note:"Halloween evening plan for 31 Oct. Rideshare is the easiest option from Coco Key."},
    {title:"Disney Springs", icon:"🛍️", url:"https://www.google.com/maps/search/?api=1&query=Disney+Springs+Orlando", note:"Free-entry Disney shopping and dining area — useful for the easy day."},
    {title:"Costume shopping", icon:"🧙", url:"https://www.google.com/maps/search/?api=1&query=Halloween+costume+shops+near+International+Drive+Orlando", note:"25 Oct priority: Walmart / Target for value, Spirit Halloween for choice, Five Below for inexpensive accessories."},
    {title:"Flights", icon:"✈️", url:"https://www.united.com/en/us/flightstatus", note:"Check United for live gates, delays and connection information."}
  ],

  flights: [
    {
      tag:"OUTBOUND · SAT 24 OCT",
      route:"Dublin → Washington Dulles → Orlando",
      legs:[
        {flight:"UA311", airline:"United", aircraft:"Boeing 757-200", from:"DUB", depart:"08:50", to:"IAD", arrive:"11:50", detail:"Duration 8h · Seats 30A, 30B, 30C"},
        {connection:"3h 57m connection at Washington Dulles"},
        {flight:"UA2861", airline:"United", aircraft:"Boeing 737-900", from:"IAD", depart:"15:47", to:"MCO", arrive:"18:15", detail:"Duration 2h 28m · Seats 37F, 37D, 37E"}
      ]
    },
    {
      tag:"RETURN · THU 5 NOV",
      route:"Orlando → Newark → Dublin",
      legs:[
        {flight:"UA2629", airline:"United", aircraft:"Boeing 737-900", from:"MCO", depart:"16:10", to:"EWR", arrive:"19:00", detail:"Duration 2h 50m · Seats 30C, 30A, 30B"},
        {connection:"1h 05m connection at Newark — keep an eye on the connection time", warning:true},
        {flight:"UA23", airline:"United", aircraft:"Boeing 777-200", from:"EWR", depart:"20:05", to:"DUB", arrive:"07:30", detail:"Arrives Friday 6 Nov · Duration 6h 25m · Seats 53F, 53D, 53E"}
      ]
    }
  ]
};
