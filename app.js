
const tripData = window.TRIP_DATA || {};
const tripMeta = tripData.trip || {startDate:"2026-10-24",endDate:"2026-11-05",displayDates:"24 October – 5 November 2026",nights:12,name:"Orlando 2026 🌴"};
const defaultItinerary = Array.isArray(tripData.itinerary) ? tripData.itinerary : [];
const tickets = Array.isArray(tripData.tickets) ? tripData.tickets : [];
const flights = Array.isArray(tripData.flights) ? tripData.flights : [];

const checklists = {
  pre: {
    title:"Pre-travel checklist ✈️",
    items:[
      "Check all passports are valid",
      "Confirm ESTA approval for all travellers",
      "Check travel insurance and save policy details",
      "Confirm flights, seats and checked baggage",
      "Save Coco Key hotel confirmation",
      "Link Disney 3-Day Base Tickets in My Disney Experience",
      "Link Universal 3-Day Park-to-Park tickets in the Universal app",
      "Save Kennedy Space Center confirmation",
      "Confirm 29 Oct Halloween Party tickets in Disney account",
      "Book priority restaurant reservations",
      "Confirm airport transfer / car hire plans",
      "Download Disney and Universal apps",
      "Download offline Google Maps for Orlando",
      "Check roaming / eSIM plan",
      "Pack US plug adaptors",
      "Charge and pack power banks",
      "Pack sunscreen, hats and sunglasses",
      "Pack ponchos",
      "Pack comfortable broken-in shoes",
      "Prepare blister / first-aid kit",
      "Save secure copies of key documents",
      "Confirm Kennedy Space Center admission / transport",
      "Check Kennedy launch schedule",
      "Check Florida weather before departure",
      "Leave spare luggage room for souvenirs"
    ]
  },
  bag: {
    title:"Theme park bag 🎒",
    items:["Phone","Power bank","Short charging cable","Refillable water bottles","Snacks","Sunscreen","Caps / sunglasses","Ponchos","Wipes / tissues","Blister plasters","Daily medication","Child spare T-shirt / shorts","Ziplock / wet bag","Light evening layer","Small card holder","Official app ticket access"]
  },
  disney: {
    title:"Disney day 🏰",
    items:["My Disney Experience logged in","Tickets linked","Check park hours","Check Lightning Lane plan","Mobile-order lunch if useful","Power bank fully charged","Water bottles filled","Ponchos packed","Take photo of parking area","Check parade / fireworks times"]
  },
  universal: {
    title:"Universal day 🎢",
    items:["Universal app logged in","Tickets available in official app","Check park opening time","Check Park-to-Park entitlement","Plan Hogwarts Express direction","Know which rides require lockers","Power bank charged","Water / snacks packed","Ponchos packed","Take photo of parking area"]
  },
  nasa: {
    title:"NASA day 🚀",
    items:["KSC tickets ready","Check opening time","Check launch schedule","Leave Orlando early","Plan bus tour early","Prioritise Atlantis","Prioritise Apollo/Saturn V","Power bank charged","Water / snacks ready","Check return-drive traffic"]
  }
};

const food = [
  {title:"Via Napoli Ristorante e Pizzeria", place:"EPCOT", note:"Family-friendly pizza in the Italy pavilion and a handy sit-down break during World Showcase."},
  {title:"Tusker House", place:"Animal Kingdom", note:"Character meal option. A late breakfast can double as lunch."},
  {title:"Toothsome Chocolate Emporium", place:"Universal CityWalk", note:"Fun post-park dinner with spectacular desserts."},
  {title:"Chef Art Smith's Homecomin'", place:"Disney Springs", note:"Strong Southern comfort-food choice."},
  {title:"T-REX Cafe", place:"Disney Springs", note:"Pure dinosaur spectacle for a child."},
  {title:"Café Tu Tu Tango", place:"International Drive", note:"Lively sharing plates away from park pricing."},
  {title:"Hash House A Go Go", place:"International Drive", note:"Huge American breakfast/brunch portions."}
];

const qs=id=>document.getElementById(id);
const getJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
const setJSON=(key,val)=>localStorage.setItem(key,JSON.stringify(val));

let itinerary = getSavedItinerary();

function getSavedItinerary(){
  try{
    const saved=JSON.parse(localStorage.getItem("customItinerary"));
    if(Array.isArray(saved) && saved.length===defaultItinerary.length){
      return defaultItinerary.map((d,i)=>({...d,...saved[i],date:d.date,label:d.label}));
    }
  }catch{}
  return defaultItinerary.map(d=>({...d}));
}

function saveItinerary(){
  localStorage.setItem("customItinerary",JSON.stringify(itinerary.map(({title,plan,extras})=>({title,plan,extras}))));
}

function showPanel(id){
  document.querySelectorAll(".panel").forEach(x=>x.classList.toggle("active",x.id===id));
  document.querySelectorAll(".navitem").forEach(x=>x.classList.toggle("active",x.dataset.target===id));
  qs("moreMenu").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-target]").forEach(b=>{
  if(b.id!=="moreBtn") b.addEventListener("click",()=>showPanel(b.dataset.target));
});
document.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>showPanel(b.dataset.jump)));
qs("moreBtn").addEventListener("click",()=>qs("moreMenu").classList.toggle("open"));

