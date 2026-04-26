const skillData = [
  {id:'spark',name:'Spark',cluster:'Basic',element:'Lightning',type:'Active',max:5,requires:0,desc:'Launch lightning that shocks enemies.',upgrades:['Enhanced Spark','Flickering Spark','Glinting Spark']},
  {id:'frost_bolt',name:'Frost Bolt',cluster:'Basic',element:'Frost',type:'Active',max:5,requires:0,desc:'Throw a bolt of frost that chills enemies.',upgrades:['Enhanced Frost Bolt','Flickering Frost Bolt','Glinting Frost Bolt']},
  {id:'fire_bolt',name:'Fire Bolt',cluster:'Basic',element:'Fire',type:'Active',max:5,requires:0,desc:'Hurl a flaming bolt that burns enemies.',upgrades:['Enhanced Fire Bolt','Flickering Fire Bolt','Glinting Fire Bolt']},
  {id:'arc_lash',name:'Arc Lash',cluster:'Basic',element:'Lightning',type:'Active',max:5,requires:0,desc:'Unleash arcing lightning in front of you.',upgrades:['Enhanced Arc Lash','Flickering Arc Lash','Glinting Arc Lash']},

  {id:'incinerate',name:'Incinerate',cluster:'Core',element:'Fire',type:'Active',max:5,requires:2,desc:'Channel a beam of fire that burns enemies.',upgrades:['Enhanced Incinerate','Destructive Incinerate','Greater Incinerate']},
  {id:'fireball',name:'Fireball',cluster:'Core',element:'Fire',type:'Active',max:5,requires:2,desc:'Throw an exploding ball of fire.',upgrades:['Enhanced Fireball','Destructive Fireball','Greater Fireball']},
  {id:'frozen_orb',name:'Frozen Orb',cluster:'Core',element:'Frost',type:'Active',max:5,requires:2,desc:'Release an orb that chills and explodes.',upgrades:['Enhanced Frozen Orb','Destructive Frozen Orb','Greater Frozen Orb']},
  {id:'ice_shards',name:'Ice Shards',cluster:'Core',element:'Frost',type:'Active',max:5,requires:2,desc:'Launch shards of ice at enemies.',upgrades:['Enhanced Ice Shards','Destructive Ice Shards','Greater Ice Shards']},
  {id:'chain_lightning',name:'Chain Lightning',cluster:'Core',element:'Lightning',type:'Active',max:5,requires:2,desc:'Unleash lightning that chains between targets.',upgrades:['Enhanced Chain Lightning','Destructive Chain Lightning','Greater Chain Lightning']},
  {id:'charged_bolts',name:'Charged Bolts',cluster:'Core',element:'Lightning',type:'Active',max:5,requires:2,desc:'Release several bolts of lightning along the ground.',upgrades:['Enhanced Charged Bolts','Destructive Charged Bolts','Greater Charged Bolts']},
  {id:'potent_warding',name:'Potent Warding',cluster:'Core',element:'Neutral',type:'Passive',max:3,requires:2,desc:'Casting non-Basic skills grants resistance and max resistance.',upgrades:[]},
  {id:'devastation',name:'Devastation',cluster:'Core',element:'Neutral',type:'Passive',max:3,requires:2,desc:'Increase maximum Mana.',upgrades:[]},
  {id:'elemental_dominance',name:'Elemental Dominance',cluster:'Core',element:'Neutral',type:'Passive',max:3,requires:2,desc:'Core skills deal increased damage when cast above a Mana threshold.',upgrades:[]},

  {id:'flame_shield',name:'Flame Shield',cluster:'Defensive',element:'Fire',type:'Active',max:5,requires:6,desc:'Engulf yourself in flames and become immune briefly.',upgrades:['Enhanced Flame Shield','Mystical Flame Shield','Shimmering Flame Shield']},
  {id:'teleport',name:'Teleport',cluster:'Defensive',element:'Lightning',type:'Active',max:5,requires:6,desc:'Transform into lightning, becoming unstoppable and surging to a target location.',upgrades:['Enhanced Teleport','Mystical Teleport','Shimmering Teleport']},
  {id:'ice_armor',name:'Ice Armor',cluster:'Defensive',element:'Frost',type:'Active',max:5,requires:6,desc:'Create a barrier of ice around yourself.',upgrades:['Enhanced Ice Armor','Mystical Ice Armor','Shimmering Ice Armor']},
  {id:'frost_nova',name:'Frost Nova',cluster:'Defensive',element:'Frost',type:'Active',max:5,requires:6,desc:'Unleash a torrent of frost that freezes enemies around you.',upgrades:['Enhanced Frost Nova','Mystical Frost Nova','Shimmering Frost Nova']},
  {id:'elemental_attunement',name:'Elemental Attunement',cluster:'Defensive',element:'Neutral',type:'Passive',max:3,requires:6,desc:'Lucky Hit: critical strikes can reset a Defensive cooldown.',upgrades:[]},
  {id:'glass_cannon',name:'Glass Cannon',cluster:'Defensive',element:'Neutral',type:'Passive',max:3,requires:6,desc:'Deal more damage but take more damage.',upgrades:[]},
  {id:'precision_magic',name:'Precision Magic',cluster:'Defensive',element:'Neutral',type:'Passive',max:3,requires:6,desc:'Increase Lucky Hit chance.',upgrades:[]},

  {id:'ice_blades',name:'Ice Blades',cluster:'Conjuration',element:'Frost',type:'Active',max:5,requires:11,desc:'Conjure ice blades that slash enemies.',upgrades:['Enhanced Ice Blades','Summoned Ice Blades','Invoked Ice Blades']},
  {id:'hydra',name:'Hydra',cluster:'Conjuration',element:'Fire',type:'Active',max:5,requires:11,desc:'Summon a multi-headed hydra that spits fire.',upgrades:['Enhanced Hydra','Summoned Hydra','Invoked Hydra']},
  {id:'lightning_spear',name:'Lightning Spear',cluster:'Conjuration',element:'Lightning',type:'Active',max:5,requires:11,desc:'Conjure a spear of lightning that seeks enemies.',upgrades:['Enhanced Lightning Spear','Summoned Lightning Spear','Invoked Lightning Spear']},
  {id:'familiar',name:'Familiar',cluster:'Conjuration',element:'Neutral',type:'Active',max:5,requires:11,desc:'Summon an elemental familiar to assist you.',upgrades:['Enhanced Familiar','Summoned Familiar','Invoked Familiar']},
  {id:'conjuration_mastery',name:'Conjuration Mastery',cluster:'Conjuration',element:'Neutral',type:'Passive',max:3,requires:11,desc:'Gain bonuses while you have active conjurations.',upgrades:[]},
  {id:'align_elements',name:'Align the Elements',cluster:'Conjuration',element:'Neutral',type:'Passive',max:3,requires:11,desc:'Gain damage reduction against Elites over time.',upgrades:[]},
  {id:'mana_shield',name:'Mana Shield',cluster:'Conjuration',element:'Neutral',type:'Passive',max:3,requires:11,desc:'Gain damage reduction after spending Mana.',upgrades:[]},
  {id:'protection',name:'Protection',cluster:'Conjuration',element:'Neutral',type:'Passive',max:3,requires:11,desc:'Using a cooldown grants a barrier.',upgrades:[]},

  {id:'firewall',name:'Firewall',cluster:'Mastery',element:'Fire',type:'Active',max:5,requires:16,desc:'Create a wall of flames that burns enemies.',upgrades:['Enhanced Firewall','Mage’s Firewall','Wizard’s Firewall']},
  {id:'blizzard',name:'Blizzard',cluster:'Mastery',element:'Frost',type:'Active',max:5,requires:16,desc:'Summon an icy blizzard that chills and damages enemies.',upgrades:['Enhanced Blizzard','Mage’s Blizzard','Wizard’s Blizzard']},
  {id:'meteor',name:'Meteor',cluster:'Mastery',element:'Fire',type:'Active',max:5,requires:16,desc:'Call down a meteor that burns the ground.',upgrades:['Enhanced Meteor','Mage’s Meteor','Wizard’s Meteor']},
  {id:'ball_lightning',name:'Ball Lightning',cluster:'Mastery',element:'Lightning',type:'Active',max:5,requires:16,desc:'Release a ball of lightning that zaps nearby enemies.',upgrades:['Enhanced Ball Lightning','Mage’s Ball Lightning','Wizard’s Ball Lightning']},
  {id:'inner_flames',name:'Inner Flames',cluster:'Mastery',element:'Fire',type:'Passive',max:3,requires:16,desc:'Pyromancy damage increases while Healthy.',upgrades:[]},
  {id:'devouring_blaze',name:'Devouring Blaze',cluster:'Mastery',element:'Fire',type:'Passive',max:3,requires:16,desc:'Deal increased critical strike damage to burning enemies.',upgrades:[]},
  {id:'permafrost',name:'Permafrost',cluster:'Mastery',element:'Frost',type:'Passive',max:3,requires:16,desc:'Frost skills deal increased damage to elites.',upgrades:[]},
  {id:'hoarfrost',name:'Hoarfrost',cluster:'Mastery',element:'Frost',type:'Passive',max:3,requires:16,desc:'Deal increased damage to chilled and frozen enemies.',upgrades:[]},
  {id:'static_discharge',name:'Static Discharge',cluster:'Mastery',element:'Lightning',type:'Passive',max:3,requires:16,desc:'Lightning critical strikes can form Crackling Energy.',upgrades:[]},
  {id:'shocking_impact',name:'Shocking Impact',cluster:'Mastery',element:'Lightning',type:'Passive',max:3,requires:16,desc:'Stunning enemies deals lightning damage to them.',upgrades:[]},

  {id:'deep_freeze',name:'Deep Freeze',cluster:'Ultimate',element:'Frost',type:'Ultimate',max:1,requires:23,desc:'Encase yourself in ice, becoming immune and damaging/freezing enemies.',upgrades:['Prime Deep Freeze','Supreme Deep Freeze']},
  {id:'inferno',name:'Inferno',cluster:'Ultimate',element:'Fire',type:'Ultimate',max:1,requires:23,desc:'Summon a fiery serpent that burns enemies.',upgrades:['Prime Inferno','Supreme Inferno']},
  {id:'unstable_currents',name:'Unstable Currents',cluster:'Ultimate',element:'Lightning',type:'Ultimate',max:1,requires:23,desc:'Lightning surges through you, triggering extra shock skills.',upgrades:['Prime Unstable Currents','Supreme Unstable Currents']},
  {id:'fiery_surge',name:'Fiery Surge',cluster:'Ultimate',element:'Fire',type:'Passive',max:3,requires:23,desc:'Killing burning enemies increases Mana regeneration.',upgrades:[]},
  {id:'endless_pyre',name:'Endless Pyre',cluster:'Ultimate',element:'Fire',type:'Passive',max:3,requires:23,desc:'Burning damage increases the longer enemies burn.',upgrades:[]},
  {id:'warmth',name:'Warmth',cluster:'Ultimate',element:'Fire',type:'Passive',max:3,requires:23,desc:'Heal over time for nearby burning enemies.',upgrades:[]},
  {id:'icy_veil',name:'Icy Veil',cluster:'Ultimate',element:'Frost',type:'Passive',max:3,requires:23,desc:'Barriers last longer.',upgrades:[]},
  {id:'snap_freeze',name:'Snap Freeze',cluster:'Ultimate',element:'Frost',type:'Passive',max:3,requires:23,desc:'Frost skills have a chance to instantly freeze.',upgrades:[]},
  {id:'cold_front',name:'Cold Front',cluster:'Ultimate',element:'Frost',type:'Passive',max:3,requires:23,desc:'While you have a barrier, chill application increases.',upgrades:[]},
  {id:'coursing_currents',name:'Coursing Currents',cluster:'Ultimate',element:'Lightning',type:'Passive',max:3,requires:23,desc:'Shock skill critical chance increases after hits.',upgrades:[]},
  {id:'electrocution',name:'Electrocution',cluster:'Ultimate',element:'Lightning',type:'Passive',max:3,requires:23,desc:'Enemies deal reduced damage after being critically struck by Shock skills.',upgrades:[]},
  {id:'convulsions',name:'Convulsions',cluster:'Ultimate',element:'Lightning',type:'Passive',max:3,requires:23,desc:'Shock skills can stun enemies.',upgrades:[]},

  {id:'avalanche',name:'Avalanche',cluster:'Key Passive',element:'Frost',type:'Key Passive',max:1,requires:33,desc:'Frost skills can make your next Ice Shards, Frozen Orb, or Blizzard consume no Mana and deal more damage.',upgrades:[]},
  {id:'shatter',name:'Shatter',cluster:'Key Passive',element:'Frost',type:'Key Passive',max:1,requires:33,desc:'After Freeze expires, enemies explode for a portion of damage dealt while frozen.',upgrades:[]},
  {id:'overflowing_energy',name:'Overflowing Energy',cluster:'Key Passive',element:'Lightning',type:'Key Passive',max:1,requires:33,desc:'Crackling Energy hits additional enemies and reduces Shock cooldowns.',upgrades:[]},
  {id:'vyrs_mastery',name:'Vyr’s Mastery',cluster:'Key Passive',element:'Lightning',type:'Key Passive',max:1,requires:33,desc:'Shock skills grant bonuses and reduce damage from close enemies.',upgrades:[]},
  {id:'combustion',name:'Combustion',cluster:'Key Passive',element:'Fire',type:'Key Passive',max:1,requires:33,desc:'Burning effects deal increased damage for each unique source of burning.',upgrades:[]},
  {id:'esus_ferocity',name:'Esu’s Ferocity',cluster:'Key Passive',element:'Fire',type:'Key Passive',max:1,requires:33,desc:'Critical strikes and Pyromancy hits build fire-focused damage bonuses.',upgrades:[]},
  {id:'enlightenment',name:'Enlightenment',cluster:'Key Passive',element:'Neutral',type:'Key Passive',max:1,requires:33,desc:'Casting different elements builds Enlightenment for broad elemental bonuses.',upgrades:[]}
];

