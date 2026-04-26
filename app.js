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

// ===== Gear planner update =====
const gearSlots = ['Helm','Chest','Gloves','Pants','Boots','Amulet','Ring 1','Ring 2','Weapon','Focus'];
const slotBase = s => s.startsWith('Ring') ? 'Ring' : s;

const gearAffixes = [
  {name:'+ Intelligence', slots:['Helm','Chest','Gloves','Pants','Boots','Amulet','Ring','Weapon','Focus']},
  {name:'+ % Intelligence', slots:['Helm','Amulet','Ring','Weapon','Focus']},
  {name:'+ Maximum Life', slots:['Helm','Chest','Pants','Amulet','Ring','Weapon','Focus']},
  {name:'+ Armor', slots:['Helm','Chest','Pants','Boots','Amulet']},
  {name:'+ Resistance to All Elements', slots:['Helm','Chest','Pants','Boots','Amulet','Ring']},
  {name:'+ Fire Resistance', slots:['Helm','Chest','Pants','Boots','Ring']},
  {name:'+ Cold Resistance', slots:['Helm','Chest','Pants','Boots','Ring']},
  {name:'+ Lightning Resistance', slots:['Helm','Chest','Pants','Boots','Ring']},
  {name:'+ Cooldown Reduction', slots:['Helm','Amulet','Focus']},
  {name:'+ Resource Cost Reduction', slots:['Helm','Amulet','Weapon','Focus']},
  {name:'+ Mana per Second', slots:['Helm','Chest','Pants','Boots','Amulet','Ring','Focus']},
  {name:'+ Mana on Kill', slots:['Helm','Weapon','Focus']},
  {name:'+ Maximum Mana', slots:['Helm','Amulet','Ring','Focus']},
  {name:'+ Movement Speed', slots:['Boots','Amulet']},
  {name:'+ Movement Speed After Killing an Elite', slots:['Boots']},
  {name:'+ Evade Charges', slots:['Boots']},
  {name:'Attacks Reduce Evade Cooldown', slots:['Boots']},
  {name:'+ Critical Strike Chance', slots:['Gloves','Ring','Amulet','Focus']},
  {name:'+ Critical Strike Damage', slots:['Gloves','Ring','Amulet','Weapon','Focus']},
  {name:'+ Vulnerable Damage', slots:['Ring','Amulet','Weapon','Focus']},
  {name:'+ Overpower Damage', slots:['Weapon','Ring','Amulet']},
  {name:'+ Attack Speed', slots:['Gloves','Amulet','Ring']},
  {name:'+ Lucky Hit Chance', slots:['Gloves','Ring','Amulet','Focus','Weapon']},
  {name:'+ Lucky Hit: Chance to Restore Resource', slots:['Gloves','Ring','Focus','Weapon']},
  {name:'+ Damage', slots:['Weapon','Focus','Ring','Amulet']},
  {name:'+ Non-Physical Damage', slots:['Weapon','Focus','Amulet','Ring']},
  {name:'+ Fire Damage', slots:['Weapon','Focus','Amulet','Ring']},
  {name:'+ Frost Damage', slots:['Weapon','Focus','Amulet','Ring']},
  {name:'+ Lightning Damage', slots:['Weapon','Focus','Amulet','Ring']},
  {name:'+ Burning Damage', slots:['Weapon','Focus','Amulet','Ring']},
  {name:'+ Crackling Energy Damage', slots:['Weapon','Focus','Amulet','Ring']},
  {name:'+ Ice Spike Damage', slots:['Weapon','Focus','Amulet','Ring']},
  {name:'+ Damage to Burning Enemies', slots:['Weapon','Focus','Ring','Amulet','Gloves']},
  {name:'+ Damage to Chilled Enemies', slots:['Weapon','Focus','Ring','Amulet','Gloves']},
  {name:'+ Damage to Frozen Enemies', slots:['Weapon','Focus','Ring','Amulet','Gloves']},
  {name:'+ Damage to Stunned Enemies', slots:['Weapon','Focus','Ring','Amulet','Gloves']},
  {name:'+ Damage to Close Enemies', slots:['Weapon','Focus','Ring','Amulet','Gloves']},
  {name:'+ Damage to Distant Enemies', slots:['Weapon','Focus','Ring','Amulet','Gloves']},
  {name:'+ Basic Skill Damage', slots:['Weapon','Focus','Gloves','Amulet']},
  {name:'+ Core Skill Damage', slots:['Weapon','Focus','Gloves','Amulet']},
  {name:'+ Pyromancy Skill Damage', slots:['Weapon','Focus','Gloves','Amulet']},
  {name:'+ Frost Skill Damage', slots:['Weapon','Focus','Gloves','Amulet']},
  {name:'+ Shock Skill Damage', slots:['Weapon','Focus','Gloves','Amulet']},
  {name:'+ Conjuration Skill Damage', slots:['Weapon','Focus','Gloves','Amulet']},
  {name:'+ Mastery Skill Damage', slots:['Weapon','Focus','Gloves','Amulet']},
  {name:'+ Ultimate Skill Damage', slots:['Weapon','Focus','Amulet']},
  {name:'+ Ranks to Fireball', slots:['Gloves']},
  {name:'+ Ranks to Chain Lightning', slots:['Gloves']},
  {name:'+ Ranks to Frozen Orb', slots:['Gloves']},
  {name:'+ Ranks to Ice Shards', slots:['Gloves']},
  {name:'+ Ranks to Charged Bolts', slots:['Gloves']},
  {name:'+ Ranks to Incinerate', slots:['Gloves']},
  {name:'+ Ranks to Ball Lightning', slots:['Gloves','Focus']},
  {name:'+ Ranks to Meteor', slots:['Gloves','Helm']},
  {name:'+ Ranks to Blizzard', slots:['Gloves']},
  {name:'+ Ranks to Firewall', slots:['Gloves']},
  {name:'+ Ranks to Teleport', slots:['Boots','Chest','Weapon']},
  {name:'+ Ranks to Frost Nova', slots:['Boots','Pants']},
  {name:'+ Ranks to Flame Shield', slots:['Chest']},
  {name:'+ Ranks to Ice Armor', slots:['Chest','Pants']},
  {name:'+ Ranks to Glass Cannon', slots:['Amulet','Chest']},
  {name:'+ Ranks to Devouring Blaze', slots:['Amulet']},
  {name:'+ Ranks to Conjuration Mastery', slots:['Amulet']},
  {name:'+ Ranks to Elemental Attunement', slots:['Chest','Amulet']},
  {name:'+ Ranks to Shocking Impact', slots:['Chest','Amulet']},
  {name:'+ Ranks to Basic Skills', slots:['Weapon','Amulet']},
  {name:'+ Ranks to Core Skills', slots:['Weapon','Amulet']},
  {name:'+ Ranks to Pyromancy Skills', slots:['Gloves','Amulet']},
  {name:'+ Ranks to Frost Skills', slots:['Gloves','Amulet']},
  {name:'+ Ranks to Shock Skills', slots:['Gloves','Amulet']},
  {name:'+ Chance for Fireball Projectiles to Cast Twice', slots:['Weapon','Focus','Gloves']},
  {name:'+ Chance for Chain Lightning to Hit Twice', slots:['Weapon','Focus','Pants']},
  {name:'+ Chance for Ball Lightning Projectiles to Cast Twice', slots:['Weapon','Focus']},
  {name:'+ Chance for Ice Shards to Cast Twice', slots:['Weapon','Focus','Helm']},
  {name:'+ Chance for Frozen Orb Projectiles to Cast Twice', slots:['Weapon','Focus']},
  {name:'+ Fireball Attack Speed', slots:['Gloves','Weapon','Focus']},
  {name:'+ Ball Lightning Projectile Speed', slots:['Weapon','Focus']},
  {name:'+ Firewall Size', slots:['Gloves']},
  {name:'+ Frost Nova Size', slots:['Pants','Boots']},
  {name:'+ Damage Reduction', slots:['Chest','Pants','Amulet']},
  {name:'+ Damage Reduction from Close Enemies', slots:['Chest','Pants','Amulet']},
  {name:'+ Damage Reduction from Burning Enemies', slots:['Chest','Pants','Amulet']},
  {name:'+ Barrier Generation', slots:['Helm','Chest','Pants','Amulet','Ring']},
  {name:'+ Healing Received', slots:['Helm','Chest','Pants','Amulet','Ring']}
];