function renderTripMeta(){
  if(qs("tripName")) qs("tripName").textContent=tripMeta.name || "Orlando 2026 🌴";
  if(qs("tripDates")) qs("tripDates").textContent=tripMeta.displayDates || `${tripMeta.startDate} – ${tripMeta.endDate}`;
  if(qs("tripNights")) qs("tripNights").textContent=tripMeta.nights ?? "";
}

function renderFlights(){
  const wrap=qs("flightCards");
  if(!wrap) return;
  wrap.innerHTML="";
  flights.forEach(journey=>{
    const card=document.createElement("div"); card.className="card feature";
    const legs=(journey.legs||[]).map(leg=>{
      if(leg.connection){
        return `<div class="connection${leg.warning ? " warningline" : ""}">${escapeHtml(leg.connection)}</div>`;
      }
      return `<div class="flightleg">
        <div class="flighttop"><strong>${escapeHtml(leg.flight)}</strong><span>${escapeHtml(leg.airline)} · ${escapeHtml(leg.aircraft)}</span></div>
        <div class="flighttimes"><strong>${escapeHtml(leg.from)} ${escapeHtml(leg.depart)}</strong><span>→</span><strong>${escapeHtml(leg.to)} ${escapeHtml(leg.arrive)}</strong></div>
        <div class="muted">${escapeHtml(leg.detail||"")}</div>
      </div>`;
    }).join("");
    card.innerHTML=`<span class="tag">${escapeHtml(journey.tag||"")}</span><h3>${escapeHtml(journey.route||"")}</h3><div class="flightlegs">${legs}</div>`;
    wrap.appendChild(card);
  });
}

function renderItinerary(){
  const wrap=qs("itinerary"); wrap.innerHTML="";
  itinerary.forEach(d=>{
    const saved=localStorage.getItem(`daynote-${d.date}`)||"";
    const el=document.createElement("div"); el.className="card day";
    el.innerHTML=`
      <div class="dayhead">
        <div><div class="daydate">${d.label}</div><div class="daytitle">${d.title}</div><div class="muted">${d.plan}</div><div class="pill" style="margin-top:8px">${d.extras}</div></div>
        <span>✏️</span>
      </div>
      <div class="daynotes">
        <textarea class="input" rows="5" placeholder="Reservations, opening times, confirmation numbers, notes…">${saved}</textarea>
        <button class="btn small">Save day notes</button><p class="saved"></p>
      </div>`;
    el.querySelector(".dayhead").addEventListener("click",()=>el.classList.toggle("open"));
    el.querySelector("button").addEventListener("click",()=>{
      localStorage.setItem(`daynote-${d.date}`,el.querySelector("textarea").value);
      el.querySelector(".saved").textContent="Saved on this device ✓";
    });
    wrap.appendChild(el);
  });
}

function renderTripEditor(){
  const wrap=qs("tripEditor");
  if(!wrap) return;
  wrap.innerHTML="";
  itinerary.forEach((d,i)=>{
    const el=document.createElement("div"); el.className="card editorcard";
    el.innerHTML=`
      <div class="daydate">${d.label}</div>
      <label class="editlabel">Day title<input class="input editTitle" value="${escapeHtml(d.title)}"></label>
      <label class="editlabel">Plan<textarea class="input editPlan" rows="3">${escapeHtml(d.plan)}</textarea></label>
      <label class="editlabel">Extra note<textarea class="input editExtras" rows="2">${escapeHtml(d.extras)}</textarea></label>
      <button class="btn small saveEdit">Save this day</button>
      <span class="saved editSaved"></span>`;
    el.querySelector(".saveEdit").addEventListener("click",()=>{
      itinerary[i].title=el.querySelector(".editTitle").value.trim() || defaultItinerary[i].title;
      itinerary[i].plan=el.querySelector(".editPlan").value.trim();
      itinerary[i].extras=el.querySelector(".editExtras").value.trim();
      saveItinerary();
      renderItinerary(); updateToday();
      el.querySelector(".editSaved").textContent="Saved on this device ✓";
    });
    wrap.appendChild(el);
  });
}

function escapeHtml(value){
  return String(value).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
}

function renderTickets(){
  const wrap=qs("ticketCards");
  tickets.forEach(t=>{
    const el=document.createElement("div"); el.className="card";
    el.innerHTML=`<h3>${t.icon} ${t.title}</h3><p>${t.note}</p><a class="btn secondary" target="_blank" rel="noopener" href="${t.url}">Open official page</a>`;
    wrap.appendChild(el);
  });
}

