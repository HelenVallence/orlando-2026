
const itinerary = [
  {date:"2026-10-24", label:"Sat 24 Oct", title:"Arrival + Coco Key / I-Drive", plan:"Hotel check-in, food nearby, early night if needed.", extras:"No park ticket needed."},
  {date:"2026-10-25", label:"Sun 25 Oct", title:"Pool + I-Drive / Disney Springs", plan:"Low-pressure day. Pool, groceries and an easy dinner.", extras:"Good day for Disney Springs."},
  {date:"2026-10-26", label:"Mon 26 Oct", title:"Easy day / outlets / mini golf", plan:"Shopping, mini golf, pool or ICON Park.", extras:"Save energy for the parks."},
  {date:"2026-10-27", label:"Tue 27 Oct", title:"Animal Kingdom", plan:"Early start. Safari first, shows and Pandora.", extras:"Food idea: Tusker House late breakfast."},
  {date:"2026-10-28", label:"Wed 28 Oct", title:"Hollywood Studios", plan:"Toy Story, Mickey & Minnie, Star Wars.", extras:"Food idea: Sci-Fi Dine-In."},
  {date:"2026-10-29", label:"Thu 29 Oct", title:"Magic Kingdom Halloween Party 🎃", plan:"Aim to arrive before 4pm entry. Save energy for the later parade.", extras:"Party runs late — keep the morning easy."},
  {date:"2026-10-30", label:"Fri 30 Oct", title:"Recovery day", plan:"Sleep in, pool, easy food.", extras:"No rope drop today!"},
  {date:"2026-10-31", label:"Sat 31 Oct", title:"Halloween / flexible day", plan:"Pool, I-Drive, Disney Springs or local Halloween activity.", extras:"Keep this flexible."},
  {date:"2026-11-01", label:"Sun 1 Nov", title:"Universal Studios + Islands of Adventure", plan:"Park-to-Park if Hogwarts Express matters.", extras:"Focus on family-friendly rides and themed areas."},
  {date:"2026-11-02", label:"Mon 2 Nov", title:"Kennedy Space Center 🚀", plan:"Full day. Aim for opening.", extras:"Prioritise Atlantis, bus tour and Saturn V."},
  {date:"2026-11-03", label:"Tue 3 Nov", title:"Epic Universe", plan:"Full day. Start with whichever matters most.", extras:"Nintendo or How to Train Your Dragon first."},
  {date:"2026-11-04", label:"Wed 4 Nov", title:"EPCOT", plan:"Ratatouille, Frozen, The Seas and World Showcase.", extras:"Space 220 optional."},
  {date:"2026-11-05", label:"Thu 5 Nov", title:"Fly home", plan:"Breakfast, pack up, final swim/shopping if time allows.", extras:"Check airline app before leaving hotel."}
];

const tickets = [
  {title:"Disney World", icon:"🏰", url:"https://disneyworld.disney.go.com/", note:"Open My Disney Experience for live tickets, plans and Lightning Lane."},
  {title:"Halloween Party", icon:"🎃", url:"https://disneyworld.disney.go.com/events-tours/mickeys-not-so-scary-halloween-party/", note:"29 Oct 2026. Keep official admission in Disney account."},
  {title:"Universal Orlando", icon:"🎢", url:"https://www.universalorlando.com/", note:"Universal Studios, Islands and Epic Universe."},
  {title:"Kennedy Space Center", icon:"🚀", url:"https://www.kennedyspacecenter.com/", note:"Keep KSC PDF / booking confirmation in your secure files."},
  {title:"Coco Key Hotel", icon:"🏨", url:"https://www.google.com/maps/search/?api=1&query=Coco+Key+Hotel+Orlando", note:"Quick directions back to the hotel."},
  {title:"Flights", icon:"✈️", url:"https://www.google.com/travel/flights", note:"Put airline app and booking reference in notes."}
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
      "Link Disney tickets in My Disney Experience",
      "Link Universal tickets in Universal app",
      "Save Kennedy Space Center confirmation",
      "Confirm Halloween Party ticket in Disney account",
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
  {title:"Space 220", place:"EPCOT", note:"Very memorable space theme; experience is the main attraction."},
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
