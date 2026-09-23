
const itinerary = [
  {date:"2026-10-24", label:"Sat 24 Oct", title:"Arrival + Coco Key / I-Drive", plan:"Hotel check-in, food nearby and an easy first evening.", extras:"No park ticket needed."},
  {date:"2026-10-25", label:"Sun 25 Oct", title:"Costume shopping + easy I-Drive day 🎃", plan:"Shop for Halloween costumes first thing, then groceries, pool time and an easy evening.", extras:"Try Walmart / Target first for value, Spirit Halloween for the biggest choice, and Five Below for accessories."},
  {date:"2026-10-26", label:"Mon 26 Oct", title:"Animal Kingdom 🦒", plan:"First Disney ticket day. Early start, Safari, shows, animal trails and Pandora.", extras:"Disney 3-Day Base Ticket window: 26–30 Oct."},
  {date:"2026-10-27", label:"Tue 27 Oct", title:"Hollywood Studios 🎬", plan:"Toy Story, Mickey & Minnie, Star Wars and shows.", extras:"Second Disney ticket day. Food idea: Sci-Fi Dine-In."},
  {date:"2026-10-28", label:"Wed 28 Oct", title:"Easy day / pool / Disney Springs", plan:"Sleep in, pool time, shopping or Disney Springs. Keep the pace light before the Halloween party.", extras:"No park ticket needed."},
  {date:"2026-10-29", label:"Thu 29 Oct", title:"Mickey's Not-So-Scary Halloween Party 🎃", plan:"Keep the morning easy, get into costume and aim to arrive before 4pm entry. Save energy for Boo-to-You later.", extras:"Separate Halloween Party ticket — does not use a Disney Base Ticket day."},
  {date:"2026-10-30", label:"Fri 30 Oct", title:"Magic Kingdom 🏰", plan:"Third and final Disney Base Ticket day. Take this as the normal Magic Kingdom day after enjoying the party atmosphere the night before.", extras:"Final day inside the 26–30 Oct Disney ticket window."},
  {date:"2026-10-31", label:"Sat 31 Oct", title:"Old Town Kissimmee Halloween 👻", plan:"Easy daytime at Coco Key, then head to Old Town for the free Halloween event in the evening.", extras:"Trick-or-treat / costume atmosphere without another park ticket."},
  {date:"2026-11-01", label:"Sun 1 Nov", title:"Islands of Adventure 🎢", plan:"Start the Universal 3-Day Park-to-Park ticket. Hogsmeade, Jurassic Park and family-friendly attractions.", extras:"Universal ticket window: 1–5 Nov. Park-to-Park and Hogwarts Express included."},
  {date:"2026-11-02", label:"Mon 2 Nov", title:"Kennedy Space Center 🚀", plan:"Full day. Aim for opening and prioritise Atlantis, the bus tour and Saturn V.", extras:"A different pace between Universal days."},
  {date:"2026-11-03", label:"Tue 3 Nov", title:"Universal Studios Florida 🎬", plan:"Diagon Alley, Minions, Transformers and other family favourites. Use Park-to-Park if you want the Hogwarts Express.", extras:"Second Universal ticket day."},
  {date:"2026-11-04", label:"Wed 4 Nov", title:"Epic Universe 🌌", plan:"Full day. Arrive early and start with the area that matters most — Nintendo, How to Train Your Dragon, Ministry of Magic or Dark Universe.", extras:"Third Universal ticket day. Epic Universe may reach capacity on select days, so make this an early-arrival day."},
  {date:"2026-11-05", label:"Thu 5 Nov", title:"Fly home ✈️", plan:"Breakfast, pack up and head to the airport with plenty of time.", extras:"Check the airline app and baggage allowance before leaving Coco Key."}
];

const tickets = [
  {title:"Disney 3-Day Base Ticket", icon:"🏰", url:"https://disneyworld.disney.go.com/", note:"Selected plan: 3 park days within 26–30 Oct 2026 — Animal Kingdom, Hollywood Studios and Magic Kingdom. One park per day; no Park Hopper."},
  {title:"Mickey's Not-So-Scary Halloween Party", icon:"🎃", url:"https://disneyworld.disney.go.com/events-tours/magic-kingdom/mickeys-not-so-scary-halloween-party/", note:"29 Oct 2026. Separate party admission; aim for 4pm entry and keep the morning easy."},
  {title:"Universal 3-Day Park-to-Park", icon:"🎢", url:"https://www.universalorlando.com/", note:"Selected plan: valid within 1–5 Nov 2026. Covers Universal Studios Florida, Islands of Adventure and Epic Universe; Park-to-Park access and Hogwarts Express included."},
  {title:"Kennedy Space Center", icon:"🚀", url:"https://www.kennedyspacecenter.com/", note:"Planned for 2 Nov. Keep admission and transport details together once booked."},
  {title:"Coco Key Hotel", icon:"🏨", url:"https://www.google.com/maps/search/?api=1&query=Coco+Key+Hotel+Orlando", note:"Quick directions back to the hotel."},
  {title:"Old Town Kissimmee", icon:"👻", url:"https://www.google.com/maps/search/?api=1&query=Old+Town+Kissimmee+Florida", note:"Halloween evening plan for 31 Oct. Rideshare is the easiest option from Coco Key."},
  {title:"Disney Springs", icon:"🛍️", url:"https://www.google.com/maps/search/?api=1&query=Disney+Springs+Orlando", note:"Free-entry Disney shopping and dining area — useful for the easy day or final flexible days."},
  {title:"Costume shopping", icon:"🧙", url:"https://www.google.com/maps/search/?api=1&query=Halloween+costume+shops+near+International+Drive+Orlando", note:"25 Oct priority: Walmart / Target for value, Spirit Halloween for choice, Five Below for inexpensive accessories."},
  {title:"Flights", icon:"✈️", url:"https://www.google.com/travel/flights", note:"Keep the airline app, booking reference and checked-bag details handy."}
];

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
  {title:"Sci-Fi Dine-In Theater", place:"Hollywood Studios", note:"Top themed-family pick. Great mid-day air-conditioned break."},
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
  const now=new Date(); const target=new Date("2026-10-24T00:00:00"); const end=new Date("2026-11-05T23:59:59");
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

renderItinerary(); renderTickets(); renderChecklist("pre"); renderFood(); renderSpending(); updateToday();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
}
