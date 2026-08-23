
const itinerary = [
  {date:"2026-10-24", label:"Sat 24 Oct", title:"Arrival + Coco Key / I-Drive", plan:"Keep this easy. Hotel check-in, food nearby, early night if needed."},
  {date:"2026-10-25", label:"Sun 25 Oct", title:"Pool + I-Drive / Disney Springs", plan:"Low-pressure day. Pool, wander, groceries and an easy dinner."},
  {date:"2026-10-26", label:"Mon 26 Oct", title:"Easy day / outlets / mini golf", plan:"Shopping, mini golf, pool or ICON Park. Save energy for the parks."},
  {date:"2026-10-27", label:"Tue 27 Oct", title:"Animal Kingdom", plan:"Early start. Safari first, shows and Pandora. Consider Tusker House late breakfast."},
  {date:"2026-10-28", label:"Wed 28 Oct", title:"Hollywood Studios", plan:"Toy Story, Mickey & Minnie, Star Wars. Sci-Fi Dine-In is a great themed meal."},
  {date:"2026-10-29", label:"Thu 29 Oct", title:"Magic Kingdom Halloween Party 🎃", plan:"Party ticket day. Aim to arrive before 4pm entry. Save energy for the later parade."},
  {date:"2026-10-30", label:"Fri 30 Oct", title:"Recovery day", plan:"Sleep in, pool, easy food. No rope drop after the late party."},
  {date:"2026-10-31", label:"Sat 31 Oct", title:"Halloween / flexible day", plan:"Keep flexible. Pool, I-Drive, Disney Springs or a local Halloween activity."},
  {date:"2026-11-01", label:"Sun 1 Nov", title:"Universal Studios + Islands of Adventure", plan:"Use Park-to-Park if Hogwarts Express matters. Focus on family-friendly rides and themed areas."},
  {date:"2026-11-02", label:"Mon 2 Nov", title:"Kennedy Space Center 🚀", plan:"Full day. Aim for opening. Prioritise Atlantis, bus tour and Saturn V."},
  {date:"2026-11-03", label:"Tue 3 Nov", title:"Epic Universe", plan:"Full day. Start with whichever matters most: Nintendo or How to Train Your Dragon."},
  {date:"2026-11-04", label:"Wed 4 Nov", title:"EPCOT", plan:"Ratatouille, Frozen, The Seas and World Showcase. Space 220 optional."},
  {date:"2026-11-05", label:"Thu 5 Nov", title:"Fly home", plan:"Breakfast, pack up, final swim/shopping if flight time allows."}
];

const tickets = [
  {title:"Disney World", icon:"🏰", url:"https://disneyworld.disney.go.com/", note:"Use My Disney Experience for live tickets and plans."},
  {title:"Halloween Party", icon:"🎃", url:"https://disneyworld.disney.go.com/events-tours/mickeys-not-so-scary-halloween-party/", note:"29 Oct 2026. Keep official ticket in Disney app."},
  {title:"Universal Orlando", icon:"🎢", url:"https://www.universalorlando.com/", note:"Universal Studios, Islands and Epic Universe."},
  {title:"Kennedy Space Center", icon:"🚀", url:"https://www.kennedyspacecenter.com/", note:"Store booking reference / local PDF location here."},
  {title:"Coco Key Hotel", icon:"🏨", url:"https://www.google.com/maps/search/?api=1&query=Coco+Key+Hotel+Orlando", note:"Quick directions to the hotel."},
  {title:"Flights", icon:"✈️", url:"https://www.google.com/travel/flights", note:"Add airline app/booking reference in notes."}
];

const preTravel = [
  "Check passports are valid and pack them for travel day",
  "Complete / confirm ESTA requirements for all travellers",
  "Check travel insurance and save policy number",
  "Add airline app and confirm seat / baggage details",
  "Save hotel booking confirmation",
  "Save Disney tickets in My Disney Experience",
  "Save Universal tickets in the Universal app",
  "Save Kennedy Space Center tickets / confirmation",
  "Add Halloween Party ticket to Disney account",
  "Book priority restaurant reservations",
  "Check airport transfers / car hire / parking",
  "Download offline Google Maps for Orlando",
  "Download Disney and Universal apps",
  "Turn on international roaming / eSIM plan",
  "Charge power banks before departure",
  "Pack US plug adaptors",
  "Pack sunscreen, hats and sunglasses",
  "Pack ponchos",
  "Pack comfortable broken-in shoes",
  "Prepare small park first-aid / blister kit",
  "Keep copies/photos of key documents stored securely",
  "Check launch schedule for Kennedy Space Center",
  "Check weather forecast a few days before travel",
  "Leave spare room in luggage for souvenirs"
];

const parkBag = [
  "Phone",
  "10,000–20,000 mAh power bank",
  "Short charging cable",
  "Refillable water bottles",
  "Snacks",
  "Sunscreen",
  "Caps / sunglasses",
  "Ponchos",
  "Wipes / tissues",
  "Plasters + blister plasters",
  "Any daily medication",
  "Child's spare T-shirt / shorts",
  "Ziplock / wet bag",
  "Light layer for evening",
  "Small card holder / wallet",
  "Park ticket access in official app",
  "Avoid carrying all passports unless specifically needed"
];