const aspects = [
  'Aspect of Control','Aspect of Concentration','Aspect of Disobedience','Aspect of Might','Aspect of the Protector','Aspect of the Unwavering','Snowguard’s Aspect','Frostblitz Aspect','Everliving Aspect',
  'Aspect of Three Curses','Aspect of Ancient Flame','Aspect of Engulfing Flames','Incendiary Aspect','Flamewalker’s Aspect','Aspect of Conflagration','Aspect of Piercing Cold','Glacial Aspect','Aspect of Frozen Orbit','Aspect of Frozen Memories','Storm Swell Aspect','Recharging Aspect','Aspect of the Unbroken Tether','Gravitational Aspect','Mage-Lord’s Aspect','Prodigy’s Aspect','Aspect of Efficiency','Elementalist’s Aspect','Conceited Aspect','Accelerating Aspect','Rapid Aspect','Edgemaster’s Aspect','Aspect of Inner Calm'
];

const uniqueItems = [
  {id:'custom_unique', name:'Custom Unique (type affixes manually)', slot:'Any', affixes:['','','',''], effect:''},
  {id:'harlequin_crest', name:'Harlequin Crest', slot:'Helm', affixes:['+ Maximum Life','+ Cooldown Reduction','+ Resource Generation','+ Ranks to All Skills'], effect:'Mythic unique helm.'},
  {id:'godslayer_crown', name:'Godslayer Crown', slot:'Helm', affixes:['+ Maximum Life','+ Cooldown Reduction','+ Damage to Elites','+ Crowd Control Duration'], effect:'Pulls and damages elites after crowd control/stagger.'},
  {id:'starfall_coronet', name:'Starfall Coronet', slot:'Helm', affixes:['+ Ranks to Meteor','+ Cooldown Reduction','+ Meteor Damage','+ Maximum Life'], effect:'Meteor becomes charge/cooldown based.'},
  {id:'hail_of_verglas', name:'Hail of Verglas', slot:'Helm', affixes:['+ Maximum Cold Resistance / Cold Resistance','+ Ranks to Ice Shards','+ % Intelligence','+ Attack Speed'], effect:'Ice Shards spreads with extra shards and ramps damage.'},

  {id:'raiment_infinite', name:'Raiment of the Infinite', slot:'Chest', affixes:['+ Intelligence','+ Ranks to Glass Cannon','+ Ranks to Elemental Attunement','+ Ranks to Shocking Impact'], effect:'Teleport pulls in and stuns nearby enemies.'},
  {id:'tyraels_might', name:'Tyrael’s Might', slot:'Chest', affixes:['+ Resistance to All Elements','+ Damage Reduction','+ Movement Speed','+ Maximum Resistance to All Elements'], effect:'Mythic unique chest.'},
  {id:'shroud_false_death', name:'Shroud of False Death', slot:'Chest', affixes:['+ All Stats','+ Maximum Life','+ Resource Generation','+ Movement Speed'], effect:'Mythic unique chest.'},
  {id:'soulbrand', name:'Soulbrand', slot:'Chest', affixes:['+ Potion Capacity','+ Barrier Generation','+ Damage Reduction','+ Maximum Life'], effect:'Potion becomes barrier-focused.'},

  {id:'flameweaver', name:'Flameweaver', slot:'Gloves', affixes:['+ Attack Speed','+ Firewall Size','+ Chance for Fire Bolt Projectiles to Cast Twice','+ Ranks to Pyromancy Skills'], effect:'Fire Bolt splits when cast through Firewall.'},
  {id:'gloves_illuminator', name:'Gloves of the Illuminator', slot:'Gloves', affixes:['+ Critical Strike Chance','+ Fireball Attack Speed','+ Mana when Fireball Explodes','+ Ranks to Fireball'], effect:'Fireball bounces while travelling.'},
  {id:'fists_fate', name:'Fists of Fate', slot:'Gloves', affixes:['+ Lucky Hit Chance','+ Critical Strike Chance','+ Attack Speed','+ Lucky Hit: Random Control Effect'], effect:'Attacks randomly deal between low and very high damage.'},
  {id:'frostburn', name:'Frostburn', slot:'Gloves', affixes:['+ Fire and Cold Damage','+ Attack Speed','+ Lucky Hit Chance','+ Lucky Hit: Freeze Chance'], effect:'Lucky Hit chance to freeze enemies.'},
  {id:'sidhe_bindings', name:'Sidhe Bindings', slot:'Gloves', affixes:['+ Non-Physical Damage','+ Familiar Explosion Size','+ Chance for Familiar to Hit Twice','+ Ranks to Familiar'], effect:'Familiar summons all three elemental variants.'},

  {id:'axial_conduit', name:'Axial Conduit', slot:'Pants', affixes:['+ Chance for Chain Lightning to Hit Twice','+ Damage Reduction','+ Resource Generation and Maximum','+ Ranks to Chain Lightning'], effect:'Chain Lightning alternates between orbiting and seeking enemies.'},
  {id:'iceheart_brais', name:'Iceheart Brais', slot:'Pants', affixes:['+ Maximum Life','+ Frost Nova Size','+ Cold Resistance','+ Shatter Damage Echo'], effect:'Frozen enemies can unleash Frost Nova on death.'},
  {id:'tibaults_will', name:'Tibault’s Will', slot:'Pants', affixes:['+ Maximum Life','+ Maximum Resource','+ Damage Reduction while Unstoppable','+ Damage'], effect:'Gain damage and resource after becoming Unstoppable.'},
  {id:'temerity', name:'Temerity', slot:'Pants', affixes:['+ Maximum Life','+ Healing Received','+ Potion Healing','+ Barrier Generation'], effect:'Healing beyond full Life grants a barrier.'},

  {id:'esus_heirloom', name:'Esu’s Heirloom', slot:'Boots', affixes:['Evade Grants Movement Speed','+ Movement Speed','+ Movement Speed After Killing an Elite','+ Critical Strike Damage'], effect:'Critical Strike Chance scales from Movement Speed bonus.'},
  {id:'flickerstep', name:'Flickerstep', slot:'Boots', affixes:['+ Movement Speed','+ Damage Reduction','+ Ultimate Damage','+ Evade Cooldown Reduction'], effect:'Evading through enemies reduces Ultimate cooldown.'},
  {id:'penitent_greaves', name:'Penitent Greaves', slot:'Boots', affixes:['+ Movement Speed','+ Cold Resistance','+ Damage to Chilled Enemies','+ Chill Trail'], effect:'Leave a chilling trail behind you.'},
  {id:'yens_blessing', name:'Yen’s Blessing', slot:'Boots', affixes:['+ Movement Speed','+ Resource Cost Reduction','+ Resistance to All Elements','+ Lucky Hit Chance'], effect:'Can automatically cast a non-mobility, non-ultimate skill.'},

  {id:'esu_cameo', name:'Esadora’s Overflowing Cameo', slot:'Amulet', affixes:['+ Resistance to All Elements','+ % Intelligence','+ Crackling Energy Damage','+ Movement Speed'], effect:'Crackling Energy can release a lightning nova.'},
  {id:'fr_in_winterglass', name:'Fractured Winterglass', slot:'Amulet', affixes:['+ Resistance to All Elements','+ Non-Physical Damage','+ Chance for Frozen Orb Projectiles to Cast Twice','+ Ranks to Conjuration Mastery'], effect:'Frozen Orb can spawn conjurations.'},
  {id:'banished_lords_talisman', name:'Banished Lord’s Talisman', slot:'Amulet', affixes:['+ Resistance to All Elements','+ Maximum Life','+ Overpower Damage','+ Critical Strike Chance'], effect:'Resource spending empowers Overpower.'},
  {id:'melted_heart_selig', name:'Melted Heart of Selig', slot:'Amulet', affixes:['+ Resistance to All Elements','+ Movement Speed','+ Resource Generation','+ Maximum Resource'], effect:'Mythic unique amulet.'},

  {id:'blue_rose', name:'Blue Rose', slot:'Ring', affixes:['+ Resistance to All Elements / Cold Resistance','+ Critical Strike Chance','+ Cold Damage','+ Ice Spike Damage'], effect:'Lucky Hit can form exploding Ice Spikes.'},
  {id:'tal_rasha_loop', name:'Tal Rasha’s Iridescent Loop', slot:'Ring', affixes:['+ Resistance to All Elements','+ Cooldown Reduction','+ Non-Physical Damage','+ Lucky Hit Chance'], effect:'Elemental damage increases damage per element used.'},
  {id:'xfals_corroded_signet', name:'X’Fal’s Corroded Signet', slot:'Ring', affixes:['+ Resistance to All Elements','+ Damage Over Time','+ Lucky Hit Chance','+ Cooldown Reduction'], effect:'Damage over time effects can erupt.'},
  {id:'ring_starless_skies', name:'Ring of Starless Skies', slot:'Ring', affixes:['+ Resistance to All Elements','+ Attack Speed','+ Critical Strike Chance','+ Lucky Hit Chance'], effect:'Mythic unique ring that rewards resource spending.'},
  {id:'galvanic_azurite', name:'Galvanic Azurite', slot:'Ring', affixes:['+ Resistance to All Elements','+ Lightning Damage','+ Crackling Energy Damage','+ Lucky Hit Chance'], effect:'Sorcerer unique ring; verify current patch values.'},

  {id:'flamescar', name:'Flamescar', slot:'Weapon', affixes:['+ Life On Hit / Lucky Hit Fire Damage','+ Intelligence','+ Lucky Hit Chance','+ Ranks to Incinerate'], effect:'Incinerate shoots seeking embers.'},
  {id:'staff_endless_rage', name:'Staff of Endless Rage', slot:'Weapon', affixes:['+ Fire Damage','+ Intelligence','+ Fireball Projectile Speed','+ Chance for Fireball Projectiles to Cast Twice'], effect:'Every third Fireball fires extra projectiles.'},
  {id:'staff_lam_esen', name:'Staff of Lam Esen', slot:'Weapon', affixes:['+ Lightning Damage','+ Intelligence','+ Chance for Charged Bolts Projectiles to Cast Twice','+ Resource Cost Reduction'], effect:'Charged Bolts are attracted to enemies and last longer.'},
  {id:'the_oculus', name:'The Oculus', slot:'Weapon', affixes:['+ Maximum Evade Charges','+ Intelligence','+ Teleport Damage','+ Ranks to Teleport'], effect:'Gain Teleport Enchantment for free.'},
  {id:'vox_omnium', name:'Vox Omnium', slot:'Weapon', affixes:['+ Lucky Hit Chance','+ Intelligence','+ Core Attack Speed','+ Ranks to Basic Skills'], effect:'Core Skills also fire basic projectiles.'},
  {id:'orisvane', name:'Orisvane', slot:'Weapon', affixes:['+ Intelligence','+ Maximum Life','+ Non-Physical Damage','+ Ranks to Core Skills'], effect:'Defensive skills not on your bar grant damage and enchantment effects.'},
  {id:'ahavarion', name:'Ahavarion, Spear of Lycander', slot:'Weapon', affixes:['+ All Stats','+ Movement Speed','+ Critical Strike Chance','+ Lucky Hit Chance'], effect:'Mythic unique staff.'},
  {id:'doombringer', name:'Doombringer', slot:'Weapon', affixes:['+ Maximum Life','+ Damage','+ Lucky Hit: Heal','+ Core Skill Damage'], effect:'Mythic unique sword.'},

  {id:'okuns_catalyst', name:'Okun’s Catalyst', slot:'Focus', affixes:['Ball Lightning Can Be Cast While Moving','+ Attack Speed after Defensive Skill','+ Damage Reduction per active Ball Lightning','+ Ranks to Ball Lightning'], effect:'Ball Lightning orbits you and creates a static field.'},
  {id:'strike_stormhorn', name:'Strike of Stormhorn', slot:'Focus', affixes:['Super Ball Lightning Modifier','+ Critical Strike Damage','+ Ball Lightning Projectile Speed','+ Ranks to Ball Lightning'], effect:'Ball Lightning can splash/stun and create Super Ball Lightning.'}
];