function renderChecklist(name){
  const config=checklists[name]; const key=`check-${name}`; const state=getJSON(key,{});
  const wrap=qs("dynamicChecklist"); wrap.innerHTML=`<h3>${config.title}</h3>`;
  config.items.forEach((item,idx)=>{
    const row=document.createElement("label"); row.className="checkrow";
    const box=document.createElement("input"); box.type="checkbox"; box.checked=!!state[idx];
    box.addEventListener("change",()=>{state[idx]=box.checked;setJSON(key,state)});
    const span=document.createElement("span"); span.textContent=item;
    row.append(box,span); wrap.appendChild(row);
  });
}
qs("checkSelector").addEventListener("change",e=>renderChecklist(e.target.value));
qs("resetChecks").addEventListener("click",()=>{
  if(confirm("Reset every checklist?")){
    Object.keys(checklists).forEach(k=>localStorage.removeItem(`check-${k}`));
    renderChecklist(qs("checkSelector").value);
  }
});

function renderFood(){
  const wrap=qs("foodCards");
  food.forEach(f=>{
    const el=document.createElement("div"); el.className="card";
    el.innerHTML=`<span class="pill">${f.place}</span><h3 class="foodtitle">${f.title}</h3><p>${f.note}</p>`;
    wrap.appendChild(el);
  });
}

function renderSpending(){
  const items=getJSON("spending",[]);
  const wrap=qs("spendList"); wrap.innerHTML="";
  let total=0;
  items.forEach((x,i)=>{
    total+=Number(x.amount)||0;
    const el=document.createElement("div"); el.className="card spendrow";
    el.innerHTML=`<div><strong>${x.item}</strong><div class="spendmeta">${x.category}</div></div><div><strong>$${Number(x.amount).toFixed(2)}</strong> <button class="deleteSpend" data-i="${i}">✕</button></div>`;
    wrap.appendChild(el);
  });
  qs("spendTotal").textContent=`$${total.toFixed(2)}`;
  document.querySelectorAll(".deleteSpend").forEach(b=>b.addEventListener("click",()=>{
    const arr=getJSON("spending",[]); arr.splice(Number(b.dataset.i),1); setJSON("spending",arr); renderSpending();
  }));
}
qs("addSpend").addEventListener("click",()=>{
  const item=qs("spendItem").value.trim(); const amount=Number(qs("spendAmount").value);
  if(!item || !amount) return;
  const arr=getJSON("spending",[]);
  arr.push({item,amount,category:qs("spendCategory").value});
  setJSON("spending",arr); qs("spendItem").value=""; qs("spendAmount").value=""; renderSpending();
});

function saveText(id,key,msgId){
  qs(id).value=localStorage.getItem(key)||"";
  qs(`save${id.charAt(0).toUpperCase()+id.slice(1)}`)?.addEventListener("click",()=>{
    localStorage.setItem(key,qs(id).value); if(msgId) qs(msgId).textContent="Saved on this device ✓";
  });
}

qs("parkingNote").value=localStorage.getItem("parkingNote")||"";
qs("saveParking").addEventListener("click",()=>{localStorage.setItem("parkingNote",qs("parkingNote").value);qs("parkingSaved").textContent="Saved ✓"});
qs("ticketNotes").value=localStorage.getItem("ticketNotes")||"";
qs("saveTicketNotes").addEventListener("click",()=>{localStorage.setItem("ticketNotes",qs("ticketNotes").value);qs("ticketSaved").textContent="Saved on this device ✓"});
qs("foodNotes").value=localStorage.getItem("foodNotes")||"";
qs("saveFoodNotes").addEventListener("click",()=>{localStorage.setItem("foodNotes",qs("foodNotes").value);qs("foodSaved").textContent="Saved on this device ✓"});
qs("generalNotes").value=localStorage.getItem("generalNotes")||"";
qs("saveNotes").addEventListener("click",()=>{localStorage.setItem("generalNotes",qs("generalNotes").value);qs("notesSaved").textContent="Saved on this device ✓"});

function updateToday(){
  const now=new Date(); const target=new Date(`${tripMeta.startDate}T00:00:00`); const end=new Date(`${tripMeta.endDate}T23:59:59`);
  const diff=target-now;
  if(diff>0) qs("countdown").textContent=`${Math.ceil(diff/86400000)} days to go ✈️`;
  else if(now<=end) qs("countdown").textContent="We're in Orlando! 🌴";
  else qs("countdown").textContent="Trip complete 💛";

  const yyyy=now.getFullYear(), mm=String(now.getMonth()+1).padStart(2,"0"), dd=String(now.getDate()).padStart(2,"0");
  const today=`${yyyy}-${mm}-${dd}`; const d=itinerary.find(x=>x.date===today);
  if(d){
    qs("todayTitle").textContent=d.title; qs("todayPlan").textContent=d.plan;
    qs("todayExtras").style.display="block"; qs("todayExtras").textContent=d.extras;
  }
}

qs("resetItinerary")?.addEventListener("click",()=>{
  if(confirm("Reset the itinerary to the GitHub version? Your day notes will stay saved.")){
    localStorage.removeItem("customItinerary");
    itinerary=defaultItinerary.map(d=>({...d}));
    renderTripEditor(); renderItinerary(); updateToday();
    qs("editTripSaved").textContent="Reset to GitHub version ✓";
  }
});

renderTripMeta(); renderFlights(); renderItinerary(); renderTripEditor(); renderTickets(); renderChecklist("pre"); renderFood(); renderSpending(); updateToday();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
}