const food = [
  {title:"Sci-Fi Dine-In Theater", place:"Hollywood Studios", note:"Top themed-family pick. Great mid-day air-conditioned break."},
  {title:"Tusker House", place:"Animal Kingdom", note:"Character meal option. A late breakfast can double as lunch."},
  {title:"Space 220", place:"EPCOT", note:"Very memorable space theme; more about the experience than value."},
  {title:"Toothsome Chocolate Emporium", place:"Universal CityWalk", note:"Fun post-park dinner with outrageous desserts and shakes."},
  {title:"Chef Art Smith's Homecomin'", place:"Disney Springs", note:"Strong choice when you want genuinely good Southern comfort food."},
  {title:"T-REX Cafe", place:"Disney Springs", note:"Pure spectacle for a child; food is secondary to the dinosaur setting."},
  {title:"Café Tu Tu Tango", place:"International Drive", note:"Lively small plates / sharing meal away from park pricing."},
  {title:"Hash House A Go Go", place:"International Drive", note:"Huge American breakfast/brunch portions—share sensibly!"}
];

function qs(id){return document.getElementById(id)}
function getJSON(key, fallback){
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function setJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }

function renderItinerary(){
  const wrap = qs("itinerary");
  wrap.innerHTML = "";
  itinerary.forEach((d, i)=>{
    const saved = localStorage.getItem(`daynote-${d.date}`) || "";
    const el = document.createElement("div");
    el.className = "card day";
    el.innerHTML = `
      <div class="dayhead">
        <div>
          <div class="daydate">${d.label}</div>
          <div class="daytitle">${d.title}</div>
          <div class="muted">${d.plan}</div>
        </div>
        <span>✏️</span>
      </div>
      <div class="daynotes">
        <textarea class="input" rows="4" placeholder="Bookings, times, confirmations, notes…">${saved}</textarea>
        <button class="btn small">Save day notes</button>
        <p class="saved"></p>
      </div>`;
    el.querySelector(".dayhead").addEventListener("click", ()=>el.classList.toggle("open"));
    el.querySelector("button").addEventListener("click", (e)=>{
      e.stopPropagation();
      const val = el.querySelector("textarea").value;
      localStorage.setItem(`daynote-${d.date}`, val);
      el.querySelector(".saved").textContent = "Saved on this device ✓";
    });
    wrap.appendChild(el);
  });
}

function renderTickets(){
  const wrap = qs("ticketCards");
  tickets.forEach(t=>{
    const el = document.createElement("div");
    el.className="card";
    el.innerHTML=`<h3>${t.icon} ${t.title}</h3><p>${t.note}</p><a class="btn secondary" target="_blank" rel="noopener" href="${t.url}">Open</a>`;
    wrap.appendChild(el);
  });
}

function renderChecklist(containerId, items, key){
  const state = getJSON(key, {});
  const wrap = qs(containerId);
  items.forEach((item, idx)=>{
    const row = document.createElement("label");
    row.className="checkrow";
    const box = document.createElement("input");
    box.type="checkbox";
    box.checked=!!state[idx];
    box.addEventListener("change", ()=>{
      state[idx]=box.checked;
      setJSON(key,state);
    });
    const span=document.createElement("span");
    span.textContent=item;
    row.append(box,span);
    wrap.appendChild(row);
  });
}

function renderFood(){
  const wrap=qs("foodCards");
  food.forEach(f=>{
    const el=document.createElement("div");
    el.className="card";
    el.innerHTML=`<span class="pill">${f.place}</span><h3 class="foodtitle">${f.title}</h3><p>${f.note}</p>`;
    wrap.appendChild(el);
  });
}

function updateCountdown(){
  const target = new Date("2026-10-24T00:00:00");
  const now = new Date();
  const diff = target-now;
  if(diff>0){
    const days=Math.ceil(diff/86400000);
    qs("countdown").textContent=`${days} days to go ✈️`;
  } else if(now <= new Date("2026-11-05T23:59:59")){
    qs("countdown").textContent="We're in Orlando! 🌴";
  } else {
    qs("countdown").textContent="Trip complete 💛";
  }

  const yyyy=now.getFullYear(), mm=String(now.getMonth()+1).padStart(2,"0"), dd=String(now.getDate()).padStart(2,"0");
  const today=`${yyyy}-${mm}-${dd}`;
  const d=itinerary.find(x=>x.date===today);
  if(d){
    qs("todayTitle").textContent=d.title;
    qs("todayPlan").textContent=d.plan;
  }
}

function showPanel(id){
  document.querySelectorAll(".panel").forEach(x=>x.classList.toggle("active",x.id===id));
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.target===id));
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showPanel(b.dataset.target)));
document.querySelectorAll("[data-jump]").forEach(a=>a.addEventListener("click",(e)=>{e.preventDefault();showPanel(a.dataset.jump)}));

qs("parkingNote").value=localStorage.getItem("parkingNote")||"";
qs("saveParking").addEventListener("click",()=>{
  localStorage.setItem("parkingNote",qs("parkingNote").value);
  qs("parkingSaved").textContent="Saved ✓";
});

qs("ticketNotes").value=localStorage.getItem("ticketNotes")||"";
qs("saveTicketNotes").addEventListener("click",()=>{
  localStorage.setItem("ticketNotes",qs("ticketNotes").value);
  qs("ticketSaved").textContent="Saved on this device ✓";
});

qs("generalNotes").value=localStorage.getItem("generalNotes")||"";
qs("saveNotes").addEventListener("click",()=>{
  localStorage.setItem("generalNotes",qs("generalNotes").value);
  qs("notesSaved").textContent="Saved on this device ✓";
});

qs("resetChecks").addEventListener("click",()=>{
  if(confirm("Reset both checklists?")){
    localStorage.removeItem("preTravelChecks");
    localStorage.removeItem("parkBagChecks");
    location.reload();
  }
});

renderItinerary();
renderTickets();
renderChecklist("preTravelChecklist", preTravel, "preTravelChecks");
renderChecklist("parkBagChecklist", parkBag, "parkBagChecks");
renderFood();
updateCountdown();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
}