const clusters = ['Basic','Core','Defensive','Conjuration','Mastery','Ultimate','Key Passive'];
const state = JSON.parse(localStorage.getItem('sorcPlannerState') || '{}');
const selected = state.selected || {};
let buildName = state.buildName || 'My Sorcerer Build';
let activeFilter = 'All';
const totalMaxPoints = 58;

function spent(){ return Object.values(selected).reduce((a,b)=>a+b,0); }
function unlocked(skill){ return spent() >= skill.requires || (selected[skill.id]||0)>0; }
function save(){ localStorage.setItem('sorcPlannerState', JSON.stringify({selected, buildName})); }
function point(skill, delta){
  const current = selected[skill.id] || 0;
  const next = Math.max(0, Math.min(skill.max, current + delta));
  if(delta > 0 && !unlocked(skill)) return;
  if(delta > 0 && spent() >= totalMaxPoints) return;
  if(skill.type === 'Key Passive' && delta > 0){
    skillData.filter(s=>s.type==='Key Passive').forEach(s=>selected[s.id]=0);
  }
  selected[skill.id] = next;
  save(); render();
}
function resetBuild(){ if(confirm('Reset all points?')){ Object.keys(selected).forEach(k=>delete selected[k]); save(); render(); } }
function exportBuild(){
  const payload = {buildName, pointsSpent: spent(), selected, skills: skillData.filter(s=>(selected[s.id]||0)>0).map(s=>({name:s.name, rank:selected[s.id]}))};
  navigator.clipboard?.writeText(JSON.stringify(payload,null,2));
  document.querySelector('#exportText').value = JSON.stringify(payload,null,2);
}
function importBuild(){
  try { const data = JSON.parse(document.querySelector('#exportText').value); Object.keys(selected).forEach(k=>delete selected[k]); Object.assign(selected, data.selected || {}); buildName = data.buildName || buildName; save(); render(); }
  catch(e){ alert('Paste a valid build JSON export first.'); }
}
function render(){
  document.querySelector('#buildName').value = buildName;
  document.querySelector('#spent').textContent = `${spent()} / ${totalMaxPoints}`;
  document.querySelector('#activeCount').textContent = skillData.filter(s=>s.type==='Active' || s.type==='Ultimate').filter(s=>(selected[s.id]||0)>0).length;
  document.querySelector('#keyPassive').textContent = skillData.find(s=>s.type==='Key Passive' && (selected[s.id]||0)>0)?.name || 'None';
  document.querySelector('#filters').innerHTML = ['All','Fire','Frost','Lightning','Neutral'].map(f=>`<button class="filter ${activeFilter===f?'on':''}" onclick="activeFilter='${f}';render()">${f}</button>`).join('');
  const tree = document.querySelector('#tree'); tree.innerHTML='';
  clusters.forEach(cluster=>{
    const skills = skillData.filter(s=>s.cluster===cluster && (activeFilter==='All' || s.element===activeFilter));
    if(!skills.length) return;
    const section = document.createElement('section');
    section.className = 'cluster';
    section.innerHTML = `<div class="clusterHead"><h2>${cluster}</h2><span>Unlock: ${skills[0].requires} pts</span></div><div class="nodes"></div>`;
    const nodes = section.querySelector('.nodes');
    skills.forEach(skill=>{
      const rank = selected[skill.id] || 0;
      const lock = !unlocked(skill);
      const div = document.createElement('article');
      div.className = `card ${skill.element.toLowerCase()} ${rank?'picked':''} ${lock?'locked':''}`;
      div.innerHTML = `<div class="icon">${skill.element==='Fire'?'🔥':skill.element==='Frost'?'❄️':skill.element==='Lightning'?'⚡':'✦'}</div><div class="content"><div class="row"><h3>${skill.name}</h3><span class="pill">${skill.type}</span></div><p>${skill.desc}</p><small>${skill.upgrades.join(' · ') || 'Passive ranks only'}</small><div class="controls"><button onclick="point(skillData.find(s=>s.id==='${skill.id}'),-1)">−</button><strong>${rank}/${skill.max}</strong><button onclick="point(skillData.find(s=>s.id==='${skill.id}'),1)">+</button>${lock?`<em>Requires ${skill.requires} pts</em>`:''}</div></div>`;
      nodes.appendChild(div);
    });
    tree.appendChild(section);
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#buildName').addEventListener('input', e=>{ buildName=e.target.value; save(); });
  render();
});