function emptyGear(){
  const g={}; gearSlots.forEach(s=>g[s]={itemType:'Legendary', uniqueId:'', uniqueName:'', aspect:'', affixes:['','','',''], notes:''}); return g;
}
let gear = state.gear || emptyGear();
gearSlots.forEach(s=>{ if(!gear[s]) gear[s]=emptyGear()[s]; });

function switchTab(tab){
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on', b.dataset.tab===tab));
  document.querySelectorAll('.tabPage').forEach(p=>p.classList.add('hidden'));
  document.querySelector('#'+tab+'Tab').classList.remove('hidden');
  if(tab==='gear') renderGear();
}

function gearFilledCount(){
  return gearSlots.filter(s=>gear[s]?.uniqueId || gear[s]?.aspect || (gear[s]?.affixes||[]).some(Boolean)).length;
}

save = function(){
  localStorage.setItem('sorcPlannerState', JSON.stringify({selected, buildName, gear}));
};

const oldPoint = point;
point = function(skill, delta){ oldPoint(skill, delta); renderHeaderGear(); };

function renderHeaderGear(){
  const gc=document.querySelector('#gearCount'); if(gc) gc.textContent = `${gearFilledCount()} / ${gearSlots.length}`;
}

function allowedUniques(slot){
  const base=slotBase(slot);
  return uniqueItems.filter(u=>u.id==='custom_unique' || u.slot===base || u.slot==='Any');
}
function allowedAffixes(slot){
  const base=slotBase(slot);
  return gearAffixes.filter(a=>a.slots.includes(base)).map(a=>a.name).sort();
}
function uniqueById(id){ return uniqueItems.find(u=>u.id===id); }

