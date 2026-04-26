// Image-backed Paragon renderer. This intentionally replaces the rough generated grid.
// It uses the board screenshots in assets/paragon/ as the visual board, then overlays
// tappable glyph/legendary/gate controls and free-form route markers.
(function(){
  const imageBoards = [
    {id:'start', name:'Starting Board', img:'assets/paragon/starting_board.jpg', legendary:'', specials:[
      {id:'start', type:'start', label:'S', x:50, y:82},
      {id:'glyph', type:'glyph', label:'◆', x:50, y:46},
      {id:'gate_n', type:'gate', label:'⇄', x:58, y:9}
    ]},
    {id:'burning_instinct', name:'Burning Instinct', img:'assets/paragon/burning_instinct.jpg', legendary:'Burning Instinct', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:18, y:76},
      {id:'legend', type:'legendary', label:'★', x:86, y:14},
      {id:'gate_n', type:'gate', label:'⇄', x:51, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:5, y:49}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:50}
    ]},
    {id:'ceaseless_conduit', name:'Ceaseless Conduit', img:'assets/paragon/ceaseless_conduit.jpg', legendary:'Ceaseless Conduit', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:22, y:71},
      {id:'legend', type:'legendary', label:'★', x:37, y:59},
      {id:'gate_n', type:'gate', label:'⇄', x:52, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:5, y:49}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:49}
    ]},
    {id:'elemental_summoner', name:'Elemental Summoner', img:'assets/paragon/elemental_summoner.jpg', legendary:'Elemental Summoner', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:42, y:50},
      {id:'legend', type:'legendary', label:'★', x:43, y:73},
      {id:'gate_n', type:'gate', label:'⇄', x:52, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:6, y:48}, {id:'gate_e', type:'gate', label:'⇄', x:95, y:49}
    ]},
    {id:'enchantment_master', name:'Enchantment Master', img:'assets/paragon/enchantment_master.jpg', legendary:'Enchantment Master', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:26, y:31},
      {id:'legend', type:'legendary', label:'★', x:89, y:75},
      {id:'gate_n', type:'gate', label:'⇄', x:51, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:51, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:6, y:48}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:48}
    ]},
    {id:'frigid_fate', name:'Frigid Fate', img:'assets/paragon/frigid_fate.jpg', legendary:'Frigid Fate', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:57, y:58},
      {id:'legend', type:'legendary', label:'★', x:46, y:48},
      {id:'gate_n', type:'gate', label:'⇄', x:52, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:6, y:50}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:50}
    ]},
    {id:'fundamental_release', name:'Fundamental Release', img:'assets/paragon/fundamental_release.jpg', legendary:'Fundamental Release', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:51, y:31},
      {id:'legend', type:'legendary', label:'★', x:53, y:66},
      {id:'gate_n', type:'gate', label:'⇄', x:52, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:6, y:50}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:50}
    ]},
    {id:'icefall', name:'Icefall', img:'assets/paragon/icefall.jpg', legendary:'Icefall', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:49, y:58},
      {id:'legend', type:'legendary', label:'★', x:46, y:38},
      {id:'gate_n', type:'gate', label:'⇄', x:52, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:6, y:50}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:50}
    ]},
    {id:'searing_heat', name:'Searing Heat', img:'assets/paragon/searing_heat.jpg', legendary:'Searing Heat', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:66, y:23},
      {id:'legend', type:'legendary', label:'★', x:28, y:67},
      {id:'gate_n', type:'gate', label:'⇄', x:52, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:6, y:49}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:49}
    ]},
    {id:'static_surge', name:'Static Surge', img:'assets/paragon/static_surge.jpg', legendary:'Static Surge', specials:[
      {id:'glyph', type:'glyph', label:'◆', x:55, y:49},
      {id:'legend', type:'legendary', label:'★', x:37, y:48},
      {id:'gate_n', type:'gate', label:'⇄', x:52, y:6}, {id:'gate_s', type:'gate', label:'⇄', x:52, y:94}, {id:'gate_w', type:'gate', label:'⇄', x:6, y:49}, {id:'gate_e', type:'gate', label:'⇄', x:96, y:49}
    ]}
  ];
  const glyphList = (typeof paragonGlyphs !== 'undefined' ? paragonGlyphs : ['Adept','Charged','Control','Destruction','Elementalist','Enchanter','Exploit','Flamefeeder','Frostbite','Reinforced','Tactician','Territorial','Unleash','Winter']);
  function imageDef(id){ return imageBoards.find(b=>b.id===id) || imageBoards[0]; }
  function ensureImageParagon(){
    if(!paragon || !paragon.boards || !paragon.boards.length){ paragon = {active:0, boards:[{boardId:'start',rotation:0,glyph:'',glyphLevel:1,nodes:['start'],marks:[]}]} ; }
    paragon.boards.forEach((b,i)=>{ if(!b.marks) b.marks=[]; if(typeof b.rotation !== 'number') b.rotation=0; if(!b.boardId) b.boardId = i===0?'start':'burning_instinct'; });
  }
  function renderHeader(){ const el=document.querySelector('#paragonCount'); if(el){ ensureImageParagon(); el.textContent = paragon.boards.reduce((a,b)=>a+(b.marks?.length||0)+(b.nodes?.length||0),0); }}
  function rotPoint(x,y,r){
    if(r===90) return {x:100-y,y:x};
    if(r===180) return {x:100-x,y:100-y};
    if(r===270) return {x:y,y:100-x};
    return {x,y};
  }
  function addImageParagonBoard(){ ensureImageParagon(); paragon.boards.push({boardId:'burning_instinct',rotation:0,glyph:'',glyphLevel:1,nodes:[],marks:[]}); paragon.active=paragon.boards.length-1; save(); renderParagon(); }
  function setImageBoard(i,id){ paragon.boards[i]={boardId:id,rotation:0,glyph:'',glyphLevel:1,nodes:id==='start'?['start']:[],marks:[]}; save(); renderParagon(); }
  function removeImageBoard(i){ if(i===0) return alert('The starting board cannot be removed.'); paragon.boards.splice(i,1); paragon.active=Math.max(0,paragon.active-1); save(); renderParagon(); }
  function rotateImageBoard(i){ paragon.boards[i].rotation=(paragon.boards[i].rotation+90)%360; save(); renderParagon(); }
  function setActiveImageBoard(i){ paragon.active=i; save(); renderParagon(); }
  function boardTap(e){
    if(e.target.closest('.imgSpecial') || e.target.closest('.routeMark')) return;
    const stage=e.currentTarget; const rect=stage.getBoundingClientRect();
    let x=((e.clientX-rect.left)/rect.width)*100, y=((e.clientY-rect.top)/rect.height)*100;
    const b=paragon.boards[paragon.active];
    const id='mark_'+Date.now();
    b.marks.push({id,x:+x.toFixed(2),y:+y.toFixed(2)});
    save(); renderParagon();
  }
  function removeMark(id){ const b=paragon.boards[paragon.active]; b.marks=b.marks.filter(m=>m.id!==id); save(); renderParagon(); }
  function openGlyphPicker(){ renderParagon(true); }
  function closeGlyphPicker(){ renderParagon(false); }
  function pickGlyph(v){ const b=paragon.boards[paragon.active]; b.glyph=v; save(); renderParagon(true); }
  function setImageGlyphLevel(v){ const b=paragon.boards[paragon.active]; b.glyphLevel=Math.max(1,Math.min(100,parseInt(v||1))); save(); renderParagon(true); }
  function renderParagon(showGlyph=false){
    ensureImageParagon(); renderHeader();
    const root=document.querySelector('#paragonApp'); if(!root) return;
    const b=paragon.boards[paragon.active] || paragon.boards[0]; const def=imageDef(b.boardId);
    const tabHtml = paragon.boards.map((x,i)=>`<button class="${i===paragon.active?'active':''}" onclick="setActiveParagonBoard(${i})">${i+1}. ${imageDef(x.boardId).name}</button>`).join('');
    const boardOptions = imageBoards.map(d=>`<option value="${d.id}" ${d.id===b.boardId?'selected':''}>${d.name}</option>`).join('');
    const markerHtml = (b.marks||[]).map(m=>`<button class="routeMark" style="left:${m.x}%;top:${m.y}%" onclick="removeParagonMark('${m.id}')" title="Tap to remove planned node"></button>`).join('');
    const specials = def.specials.map(s=>{
    const p=rotPoint(s.x,s.y,b.rotation);
    const isGlyph=s.type==='glyph';
    const text=isGlyph && b.glyph ? b.glyph.slice(0,3) : s.label;
    const action = isGlyph ? 'openGlyphPicker()' : `toggleSpecialNode('${s.id}')`;
    return `<button class="imgSpecial ${s.type}" style="left:${p.x}%;top:${p.y}%" onclick="${action}" title="${isGlyph?'Glyph Socket':s.type}">${text}</button>`;
  }).join('');
    
const glyphPicker = showGlyph ? `<div class="glyphModal"><div class="glyphCard"><button class="closeGlyph" onclick="closeGlyphPicker()">×</button><h3>Glyph Socket</h3><p>Choose the glyph for <b>${def.name}</b>.</p><input class="glyphSearch" placeholder="Search glyphs..." oninput="filterGlyphList(this.value)"><select id="glyphSelect" onchange="pickGlyph(this.value)"><option value="">No glyph</option>${glyphList.map(g=>`<option value="${g}" ${g===b.glyph?'selected':''}>${g}</option>`).join('')}</select><label>Glyph level<input type="number" min="1" max="100" value="${b.glyphLevel||1}" oninput="setGlyphLevel(${paragon.active},this.value)"></label></div></div>` : '';
    root.innerHTML = `<div class="paragonWrap imageMode"><div class="boardTabs">${tabHtml}</div><div class="paragonTop"><div class="paragonPanel"><label>Board<select onchange="setParagonBoard(${paragon.active},this.value)">${boardOptions}</select></label><div class="paragonControls"><button onclick="rotateBoard(${paragon.active})">Rotate ${b.rotation}°</button><button onclick="removeParagonBoard(${paragon.active})">Remove Board</button></div><div class="legend"><span>Tap image = add planned node</span><span>Tap marker = remove</span><span>Tap ◆ = glyph</span></div><div class="nodeInfo"><b>${def.name}</b><br>${def.legendary ? 'Legendary: '+def.legendary : 'Starter board'}<br>Glyph: ${b.glyph || 'None'} ${b.glyph ? '(level '+(b.glyphLevel||1)+')' : ''}<br>Planned markers: ${(b.marks||[]).length}</div></div><div class="paragonBoard imageBoard"><div class="imageStage rot${b.rotation}" onclick="boardTap(event)"><img src="${def.img}" alt="${def.name} paragon board">${markerHtml}${specials}</div></div></div>${glyphPicker}</div>`;
  }
  function filterGlyphList(q){
    const sel=document.querySelector('#glyphSelect'); if(!sel) return; const current=sel.value; const needle=(q||'').toLowerCase();
    sel.innerHTML = `<option value="">No glyph</option>` + glyphList.filter(g=>g.toLowerCase().includes(needle)).map(g=>`<option value="${g}" ${g===current?'selected':''}>${g}</option>`).join('');
  }
  function toggleSpecialNode(id){ const b=paragon.boards[paragon.active]; b.nodes=b.nodes||[]; const ix=b.nodes.indexOf(id); if(ix>=0) b.nodes.splice(ix,1); else b.nodes.push(id); save(); renderParagon(); }

  window.renderParagon = renderParagon;
  window.addParagonBoard = addImageParagonBoard;
  window.setParagonBoard = setImageBoard;
  window.removeParagonBoard = removeImageBoard;
  window.rotateBoard = rotateImageBoard;
  window.setActiveParagonBoard = setActiveImageBoard;
  window.boardTap = boardTap;
  window.removeParagonMark = removeMark;
  window.openGlyphPicker = openGlyphPicker;
  window.closeGlyphPicker = closeGlyphPicker;
  window.pickGlyph = pickGlyph;
  window.filterGlyphList = filterGlyphList;
  window.setGlyphLevel = function(i,v){ setImageGlyphLevel(v); };
  window.toggleSpecialNode = toggleSpecialNode;
  const prevSwitch = window.switchTab;
  window.switchTab = function(tab){ prevSwitch(tab); if(tab==='paragon') renderParagon(); };
  const prevRender = window.render;
  if(prevRender){ window.render = function(){ prevRender(); renderHeader(); }; }
})();
