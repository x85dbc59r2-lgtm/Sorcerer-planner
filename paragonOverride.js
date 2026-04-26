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
const boardMasks = {
  start: [
    "........G........",".......nnn.......","........n........",".......nnn.......","......nmmmn......",".....nnrgrnn.....","....nnmnnnmnn....","...nnnnnGnnnnn...","..GnnmnnLnnmnnG..","....nnnnnnnnn....",".....nmrnnrmn....","......nnnnn......",".......n.n.......","......nnnnn......",".......nSn.......","........S........","........G........"
  ],
  burning_instinct: [
    "........G........",".......nnnn......",".......n..n......","......nn..nn.....",".....nnm..mnn....","....nnrn..nrn....","...nnmnn..nnmnn..","..nnnn..G..nnnn..","Gnnrn...L...nrnnG","..nnnn.....nnnn..","...mnnn...nnnm...","....nnr...rnn....",".....nn...nn.....","......nnnnn......",".......n.n.......",".......nnn.......","........G........"
  ],
  ceaseless_conduit: [
    "........G........",".......nnn.......","......nmnmn......",".....nnn.nnn.....","....rnn...nnr....","...nnn.....nnn...","..mnn..G....nnm..","..nn..nnn....nn..","Gnn..nnLnn....nnG","..nn..nnn....nn..","..mnn.......nnm..","...nnn.....nnn...","....rnn...nnr....",".....nnn.nnn.....","......nmnmn......",".......nnn.......","........G........"
  ],
  elemental_summoner: [
    "........G........","........n........",".......nnn.......","......nnrnn......",".....nnn.nnn.....","....nnm...mnn....","...nnn.G...nnn...","..nnnnnnnnnnnnn..","Gnnrnn..L..nnrnnG","..nnnnnnnnnnnnn..","...nnn.....nnn...","....mnn...nnm....",".....nnr.rnn.....","......nnnnn......",".......n.n.......",".......nnn.......","........G........"
  ],
  enchantment_master: [
    "........G........","......nnnnn......",".....nn...nn.....","....nmn...nmn....","...nnn..G..nnn...","..rnnn.....nnnr..","..nn...nnn...nn..",".nn..nnnLnnn..nn.","Gnnnnn.....nnnnnG",".nn..nnnnnnn..nn.","..nn...nnn...nn..","..rnnn.....nnnr..","...nnn.....nnn...","....nmn...nmn....",".....nn...nn.....","......nnnnn......","........G........"
  ],
  frigid_fate: [
    "........G........",".......nnn.......",".....nnn.nnn.....","....nnm...mnn....","...rnn.....nnr...","..nnn.......nnn..","..mnn..G....nnm..",".nnnnnnnnnnnnnnn.","Gnn...nnLnn...nnG",".nnnnnnnnnnnnnnn.","..mnn.......nnm..","..nnn.......nnn..","...rnn.....nnr...","....nnm...mnn....",".....nnn.nnn.....",".......nnn.......","........G........"
  ],
  fundamental_release: [
    "........G........","......nnnnn......",".....nn...nn.....","....nn.....nn....","...nnn..G..nnn...","..rnnn.....nnnr..","..nnn..m.m..nnn..",".nnnnnnnLnnnnnnn.","Gnnn.........nnnG",".nnnnnnnnnnnnnnn.","..nnn.......nnn..","..mnnn.....nnnm..","...rnn.....nnr...","....nn.....nn....",".....nn...nn.....","......nnnnn......","........G........"
  ],
  icefall: [
    "........G........","......nnnnn......",".....nn...nn.....","....nnm...mnn....","...nnn.....nnn...","..rnn..G....nnr..",".nnn..nnn....nnn.",".nn..nnLnn....nn.","GnnnnnnnnnnnnnnnG",".nn......nnnnnnn.",".nnn.....nnn..nn.","..rnn...nnn..nr..","...nnn.nnn...nn..","....nnnnn....n...",".....nnn....nn...","......nnnnnnn....","........G........"
  ],
  searing_heat: [
    "........G........",".......nnn.......","......nmnmn......",".....nn...nn.....","....nnn.G.nnn....","...rnn.....nnr...","..nnn..nnn..nnn..",".nn..nnnLnnn..nn.","Gnnnn.......nnnnG",".nn..nnnnnnn..nn.","..nnn.......nnn..","...rnn.....nnr...","....nnn...nnn....",".....nn...nn.....","......nmnmn......",".......nnn.......","........G........"
  ],
  static_surge: [
    "........G........",".......nnn.......",".......n.n.......","......nn.nn......",".....nnm.mnn.....","....rnn...nnr....","...nnn..G..nnn...","..nnn..nnn..nnn..","Gnn...nnLnn...nnG","..nnn..nnn..nnn..","...nnn.....nnn...","....rnn...nnr....",".....nnm.mnn.....","......nn.nn......",".......n.n.......",".......nnn.......","........G........"
  ]
};
const maskToType = { n:'normal', m:'magic', r:'rare', L:'legendary', G:'gate', S:'start' };
function rMakeBoard(id, name, variant, isStart){
  const mask = boardMasks[id] || boardMasks.static_surge;
  const nodes=[]; const seen=new Set();
  const add=(nid,x,y,type='normal',n='Paragon Node',b='')=>{
    const key=x+','+y; if(seen.has(key)) return; seen.add(key);
    nodes.push({id:nid,x,y,type,name:n,bonus:b||rNodeBonus(type,name)});
  };
  mask.forEach((row,y)=>{
    [...row].forEach((ch,x)=>{
      if(ch==='.') return;
      let type = maskToType[ch] || 'normal';
      let nid = `n_${x}_${y}`;
      let nodeName = 'Paragon Node';
      let bonus = '';
      if(type==='gate'){
        if(y===0) nid=rGateId('north');
        else if(y===16) nid=rGateId('south');
        else if(x===0) nid=rGateId('west');
        else if(x===16) nid=rGateId('east');
        else { type='glyph'; nid='glyph'; nodeName='Glyph Socket'; bonus='Slot a Glyph here'; }
      }
      if(type==='glyph'){ nid='glyph'; nodeName='Glyph Socket'; bonus='Slot a Glyph here'; }
      if(type==='legendary'){ nid='legendary'; nodeName=name; bonus=`Legendary node: ${name}`; }
      if(type==='start'){ nid='start'; nodeName='Starting Node'; bonus='Start spending Paragon points here'; }
      if(type==='rare') nodeName='Rare Node';
      if(type==='magic') nodeName='Magic Node';
      if(type==='normal') nodeName='Normal Node';
      add(nid,x,y,type,nodeName,bonus);
    });
  });
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