function setGear(slot, field, value){
  if(!gear[slot]) gear[slot]=emptyGear()[slot];
  gear[slot][field]=value;
  save(); renderHeaderGear();
}
function setAffix(slot, index, value){
  gear[slot].affixes[index]=value;
  save(); renderHeaderGear();
}
function setUnique(slot, id){
  const item=uniqueById(id);
  if(!id){ gear[slot]={...gear[slot], itemType:'Legendary', uniqueId:'', uniqueName:'', affixes:gear[slot].affixes || ['','','','']}; }
  else if(id==='custom_unique'){ gear[slot]={...gear[slot], itemType:'Unique', uniqueId:id, uniqueName:'Custom Unique', aspect:'', affixes:['','','','']}; }
  else if(item){ gear[slot]={...gear[slot], itemType:'Unique', uniqueId:id, uniqueName:item.name, aspect:'', affixes:[...item.affixes].slice(0,4)}; }
  save(); renderGear(); renderHeaderGear();
}

function renderGear(){
  const grid=document.querySelector('#gearGrid'); if(!grid) return;
  grid.innerHTML='';
  gearSlots.forEach(slot=>{
    const g=gear[slot] || emptyGear()[slot];
    const unique=uniqueById(g.uniqueId);
    const affixListId = 'affixes_'+slot.replace(/\W+/g,'_');
    const card=document.createElement('section');
    card.className='gearCard';
    const opts=['<option value="">Custom Legendary / Rare</option>'].concat(allowedUniques(slot).map(u=>`<option value="${u.id}" ${g.uniqueId===u.id?'selected':''}>${u.name}</option>`)).join('');
    const affixOptions=allowedAffixes(slot).map(a=>`<option value="${escapeHtml(a)}"></option>`).join('');
    const aspectOptions=aspects.map(a=>`<option value="${escapeHtml(a)}"></option>`).join('');
    const locked = g.uniqueId && g.uniqueId !== 'custom_unique';
    card.innerHTML=`
      <div class="gearHead"><h2>${slot}</h2><span>${g.uniqueId ? 'Unique' : 'Custom'}</span></div>
      <label>Unique / Item type<select onchange="setUnique('${slot}', this.value)">${opts}</select></label>
      ${g.uniqueId==='custom_unique' ? `<label>Custom unique name<input value="${escapeHtml(g.uniqueName||'')}" oninput="setGear('${slot}','uniqueName',this.value)" placeholder="Type unique name"></label>` : ''}
      ${unique && unique.effect ? `<p class="uniqueEffect"><b>Effect:</b> ${escapeHtml(unique.effect)}</p>` : ''}
      ${!g.uniqueId ? `<label>Aspect<input list="aspects_${slot.replace(/\W+/g,'_')}" value="${escapeHtml(g.aspect||'')}" oninput="setGear('${slot}','aspect',this.value)" placeholder="Search aspect..."><datalist id="aspects_${slot.replace(/\W+/g,'_')}">${aspectOptions}</datalist></label>` : `<p class="muted">Aspects are disabled for Unique items.</p>`}
      <div class="affixes"><p class="labelTitle">Affixes</p>
        ${[0,1,2,3].map(i=>`<input ${locked?'readonly':''} list="${affixListId}" value="${escapeHtml((g.affixes||[])[i]||'')}" oninput="setAffix('${slot}',${i},this.value)" placeholder="Search affix ${i+1}...">`).join('')}
        <datalist id="${affixListId}">${affixOptions}</datalist>
      </div>
      <label>Notes<textarea class="notes" oninput="setGear('${slot}','notes',this.value)" placeholder="Greater affix, tempering, masterwork target, farming note...">${escapeHtml(g.notes||'')}</textarea></label>
    `;
    grid.appendChild(card);
  });
}

function resetGear(){
  if(confirm('Reset all gear?')){ gear=emptyGear(); save(); renderGear(); renderHeaderGear(); }
}

function escapeHtml(s){ return String(s||'').replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

exportBuild = function(){
  const payload = {buildName, pointsSpent: spent(), selected, gear, skills: skillData.filter(s=>(selected[s.id]||0)>0).map(s=>({name:s.name, rank:selected[s.id]}))};
  navigator.clipboard?.writeText(JSON.stringify(payload,null,2));
  document.querySelector('#exportText').value = JSON.stringify(payload,null,2);
};

importBuild = function(){
  try {
    const data = JSON.parse(document.querySelector('#exportText').value);
    Object.keys(selected).forEach(k=>delete selected[k]);
    Object.assign(selected, data.selected || {});
    buildName = data.buildName || buildName;
    gear = data.gear || emptyGear();
    gearSlots.forEach(s=>{ if(!gear[s]) gear[s]=emptyGear()[s]; });
    save(); render(); renderGear();
  } catch(e){ alert('Paste a valid build JSON export first.'); }
};

const oldRender = render;
render = function(){ oldRender(); renderHeaderGear(); };
