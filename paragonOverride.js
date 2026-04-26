// Paragon rough full-board override v2
// This is a fast/rough D4Builds-style system: fuller boards, gates, rotation, glyphs, and board chaining.
const ROUGH_BOARD_SIZE = 17;
const ROUGH_GATES = ['north','east','south','west'];
const roughGlyphs = ['Adept','Charged','Control','Destruction','Elementalist','Enchanter','Exploit','Flamefeeder','Frostbite','Reinforced','Tactician','Territorial','Unleash','Winter','Pyromaniac','Electrocute'];
function rGateId(side){ return 'gate_'+side; }
function rOpposite(side){ return {north:'south',south:'north',east:'west',west:'east'}[side] || 'south'; }
function rGateLabel(side){ return {north:'North / top',south:'South / bottom',east:'East / right',west:'West / left'}[side] || side; }
function rNodeBonus(type, boardName){
  if(type==='normal') return '+5 Core Stat';
  if(type==='magic') return '+Magic bonus';
  if(type==='rare') return '+Rare bonus';
  if(type==='legendary') return `Legendary effect: ${boardName}`;
  if(type==='glyph') return 'Glyph socket';
  if(type==='gate') return 'Board attachment gate';
  if(type==='start') return 'Start point';
  return '';
}
function rTyped(x,y,i,v){
  if((x+y+v)%13===0) return 'rare';
  if((x*3+y+v)%5===0) return 'magic';
  return 'normal';
}
function rMakeBoard(id, name, variant, isStart){
  const nodes=[]; const seen=new Set();
  const add=(nid,x,y,type='normal',n='Paragon Node',b='')=>{
    if(x<0||x>=ROUGH_BOARD_SIZE||y<0||y>=ROUGH_BOARD_SIZE) return;
    const key=x+','+y; if(seen.has(key)) return; seen.add(key);
    nodes.push({id:nid,x,y,type,name:n,bonus:b||rNodeBonus(type,name)});
  };
  const idAt=(x,y)=>`n_${x}_${y}`;
  add(rGateId('north'),8,0,'gate','North Gate','Attach another board');
  add(rGateId('south'),8,16,'gate','South Gate','Attach another board');
  add(rGateId('west'),0,8,'gate','West Gate','Attach another board');
  add(rGateId('east'),16,8,'gate','East Gate','Attach another board');
  if(isStart){
    add('start',8,15,'start','Starting Node','Start spending Paragon points here');
    [[8,14],[7,14],[9,14],[8,13],[7,13],[9,13],[8,12],[7,12],[9,12],
     [6,11],[7,11],[8,11],[9,11],[10,11],[6,10],[7,10],[8,10],[9,10],[10,10],
     [5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[12,8],
     [5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[6,6],[7,6],[8,6],[9,6],[10,6],
     [6,5],[7,5],[8,5],[9,5],[10,5],[7,4],[8,4],[9,4],[7,3],[8,3],[9,3],[8,2],[7,1],[8,1],[9,1]
    ].forEach(([x,y],i)=>add(idAt(x,y),x,y,rTyped(x,y,i,variant),'Paragon Node'));
    add('glyph',8,8,'glyph','Glyph Socket','Slot a Glyph here');
    add('rare_left',5,9,'rare','Rare Node','Important rare bonus');
    add('rare_right',11,9,'rare','Rare Node','Important rare bonus');
    return nodes;
  }
  // Main lanes and diamond mass.
  for(let x=1;x<16;x++) add(idAt(x,8),x,8,rTyped(x,8,x,variant),'Paragon Node');
  for(let y=1;y<16;y++) add(idAt(8,y),8,y,rTyped(8,y,y,variant),'Paragon Node');
  [2,3,4,5,6].forEach(d=>{
    for(let dx=-d; dx<=d; dx++){
      const dy=d-Math.abs(dx);
      if(dy!==0){ add(idAt(8+dx,8+dy),8+dx,8+dy,rTyped(8+dx,8+dy,d,variant),'Paragon Node'); add(idAt(8+dx,8-dy),8+dx,8-dy,rTyped(8+dx,8-dy,d+1,variant),'Paragon Node'); }
      else add(idAt(8+dx,8),8+dx,8,rTyped(8+dx,8,d,variant),'Paragon Node');
    }
  });
  const clusters = [[3+(variant%2),4+((variant+1)%2)],[13-(variant%2),4+(variant%3===0?1:0)],[3+(variant%3===1?1:0),13-(variant%2)],[13-(variant%3===2?1:0),13]];
  clusters.forEach(([cx,cy],ci)=>{
    [[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1],[2,0],[-2,0],[0,2],[0,-2],[2,1],[-2,-1]].forEach(([dx,dy],j)=>add(idAt(cx+dx,cy+dy),cx+dx,cy+dy,rTyped(cx+dx,cy+dy,j+ci,variant),'Paragon Node'));
  });
  add('glyph',8,8,'glyph','Glyph Socket','Slot a Glyph here');
  const leg = [[5,5],[11,5],[5,11],[11,11],[4,8],[12,8]][variant%6];
  add('legendary',leg[0],leg[1],'legendary',name,`Legendary node: ${name}`);
  [[3,8],[13,8],[8,3],[8,13],[4,4],[12,4],[4,12],[12,12]].forEach(([x,y],i)=>add('rare_'+i,x,y,'rare','Rare Node','Major rare bonus'));
  return nodes;
}
const roughBoardDefs = [
  {id:'start', name:'Starting Board', legendary:'', nodes:rMakeBoard('start','Starting Board',0,true)},
  {id:'burning_instinct', name:'Burning Instinct', legendary:'Burning Instinct', nodes:rMakeBoard('burning_instinct','Burning Instinct',1)},
  {id:'ceaseless_conduit', name:'Ceaseless Conduit', legendary:'Ceaseless Conduit', nodes:rMakeBoard('ceaseless_conduit','Ceaseless Conduit',2)},
  {id:'elemental_summoner', name:'Elemental Summoner', legendary:'Elemental Summoner', nodes:rMakeBoard('elemental_summoner','Elemental Summoner',3)},
  {id:'enchantment_master', name:'Enchantment Master', legendary:'Enchantment Master', nodes:rMakeBoard('enchantment_master','Enchantment Master',4)},
  {id:'frigid_fate', name:'Frigid Fate', legendary:'Frigid Fate', nodes:rMakeBoard('frigid_fate','Frigid Fate',5)},
  {id:'fundamental_release', name:'Fundamental Release', legendary:'Fundamental Release', nodes:rMakeBoard('fundamental_release','Fundamental Release',6)},
  {id:'icefall', name:'Icefall', legendary:'Icefall', nodes:rMakeBoard('icefall','Icefall',7)},
  {id:'searing_heat', name:'Searing Heat', legendary:'Searing Heat', nodes:rMakeBoard('searing_heat','Searing Heat',8)},
  {id:'static_surge', name:'Static Surge', legendary:'Static Surge', nodes:rMakeBoard('static_surge','Static Surge',9)}
];
function rPDef(id){ return roughBoardDefs.find(b=>b.id===id) || roughBoardDefs[0]; }
function rActive(){ return paragon.boards[paragon.active] || paragon.boards[0]; }
function rNormalize(){
  if(!paragon.boards || !paragon.boards.length) paragon.boards=[{boardId:'start',rotation:0,glyph:'',glyphLevel:1,entryGate:'south',exitGate:'north',nodes:['start']}];
  paragon.boards.forEach((b,i)=>{
    if(!b.nodes) b.nodes=[];
    if(!b.entryGate) b.entryGate = i===0 ? 'south' : 'south';
    if(!b.exitGate) b.exitGate='north';
    if(typeof b.rotation !== 'number') b.rotation=0;
    if(!b.glyphLevel) b.glyphLevel=1;
    if(i===0 && b.boardId==='start' && !b.nodes.includes('start')) b.nodes.push('start');
  });
}
function rSelectedCount(){ return paragon.boards.reduce((a,b)=>a+(b.nodes?b.nodes.length:0),0); }
function rRotateCoord(x,y,r){ const max=ROUGH_BOARD_SIZE-1; if(r===90) return {x:max-y,y:x}; if(r===180) return {x:max-x,y:max-y}; if(r===270) return {x:y,y:max-x}; return {x,y}; }
function rNeighbours(a,b){ return Math.abs(a.x-b.x)+Math.abs(a.y-b.y)===1; }
function rAvailable(board,node,boardIndex){
  if(board.nodes.includes(node.id)) return true;
  if(boardIndex>0 && node.id===rGateId(board.entryGate||'south') && board.nodes.length===0) return true;
  const def=rPDef(board.boardId); const selectedNodes=def.nodes.filter(n=>board.nodes.includes(n.id));
  return selectedNodes.some(s=>rNeighbours(s,node));
}
window.addParagonBoard = addParagonBoard = function(){
  rNormalize();
  const prev=rActive();
  const entry=rOpposite(prev.exitGate || 'north');
  paragon.boards.push({boardId:'burning_instinct',rotation:0,glyph:'',glyphLevel:1,entryGate:entry,exitGate:'north',nodes:[rGateId(entry)]});
  paragon.active=paragon.boards.length-1; save(); renderParagon();
};
window.removeParagonBoard = removeParagonBoard = function(i){ if(i===0) return alert('The starting board cannot be removed.'); paragon.boards.splice(i,1); paragon.active=Math.max(0,paragon.active-1); save(); renderParagon(); };
window.setActiveParagonBoard = setActiveParagonBoard = function(i){ paragon.active=i; save(); renderParagon(); };
window.setParagonBoard = setParagonBoard = function(i,id){ const old=paragon.boards[i]||{}; paragon.boards[i]={boardId:id,rotation:0,glyph:'',glyphLevel:1,entryGate:old.entryGate||'south',exitGate:old.exitGate||'north',nodes:id==='start'?['start']:[rGateId(old.entryGate||'south')]}; save(); renderParagon(); };
window.setGlyph = setGlyph = function(i,v){ paragon.boards[i].glyph=v; save(); renderParagon(); };
window.setGlyphLevel = setGlyphLevel = function(i,v){ paragon.boards[i].glyphLevel=Math.max(1,Math.min(100,parseInt(v||1))); save(); renderHeaderParagon(); };
window.setEntryGate = function(i,v){ paragon.boards[i].entryGate=v; if(i>0 && !paragon.boards[i].nodes.length) paragon.boards[i].nodes=[rGateId(v)]; save(); renderParagon(); };
window.setExitGate = function(i,v){ paragon.boards[i].exitGate=v; save(); renderParagon(); };
window.rotateBoard = rotateBoard = function(i){ paragon.boards[i].rotation=(paragon.boards[i].rotation+90)%360; save(); renderParagon(); };
window.togglePNode = togglePNode = function(nodeId){ const b=rActive(); const def=rPDef(b.boardId); const n=def.nodes.find(x=>x.id===nodeId); if(!n) return; const idx=b.nodes.indexOf(nodeId); if(idx>=0){ if(n.type==='start') return; b.nodes.splice(idx,1); } else { if(!rAvailable(b,n,paragon.active)) return; b.nodes.push(nodeId); } save(); renderParagon(); };
window.resetParagon = resetParagon = function(){ if(confirm('Reset all paragon boards?')){ paragon={active:0,boards:[{boardId:'start',rotation:0,glyph:'',glyphLevel:1,entryGate:'south',exitGate:'north',nodes:['start']}]}; save(); renderParagon(); } };
window.renderHeaderParagon = renderHeaderParagon = function(){ const el=document.querySelector('#paragonCount'); if(el) el.textContent=rSelectedCount(); };
window.renderParagon = renderParagon = function(){
  rNormalize();
  const root=document.querySelector('#paragonApp'); if(!root) return; renderHeaderParagon();
  const b=rActive(), def=rPDef(b.boardId);
  root.innerHTML=`<div class="paragonWrap">
    <div class="chainView">${paragon.boards.map((x,i)=>`<button class="chainCard ${i===paragon.active?'active':''}" onclick="setActiveParagonBoard(${i})"><b>${i+1}</b><span>${rPDef(x.boardId).name}</span><small>${i===0?'Start':'from '+rGateLabel(x.entryGate)}</small></button>${i<paragon.boards.length-1?'<span class="chainArrow">→</span>':''}`).join('')}</div>
    <div class="boardTabs">${paragon.boards.map((x,i)=>`<button class="${i===paragon.active?'active':''}" onclick="setActiveParagonBoard(${i})">${i+1}. ${rPDef(x.boardId).name}</button>`).join('')}</div>
    <div class="paragonTop"><div class="paragonPanel">
      <label>Board<select onchange="setParagonBoard(${paragon.active},this.value)">${roughBoardDefs.map(d=>`<option value="${d.id}" ${d.id===b.boardId?'selected':''}>${d.name}</option>`).join('')}</select></label>
      <label>Entry gate<select onchange="setEntryGate(${paragon.active},this.value)" ${paragon.active===0?'disabled':''}>${ROUGH_GATES.map(g=>`<option value="${g}" ${g===b.entryGate?'selected':''}>${rGateLabel(g)}</option>`).join('')}</select></label>
      <label>Exit / attach next gate<select onchange="setExitGate(${paragon.active},this.value)">${ROUGH_GATES.map(g=>`<option value="${g}" ${g===b.exitGate?'selected':''}>${rGateLabel(g)}</option>`).join('')}</select></label>
      <label>Glyph<select onchange="setGlyph(${paragon.active},this.value)"><option value="">No glyph</option>${roughGlyphs.map(g=>`<option ${g===b.glyph?'selected':''}>${g}</option>`).join('')}</select></label>
      <label>Glyph level<input type="number" min="1" max="100" value="${b.glyphLevel||1}" oninput="setGlyphLevel(${paragon.active},this.value)"></label>
      <div class="paragonControls"><button onclick="rotateBoard(${paragon.active})">Rotate ${b.rotation}°</button><button onclick="addParagonBoard()">Attach New Board</button><button onclick="removeParagonBoard(${paragon.active})">Remove Board</button></div>
      <div class="legend"><span>Normal</span><span>Magic</span><span>Rare</span><span>Legendary</span><span>Glyph</span><span>Gate</span></div>
      <div class="nodeInfo"><b>${def.name}</b><br>${def.legendary?('Legendary: '+def.legendary):'Starter board'}<br>Selected nodes: ${b.nodes.length}<br><b>Rough board mode:</b> fuller layout, gates, rotation and chaining. Exact individual node names/positions can be refined later.</div>
    </div><div class="paragonBoard"><div class="paragonGrid large" id="pGrid"></div></div></div></div>`;
  const grid=document.querySelector('#pGrid'); const byPos={};
  def.nodes.forEach(n=>{ const r=rRotateCoord(n.x,n.y,b.rotation); byPos[r.x+','+r.y]=n; });
  for(let y=0;y<ROUGH_BOARD_SIZE;y++){
    for(let x=0;x<ROUGH_BOARD_SIZE;x++){
      const n=byPos[x+','+y]; const cell=document.createElement('button');
      if(!n){ cell.className='pNode empty'; grid.appendChild(cell); continue; }
      const sel=b.nodes.includes(n.id); const avail=rAvailable(b,n,paragon.active);
      cell.className=`pNode ${n.type} ${sel?'selected':''} ${avail?'available':'locked'}`;
      cell.title=`${n.name}: ${n.bonus}`;
      cell.textContent=n.type==='glyph'?'◆':n.type==='legendary'?'★':n.type==='rare'?'R':n.type==='magic'?'M':n.type==='gate'?'⇄':n.type==='start'?'S':'·';
      cell.onclick=()=>togglePNode(n.id); grid.appendChild(cell);
    }
  }
};
// Re-render immediately if user is on the Paragon tab when the new file loads.
try { if(!document.querySelector('#paragonTab')?.classList.contains('hidden')) renderParagon(); } catch(e) { console.warn(e); }
