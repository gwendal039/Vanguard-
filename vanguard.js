var DATA={weapons:{'Assault Rifle':{dmg:28,fireRate:.12,mag:30,reload:1.5,color:0x445566,spread:.015,auto:true,range:[0,30,60],falloff:[1,.78,.42]},'SMG':{dmg:18,fireRate:.07,mag:40,reload:1.2,color:0x334455,spread:.025,auto:true,range:[0,22,45],falloff:[1,.65,.3]},'Shotgun':{dmg:55,fireRate:.8,mag:8,reload:2,color:0x223344,spread:.08,auto:false,pellets:5,range:[0,10,22],falloff:[1,.35,.08]},'Sniper':{dmg:120,fireRate:1.5,mag:5,reload:2.5,color:0x111111,spread:.002,auto:false,range:[0,50,120],falloff:[.6,1,1]},'Minigun':{dmg:20,fireRate:.06,mag:100,reload:3,color:0x554422,spread:.03,auto:true,range:[0,25,50],falloff:[1,.6,.25]},'Plasma Rifle':{dmg:35,fireRate:.2,mag:20,reload:2,color:0x002244,spread:.008,auto:true,range:[0,35,70],falloff:[1,.8,.5]}},classes:{'Soldier':{hp:100,speed:7.9,weapon:'Assault Rifle',cost:0,color:0x2244aa,desc:'Balanced — AR + medium armor'},'Scout':{hp:75,speed:9.4,weapon:'SMG',cost:15,color:0x22aa44,desc:'Fast + light — SMG specialist'},'Heavy':{hp:200,speed:5.2,weapon:'Minigun',cost:25,color:0xaa4422,desc:'Tank — Minigun + max HP'},'Sniper':{hp:80,speed:7.1,weapon:'Sniper',cost:20,color:0x555555,desc:'Long range — 1 shot 1 kill'},'Breacher':{hp:110,speed:7.4,weapon:'Shotgun',cost:20,color:0xaa8822,desc:'CQC specialist — Shotgun'},'Phantom':{hp:85,speed:8.5,weapon:'Plasma Rifle',cost:35,color:0x4400aa,desc:'Energy weapons — plasma tech'}},
skins:[
{id:'default',name:'STANDARD',rarity:'common',color:0x4488cc,accent:0x00e5ff,emissive:0x002244,glow:.25,mat:'matte',pattern:'solid',tracer:0xffdd44},
{id:'crimson',name:'CRIMSON OPS',rarity:'common',color:0xaa2222,accent:0xff4444,emissive:0x330000,glow:.3,mat:'matte',pattern:'stripe',tracer:0xff4444},
{id:'toxic',name:'TOXIC GREEN',rarity:'common',color:0x33aa22,accent:0x66ff44,emissive:0x114400,glow:.3,mat:'matte',pattern:'hex',tracer:0x66ff44},
{id:'steel',name:'ACIER GRIS',rarity:'common',color:0x778899,accent:0xbbccdd,emissive:0x111122,glow:.18,mat:'metal',pattern:'solid',tracer:0xaabbcc},
{id:'sand',name:'DESERT TAN',rarity:'common',color:0xa08855,accent:0xddc488,emissive:0x221100,glow:.2,mat:'matte',pattern:'camo',tracer:0xddcc88},
{id:'urban',name:'URBAN CAMO',rarity:'common',color:0x3a4250,accent:0x6a7282,emissive:0x0a1018,glow:.2,mat:'matte',pattern:'camo',tracer:0x88aacc},
{id:'gold',name:'GOLD EDITION',rarity:'rare',color:0xddaa00,accent:0xffee66,emissive:0x664400,glow:.55,mat:'metal',pattern:'stripe',tracer:0xffee44},
{id:'void',name:'VOID WALKER',rarity:'rare',color:0x6622cc,accent:0xaa44ff,emissive:0x220044,glow:.5,mat:'glow',pattern:'circuit',tracer:0xaa44ff},
{id:'arctic',name:'ARCTIC FROST',rarity:'rare',color:0x66bbee,accent:0xaaeeff,emissive:0x004466,glow:.5,mat:'crystal',pattern:'solid',tracer:0xaaeeff},
{id:'jade',name:'JADE BLADE',rarity:'rare',color:0x118866,accent:0x44ffaa,emissive:0x004422,glow:.5,mat:'crystal',pattern:'hex',tracer:0x44ffaa},
{id:'inferno',name:'INFERNO',rarity:'epic',color:0xcc3300,accent:0xffaa00,emissive:0x441100,glow:.85,mat:'glow',pattern:'plasma',tracer:0xffaa00},
{id:'phantom_e',name:'PHANTOM ELITE',rarity:'epic',color:0xcc00aa,accent:0xff66dd,emissive:0x440033,glow:.85,mat:'glow',pattern:'circuit',tracer:0xff44dd},
{id:'nova',name:'SUPERNOVA',rarity:'epic',color:0xeeeeff,accent:0xffffff,emissive:0x6688ff,glow:1,mat:'glow',pattern:'plasma',tracer:0xffffff},
{id:'hex_mythic',name:'HEX PROTOCOL',rarity:'mythic',color:0x00ddaa,accent:0x66ffee,emissive:0x004433,glow:1.1,mat:'crystal',pattern:'hex',tracer:0x66ffee},
{id:'crimson_dragon',name:'DRAGON CARMIN',rarity:'mythic',color:0xff1144,accent:0xffcc00,emissive:0x661100,glow:1.2,mat:'glow',pattern:'plasma',tracer:0xffcc00},
{id:'storm',name:'TEMPÊTE BLEUE',rarity:'mythic',color:0x2244ff,accent:0x88ccff,emissive:0x002288,glow:1.1,mat:'glow',pattern:'circuit',tracer:0x88ccff},
{id:'obsidian',name:'OBSIDIENNE LÉGENDE',rarity:'legendary',color:0x111122,accent:0xff00aa,emissive:0xff00aa,glow:1.4,mat:'glow',pattern:'plasma',tracer:0xff00aa},
{id:'solar_flare',name:'ÉRUPTION SOLAIRE',rarity:'legendary',color:0xffaa00,accent:0xffffaa,emissive:0xff6600,glow:1.5,mat:'glow',pattern:'plasma',tracer:0xffff66},
{id:'cosmic',name:'COSMOS ULTIME',rarity:'ultimate',color:0x220044,accent:0x00ffee,emissive:0xaa44ff,glow:1.8,mat:'cosmic',pattern:'plasma',tracer:0xff00ff}
],
skinSell:{common:2,rare:6,epic:14,mythic:35,legendary:80,ultimate:300},
skinDropRates:{common:0.6,rare:0.25,epic:0.10,mythic:0.04,legendary:0.0099,ultimate:0.0001},
rarityLabel:{common:'COMMUN',rare:'RARE',epic:'\u00c9PIQUE',mythic:'MYTHIQUE',legendary:'L\u00c9GENDAIRE',ultimate:'ULTIME'},
rarityColor:{common:'#8899aa',rare:'#aa88ff',epic:'#ff8800',mythic:'#22ddff',legendary:'#ffcc00',ultimate:'#ff00ff'},
skinPalettes:[{id:'default',name:'Neutral',bodyMul:1,accentMul:1,emissiveMul:1},{id:'ember',name:'Ember',bodyTint:0x281100,accentTint:0xff6a00,emissiveTint:0xff4400,bodyMul:.85,accentMul:1.15,emissiveMul:1.2},{id:'aqua',name:'Aqua',bodyTint:0x001f2f,accentTint:0x00d7ff,emissiveTint:0x00aaff,bodyMul:.95,accentMul:1.1,emissiveMul:1.15},{id:'violet',name:'Violet',bodyTint:0x20002d,accentTint:0xb84dff,emissiveTint:0xd04dff,bodyMul:.95,accentMul:1.08,emissiveMul:1.12},{id:'lime',name:'Lime',bodyTint:0x0d2500,accentTint:0xa8ff4a,emissiveTint:0x55ff66,bodyMul:.92,accentMul:1.08,emissiveMul:1.08}],
tokenShop:[{id:'tok_sm',name:'5 TOKENS',price:100,gives:5},{id:'tok_md',name:'15 TOKENS',price:250,gives:15},{id:'tok_lg',name:'35 TOKENS',price:500,gives:35},{id:'tok_xl',name:'80 TOKENS',price:1000,gives:80},{id:'tok_xxl',name:'200 TOKENS',price:2000,gives:200}],
boosts:[{id:'dmg_boost',name:'SURCHARGE',desc:'+30% d\u00e9g\u00e2ts (1 match)',cost:10,cur:'crystals',fx:'dmg'},{id:'armor_boost',name:'BLINDAGE',desc:'+50% HP max (1 match)',cost:12,cur:'crystals',fx:'armor'},{id:'speed_boost',name:'ADR\u00c9NALINE',desc:'+20% vitesse (1 match)',cost:15,cur:'parts',fx:'speed'},{id:'regen_boost',name:'NANO-REGEN',desc:'R\u00e9g\u00e9n rapide (1 match)',cost:20,cur:'parts',fx:'regen'},{id:'ammo_boost',name:'ARSENAL',desc:'Triple munitions (1 match)',cost:8,cur:'crystals',fx:'ammo'},{id:'loot_boost',name:'FORTUNE',desc:'+100% r\u00e9compenses (1 match)',cost:25,cur:'parts',fx:'loot'}],
/* Bot weapon configs — bots use the same weapon categories as the player */
botTypes:[
{name:'AR BOT',weapon:'Assault Rifle',hp:80,speed:5.9,fireRate:0.7,baseDmg:14,projSpeed:32,projSize:.12,projColor:0x44aaff,
 hc:0x2255aa,ac:0x1a4488,lc:0x0d2255,vc:0x44ccff,xc:0x2288ff,
 idealDist:18,minDist:8,spread:.06,cr:18,xp:40},
{name:'SMG BOT',weapon:'SMG',hp:55,speed:8.3,fireRate:0.3,baseDmg:8,projSpeed:30,projSize:.08,projColor:0x44ff88,
 hc:0x22aa44,ac:0x118833,lc:0x0a5522,vc:0x66ffaa,xc:0x44dd66,
 idealDist:12,minDist:5,spread:.1,cr:15,xp:35},
{name:'SHOTGUN BOT',weapon:'Shotgun',hp:130,speed:6,fireRate:1.1,baseDmg:22,projSpeed:26,projSize:.15,projColor:0xff6622,
 hc:0xcc3311,ac:0xaa2200,lc:0x771500,vc:0xff8844,xc:0xff5500,
 idealDist:6,minDist:3,spread:.15,pellets:3,cr:22,xp:50},
{name:'SNIPER BOT',weapon:'Sniper',hp:60,speed:3.5,fireRate:2.2,baseDmg:35,projSpeed:50,projSize:.1,projColor:0xcc44ff,
 hc:0x6622aa,ac:0x551199,lc:0x330066,vc:0xaa66ff,xc:0x8844cc,
 idealDist:35,minDist:20,spread:.02,cr:25,xp:55}
],
xpTable:[0,100,250,450,700,1000,1400,1900,2500,3200,4000]};

var XP_PER_KILL=35;

function VG(){
var self=this;
this.state='MENU';
this.sd=this.loadSave();
this.scene=new THREE.Scene();
this.scene.background=new THREE.Color(0x080e18);
this.scene.fog=new THREE.Fog(0x080e18,70,140);
this.cam=new THREE.PerspectiveCamera(80,innerWidth/innerHeight,.05,300);
this.cam.rotation.order='YXZ';
this.ren=new THREE.WebGLRenderer({antialias:false});
this.ren.setPixelRatio(Math.min(devicePixelRatio,1.5));
this.ren.setSize(innerWidth,innerHeight);
this.cvs=this.ren.domElement;
document.getElementById('game-container').appendChild(this.cvs);
this.clock=new THREE.Clock();
this.wM=[];this.wB=[];this.enemies=[];this.proj=[];this.tracers=[];this.pickups=[];
this.bobT=0;this.recZ=0;this.recX=0;
this.P={h:1.65,baseH:1.65,crouchH:1.05,curH:1.65,crouch:false,vx:0,vz:0,vy:0,og:false,hp:100,mhp:100,spd:12,baseSpd:12,wp:null,ammo:0,res:0,lf:0,rld:false,wm:null,dm:1,lastHit:0,regenRate:5,lootMul:1,_mgSpin:0,dashCd:0,dashT:0,dashVx:0,dashVz:0,ads:false,adsT:0,baseFov:80,wpHipPos:null,wpAdsPos:null,bloom:0,jumpQ:0,coyoteT:0,spawnShieldT:0};
this.keys={};this.md=false;this.mx=0;this.my=0;
this.cfg={lookSens:.0019,adsLookMul:.72,lookSmooth:.4,jumpBuffer:.12,coyote:.1};
this._smMx=0;this._smMy=0;
this.mK=0;this.mXP=0;this._spin=false;
this.activeBoosts=[];
this.modeDefs={
training:{id:'training',label:'ENTRAÎNEMENT',desc:'Routes guidées et pression réduite',theme:'training',initialBots:8,respawn:true,respawnDelay:1.5,botSpeedMul:.9,botRangeMul:.88,botAggro:.9,botDamageMul:.9,showHpBars:true},
survival:{id:'survival',label:'SURVIE',desc:'Vagues progressives dans des couloirs fermés',theme:'survival',waves:true,showHpBars:false},
survival_plus:{id:'survival_plus',label:'SURVIE+',desc:'Vagues élites plus denses et rotations forcées',theme:'survival',waves:true,showHpBars:false,botSpeedMul:1.08,botRangeMul:1.12,botAggro:1.14,botDamageMul:1.12},
deathmatch:{id:'deathmatch',label:'MATCH À MORT',desc:'Atteignez 35 éliminations',theme:'training',initialBots:10,respawn:true,respawnDelay:1.05,botSpeedMul:1,botRangeMul:1,botAggro:1,botDamageMul:1,killTarget:35,showHpBars:true},
teamdm:{id:'teamdm',label:'TEAM DEATHMATCH',desc:'Course au score : Vanguard vs bots',theme:'training',initialBots:12,respawn:true,respawnDelay:.9,botSpeedMul:1.02,botRangeMul:1.03,botAggro:1.05,botDamageMul:1,teamBattle:true,scoreTarget:45,showHpBars:true},
assault:{id:'assault',label:'ASSAUT',desc:'Affrontement soutenu contre des bots agressifs',theme:'survival',initialBots:12,respawn:true,respawnDelay:.8,botSpeedMul:1.12,botRangeMul:1.12,botAggro:1.1,botDamageMul:1.12,showHpBars:false},
domination:{id:'domination',label:'DOMINATION',desc:'Contrôlez l’atrium central pour marquer 100 points',theme:'training',initialBots:10,respawn:true,respawnDelay:1.1,botSpeedMul:1,botRangeMul:1,botAggro:1,botDamageMul:1,domination:true,scoreTarget:100,showHpBars:true}
};
this.gameMode='training';
this.modeScore={player:0,bots:0};
/* Wave system state */
this.wave=0;this.waveActive=false;this.waveRemaining=0;this.waveSpawnQueue=0;this._waveTimer=0;this._waveBreak=0;this._spawnAccum=0;
this._actx=null;this._menuDrone=null;this._combatDrone=null;
this.initWorld();this.initUI();this.initEvents();
this.cam.position.set(0,15,0);
this.loop();
}
/* SAVE */
VG.prototype.loadSave=function(){
var d={resources:{credits:0,crystals:0,parts:0,tokens:5},unlockedClasses:['Soldier'],selectedClass:'Soldier',stats:{kills:0,level:1,xp:0,matchesCompleted:0,totalCreditsEarned:0},upgrades:{},ownedSkins:{'default':1},selectedSkin:'default',skinCustom:{palette:'default',finish:'matte'},purchasedBoosts:[],objectives:null,firstTime:true};
try{var s=localStorage.getItem('vg_s5');if(s){var p=JSON.parse(s);
var os=p.ownedSkins||d.ownedSkins;
if(Array.isArray(os)){var m={};for(var ii=0;ii<os.length;ii++)m[os[ii]]=1;os=m;}
if(!os['default'])os['default']=1;
return{resources:Object.assign({},d.resources,p.resources),unlockedClasses:p.unlockedClasses||d.unlockedClasses,selectedClass:p.selectedClass||d.selectedClass,stats:Object.assign({},d.stats,p.stats),upgrades:Object.assign({},d.upgrades,p.upgrades),ownedSkins:os,selectedSkin:p.selectedSkin||d.selectedSkin,skinCustom:Object.assign({},d.skinCustom,p.skinCustom),purchasedBoosts:p.purchasedBoosts||[],objectives:p.objectives||null,firstTime:p.firstTime!==undefined?p.firstTime:d.firstTime};}return d;}catch(e){return d;}
};
VG.prototype.save=function(){try{localStorage.setItem('vg_s5',JSON.stringify(this.sd));}catch(e){}};
VG.prototype.getLvlXP=function(l){if(l<=11)return DATA.xpTable[Math.min(l-1,DATA.xpTable.length-1)]||0;return 4000+(l-11)*500;};
VG.prototype.getNextXP=function(l){return this.getLvlXP(l+1);};
VG.prototype.addXP=function(a){
this.sd.stats.xp+=a;this.mXP+=a;
var lv=false;
while(this.sd.stats.xp>=this.getNextXP(this.sd.stats.level)&&this.sd.stats.level<100){this.sd.stats.level++;this.sd.resources.tokens+=5;lv=true;}
if(lv){var el=document.getElementById('level-up-banner');if(el){el.textContent='NIVEAU '+this.sd.stats.level+' \u2014 +5 TOKENS !';el.classList.add('show');clearTimeout(this._luT);this._luT=setTimeout(function(){el.classList.remove('show');},2500);}}
this._checkObj();this.save();
};
/* OBJECTIVES */
VG.prototype._initObj=function(){
if(!this.sd.objectives||this.sd.objectives.length<3){this.sd.objectives=[];for(var i=0;i<3;i++)this.sd.objectives.push(this._genObj());this.save();}
};
VG.prototype._genObj=function(){
var pool=[
function(s){var n=[10,20,40,75][Math.floor(Math.random()*4)];return{type:'total_kills',target:s.stats.kills+n,progress:s.stats.kills,desc:'\u00c9liminer '+n+' ennemis au total',reward:n>=40?{tokens:Math.ceil(n/10)}:{credits:n*8}};},
function(s){var n=[5,8,12][Math.floor(Math.random()*3)];return{type:'match_kills',target:n,progress:0,desc:n+' kills en un seul match',reward:{tokens:n>=8?5:2}};},
function(s){var n=[3,5,8][Math.floor(Math.random()*3)];return{type:'matches',target:s.stats.matchesCompleted+n,progress:s.stats.matchesCompleted,desc:'Compl\u00e9ter '+n+' matchs',reward:{crystals:n*3}};},
function(s){var n=[300,600,1200][Math.floor(Math.random()*3)];return{type:'credits_total',target:s.stats.totalCreditsEarned+n,progress:s.stats.totalCreditsEarned,desc:'Gagner '+n+' cr\u00e9dits',reward:{parts:Math.ceil(n/8)}};},
function(s){var n=[5,10,25,50][Math.floor(Math.random()*4)];if(n<=s.stats.level)n=s.stats.level+5;return{type:'level',target:n,progress:s.stats.level,desc:'Atteindre le niveau '+n,reward:{tokens:Math.ceil(n/3)}};},
function(s){var n=[50,75][Math.floor(Math.random()*2)];return{type:'survive_hp',target:n,progress:0,desc:'Finir un match avec '+n+'+ HP',reward:{crystals:5,parts:20}};}
];
return pool[Math.floor(Math.random()*pool.length)](this.sd);
};
VG.prototype._checkObj=function(){
if(!this.sd.objectives)return;
var changed=false;
for(var i=0;i<this.sd.objectives.length;i++){
var o=this.sd.objectives[i];
if(o.type==='total_kills')o.progress=this.sd.stats.kills;
if(o.type==='matches')o.progress=this.sd.stats.matchesCompleted;
if(o.type==='credits_total')o.progress=this.sd.stats.totalCreditsEarned;
if(o.type==='level')o.progress=this.sd.stats.level;
if(o.progress>=o.target){
var r=o.reward;
if(r.credits)this.sd.resources.credits+=r.credits;
if(r.tokens)this.sd.resources.tokens+=r.tokens;
if(r.crystals)this.sd.resources.crystals+=r.crystals;
if(r.parts)this.sd.resources.parts+=r.parts;
this._flash('\u2713 OBJECTIF COMPL\u00c9T\u00c9 !','#44ddaa');
this.sd.objectives[i]=this._genObj();
changed=true;
}
}
if(changed)this.save();
};
VG.prototype._checkMatchObj=function(){
if(!this.sd.objectives)return;
for(var i=0;i<this.sd.objectives.length;i++){
var o=this.sd.objectives[i];
if(o.type==='match_kills')o.progress=Math.max(o.progress,this.mK);
if(o.type==='survive_hp')o.progress=Math.max(o.progress,Math.floor(this.P.hp));
}
this._checkObj();
};
/* AUDIO */
VG.prototype._ensureAudio=function(){
if(this._actx){if(this._actx.state==='suspended')try{this._actx.resume();}catch(e){}return true;}
try{this._actx=new(window.AudioContext||window.webkitAudioContext)();this._mGain=this._actx.createGain();this._mGain.gain.value=0.3;this._mGain.connect(this._actx.destination);return true;}catch(e){return false;}
};
VG.prototype._sndShot=function(wpName){
if(!this._ensureAudio())return;var ctx=this._actx,t=ctx.currentTime,g=ctx.createGain();g.connect(this._mGain);
if(wpName==='Shotgun'){var o=ctx.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(80,t);o.frequency.exponentialRampToValueAtTime(25,t+.2);g.gain.setValueAtTime(.5,t);g.gain.exponentialRampToValueAtTime(.001,t+.25);o.connect(g);o.start(t);o.stop(t+.25);}
else if(wpName==='Sniper'){var o=ctx.createOscillator();o.type='square';o.frequency.setValueAtTime(800,t);o.frequency.exponentialRampToValueAtTime(100,t+.3);g.gain.setValueAtTime(.4,t);g.gain.exponentialRampToValueAtTime(.001,t+.35);o.connect(g);o.start(t);o.stop(t+.35);}
else if(wpName==='SMG'){var o=ctx.createOscillator();o.type='square';o.frequency.setValueAtTime(320,t);o.frequency.exponentialRampToValueAtTime(100,t+.05);g.gain.setValueAtTime(.18,t);g.gain.exponentialRampToValueAtTime(.001,t+.06);o.connect(g);o.start(t);o.stop(t+.06);}
else if(wpName==='Minigun'){var o=ctx.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(260,t);o.frequency.exponentialRampToValueAtTime(130,t+.035);g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+.04);o.connect(g);o.start(t);o.stop(t+.04);}
else if(wpName==='Plasma Rifle'){var o=ctx.createOscillator();o.type='sine';o.frequency.setValueAtTime(400,t);o.frequency.exponentialRampToValueAtTime(900,t+.06);o.frequency.exponentialRampToValueAtTime(200,t+.15);g.gain.setValueAtTime(.28,t);g.gain.exponentialRampToValueAtTime(.001,t+.18);o.connect(g);o.start(t);o.stop(t+.18);}
else{var o=ctx.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(200,t);o.frequency.exponentialRampToValueAtTime(55,t+.1);g.gain.setValueAtTime(.28,t);g.gain.exponentialRampToValueAtTime(.001,t+.12);o.connect(g);o.start(t);o.stop(t+.12);}
};
VG.prototype._sndHit=function(){
if(!this._ensureAudio())return;var ctx=this._actx,t=ctx.currentTime,g=ctx.createGain();g.connect(this._mGain);
var o=ctx.createOscillator();o.type='sine';o.frequency.setValueAtTime(1200,t);o.frequency.exponentialRampToValueAtTime(600,t+.08);
g.gain.setValueAtTime(.2,t);g.gain.exponentialRampToValueAtTime(.001,t+.1);o.connect(g);o.start(t);o.stop(t+.1);
};
VG.prototype._sndHeadshot=function(){
if(!this._ensureAudio())return;var ctx=this._actx,t=ctx.currentTime,g=ctx.createGain();g.connect(this._mGain);
var o=ctx.createOscillator();o.type='sine';o.frequency.setValueAtTime(1800,t);o.frequency.linearRampToValueAtTime(2400,t+.06);o.frequency.exponentialRampToValueAtTime(800,t+.15);
g.gain.setValueAtTime(.3,t);g.gain.exponentialRampToValueAtTime(.001,t+.18);o.connect(g);o.start(t);o.stop(t+.18);
};
VG.prototype._sndKill=function(){
if(!this._ensureAudio())return;var ctx=this._actx,t=ctx.currentTime,g=ctx.createGain();g.connect(this._mGain);
var o=ctx.createOscillator();o.type='sine';o.frequency.setValueAtTime(800,t);o.frequency.linearRampToValueAtTime(1600,t+.12);
g.gain.setValueAtTime(.25,t);g.gain.exponentialRampToValueAtTime(.001,t+.18);o.connect(g);o.start(t);o.stop(t+.18);
};
VG.prototype._sndDmg=function(){
if(!this._ensureAudio())return;var ctx=this._actx,t=ctx.currentTime,g=ctx.createGain();g.connect(this._mGain);
var o=ctx.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(120,t);o.frequency.exponentialRampToValueAtTime(35,t+.18);
g.gain.setValueAtTime(.35,t);g.gain.exponentialRampToValueAtTime(.001,t+.22);o.connect(g);o.start(t);o.stop(t+.22);
};
VG.prototype._sndDash=function(){
if(!this._ensureAudio())return;var ctx=this._actx,t=ctx.currentTime,g=ctx.createGain();g.connect(this._mGain);
var o=ctx.createOscillator();o.type='sine';o.frequency.setValueAtTime(220,t);o.frequency.exponentialRampToValueAtTime(660,t+.12);
g.gain.setValueAtTime(.18,t);g.gain.exponentialRampToValueAtTime(.001,t+.16);o.connect(g);o.start(t);o.stop(t+.16);
};
VG.prototype._sndEnemyShot=function(){
if(!this._ensureAudio())return;var ctx=this._actx,t=ctx.currentTime,g=ctx.createGain();g.connect(this._mGain);
var o=ctx.createOscillator();o.type='square';o.frequency.setValueAtTime(180,t);o.frequency.exponentialRampToValueAtTime(70,t+.07);
g.gain.setValueAtTime(.06,t);g.gain.exponentialRampToValueAtTime(.001,t+.09);o.connect(g);o.start(t);o.stop(t+.09);
};
VG.prototype._startMenuMusic=function(){
if(!this._ensureAudio()||this._menuDrone)return;var ctx=this._actx;
var g1=ctx.createGain();g1.gain.value=.035;g1.connect(this._mGain);
var o1=ctx.createOscillator();o1.type='sine';o1.frequency.value=55;o1.connect(g1);o1.start();
var g2=ctx.createGain();g2.gain.value=.02;g2.connect(this._mGain);
var o2=ctx.createOscillator();o2.type='sine';o2.frequency.value=82.5;o2.connect(g2);o2.start();
var g3=ctx.createGain();g3.gain.value=.012;g3.connect(this._mGain);
var o3=ctx.createOscillator();o3.type='triangle';o3.frequency.value=110;o3.connect(g3);o3.start();
this._menuDrone={o:[o1,o2,o3],g:[g1,g2,g3]};
};
VG.prototype._stopMenuMusic=function(){
if(!this._menuDrone)return;for(var i=0;i<this._menuDrone.o.length;i++)try{this._menuDrone.o[i].stop();}catch(e){}this._menuDrone=null;
};
VG.prototype._startCombatAmbient=function(){
if(!this._ensureAudio()||this._combatDrone)return;var ctx=this._actx;
var g=ctx.createGain();g.gain.value=.02;g.connect(this._mGain);
var o=ctx.createOscillator();o.type='triangle';o.frequency.value=38;o.connect(g);o.start();
var g2=ctx.createGain();g2.gain.value=.01;g2.connect(this._mGain);
var o2=ctx.createOscillator();o2.type='sine';o2.frequency.value=62;o2.connect(g2);o2.start();
this._combatDrone={o:[o,o2],g:[g,g2]};
};
VG.prototype._stopCombatAmbient=function(){
if(!this._combatDrone)return;for(var i=0;i<this._combatDrone.o.length;i++)try{this._combatDrone.o[i].stop();}catch(e){}this._combatDrone=null;
};
/* WEAPON RECOIL DATA */
VG.prototype._getRecoil=function(n){
var r={'Assault Rifle':{z:.05,x:-.07,sZ:14,sX:11,bob:13},'SMG':{z:.025,x:-.035,sZ:22,sX:18,bob:16},'Shotgun':{z:.14,x:-.18,sZ:6,sX:5,bob:11},'Sniper':{z:.18,x:-.22,sZ:4,sX:3.5,bob:10},'Minigun':{z:.015,x:-.02,sZ:28,sX:24,bob:18},'Plasma Rifle':{z:.065,x:-.09,sZ:11,sX:9,bob:12}};
return r[n]||r['Assault Rifle'];
};
/* DISTANCE DAMAGE FALLOFF — used by both player and bots */
VG.prototype._distDmg=function(baseDmg,dist,wp){
if(!wp.range||!wp.falloff)return baseDmg;
var r=wp.range,f=wp.falloff;
if(dist<=r[1]){var t=r[1]>0?Math.max(0,dist/r[1]):0;return Math.floor(baseDmg*(f[0]+(f[1]-f[0])*t));}
if(dist<=r[2]){var t=(dist-r[1])/(r[2]-r[1]);return Math.floor(baseDmg*(f[1]+(f[2]-f[1])*t));}
return Math.floor(baseDmg*f[2]);
};
/* Bot distance damage — uses the matching player weapon's range/falloff curves */
VG.prototype._botDistDmg=function(baseDmg,dist,botType){
var bt=DATA.botTypes[botType];if(!bt)return baseDmg;
var wpName=bt.weapon;
var wp=DATA.weapons[wpName];
if(!wp||!wp.range||!wp.falloff)return baseDmg;
return this._distDmg(baseDmg,dist,wp);
};
/* WORLD */
VG.prototype.initWorld=function(){
this.scene.add(new THREE.AmbientLight(0xbbccdd,.6));
var d=new THREE.DirectionalLight(0x88ccff,1.2);d.position.set(40,80,40);this.scene.add(d);
var f=new THREE.DirectionalLight(0xff5500,.3);f.position.set(-40,20,-40);this.scene.add(f);this._lFill=f;
var h=new THREE.DirectionalLight(0x4466ff,.2);h.position.set(20,30,-50);this.scene.add(h);this._lRim=h;
var fl=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:0x0e1822,roughness:.92}));fl.rotation.x=-Math.PI/2;this.scene.add(fl);
var g=new THREE.GridHelper(200,50,0x00e5ff,0x0d1a22);g.material.opacity=.08;g.material.transparent=true;this.scene.add(g);
this._buildArena();
};
VG.prototype._W=function(x,y,z,w,h,d,c){
c=c!==undefined?c:0x1a2030;
var m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color:c,roughness:.85}));
m.position.set(x,y,z);this.scene.add(m);this.wM.push(m);this.wB.push(new THREE.Box3().setFromObject(m));return m;
};
VG.prototype._D=function(x,y,z,w,h,d,c,e){
var mt=new THREE.MeshStandardMaterial({color:c,roughness:.7});
if(e!==undefined){mt.emissive=new THREE.Color(e);mt.emissiveIntensity=.35;}
var m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mt);m.position.set(x,y,z);this.scene.add(m);
};
VG.prototype._G=function(x,y,z,w,h,d,c){
var m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:.6}));
m.position.set(x,y,z);this.scene.add(m);
};
VG.prototype._addStairs=function(x,z,dx,dz,n,w,c){
var sH=.4,sD=1.2;
for(var i=0;i<n;i++){
var sx=x+dx*sD*i,sz=z+dz*sD*i,sy=sH*(i+1)-sH/2;
var sw=dx!==0?sD:w,sd=dz!==0?sD:w;
this._W(sx,sy,sz,sw,sH,sd,c);
}
};
VG.prototype._addRamp=function(x,z,toX,toZ,topH,w,c){
var dx=toX-x,dz=toZ-z,len=Math.sqrt(dx*dx+dz*dz);
var steps=Math.ceil(topH/.35);
for(var i=0;i<steps;i++){
var t=(i+.5)/steps;
var sx=x+dx*t,sz=z+dz*t,sy=topH*t;
var rw=Math.abs(dz)>Math.abs(dx)?w:len/steps+.1;
var rd=Math.abs(dx)>Math.abs(dz)?w:len/steps+.1;
this._W(sx,sy,sz,rw,.35,rd,c);
}
};
VG.prototype._buildArena=function(){
/* KRUNKER-STYLE COMPACT PVP ARENA — sealed geometry, deliberate lanes, strong spawn bunkers. */
var W=0x1d2a38,C=0x253749,CR=0x334f66,RM=0x2f6282,FL=0x0c141d;
this.mapHalf=34;
this.spawnNodes={
player:[[-29,-25],[-27,-21],[-25,-26],[29,25],[27,21],[25,26],[-29,25],[-27,21],[29,-25],[27,-21]],
enemy:[[29,25],[27,21],[25,26],[-29,-25],[-27,-21],[-25,-26],[29,-25],[27,-21],[-29,25],[-27,21]],
high:[[-8,8],[8,-8],[-8,-8],[8,8],[0,0]],
patrol:[[-28,-24],[-28,-12],[-28,0],[-28,12],[-28,24],[-18,-24],[-18,-12],[-18,0],[-18,12],[-18,24],[-8,-24],[-8,-12],[-8,0],[-8,12],[-8,24],[0,-24],[0,-12],[0,0],[0,12],[0,24],[8,-24],[8,-12],[8,0],[8,12],[8,24],[18,-24],[18,-12],[18,0],[18,12],[18,24],[28,-24],[28,-12],[28,0],[28,12],[28,24]],
flank:[[-24,-6],[-24,6],[24,-6],[24,6],[-6,-24],[6,-24],[-6,24],[6,24],[-16,16],[16,16],[-16,-16],[16,-16]]
};
var perimeter=68;
this._W(0,4,-34,perimeter,8,2,W);this._W(0,4,34,perimeter,8,2,W);this._W(-34,4,0,2,8,perimeter,W);this._W(34,4,0,2,8,perimeter,W);
this._D(0,.02,0,66,.03,66,0x101a24,0x001726);
// outer ring blockers to prevent fake passages
for(var i=-24;i<=24;i+=12){
this._W(i,1.8,-28,6,3.6,2,C);this._W(i,1.8,28,6,3.6,2,C);
this._W(-28,1.8,i,2,3.6,6,C);this._W(28,1.8,i,2,3.6,6,C);
}
// three-lane skeleton (north / mid / south) with clear intersections
this._W(0,1.7,-18,58,3.4,2,W);
this._W(0,1.7,18,58,3.4,2,W);
this._W(-18,1.7,0,2,3.4,58,W);
this._W(18,1.7,0,2,3.4,58,W);
// central combat block + upper ring
this._W(0,1.4,0,8,2.8,8,0x20364a);
this._W(0,3.3,0,12,1,12,0x25445e);
this._W(0,4.25,0,6,0.9,6,0x1a2d3e);
this._addStairs(-6.4,-10.2,0,1,8,2.2,RM);this._addStairs(6.4,10.2,0,-1,8,2.2,RM);
this._addStairs(-10.2,6.4,1,0,8,2.2,RM);this._addStairs(10.2,-6.4,-1,0,8,2.2,RM);
// structured buildings in corners: all fully sealed volumes
var b=[[-22,-22,0x24465f],[-22,22,0x3b2a54],[22,-22,0x2d4a2a],[22,22,0x4a3821]];
for(var bi=0;bi<b.length;bi++){
var bx=b[bi][0],bz=b[bi][1],bc=b[bi][2];
this._W(bx,2,bz,10,4,10,bc); // main mass
this._W(bx,4.35,bz,6,0.7,6,CR); // roof cap
this._W(bx+4.3,1,bz,1.4,2,4,0x131f2b); // doorway blocker to avoid ambiguous slit
this._W(bx-4.3,1,bz,1.4,2,4,0x131f2b);
}
// corridor covers: symmetric and intentional
for(var c=-21;c<=21;c+=7){
if(c!==0){
this._W(c,1,-9,2,2,2.2,CR);this._W(c,1,9,2,2,2.2,CR);
this._W(-9,1,c,2.2,2,2,CR);this._W(9,1,c,2.2,2,2,CR);
}
}
// side catwalks + ramps (controlled verticality)
this._W(-24,2.4,0,4,1,16,0x264860);this._W(24,2.4,0,4,1,16,0x264860);
this._addRamp(-27,-8,-24,0,2.4,3.2,RM);this._addRamp(-27,8,-24,0,2.4,3.2,RM);
this._addRamp(27,-8,24,0,2.4,3.2,RM);this._addRamp(27,8,24,0,2.4,3.2,RM);
// protected spawn bunkers (hard LOS break at exit)
this._W(-30,1.8,-24,2,3.6,12,W);this._W(-24,1.8,-30,12,3.6,2,W);this._W(-26,1.2,-23,4,2.4,2,CR);
this._W(30,1.8,24,2,3.6,12,W);this._W(24,1.8,30,12,3.6,2,W);this._W(26,1.2,23,4,2.4,2,CR);
this._W(-30,1.8,24,2,3.6,12,W);this._W(-24,1.8,30,12,3.6,2,W);this._W(-26,1.2,23,4,2.4,2,CR);
this._W(30,1.8,-24,2,3.6,12,W);this._W(24,1.8,-30,12,3.6,2,W);this._W(26,1.2,-23,4,2.4,2,CR);
// lane accents
for(var lx=-27;lx<=27;lx+=6){this._D(lx,.04,-30,1.6,.04,.12,0x00a8ff);this._D(lx,.04,30,1.6,.04,.12,0x66dd55);}
for(var lz=-27;lz<=27;lz+=6){this._D(-30,.04,lz,.12,.04,1.6,0xa76bff);this._D(30,.04,lz,.12,.04,1.6,0xffaa49);}
};
/* SAFE SPAWN */
VG.prototype._clr=function(x,z){
var b=new THREE.Box3(new THREE.Vector3(x-.6,0,z-.6),new THREE.Vector3(x+.6,2,z+.6));
for(var i=0;i<this.wB.length;i++)if(b.intersectsBox(this.wB[i]))return false;
return true;
};
VG.prototype._spawnSightBlocked=function(x,z){
if(!this.enemies||this.enemies.length===0)return true;
var from=new THREE.Vector3(x,1.4,z);
for(var i=0;i<this.enemies.length;i++){
var e=this.enemies[i];if(!e||!e.mesh)continue;
var ep=e.mesh.position;var dx=ep.x-x,dz=ep.z-z,dist=Math.sqrt(dx*dx+dz*dz);
if(dist<18){
var to=new THREE.Vector3(ep.x,ep.y+.8,ep.z);
if(this._hasLOS(from,to))return false;
}
}
return true;
};
VG.prototype._safeSpawn=function(){
var s=(this.spawnNodes&&this.spawnNodes.player)?this.spawnNodes.player:[[0,4],[5,4],[-5,4],[10,10],[-10,-10],[0,-4]];
var best=null,bestScore=-1;
for(var i=0;i<s.length;i++){
if(!this._clr(s[i][0],s[i][1]))continue;
var minED=9999;
for(var ei=0;ei<this.enemies.length;ei++){
var em=this.enemies[ei]&&this.enemies[ei].mesh?this.enemies[ei].mesh.position:null;
if(!em)continue;
var dx=s[i][0]-em.x,dz=s[i][1]-em.z,d=Math.sqrt(dx*dx+dz*dz);
if(d<minED)minED=d;
}
var losSafe=this._spawnSightBlocked(s[i][0],s[i][1]);
var score=(minED===9999?100:minED)+(losSafe?18:-40);
if(score>bestScore){bestScore=score;best=s[i];}
}
if(best)return best;
var h=this.mapHalf||32;
for(var x=-(h-2);x<=(h-2);x+=4)for(var z=-(h-2);z<=(h-2);z+=4)if(this._clr(x,z)&&this._spawnSightBlocked(x,z))return[x,z];
return[0,2];
};
/* SKIN */
VG.prototype._mixHex=function(base,mix,t){
var b=new THREE.Color(base),m=new THREE.Color(mix),c=b.lerp(m,Math.max(0,Math.min(1,t)));
return c.getHex();
};
VG.prototype._mulHex=function(hex,m){
var c=new THREE.Color(hex);c.multiplyScalar(m);return c.getHex();
};
VG.prototype._skin=function(){
var id=this.sd.selectedSkin||'default',base=DATA.skins[0];
for(var i=0;i<DATA.skins.length;i++)if(DATA.skins[i].id===id){base=DATA.skins[i];break;}
var custom=this.sd.skinCustom||{palette:'default',finish:'matte'};
var pal=DATA.skinPalettes[0];
for(var pi=0;pi<DATA.skinPalettes.length;pi++)if(DATA.skinPalettes[pi].id===custom.palette){pal=DATA.skinPalettes[pi];break;}
var sk=Object.assign({},base);
if(pal&&pal.id!=='default'){
sk.color=this._mulHex(this._mixHex(sk.color,pal.bodyTint||sk.color,.35),pal.bodyMul||1);
sk.accent=this._mulHex(this._mixHex(sk.accent||sk.color,pal.accentTint||sk.accent||sk.color,.48),pal.accentMul||1);
sk.emissive=this._mulHex(this._mixHex(sk.emissive||sk.accent||sk.color,pal.emissiveTint||sk.emissive||sk.accent||sk.color,.52),pal.emissiveMul||1);
}
sk.finish=custom.finish||'matte';
return sk;
};
/* WEAPON BUILD */
VG.prototype._skinMats=function(sk){
/* Generate three materials per skin: body (main color), accent (highlight glow), dark (mechanical) */
var bodyOpts={color:sk.color,roughness:.6,metalness:0};
var accentOpts={color:sk.accent||sk.color,emissive:new THREE.Color(sk.emissive||sk.accent||sk.color),emissiveIntensity:sk.glow||.3,roughness:.4,metalness:.2};
var glowOpts={color:sk.accent||sk.color,emissive:new THREE.Color(sk.accent||sk.color),emissiveIntensity:Math.min(2,(sk.glow||.4)*1.4),roughness:.3};
bodyOpts.clearcoat=.35;bodyOpts.clearcoatRoughness=.38;
accentOpts.clearcoat=.8;accentOpts.clearcoatRoughness=.2;
if(sk.mat==='metal'){bodyOpts.metalness=.85;bodyOpts.roughness=.25;}
else if(sk.mat==='crystal'){bodyOpts.metalness=.5;bodyOpts.roughness=.15;bodyOpts.emissive=new THREE.Color(sk.emissive||sk.color);bodyOpts.emissiveIntensity=.25;}
else if(sk.mat==='glow'){bodyOpts.emissive=new THREE.Color(sk.emissive||sk.color);bodyOpts.emissiveIntensity=.45;bodyOpts.roughness=.35;}
else if(sk.mat==='cosmic'){bodyOpts.emissive=new THREE.Color(sk.emissive||sk.color);bodyOpts.emissiveIntensity=.9;bodyOpts.roughness=.2;bodyOpts.metalness=.6;}
if(sk.finish==='satin'){bodyOpts.roughness=Math.min(.65,bodyOpts.roughness+.1);bodyOpts.metalness=Math.max(0,bodyOpts.metalness-.08);}
else if(sk.finish==='chrome'){bodyOpts.metalness=.92;bodyOpts.roughness=.16;accentOpts.metalness=.92;accentOpts.roughness=.12;}
else if(sk.finish==='neon'){accentOpts.emissiveIntensity=(accentOpts.emissiveIntensity||.4)*1.35;glowOpts.emissiveIntensity=(glowOpts.emissiveIntensity||.5)*1.4;bodyOpts.roughness=Math.max(.2,bodyOpts.roughness-.08);}
return{
  body:new THREE.MeshStandardMaterial(bodyOpts),
  accent:new THREE.MeshStandardMaterial(accentOpts),
  glow:new THREE.MeshStandardMaterial(glowOpts),
  dark:new THREE.MeshStandardMaterial({color:0x101418,roughness:.55,metalness:.35})
};
};
VG.prototype.buildWpn=function(){
if(this.P.wm){this.cam.remove(this.P.wm);this.P.wm=null;}
var wpN=DATA.classes[this.sd.selectedClass].weapon,wp=DATA.weapons[wpN],sk=this._skin(),g=new THREE.Group();
var mats=this._skinMats(sk);
var bm=mats.body,am=mats.accent,dm=mats.dark,gm=mats.glow;
/* Pattern overlays — small accent pieces that change look between skins */
var patternFn=function(parent,len,wide){
  if(sk.pattern==='stripe'){
    var s=new THREE.Mesh(new THREE.BoxGeometry(wide*.6,.012,len*.85),gm);
    s.position.set(0,.045,0);parent.add(s);
  }else if(sk.pattern==='hex'){
    for(var hi=0;hi<3;hi++){var hx=new THREE.Mesh(new THREE.BoxGeometry(.025,.025,.025),gm);hx.position.set((hi-1)*.06,.04,len*.18);parent.add(hx);}
  }else if(sk.pattern==='circuit'){
    var c1=new THREE.Mesh(new THREE.BoxGeometry(wide*.7,.008,.018),gm);c1.position.set(0,.04,-len*.18);parent.add(c1);
    var c2=new THREE.Mesh(new THREE.BoxGeometry(.018,.008,len*.5),gm);c2.position.set(wide*.3,.04,0);parent.add(c2);
  }else if(sk.pattern==='plasma'){
    var p1=new THREE.Mesh(new THREE.BoxGeometry(wide*.75,.022,len*.6),gm);p1.position.set(0,.05,0);parent.add(p1);
  }else if(sk.pattern==='camo'){
    for(var ci=0;ci<3;ci++){var cm=new THREE.Mesh(new THREE.BoxGeometry(.04,.012,.05),gm);cm.position.set((Math.random()-.5)*wide*.7,.04,(Math.random()-.5)*len*.6);parent.add(cm);}
  }
};
if(wpN==='Assault Rifle'){
var b=new THREE.Mesh(new THREE.BoxGeometry(.08,.08,.5),bm);g.add(b);
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.04,.04,.3),bm);m.position.set(0,.02,-.38);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.06,.1,.2),bm);m.position.set(0,-.02,.28);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.05,.16,.07),bm);m.position.set(0,-.12,.04);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.04,.1,.05),dm);m.position.set(0,-.1,.16);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.03,.04,.08),am);m.position.set(0,.07,-.05);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.03,.03,.04),am);m.position.set(0,.02,-.54);return m;}());
patternFn(g,.5,.08);
}else if(wpN==='SMG'){
g.add(new THREE.Mesh(new THREE.BoxGeometry(.07,.07,.3),bm));
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.035,.035,.16),bm);m.position.set(0,.015,-.22);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.05,.05,.08),dm);m.position.set(0,-.01,.18);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.04,.2,.05),bm);m.position.set(0,-.15,0);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.025,.03,.05),am);m.position.set(0,.055,-.02);return m;}());
patternFn(g,.3,.07);
}else if(wpN==='Shotgun'){
g.add(new THREE.Mesh(new THREE.BoxGeometry(.1,.09,.5),bm));
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.06,.06,.25),bm);m.position.set(0,.01,-.36);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.07,.12,.22),bm);m.position.set(0,-.02,.3);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.05,.1,.06),dm);m.position.set(0,-.1,.14);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.065,.065,.03),am);m.position.set(0,.01,-.5);return m;}());
patternFn(g,.5,.1);
}else if(wpN==='Sniper'){
g.add(new THREE.Mesh(new THREE.BoxGeometry(.06,.07,.55),bm));
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.03,.03,.4),bm);m.position.set(0,.015,-.46);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.06,.14,.24),bm);m.position.set(0,-.03,.34);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.04,.1,.06),dm);m.position.set(0,-.1,.05);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.04,.05,.14),am);m.position.set(0,.08,-.08);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.035,.035,.06),am);m.position.set(0,.015,-.67);return m;}());
/* Larger scope housing for the sniper */
g.add(function(){var m=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,.22,12),am);m.rotation.x=Math.PI/2;m.position.set(0,.09,.1);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,.04,12),gm);m.rotation.x=Math.PI/2;m.position.set(0,.09,.0);return m;}());
patternFn(g,.55,.06);
}else if(wpN==='Minigun'){
g.add(new THREE.Mesh(new THREE.BoxGeometry(.12,.12,.4),bm));
for(var bi=0;bi<4;bi++){var angle=bi*Math.PI/2;var brl=new THREE.Mesh(new THREE.BoxGeometry(.025,.025,.45),dm);brl.position.set(Math.cos(angle)*.04,Math.sin(angle)*.04+.01,-.4);g.add(brl);}
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.08,.14,.15),bm);m.position.set(0,-.04,.25);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.1,.1,.04),am);m.position.set(0,.01,-.64);return m;}());
patternFn(g,.4,.12);
}else if(wpN==='Plasma Rifle'){
g.add(new THREE.Mesh(new THREE.BoxGeometry(.09,.08,.45),bm));
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.05,.05,.2),am);m.position.set(0,.01,-.32);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.06,.08,.16),bm);m.position.set(0,-.01,.26);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.04,.12,.06),am);m.position.set(0,-.1,.04);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.11,.02,.14),am);m.position.set(0,.05,-.1);return m;}());
g.add(function(){var m=new THREE.Mesh(new THREE.BoxGeometry(.11,.02,.14),am);m.position.set(0,-.05,-.1);return m;}());
patternFn(g,.45,.09);
}
g.position.set(.22,-.22,-.35);
this.P.wpHipPos=new THREE.Vector3(.22,-.22,-.35);
this.P.wpAdsPos=(wpN==='Sniper')?new THREE.Vector3(0,-.06,-.18):new THREE.Vector3(0,-.13,-.22);
this.cam.add(g);this.scene.add(this.cam);this.P.wm=g;
};
/* SPAWN */
VG.prototype.spawnPlayer=function(){
var cl=DATA.classes[this.sd.selectedClass],wp=DATA.weapons[cl.weapon],up=this.sd.upgrades||{};
var boosts=this.activeBoosts||[];
var hasBst=function(id){for(var i=0;i<boosts.length;i++)if(boosts[i]===id)return true;return false;};
var hpMul=hasBst('armor_boost')?1.5:1,spdMul=hasBst('speed_boost')?1.2:1,ammoMul=hasBst('ammo_boost')?3:4;
this.P.dm=hasBst('dmg_boost')?1.3:1;
this.P.regenRate=hasBst('regen_boost')?10:5;
this.P.lootMul=hasBst('loot_boost')?2:1;
this.P.hp=Math.floor(cl.hp*hpMul);this.P.mhp=this.P.hp;this.P.spd=cl.speed*0.92*spdMul;this.P.baseSpd=this.P.spd;
this.P.wp=wp;this.P.ammo=wp.mag;this.P.res=wp.mag*ammoMul;this.P.rld=false;
this.P.vx=0;this.P.vz=0;this.P.vy=0;this.P.og=false;this.P.lf=0;this.P.lastHit=0;this.P._mgSpin=0;
this.P.crouch=false;this.P.curH=this.P.baseH;this.P.h=this.P.baseH;
this.P.dashCd=0;this.P.dashT=0;this.P.dashVx=0;this.P.dashVz=0;
this.P.bloom=0;this.P.jumpQ=0;this.P.coyoteT=0;this.P.spawnShieldT=2.6;
this.P.ads=false;this.P.adsT=0;this.cam.fov=this.P.baseFov||80;this.cam.updateProjectionMatrix();
var scopeR=document.getElementById('sniper-scope');if(scopeR)scopeR.classList.remove('show');
this.keys={};this.md=false;this.mx=0;this.my=0;this.recX=0;this.recZ=0;this.bobT=0;
var sp=this._safeSpawn();
this.cam.position.set(sp[0],this.P.h,sp[1]);this.cam.rotation.set(0,Math.PI,0);
this.buildWpn();this.mK=0;this.mXP=0;this.updateHUD();
for(var i=0;i<this.enemies.length;i++)if(this.enemies[i].mesh)this.scene.remove(this.enemies[i].mesh);
for(var i=0;i<this.proj.length;i++)if(this.proj[i].mesh)this.scene.remove(this.proj[i].mesh);
for(var i=0;i<this.tracers.length;i++)if(this.tracers[i].mesh)this.scene.remove(this.tracers[i].mesh);
this.enemies=[];this.proj=[];this.tracers=[];
if(this.pickups){for(var i=0;i<this.pickups.length;i++)if(this.pickups[i]&&this.pickups[i].mesh)this.scene.remove(this.pickups[i].mesh);}
this.pickups=[];
var md=this._mode();
if(md.waves){
/* Survival starts with first wave queued */
this._startWave(1);
}else{
/* Non-wave modes: spawn a fixed initial set */
for(var i=0;i<(md.initialBots||10);i++)this.spawnEnemy();
}
};
/* ═══════════════════════════════════════════════════════════
   SURVIVAL — Wave system
   Each wave: more enemies + scaled HP/damage; brief break between waves.
   Reward at end of each wave; encourages all weapon classes to be viable.
   ═══════════════════════════════════════════════════════════ */
VG.prototype._waveConfig=function(w){
/* Returns {count, hpMul, dmgMul, eliteChance, label} */
var md=this._mode();
var hard=md.id==='survival_plus';
var count=Math.min(hard?30:24,(hard?5:4)+Math.floor(w*(hard?1.9:1.5)));
var hpMul=1+(w-1)*(hard?.16:.12);
var dmgMul=1+(w-1)*(hard?.11:.08);
var eliteChance=Math.max(0,(w-(hard?2:3))*(hard?.11:.08));
return{count:count,hpMul:hpMul,dmgMul:dmgMul,eliteChance:Math.min(.4,eliteChance)};
};
VG.prototype._startWave=function(w){
this.wave=w;
var cfg=this._waveConfig(w);
this.waveActive=true;
this.waveSpawnQueue=cfg.count;
this.waveRemaining=cfg.count;
this._spawnAccum=0;
this._waveCfg=cfg;
this.updateHUD();
var bn=document.getElementById('wave-banner');
if(bn){bn.textContent='VAGUE '+w;bn.classList.add('show');var self=this;clearTimeout(this._wbT);this._wbT=setTimeout(function(){bn.classList.remove('show');},2200);}
};
VG.prototype._endWave=function(){
this.waveActive=false;
/* Wave reward — scales with wave number */
var w=this.wave,lm=this.P.lootMul||1;
var cr=Math.floor((30+w*15)*lm);
var xp=Math.floor((25+w*10)*lm);
var pt=Math.floor((6+w*2)*lm);
var cy=Math.floor(((w%2===0)?Math.ceil(w/2):0)*lm);
var tk=(w%5===0)?Math.max(1,Math.floor(w/5)):0;
this.sd.resources.credits+=cr;this.sd.resources.parts+=pt;this.sd.resources.crystals+=cy;this.sd.resources.tokens+=tk;
this.sd.stats.totalCreditsEarned+=cr;
this.addXP(xp);
var bn=document.getElementById('wave-banner');
if(bn){var t='VAGUE '+w+' TERMIN\u00c9E  +'+cr+'\u00a9  +'+xp+'XP';if(tk>0)t+='  +'+tk+'\u2605';if(cy>0)t+='  +'+cy+'\u25c6';bn.textContent=t;bn.classList.add('show');clearTimeout(this._wbT);}
/* Refill some ammo at end of wave (Survival has finite ammo) */
if(this.P&&this.P.wp)this.P.res+=this.P.wp.mag*2;
this._waveBreak=6;
this.save();
};
/* PHYSICS */
VG.prototype._groundAt=function(x,z,curY,hw){
var gl=0;
for(var i=0;i<this.wB.length;i++){
var wb=this.wB[i];
if(x>=wb.min.x-hw&&x<=wb.max.x+hw&&z>=wb.min.z-hw&&z<=wb.max.z+hw){
if(wb.max.y>gl&&wb.max.y<=curY+.15)gl=wb.max.y;
}
}return gl;
};
VG.prototype.updatePhys=function(dt){
var G=24,groundAccel=9.8,airAccel=3.2,groundFric=18.5,airFric=2.8;
/* Crouch handling — Shift toggles crouch state */
this.P.crouch=!!this.keys[16];
var tgtH=this.P.crouch?this.P.crouchH:this.P.baseH;
this.P.curH=THREE.MathUtils.lerp(this.P.curH||this.P.baseH,tgtH,Math.min(1,dt*12));
this.P.h=this.P.curH;
var crouchSpdMul=this.P.crouch?.55:1;
var MS=this.P.baseSpd*crouchSpdMul;
var rawMx=this.mx,rawMy=this.my;
this.mx=0;this.my=0;
var lookAlpha=Math.min(1,dt*(24+this.cfg.lookSmooth*40));
this._smMx=THREE.MathUtils.lerp(this._smMx||0,rawMx,lookAlpha);
this._smMy=THREE.MathUtils.lerp(this._smMy||0,rawMy,lookAlpha);
var sens=this.cfg.lookSens*(this.P.ads?this.cfg.adsLookMul:1);
this.cam.rotation.y-=this._smMx*sens;this.cam.rotation.x-=this._smMy*sens;
this.cam.rotation.x=Math.max(-1.45,Math.min(1.45,this.cam.rotation.x));
var yaw=this.cam.rotation.y;
var fw=new THREE.Vector3(-Math.sin(yaw),0,-Math.cos(yaw));
var rt=new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw));
var iF=this.keys[87]||this.keys[90]||this.keys[38]||false;
var iB=this.keys[83]||this.keys[40]||false;
var iL=this.keys[65]||this.keys[81]||this.keys[37]||false;
var iR=this.keys[68]||this.keys[39]||false;
var dZ=(iF?1:0)-(iB?1:0),dX=(iR?1:0)-(iL?1:0);
var wX=fw.x*dZ+rt.x*dX,wZ=fw.z*dZ+rt.z*dX;
var wl=Math.sqrt(wX*wX+wZ*wZ);if(wl>0){wX/=wl;wZ/=wl;}
var mv=(dX!==0||dZ!==0);
var tgtVX=wX*MS,tgtVZ=wZ*MS;
var accel=this.P.og?groundAccel:airAccel;
this.P.vx=THREE.MathUtils.lerp(this.P.vx,tgtVX,Math.min(1,dt*accel));
this.P.vz=THREE.MathUtils.lerp(this.P.vz,tgtVZ,Math.min(1,dt*accel));
if(!mv){
var fr=this.P.og?groundFric:airFric;
var damp=Math.max(0,1-fr*dt);
this.P.vx*=damp;this.P.vz*=damp;
if(Math.abs(this.P.vx)<.01)this.P.vx=0;
if(Math.abs(this.P.vz)<.01)this.P.vz=0;
}
/* DASH — applies extra burst velocity for a short duration */
if(this.P.dashCd>0)this.P.dashCd-=dt;
if(this.P.dashT>0){
this.P.vx+=this.P.dashVx*dt*2.8;
this.P.vz+=this.P.dashVz*dt*2.8;
this.P.vx*=Math.max(.88,1-dt*3.2);
this.P.vz*=Math.max(.88,1-dt*3.2);
this.P.dashT-=dt;
}
var sp=Math.sqrt(this.P.vx*this.P.vx+this.P.vz*this.P.vz);
var maxSpd=this.P.dashT>0?MS*1.42:MS;
if(sp>maxSpd){this.P.vx=(this.P.vx/sp)*maxSpd;this.P.vz=(this.P.vz/sp)*maxSpd;}
var nx=this.cam.position.x+this.P.vx*dt,nz=this.cam.position.z+this.P.vz*dt;
var feetY=this.cam.position.y-this.P.h,hw=.35,maxSt=.85;
var cyC=this.cam.position.y-.8;
var bxMn=new THREE.Vector3(nx-hw,cyC-.8,this.cam.position.z-hw);
var bxMx=new THREE.Vector3(nx+hw,cyC+.8,this.cam.position.z+hw);
var boxX=new THREE.Box3(bxMn,bxMx);
var colX=false,stepX=feetY;
for(var i=0;i<this.wB.length;i++){if(boxX.intersectsBox(this.wB[i])){
var wt=this.wB[i].max.y;if(wt<=feetY+maxSt&&wt>feetY)stepX=Math.max(stepX,wt);else colX=true;
}}
if(!colX){this.cam.position.x=nx;if(stepX>feetY){this.cam.position.y=stepX+this.P.h;this.P.vy=0;this.P.og=true;feetY=stepX;}}
else this.P.vx=0;
feetY=this.cam.position.y-this.P.h;cyC=this.cam.position.y-.8;
var bzMn=new THREE.Vector3(this.cam.position.x-hw,cyC-.8,nz-hw);
var bzMx=new THREE.Vector3(this.cam.position.x+hw,cyC+.8,nz+hw);
var boxZ=new THREE.Box3(bzMn,bzMx);
var colZ=false,stepZ=feetY;
for(var i=0;i<this.wB.length;i++){if(boxZ.intersectsBox(this.wB[i])){
var wt=this.wB[i].max.y;if(wt<=feetY+maxSt&&wt>feetY)stepZ=Math.max(stepZ,wt);else colZ=true;
}}
if(!colZ){this.cam.position.z=nz;if(stepZ>feetY){this.cam.position.y=stepZ+this.P.h;this.P.vy=0;this.P.og=true;}}
else this.P.vz=0;
var mh=(this.mapHalf||34)-1.5;
this.cam.position.x=Math.max(-mh,Math.min(mh,this.cam.position.x));
this.cam.position.z=Math.max(-mh,Math.min(mh,this.cam.position.z));
this.P.vy-=G*dt;
var newY=this.cam.position.y+this.P.vy*dt;
var gl=this._groundAt(this.cam.position.x,this.cam.position.z,this.cam.position.y-this.P.h,.35);
var minY=gl+this.P.h;
if(newY<=minY){newY=minY;this.P.vy=0;this.P.og=true;}else{this.P.og=false;}
this.cam.position.y=newY;
if(this.P.og)this.P.coyoteT=this.cfg.coyote;
else this.P.coyoteT=Math.max(0,this.P.coyoteT-dt);
this.P.jumpQ=Math.max(0,(this.P.jumpQ||0)-dt);
if(this.P.jumpQ>0&&(this.P.og||this.P.coyoteT>0)){
this.P.vy=6.7;this.P.og=false;this.P.jumpQ=0;this.P.coyoteT=0;
}
// HP regen
var now=this.clock.getElapsedTime();
if(this.P.spawnShieldT>0)this.P.spawnShieldT=Math.max(0,this.P.spawnShieldT-dt);
if(now-this.P.lastHit>2&&this.P.hp<this.P.mhp){
this.P.hp=Math.min(this.P.mhp,this.P.hp+this.P.regenRate*dt);
}
// Bob + recoil
var wpN=DATA.classes[this.sd.selectedClass].weapon;
var rec=this._getRecoil(wpN);
/* ADS lerp + FOV — right-click holds ADS */
/* ADS lerp — fast & responsive (eased) */
var adsSpeed=28;
this.P.adsT=THREE.MathUtils.lerp(this.P.adsT||0,this.P.ads?1:0,Math.min(1,dt*adsSpeed));
if(Math.abs(this.P.adsT-(this.P.ads?1:0))<.005)this.P.adsT=this.P.ads?1:0;
var ease=this.P.adsT*this.P.adsT*(3-2*this.P.adsT);
var hipP=this.P.wpHipPos||new THREE.Vector3(.22,-.22,-.35);
var adsP=this.P.wpAdsPos||new THREE.Vector3(0,-.13,-.22);
var lerpVec=new THREE.Vector3().copy(hipP).lerp(adsP,ease);
var wpNCur=DATA.classes[this.sd.selectedClass].weapon;
var adsFovMap={'Sniper':22,'Assault Rifle':52,'SMG':58,'Shotgun':62,'Minigun':60,'Plasma Rifle':54};
var targetFov=this.P.ads?(adsFovMap[wpNCur]||55):(this.P.baseFov||80);
var curFov=this.cam.fov;
this.cam.fov=THREE.MathUtils.lerp(curFov,targetFov,Math.min(1,dt*adsSpeed));
this.cam.updateProjectionMatrix();
/* Sniper scope overlay — toggled when ADS-ing with sniper */
var scope=document.getElementById('sniper-scope');
if(scope){
  var wantScope=this.P.ads&&wpNCur==='Sniper'&&this.P.adsT>.5;
  if(wantScope&&!scope.classList.contains('show'))scope.classList.add('show');
  else if(!wantScope&&scope.classList.contains('show'))scope.classList.remove('show');
}
if(this.P.wm){
  /* Hide weapon model when fully scoped with sniper so the scope sight is unobstructed */
  this.P.wm.visible=!(wpNCur==='Sniper'&&this.P.ads&&this.P.adsT>.85);
var bpos=lerpVec.clone();if(mv&&this.P.og&&ease<.5){this.bobT+=dt*rec.bob;bpos.y+=Math.sin(this.bobT)*.013*(1-ease);bpos.x+=Math.sin(this.bobT*.5)*.005*(1-ease);}
this.recZ=THREE.MathUtils.lerp(this.recZ,0,dt*rec.sZ);this.recX=THREE.MathUtils.lerp(this.recX,0,dt*rec.sX);
this.P.wm.position.copy(bpos);this.P.wm.position.z+=this.recZ;this.P.wm.rotation.x=this.recX;
if(wpN==='Minigun'&&this.md&&!this.P.rld){this.P._mgSpin+=dt*25;this.P.wm.rotation.z=this.P._mgSpin;}
else{this.P.wm.rotation.z=THREE.MathUtils.lerp(this.P.wm.rotation.z||0,0,dt*8);}
}
var horizSpd=Math.sqrt(this.P.vx*this.P.vx+this.P.vz*this.P.vz);
var moveRatio=Math.min(1.6,horizSpd/Math.max(1,this.P.baseSpd));
var recov=this.P.ads?3.8:2.5;
this.P.bloom=Math.max(0,(this.P.bloom||0)-dt*recov);
this._updateCrosshair(moveRatio);
};
/* SHOOTING */
VG.prototype.handleShoot=function(){
if(!this.md||this.P.rld)return;var now=this.clock.getElapsedTime(),wp=this.P.wp;if(!wp)return;
if(now-this.P.lf>=wp.fireRate){if(this.P.ammo>0){this.P.lf=now;this.P.ammo--;
var wpN=DATA.classes[this.sd.selectedClass].weapon;
var pl=wp.pellets||1;for(var p=0;p<pl;p++)this.fireRay();this.updateHUD();
var rec=this._getRecoil(wpN);this.recZ=rec.z;this.recX=rec.x;
this.P.bloom=Math.min(1.8,(this.P.bloom||0)+(wp.auto ? .08 : .18));
this._sndShot(wpN);
}else this.reload();}
};
VG.prototype.fireRay=function(){
var wp=this.P.wp,dir=new THREE.Vector3(0,0,-1).applyQuaternion(this.cam.quaternion);
/* Per-weapon ADS spread benefit + hip-fire bloom */
var wpName=DATA.classes[this.sd.selectedClass].weapon;
var adsMul={'Sniper':.02,'Assault Rifle':.18,'SMG':.45,'Shotgun':.7,'Minigun':.35,'Plasma Rifle':.22}[wpName]||.3;
var hipMul={'Sniper':3.5,'Assault Rifle':1.6,'SMG':1.25,'Shotgun':1.05,'Minigun':1.5,'Plasma Rifle':1.4}[wpName]||1.3;
var t=this.P.adsT||0;
var spreadMul=hipMul+(adsMul-hipMul)*t;
var horizSpd=Math.sqrt(this.P.vx*this.P.vx+this.P.vz*this.P.vz);
var movePenalty=1+Math.min(1.5,horizSpd/Math.max(1,this.P.baseSpd))*(this.P.ads?.4:1);
if(!this.P.og)movePenalty+=.35;
var bloomPenalty=1+(this.P.bloom||0);
var finalSpread=wp.spread*spreadMul*movePenalty*bloomPenalty;
dir.x+=(Math.random()-.5)*finalSpread;dir.y+=(Math.random()-.5)*finalSpread;dir.normalize();
var rc=new THREE.Raycaster(this.cam.position,dir,.1,200);
/* Build target list: walls + enemy parts. Walls are tagged so we can distinguish them. */
var tg=[],wallSet={};
for(var wi=0;wi<this.wM.length;wi++){var wm=this.wM[wi];if(wm){tg.push(wm);wallSet[wm.id]=true;}}
for(var i=0;i<this.enemies.length;i++)if(this.enemies[i].mesh)this.enemies[i].mesh.traverse(function(c){if(c.isMesh&&c.material.visible!==false)tg.push(c);});
var hits=rc.intersectObjects(tg,false);
var bar=new THREE.Vector3(.12,-.12,-.55).applyQuaternion(this.cam.quaternion).add(this.cam.position);
if(hits.length===0){this._tracer(bar,rc.ray.at(120,new THREE.Vector3()));return;}
/* Closest hit determines outcome. If wall, bullet stops there (no damage). */
var first=hits[0];
this._tracer(bar,first.point.clone());
if(wallSet[first.object.id])return;
var ho=first.object,en=null;
for(var i=0;i<this.enemies.length;i++){var e=this.enemies[i];if(!e.mesh)continue;var f=false;e.mesh.traverse(function(c){if(c===ho)f=true;});if(f){en=e;break;}}
if(en){
var hitDist=first.distance;
var baseDmg=this._distDmg(wp.dmg,hitDist,wp);
var dmg=Math.floor(baseDmg*this.P.dm);
var hitY=first.point.y;
var enemyBaseY=en.mesh.position.y;
var headThreshold=enemyBaseY+.5;
var isHeadshot=hitY>=headThreshold;
if(isHeadshot)dmg=Math.floor(dmg*1.8);
this.dmgEnemy(en,dmg,isHeadshot);
}
};
VG.prototype._tracer=function(s,e){
var sk=this._skin();var g=new THREE.BufferGeometry().setFromPoints([s,e]);
var m=new THREE.LineBasicMaterial({color:sk.tracer,transparent:true,opacity:.9});
var l=new THREE.Line(g,m);this.scene.add(l);this.tracers.push({mesh:l,mat:m,life:.07});
};
VG.prototype.reload=function(){
if(this.P.res<=0||this.P.rld||this.P.ammo===this.P.wp.mag)return;
this.P.rld=true;var el=document.getElementById('hud-ammo');if(el)el.innerText='RLD';
if(this.P.wm)this.P.wm.rotation.x=-Math.PI/5;
var self=this;setTimeout(function(){if(self.state!=='PLAYING')return;
if(self._mode().waves){var need=self.P.wp.mag-self.P.ammo;var take=Math.min(need,self.P.res);self.P.ammo+=take;self.P.res-=take;}
else{self.P.ammo=self.P.wp.mag;self.P.res=999;}
self.P.rld=false;if(self.P.wm)self.P.wm.rotation.x=0;self.updateHUD();},this.P.wp.reload*1000);
};
/* ═══════════════════════════════════════════════════════════
   ENEMIES — Weapon-class based bots
   Type 0: AR BOT (Blue) — medium HP, balanced
   Type 1: SMG BOT (Green) — low HP, fast, rapid fire
   Type 2: SHOTGUN BOT (Red/Orange) — high HP, rushes close
   Type 3: SNIPER BOT (Purple) — low HP, slow, long range
   ═══════════════════════════════════════════════════════════ */
VG.prototype._buildEnemy=function(type){
var bt=DATA.botTypes[type]||DATA.botTypes[0];
var c={hc:bt.hc,ac:bt.ac,lc:bt.lc,vc:bt.vc,xc:bt.xc};
var s=type===2?1.1:type===1?.92:type===3?.96:1;
var mesh=new THREE.Mesh(new THREE.BoxGeometry(.9*s,2*s,.9*s),new THREE.MeshBasicMaterial({visible:false}));
var body=new THREE.MeshStandardMaterial({color:c.ac,roughness:.42,metalness:.28,clearcoat:.45});
var armor=new THREE.MeshStandardMaterial({color:c.hc,roughness:.34,metalness:.38,clearcoat:.65});
var dark=new THREE.MeshStandardMaterial({color:0x11151c,roughness:.56,metalness:.45});
var glow=new THREE.MeshStandardMaterial({color:c.vc,emissive:c.vc,emissiveIntensity:.75,roughness:.2,metalness:.5});
var accent=new THREE.MeshStandardMaterial({color:c.xc,emissive:c.xc,emissiveIntensity:.4,roughness:.35,metalness:.4});
// head + helmet silhouette
var hd=new THREE.Mesh(new THREE.BoxGeometry(.48*s,.42*s,.48*s),armor.clone());hd.position.y=.84*s;
var helm=new THREE.Mesh(new THREE.BoxGeometry(.56*s,.22*s,.56*s),armor.clone());helm.position.y=1.02*s;
var visor=new THREE.Mesh(new THREE.BoxGeometry(.34*s,.12*s,.05*s),glow);visor.position.set(0,.84*s,-.26*s);
// torso + chest rig
var torso=new THREE.Mesh(new THREE.BoxGeometry(.7*s,.62*s,.4*s),body.clone());torso.position.y=.18*s;
var plate=new THREE.Mesh(new THREE.BoxGeometry(.56*s,.28*s,.08*s),armor.clone());plate.position.set(0,.22*s,-.22*s);
var belt=new THREE.Mesh(new THREE.BoxGeometry(.74*s,.1*s,.42*s),dark.clone());belt.position.y=-.15*s;
var pack=new THREE.Mesh(new THREE.BoxGeometry(.3*s,.42*s,.18*s),dark.clone());pack.position.set(0,.18*s,.24*s);
// arms
var lU=new THREE.Mesh(new THREE.BoxGeometry(.2*s,.34*s,.2*s),body.clone());lU.position.set(-.48*s,.2*s,0);
var rU=new THREE.Mesh(new THREE.BoxGeometry(.2*s,.34*s,.2*s),body.clone());rU.position.set(.48*s,.2*s,0);
var lF=new THREE.Mesh(new THREE.BoxGeometry(.18*s,.32*s,.18*s),dark.clone());lF.position.set(-.5*s,-.08*s,.05*s);
var rF=new THREE.Mesh(new THREE.BoxGeometry(.18*s,.32*s,.18*s),dark.clone());rF.position.set(.5*s,-.08*s,.05*s);
// legs
var lT=new THREE.Mesh(new THREE.BoxGeometry(.24*s,.4*s,.24*s),body.clone());lT.position.set(-.19*s,-.43*s,0);
var rT=new THREE.Mesh(new THREE.BoxGeometry(.24*s,.4*s,.24*s),body.clone());rT.position.set(.19*s,-.43*s,0);
var lC=new THREE.Mesh(new THREE.BoxGeometry(.22*s,.35*s,.22*s),dark.clone());lC.position.set(-.19*s,-.79*s,.02*s);
var rC=new THREE.Mesh(new THREE.BoxGeometry(.22*s,.35*s,.22*s),dark.clone());rC.position.set(.19*s,-.79*s,.02*s);
var lS=new THREE.Mesh(new THREE.BoxGeometry(.24*s,.12*s,.32*s),dark.clone());lS.position.set(-.19*s,-.97*s,.05*s);
var rS=new THREE.Mesh(new THREE.BoxGeometry(.24*s,.12*s,.32*s),dark.clone());rS.position.set(.19*s,-.97*s,.05*s);
// class stripe
var stripe=new THREE.Mesh(new THREE.BoxGeometry(.64*s,.08*s,.42*s),accent.clone());stripe.position.set(0,.36*s,-.01*s);
// visible weapon in hand (same families as player)
var wp=bt.weapon;
var wpG=new THREE.Group();
var wpMat=new THREE.MeshStandardMaterial({color:c.lc,roughness:.35,metalness:.5});
var wpAccent=new THREE.MeshStandardMaterial({color:c.vc,emissive:c.vc,emissiveIntensity:.55,roughness:.25,metalness:.45});
var len=wp==='Sniper'?.55:wp==='Assault Rifle'?.42:wp==='SMG'?.3:wp==='Shotgun'?.46:.4;
wpG.add(new THREE.Mesh(new THREE.BoxGeometry(.07*s,.07*s,len*s),wpMat));
wpG.add(new THREE.Mesh(new THREE.BoxGeometry(.05*s,.05*s,Math.max(.14*s,len*.55*s)),wpMat)).position.set(0,.01*s,-len*.62*s);
wpG.add(new THREE.Mesh(new THREE.BoxGeometry(.06*s,.12*s,.12*s),wpMat)).position.set(0,-.04*s,.2*s);
wpG.add(new THREE.Mesh(new THREE.BoxGeometry(.03*s,.03*s,.06*s),wpAccent)).position.set(0,.02*s,-(len*.58*s+.04*s));
if(wp==='Sniper'){wpG.add(new THREE.Mesh(new THREE.CylinderGeometry(.04*s,.04*s,.16*s,10),wpAccent)).rotation.x=Math.PI/2;wpG.children[wpG.children.length-1].position.set(0,.08*s,-.04*s);}
wpG.position.set(.54*s,-.08*s,-.12*s);
mesh.add(hd,helm,visor,torso,plate,belt,pack,lU,rU,lF,rF,lT,rT,lC,rC,lS,rS,stripe,wpG);
// hp bar + label
var hpW=1.0*s;
var hpBg=new THREE.Mesh(new THREE.PlaneGeometry(hpW,.1),new THREE.MeshBasicMaterial({color:0x220000,side:THREE.DoubleSide,depthTest:false,transparent:true,opacity:.85}));
hpBg.position.set(0,1.45*s,0);hpBg.renderOrder=999;
var hpFgMat=new THREE.MeshBasicMaterial({color:0x00ff44,side:THREE.DoubleSide,depthTest:false,transparent:true,opacity:.95});
var hpFg=new THREE.Mesh(new THREE.PlaneGeometry(hpW,.1),hpFgMat);hpFg.position.set(0,1.45*s,-.01);hpFg.renderOrder=1000;
var lbl=new THREE.Mesh(new THREE.PlaneGeometry(hpW*.72,.06),new THREE.MeshBasicMaterial({color:c.vc,side:THREE.DoubleSide,depthTest:false,transparent:true,opacity:.75}));
lbl.position.set(0,1.6*s,0);lbl.renderOrder=1001;
mesh.add(hpBg,hpFg,lbl);
var parts=[hd,helm,visor,torso,plate,belt,pack,lU,rU,lF,rF,lT,rT,lC,rC,lS,rS,stripe,wpG];
mesh.userData.parts=parts;mesh.userData.type=type;mesh.userData.hpBar=hpFg;mesh.userData.hpBarMat=hpFgMat;mesh.userData.hpBg=hpBg;mesh.userData.hpLbl=lbl;mesh.userData.headMesh=hd;
mesh.userData.weaponMuzzleLocal=new THREE.Vector3(.54*s,-.08*s,-(len*.98*s+.12*s));
return{mesh:mesh,hp:bt.hp,maxHp:bt.hp,name:bt.name};
};
VG.prototype.spawnEnemy=function(){
var roll=Math.random();
var md=this._mode();
/* In survival, wave number gradually increases the type variety + elite chance */
var t;
if(md.waves&&this.wave>0){
var w=this.wave;
/* Early waves (1-2): mostly AR + SMG. Add Shotgun from w3, Sniper from w4 */
if(w<=2){t=roll<.55?0:1;}
else if(w===3){t=roll<.40?0:roll<.70?1:2;}
else{t=roll<.30?0:roll<.55?1:roll<.80?2:3;}
}else{
t=roll<.30?0:roll<.55?1:roll<.80?2:3;
}
var r=this._buildEnemy(t);
/* Hide HP bars in high-tension modes */
if(md.showHpBars===false&&r.mesh.userData.hpBar){
  r.mesh.userData.hpBar.visible=false;
  if(r.mesh.userData.hpBg)r.mesh.userData.hpBg.visible=false;
  if(r.mesh.userData.hpLbl)r.mesh.userData.hpLbl.visible=false;
}
/* Wave scaling — boost HP and base damage progressively */
var hpMul=1,dmgMul=1,isElite=false;
if(md.waves&&this._waveCfg){
hpMul=this._waveCfg.hpMul;dmgMul=this._waveCfg.dmgMul;
if(Math.random()<this._waveCfg.eliteChance){isElite=true;hpMul*=1.6;dmgMul*=1.25;}
}
if(md.botDamageMul)dmgMul*=md.botDamageMul;
var scaledHp=Math.floor(r.hp*hpMul);
if(isElite&&r.mesh.userData.parts){
/* Tint elite enemies with a red/gold accent on shoulders */
var pts=r.mesh.userData.parts;
for(var pi=0;pi<pts.length;pi++)if(pts[pi]&&pts[pi].material&&pts[pi].material.emissive){
if(pi===6||pi===7){pts[pi].material.emissive.setHex(0xffaa00);pts[pi].material.emissiveIntensity=.8;}
}
}
var x,z,att=0,ok=false;
var ns=(this.spawnNodes&&this.spawnNodes.enemy)?this.spawnNodes.enemy:null;
do{
if(ns&&Math.random()<.85){
  var n=ns[Math.floor(Math.random()*ns.length)];
  x=n[0]+(Math.random()-.5)*2.2;z=n[1]+(Math.random()-.5)*2.2;
}else{
  var h=(this.mapHalf||34)-4;
  x=(Math.random()-.5)*h*2;z=(Math.random()-.5)*h*2;
}
att++;
var tc=Math.abs(x-this.cam.position.x)<10&&Math.abs(z-this.cam.position.z)<10;
ok=!tc&&this._clr(x,z);}while(!ok&&att<45);
var gl=this._groundAt(x,z,10,.5);
r.mesh.position.set(x,gl+1,z);this.scene.add(r.mesh);
this.enemies.push({mesh:r.mesh,hp:scaledHp,maxHp:scaledHp,lastShot:this.clock.getElapsedTime()+Math.random()*2,type:t,legP:Math.random()*Math.PI*2,name:r.name,dmgMul:dmgMul,elite:isElite,beh:{state:'seek',stateT:.8+Math.random()*1.4,burst:0,repath:0}});
};
VG.prototype.dmgEnemy=function(en,dmg,isHeadshot){
if(!en||!en.mesh)return;en.hp-=dmg;
var hm=document.getElementById('hit-marker');if(hm){hm.classList.add('show');clearTimeout(this._hmT);this._hmT=setTimeout(function(){hm.classList.remove('show');},120);}
if(hm&&isHeadshot){hm.classList.add('headshot');clearTimeout(this._hmHsT);this._hmHsT=setTimeout(function(){hm.classList.remove('headshot');},120);}
this._showDmg(en.mesh.position,dmg,isHeadshot);
if(isHeadshot)this._sndHeadshot();else this._sndHit();
var pts=en.mesh.userData.parts||[];
for(var i=0;i<pts.length;i++)if(pts[i].material){pts[i].material.emissive.setHex(isHeadshot?0xff4444:0xffffff);pts[i].material.emissiveIntensity=1;}
setTimeout(function(){if(!en.mesh)return;for(var i=0;i<pts.length;i++)if(pts[i].material){pts[i].material.emissive.setHex(0);pts[i].material.emissiveIntensity=0;}},60);
/* Update HP bar */
if(en.mesh.userData.hpBar){
var pct=Math.max(0,en.hp/en.maxHp);
en.mesh.userData.hpBar.scale.x=pct;
/* Shift HP bar left to keep it aligned to left edge */
en.mesh.userData.hpBar.position.x=(pct-1)*0.5*(en.mesh.userData.type===2?1.15:en.mesh.userData.type===1?.88:en.mesh.userData.type===3?.95:1)*0.5;
var m=en.mesh.userData.hpBarMat;
if(m){if(pct>.5)m.color.setHex(0x00ff44);else if(pct>.25)m.color.setHex(0xffaa00);else m.color.setHex(0xff2200);}
}
if(en.hp<=0){
var md=this._mode();
this._sndKill();
/* Drop pickup in Survival (not every enemy) */
if(md.waves&&Math.random()<0.32){
  var roll=Math.random();
  var pt=roll<0.55?'ammo':'hp';
  this._dropPickup(en.mesh.position.clone(),pt);
}
this.scene.remove(en.mesh);
this.enemies=this.enemies.filter(function(e){return e!==en;});
this.rewardKill(en.type);
var self=this;
if(md.waves){
/* Survival: track wave progress, do NOT auto-respawn beyond the wave count */
this.waveRemaining=Math.max(0,this.waveRemaining-1);
this.updateHUD();
if(this.waveRemaining<=0&&this.waveSpawnQueue<=0&&this.waveActive){
this._endWave();
}
}else if(md.respawn){
/* Non-wave modes: maintain pressure with configurable delay */
setTimeout(function(){if(self.state==='PLAYING'&&self._mode().respawn)self.spawnEnemy();},Math.floor((md.respawnDelay||1.2)*1000));
}
if(md.killTarget&&this.mK>=md.killTarget)this._modeComplete('VICTOIRE — MATCH À MORT',this.mK+' éliminations atteintes.');
}
};
VG.prototype._showDmg=function(pos,dmg,isHeadshot){
var c=document.getElementById('dmg-numbers');if(!c)return;
var v=pos.clone();v.y+=1.5;v.project(this.cam);if(v.z>1)return;
var x=(v.x*.5+.5)*innerWidth,y=(-v.y*.5+.5)*innerHeight;
var el=document.createElement('div');
el.className=isHeadshot?'dmg-num dmg-headshot':'dmg-num';
el.textContent=isHeadshot?dmg+' HS':dmg;
el.style.left=x+'px';el.style.top=y+'px';c.appendChild(el);
setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},800);
};
VG.prototype.rewardKill=function(type){
this.sd.stats.kills++;this.mK++;
if(this._mode().teamBattle)this.modeScore.player+=1;
var lm=this.P.lootMul||1;
var bt=DATA.botTypes[type]||DATA.botTypes[0];
var cr=Math.floor(bt.cr*lm);
var xp=Math.floor(bt.xp*lm);
var pt=Math.floor((Math.random()*4+2)*lm);
var cy=Math.random()<.12?Math.ceil(lm):0;
this.sd.resources.credits+=cr;this.sd.resources.parts+=pt;this.sd.resources.crystals+=cy;
this.sd.stats.totalCreditsEarned+=cr;
this.addXP(xp);
this._showKR(cr,xp,pt,cy);this.updateHUD();this.save();
};
VG.prototype._showKR=function(cr,xp,pt,cy){
var el=document.getElementById('kill-reward');if(!el)return;
var t='+'+cr+' CR  +'+xp+' XP  +'+pt+' PCS';if(cy>0)t+='  +'+cy+' CRSTL';
el.textContent=t;el.classList.add('show');clearTimeout(this._krT);this._krT=setTimeout(function(){el.classList.remove('show');},1200);
};
/* ═══════════════════════════════════════════════════════════
   ENEMY AI — Weapon-class behavior
   AR bots: medium range engagement, steady fire
   SMG bots: rush to close range, rapid fire
   Shotgun bots: aggressive rush, only fire when close
   Sniper bots: keep distance, slow powerful shots
   ═══════════════════════════════════════════════════════════ */
VG.prototype._updateWaves=function(dt){
if(!this._mode().waves)return;
if(!this.waveActive){
/* Between-wave break, then start the next wave */
if(this._waveBreak>0){
  this._waveBreak-=dt;
  var bn=document.getElementById('wave-banner');
  if(bn&&this._waveBreak<4.5){
    bn.textContent='PROCHAINE VAGUE DANS '+Math.max(1,Math.ceil(this._waveBreak))+'s';
    bn.classList.add('show');
  }
  if(this._waveBreak<=0){
    if(bn)bn.classList.remove('show');
    this._startWave(this.wave+1);
  }
}
return;
}
/* Drip-spawn enemies during the wave */
if(this.waveSpawnQueue>0){
this._spawnAccum+=dt;
var spawnInterval=Math.max(.6,1.6-this.wave*.08);
if(this._spawnAccum>=spawnInterval&&this.enemies.length<Math.min(14,6+Math.floor(this.wave*.6))){
this._spawnAccum=0;
this.spawnEnemy();
this.waveSpawnQueue--;
}
}
};
VG.prototype._closestNode=function(x,z,key){
var arr=this.spawnNodes&&this.spawnNodes[key]?this.spawnNodes[key]:null;
if(!arr||arr.length===0)return null;
var bi=0,bd=Infinity;
for(var i=0;i<arr.length;i++){var dx=arr[i][0]-x,dz=arr[i][1]-z,d=dx*dx+dz*dz;if(d<bd){bd=d;bi=i;}}
return arr[bi];
};
VG.prototype._pickCombatNode=function(ep,pp){
var list=(this.spawnNodes&&this.spawnNodes.flank&&this.spawnNodes.flank.length)?this.spawnNodes.flank:(this.spawnNodes&&this.spawnNodes.patrol?this.spawnNodes.patrol:null);
if(!list||list.length===0)return null;
var best=null,bestScore=-Infinity;
for(var i=0;i<list.length;i++){
var nx=list[i][0],nz=list[i][1];
var pDx=nx-pp.x,pDz=nz-pp.z,pD=Math.sqrt(pDx*pDx+pDz*pDz);
if(pD<7||pD>24)continue; // keep nodes around fight, not too close/far
var eDx=nx-ep.x,eDz=nz-ep.z,eD=Math.sqrt(eDx*eDx+eDz*eDz);
if(eD<2)continue;
var score=(22-pD)*1.25-eD*0.45+Math.random()*2.2;
if(score>bestScore){bestScore=score;best=list[i];}
}
return best||list[Math.floor(Math.random()*list.length)];
};
VG.prototype._hasLOS=function(from,to){
var dir=new THREE.Vector3().subVectors(to,from),dist=dir.length();
if(dist<.01)return true;
dir.normalize();
var rc=new THREE.Raycaster(from,dir,.2,dist);
return rc.intersectObjects(this.wM,false).length===0;
};
VG.prototype._botShootRay=function(from,to,e,bt,dmg){
bt=bt||DATA.botTypes[(e&&e.type)||0]||DATA.botTypes[0];
var dir=new THREE.Vector3().subVectors(to,from).normalize();
var spread=bt.spread||.06;
dir.x+=(Math.random()-.5)*spread;dir.y+=(Math.random()-.5)*spread*.55;dir.z+=(Math.random()-.5)*spread;
dir.normalize();
var rc=new THREE.Raycaster(from,dir,.1,95);
var hits=rc.intersectObjects(this.wM,false);
var endPt=hits.length?hits[0].point.clone():rc.ray.at(95,new THREE.Vector3());
var tG=new THREE.BufferGeometry().setFromPoints([from.clone(),endPt.clone()]);
var tM=new THREE.LineBasicMaterial({color:bt.projColor||0xff7755,transparent:true,opacity:.95});
var tL=new THREE.Line(tG,tM);this.scene.add(tL);this.tracers.push({mesh:tL,mat:tM,life:.08});
var toVec=new THREE.Vector3().subVectors(to,from);
var shotVec=new THREE.Vector3().subVectors(endPt,from);
var shotLen=Math.max(.001,shotVec.length());
var shotDir=shotVec.clone().normalize();
var proj=Math.max(0,Math.min(shotLen,toVec.dot(shotDir)));
var closest=from.clone().addScaledVector(shotDir,proj);
var miss=closest.distanceTo(to);
if(miss<1.1)this.takeDmg(dmg||10);
this._sndEnemyShot();
};
VG.prototype.updateEnemies=function(dt){
this._updateWaves(dt);
var md=this._mode();
var now=this.clock.getElapsedTime(),pP=this.cam.position;
for(var i=this.enemies.length-1;i>=0;i--){
var e=this.enemies[i];if(!e||!e.mesh)continue;
if(!e.beh)e.beh={state:'seek',stateT:.8+Math.random()*1.4,burst:0,repath:0};
var ep=e.mesh.position,dx=pP.x-ep.x,dz=pP.z-ep.z,dist=Math.sqrt(dx*dx+dz*dz);
var bt=DATA.botTypes[e.type]||DATA.botTypes[0];
var spd=bt.speed*0.92*(md.botSpeedMul||1);
e.mesh.lookAt(pP.x,ep.y,pP.z);
/* Billboard HP bars toward camera */
if(e.mesh.userData.hpBar){e.mesh.userData.hpBar.lookAt(pP);e.mesh.userData.hpBg.lookAt(pP);}
if(e.mesh.userData.hpLbl)e.mesh.userData.hpLbl.lookAt(pP);

var mx=0,mz=0;
/* Movement AI per weapon type */
var aggro=md.botAggro||1;
var idealDist=bt.idealDist/aggro;
var minDist=bt.minDist/Math.max(.8,aggro*.95);
if(md.waves){
  /* Survival: bots close in more aggressively, all engage from longer range */
  idealDist=Math.max(5,bt.idealDist*0.75);
  minDist=Math.max(2,bt.minDist*0.6);
  spd*=1.15;
}
if(dist>idealDist+3){
/* Move toward player */
var inv=1/Math.max(dist,.1);mx+=dx*inv*spd;mz+=dz*inv*spd;
}else if(dist<minDist){
/* Back away (especially snipers) */
var inv=1/Math.max(dist,.1);mx-=dx*inv*spd*.6;mz-=dz*inv*spd*.6;
}else if(e.type===3&&dist<idealDist-5){
/* Sniper tries harder to maintain distance */
var inv=1/Math.max(dist,.1);mx-=dx*inv*spd*.8;mz-=dz*inv*spd*.8;
}else{
/* Strafe at ideal distance */
var inv=1/Math.max(dist,.1);
var sx=-dz*inv*spd*.4,sz=dx*inv*spd*.4;
/* Alternate strafe direction based on enemy index */
if(i%2===0){mx+=sx;mz+=sz;}else{mx-=sx;mz-=sz;}
}
/* Tactical navigation: patrol + flank when player not directly visible. */
if(!e.nav)e.nav={node:null,repath:0,strafeDir:Math.random()<.5?-1:1};
e.nav.repath-=dt;
var fromV=new THREE.Vector3(ep.x,ep.y+.6,ep.z);
var toV=new THREE.Vector3(pP.x,pP.y,pP.z);
var hasLOS=this._hasLOS(fromV,toV);
if(!hasLOS||dist>24){
if(e.nav.repath<=0||!e.nav.node){
var pool=(dist>22&&this.spawnNodes&&this.spawnNodes.flank)?'flank':'patrol';
e.nav.node=this._closestNode(pP.x+(Math.random()<.5?-8:8),pP.z+(Math.random()<.5?-8:8),pool)||this._closestNode(pP.x,pP.z,'patrol');
e.nav.repath=.9+Math.random()*.9;
}
if(e.nav.node){
var ndx=e.nav.node[0]-ep.x,ndz=e.nav.node[1]-ep.z,nd=Math.sqrt(ndx*ndx+ndz*ndz);
if(nd>1){mx+=(ndx/nd)*spd*.95;mz+=(ndz/nd)*spd*.95;}
else e.nav.node=null;
}
}else{
e.nav.node=null;
if(e.beh.stateT<=0&&Math.random()<.22){
var cN=this._pickCombatNode(ep,pP);
if(cN){e.nav.node=cN;e.nav.repath=.8+Math.random()*1.4;e.beh.state='reposition';e.beh.stateT=.65+Math.random()*1.2;}
}
}
e.beh.stateT-=dt;
if(e.beh.state==='reposition'&&e.nav.node===null)e.beh.state='seek';
if(e.beh.stateT<=0&&e.beh.state!=='reposition'){
e.beh.state='seek';e.beh.stateT=.9+Math.random()*1.3;
}

/* Separation from other enemies */
for(var j=0;j<this.enemies.length;j++){if(i===j||!this.enemies[j].mesh)continue;var op=this.enemies[j].mesh.position;var ssx=ep.x-op.x,ssz=ep.z-op.z,sd2=Math.sqrt(ssx*ssx+ssz*ssz);if(sd2<2.8&&sd2>.01){mx+=(ssx/sd2)*3.5;mz+=(ssz/sd2)*3.5;}}

var enx=ep.x+mx*dt,enz=ep.z+mz*dt,eR=.45,eMaxSt=.85;
var eFeet=ep.y-1;
var eBxX=new THREE.Box3(new THREE.Vector3(enx-eR,ep.y-1,ep.z-eR),new THREE.Vector3(enx+eR,ep.y+1,ep.z+eR));
var eCx=false,eSx=eFeet;
for(var w=0;w<this.wB.length;w++){if(eBxX.intersectsBox(this.wB[w])){var wt=this.wB[w].max.y;if(wt<=eFeet+eMaxSt&&wt>eFeet)eSx=Math.max(eSx,wt);else eCx=true;}}
if(!eCx){ep.x=enx;if(eSx>eFeet)ep.y=eSx+1;}
eFeet=ep.y-1;
var eBzZ=new THREE.Box3(new THREE.Vector3(ep.x-eR,ep.y-1,enz-eR),new THREE.Vector3(ep.x+eR,ep.y+1,enz+eR));
var eCz=false,eSz=eFeet;
for(var w=0;w<this.wB.length;w++){if(eBzZ.intersectsBox(this.wB[w])){var wt=this.wB[w].max.y;if(wt<=eFeet+eMaxSt&&wt>eFeet)eSz=Math.max(eSz,wt);else eCz=true;}}
if(!eCz){ep.z=enz;if(eSz>eFeet)ep.y=eSz+1;}
var eGl=this._groundAt(ep.x,ep.z,ep.y-1,.5);
ep.y=eGl+1;
var emh=(this.mapHalf||34)-1.6;
ep.x=Math.max(-emh,Math.min(emh,ep.x));ep.z=Math.max(-emh,Math.min(emh,ep.z));
/* Leg animation */
if(Math.abs(mx)>.01||Math.abs(mz)>.01){e.legP+=dt*8;var ls=Math.sin(e.legP)*.15;var pts=e.mesh.userData.parts;if(pts&&pts.length>=16){if(pts[12])pts[12].position.z=ls*.15;if(pts[13])pts[13].position.z=-ls*.15;}}

/* Weapon-class shooting behavior (same hitscan feel as player). */
var muzzle=(e.mesh.userData&&e.mesh.userData.weaponMuzzleLocal)?e.mesh.userData.weaponMuzzleLocal.clone().applyMatrix4(e.mesh.matrixWorld):null;
fromV.copy(muzzle||new THREE.Vector3(ep.x,ep.y+.6,ep.z));toV.set(pP.x,pP.y,pP.z);hasLOS=this._hasLOS(fromV,toV);
var sr=bt.fireRate;
var maxRange=e.type===2?19:e.type===1?32:e.type===3?70:48;
maxRange=Math.floor(maxRange*(md.botRangeMul||1));
if(md.waves)maxRange=Math.floor(maxRange*1.35);
/* Shotgun bots only fire when close enough */
var shotgunRange=md.waves?23:19;
var canFire=(e.type===2)?dist<shotgunRange:dist<maxRange;
if(canFire&&hasLOS&&now-e.lastShot>sr){
if(e.beh.burst<=0)e.beh.burst=(e.type===3?1:(e.type===2?2:2+Math.floor(Math.random()*3)));
e.lastShot=now+Math.random()*.12+(e.type===3?.12:0);
/* Calculate damage with distance falloff matching weapon type */
var eDmg=this._botDistDmg(bt.baseDmg,dist,e.type);
if(e.dmgMul)eDmg=Math.floor(eDmg*e.dmgMul);
if(e.type===2&&bt.pellets){
/* Shotgun bot fires multiple pellets */
for(var pp=0;pp<bt.pellets;pp++)this._botShootRay(fromV.clone(),toV.clone(),e,bt,eDmg);
}else{
this._botShootRay(fromV.clone(),toV.clone(),e,bt,eDmg);
}
e.beh.burst--;
if(e.beh.burst<=0)e.lastShot+=.16+Math.random()*.25;
}
}
/* Update tracers */
for(var i=this.tracers.length-1;i>=0;i--){var t=this.tracers[i];t.life-=dt;if(t.mat)t.mat.opacity=Math.max(0,t.life/.07);if(t.life<=0){this.scene.remove(t.mesh);if(t.mesh.geometry)t.mesh.geometry.dispose();if(t.mat)t.mat.dispose();this.tracers.splice(i,1);}}
};
VG.prototype._eShoot=function(from,to,type,dmg,bt){
/* Deprecated: kept as compatibility wrapper; bots now shoot hitscan rays like the player. */
this._botShootRay(from,to,null,bt||DATA.botTypes[type]||DATA.botTypes[0],dmg||10);
};
VG.prototype._dropPickup=function(pos,type){
  if(!this.pickups)this.pickups=[];
  var col=type==='hp'?0x44ff66:0xffcc44;
  var grp=new THREE.Group();
  var core=new THREE.Mesh(new THREE.BoxGeometry(.45,.45,.45),new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:.9}));
  var halo=new THREE.Mesh(new THREE.BoxGeometry(.7,.05,.7),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:.5}));
  halo.position.y=-.3;
  grp.add(core);grp.add(halo);
  grp.position.set(pos.x,Math.max(.6,pos.y),pos.z);
  this.scene.add(grp);
  this.pickups.push({mesh:grp,type:type,life:25,bobT:Math.random()*Math.PI*2,baseY:grp.position.y});
};
VG.prototype._updatePickups=function(dt){
  if(!this.pickups||this.pickups.length===0)return;
  var pP=this.cam.position;
  for(var i=this.pickups.length-1;i>=0;i--){
    var p=this.pickups[i];
    if(!p||!p.mesh){this.pickups.splice(i,1);continue;}
    p.bobT+=dt*3;
    p.mesh.position.y=p.baseY+Math.sin(p.bobT)*.18;
    p.mesh.rotation.y+=dt*2;
    p.life-=dt;
    var dx=p.mesh.position.x-pP.x,dz=p.mesh.position.z-pP.z;
    var d=Math.sqrt(dx*dx+dz*dz);
    if(d<1.5){
      if(p.type==='hp'){this.P.hp=Math.min(this.P.mhp,this.P.hp+35);}
      else if(p.type==='ammo'&&this.P.wp){this.P.res+=Math.floor(this.P.wp.mag*1.5);}
      this._sndHit&&this._sndHit();
      var lbl=p.type==='hp'?'+35 HP':'+MUNITIONS';
      this._flash&&this._flash(lbl,p.type==='hp'?'#44ff66':'#ffcc44');
      this.scene.remove(p.mesh);
      this.pickups.splice(i,1);
      this.updateHUD();
      continue;
    }
    if(p.life<=0){this.scene.remove(p.mesh);this.pickups.splice(i,1);}
  }
};
VG.prototype.takeDmg=function(a){
if(this.state!=='PLAYING')return;
if(this.P.spawnShieldT>0)return;
this.P.hp-=a;if(this.P.hp<0)this.P.hp=0;
this.P.lastHit=this.clock.getElapsedTime();
this._sndDmg();
var ov=document.getElementById('damage-overlay');if(ov){ov.classList.add('flash');clearTimeout(this._dmT);this._dmT=setTimeout(function(){ov.classList.remove('flash');},180);}
this.updateHUD();if(this.P.hp<=0)this.gameOver();
};
VG.prototype._mode=function(){
return this.modeDefs[this.gameMode]||this.modeDefs.training;
};
VG.prototype._modeTheme=function(theme){
if(!this.scene)return;
if(theme==='survival'){
this.scene.background=new THREE.Color(0x140810);
if(this.scene.fog){this.scene.fog.color.setHex(0x140810);this.scene.fog.near=55;this.scene.fog.far=120;}
if(this._lFill){this._lFill.color.setHex(0xff2244);this._lFill.intensity=.55;}
if(this._lRim){this._lRim.color.setHex(0x882244);this._lRim.intensity=.35;}
}else{
this.scene.background=new THREE.Color(0x080e18);
if(this.scene.fog){this.scene.fog.color.setHex(0x080e18);this.scene.fog.near=70;this.scene.fog.far=140;}
if(this._lFill){this._lFill.color.setHex(0xff5500);this._lFill.intensity=.3;}
if(this._lRim){this._lRim.color.setHex(0x4466ff);this._lRim.intensity=.2;}
}
};
VG.prototype._modeComplete=function(title,subtitle){
this.state='GAMEOVER';
this.activeBoosts=[];
try{document.exitPointerLock();}catch(e){}
var hud=document.getElementById('hud');if(hud){hud.classList.remove('active');hud.classList.add('hidden');}
var po=document.getElementById('pause-overlay');if(po){po.classList.remove('hidden');po.classList.add('active');}
var pt=document.getElementById('pause-title');if(pt)pt.innerText=title||'MISSION TERMINÉE';
var ps=document.getElementById('pause-sub');if(ps)ps.innerText=subtitle||'Cliquez ABANDONNER pour retourner au QG';
};
VG.prototype._updateModeObjectives=function(dt){
var md=this._mode();
if(this.state!=='PLAYING')return;
if(md.teamBattle){
this.modeScore.bots=Math.min(md.scoreTarget,this.modeScore.bots+dt*(1.4+this.enemies.length*.08));
if(this.modeScore.player>=md.scoreTarget)this._modeComplete('VICTOIRE — TEAM DEATHMATCH','Score final '+Math.floor(this.modeScore.player)+' / '+md.scoreTarget);
else if(this.modeScore.bots>=md.scoreTarget)this._modeComplete('DÉFAITE — TEAM DEATHMATCH','L’escouade bot atteint '+md.scoreTarget+' points.');
return;
}
if(!md.domination)return;
var cp=this.cam.position;
var pIn=(cp.x*cp.x+cp.z*cp.z)<81;
if(pIn)this.modeScore.player=Math.min(md.scoreTarget,this.modeScore.player+dt*14);
var botsIn=0;
for(var i=0;i<this.enemies.length;i++){var ep=this.enemies[i].mesh&&this.enemies[i].mesh.position;if(!ep)continue;if((ep.x*ep.x+ep.z*ep.z)<81)botsIn++;}
if(botsIn>0)this.modeScore.bots=Math.min(md.scoreTarget,this.modeScore.bots+dt*Math.min(12,3.5+botsIn*1.1));
if(this.modeScore.player>=md.scoreTarget)this._modeComplete('VICTOIRE — DOMINATION','Zone sécurisée : '+Math.floor(this.modeScore.player)+' / '+md.scoreTarget);
else if(this.modeScore.bots>=md.scoreTarget)this._modeComplete('DÉFAITE — DOMINATION','Les bots ont verrouillé la zone centrale.');
};
/* STATE */
VG.prototype.startMatch=function(mode){
var map={survival:'survival',survival_plus:'survival_plus',training:'training',deathmatch:'deathmatch',teamdm:'teamdm',assault:'assault',domination:'domination'};
this.gameMode=map[mode]||'training';
var md=this._mode();
this._modeTheme(md.theme||'training');
this._ensureAudio();this._stopMenuMusic();this._startCombatAmbient();
this.activeBoosts=this.sd.purchasedBoosts.slice();this.sd.purchasedBoosts=[];this.save();
this.keys={};this.md=false;this.mx=0;this.my=0;
this.state='PLAYING';
this.modeScore.player=0;this.modeScore.bots=0;
/* Reset wave state */
this.wave=0;this.waveActive=false;this.waveRemaining=0;this.waveSpawnQueue=0;this._waveTimer=0;this._waveBreak=0;this._spawnAccum=0;
/* Toggle HUD wave widget + mode badge */
var wEl=document.getElementById('hud-wave');if(wEl){if(md.waves)wEl.classList.remove('hidden');else wEl.classList.add('hidden');}
var mEl=document.getElementById('hud-mode-badge');if(mEl)mEl.textContent=md.label;
document.querySelectorAll('.screen').forEach(function(el){el.classList.remove('active');el.classList.add('hidden');});
var hud=document.getElementById('hud');if(hud){hud.classList.remove('hidden');hud.classList.add('active');}
var ab=document.getElementById('hud-boosts');
if(ab){if(this.activeBoosts.length>0){var t='';for(var i=0;i<this.activeBoosts.length;i++){var b=null;for(var j=0;j<DATA.boosts.length;j++)if(DATA.boosts[j].id===this.activeBoosts[i])b=DATA.boosts[j];if(b)t+='<span class="hud-boost-tag">'+b.name+'</span>';}ab.innerHTML=t;ab.style.display='flex';}else ab.style.display='none';}
this.spawnPlayer();
var self=this;
setTimeout(function(){try{self.cvs.requestPointerLock();}catch(e){try{document.body.requestPointerLock();}catch(e2){}}},100);
};
VG.prototype.quitMatch=function(){
this.sd.stats.matchesCompleted++;this._checkMatchObj();this._checkObj();
this.state='MENU';this.activeBoosts=[];
this.P.ads=false;this.P.adsT=0;this.cam.fov=this.P.baseFov||80;this.cam.updateProjectionMatrix();
var scR=document.getElementById('sniper-scope');if(scR)scR.classList.remove('show');
this._stopCombatAmbient();this._startMenuMusic();
try{document.exitPointerLock();}catch(e){}
this.keys={};this.md=false;this.mx=0;this.my=0;
var wEl=document.getElementById('hud-wave');if(wEl)wEl.classList.add('hidden');
if(this.pickups){for(var i=0;i<this.pickups.length;i++)if(this.pickups[i]&&this.pickups[i].mesh)this.scene.remove(this.pickups[i].mesh);this.pickups=[];}
this.showScreen('menu');this.save();
};
VG.prototype.gameOver=function(){
this.sd.stats.matchesCompleted++;this._checkMatchObj();this._checkObj();
this.state='GAMEOVER';this.activeBoosts=[];
this.P.ads=false;this.P.adsT=0;this.cam.fov=this.P.baseFov||80;this.cam.updateProjectionMatrix();
var scR2=document.getElementById('sniper-scope');if(scR2)scR2.classList.remove('show');
this._stopCombatAmbient();
try{document.exitPointerLock();}catch(e){}
this.keys={};this.md=false;this.mx=0;this.my=0;
var hud=document.getElementById('hud');if(hud){hud.classList.remove('active');hud.classList.add('hidden');}
var po=document.getElementById('pause-overlay');if(po){po.classList.remove('hidden');po.classList.add('active');}
var pt=document.getElementById('pause-title');
if(pt){
if(this._mode().waves)pt.innerText='UNIT\u00c9 D\u00c9TRUITE \u2014 VAGUE '+this.wave+' \u2014 '+this.mK+' \u00c9LIMINATIONS';
else pt.innerText='UNIT\u00c9 D\u00c9TRUITE \u2014 '+this.mK+' \u00c9LIMINATIONS';
}
var ps=document.getElementById('pause-sub');if(ps)ps.innerText='Cliquez ABANDONNER pour retourner au QG';
this.save();
};
VG.prototype.showScreen=function(id){
document.querySelectorAll('.screen').forEach(function(el){el.classList.remove('active');el.classList.add('hidden');});
var tgt=id==='menu'?'main-menu':id+'-screen';
var el=document.getElementById(tgt);if(!el)return;el.classList.remove('hidden');el.classList.add('active');
if(id==='menu'){this.updateMenuUI();this._ensureAudio();this._startMenuMusic();}
if(id==='loadout')this.popLoadout();
if(id==='shop')this.popShop();
if(id==='skins')this.popSkins();
if(id==='boosts')this.popBoosts();
};
/* EVENTS */
VG.prototype._kc=function(e){
var map={'KeyW':87,'KeyS':83,'KeyA':65,'KeyD':68,'KeyR':82,'KeyZ':90,'KeyQ':81,'KeyE':69,'Space':32,'ArrowUp':38,'ArrowDown':40,'ArrowLeft':37,'ArrowRight':39,'ShiftLeft':16,'ShiftRight':16,'ControlLeft':17,'ControlRight':17};
return map[e.code]||e.keyCode||0;
};
VG.prototype.tryDash=function(){
if(this.P.dashCd>0||this.P.dashT>0)return;
var yaw=this.cam.rotation.y;
var fw=new THREE.Vector3(-Math.sin(yaw),0,-Math.cos(yaw));
var rt=new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw));
var iF=this.keys[87]||this.keys[90]||this.keys[38]||false;
var iB=this.keys[83]||this.keys[40]||false;
var iL=this.keys[65]||this.keys[81]||this.keys[37]||false;
var iR=this.keys[68]||this.keys[39]||false;
var dZ=(iF?1:0)-(iB?1:0),dX=(iR?1:0)-(iL?1:0);
var wX,wZ;
if(dZ===0&&dX===0){wX=fw.x;wZ=fw.z;}
else{wX=fw.x*dZ+rt.x*dX;wZ=fw.z*dZ+rt.z*dX;}
var l=Math.sqrt(wX*wX+wZ*wZ);if(l>0){wX/=l;wZ/=l;}
var DASH_PWR=11.5;
this.P.dashVx=wX*DASH_PWR;this.P.dashVz=wZ*DASH_PWR;
this.P.vx+=wX*DASH_PWR*.45;this.P.vz+=wZ*DASH_PWR*.45;
this.P.dashT=.1;this.P.dashCd=2.2;
this._sndDash();
var cs=document.getElementById('crosshair');if(cs){cs.classList.add('dash-flash');clearTimeout(this._dfT);this._dfT=setTimeout(function(){cs.classList.remove('dash-flash');},200);}
};
VG.prototype._updateCrosshair=function(moveRatio){
var ch=document.getElementById('crosshair');if(!ch)return;
var adsFactor=1-(this.P.adsT||0)*.85;
var spread=((this.P.bloom||0)*12+moveRatio*5+2.5)*adsFactor;
var gap=Math.max(2,Math.min(20,spread));
ch.style.setProperty('--crosshair-gap',gap.toFixed(2)+'px');
ch.classList.toggle('ads-active',(this.P.adsT||0)>.2);
};
VG.prototype.initEvents=function(){
var self=this;
window.addEventListener('resize',function(){self.cam.aspect=innerWidth/innerHeight;self.cam.updateProjectionMatrix();self.ren.setSize(innerWidth,innerHeight);});
document.addEventListener('pointerlockchange',function(){
if(document.pointerLockElement){if(self.state==='PAUSED'){self.state='PLAYING';var po=document.getElementById('pause-overlay');if(po){po.classList.remove('active');po.classList.add('hidden');}var hud=document.getElementById('hud');if(hud){hud.classList.remove('hidden');hud.classList.add('active');}}}
else{if(self.state==='PLAYING'){self.state='PAUSED';self.keys={};self.md=false;self.mx=0;self.my=0;self.P.vx=0;self.P.vz=0;var po=document.getElementById('pause-overlay');if(po){po.classList.remove('hidden');po.classList.add('active');}var pt=document.getElementById('pause-title');if(pt)pt.innerText='MISSION SUSPENDUE';var ps=document.getElementById('pause-sub');if(ps)ps.innerText='Cliquez pour reprendre';}}
});
var po=document.getElementById('pause-overlay');if(po)po.addEventListener('click',function(e){if(self.state==='PAUSED'){if(e.target.closest&&e.target.closest('.quit-btn'))return;try{self.cvs.requestPointerLock();}catch(er){}}
if(self.state==='GAMEOVER'){/* do nothing, use quit button */}});
this.cvs.addEventListener('click',function(){self._ensureAudio();if((self.state==='PLAYING'||self.state==='PAUSED')&&!document.pointerLockElement)try{self.cvs.requestPointerLock();}catch(e){}});
document.addEventListener('keydown',function(e){self._ensureAudio();if(self.state!=='PLAYING')return;var kc=self._kc(e);self.keys[kc]=true;if(kc===32){self.P.jumpQ=self.cfg.jumpBuffer;}if(kc===82&&!self.P.rld)self.reload();if(kc===17||kc===69){self.tryDash();}if([87,65,83,68,32,90,81,37,38,39,40,16,17,69].indexOf(kc)!==-1)e.preventDefault();});
document.addEventListener('keyup',function(e){var kc=self._kc(e);self.keys[kc]=false;});
document.addEventListener('mousemove',function(e){if(self.state==='PLAYING'&&document.pointerLockElement){self.mx+=e.movementX;self.my+=e.movementY;}});
document.addEventListener('mousedown',function(e){if(self.state==='PLAYING'){if(e.button===0)self.md=true;else if(e.button===2)self.P.ads=true;}});
document.addEventListener('mouseup',function(e){if(e.button===0)self.md=false;else if(e.button===2)self.P.ads=false;});
document.addEventListener('contextmenu',function(e){if(self.state==='PLAYING'||document.pointerLockElement)e.preventDefault();});
};
/* UI */
VG.prototype.initUI=function(){this._initObj();this.updateMenuUI();if(this.sd.firstTime)this._showTut();};
VG.prototype._showTut=function(){var el=document.getElementById('tutorial-overlay');if(el){el.classList.remove('hidden');el.classList.add('active');}};
VG.prototype.closeTutorial=function(){var el=document.getElementById('tutorial-overlay');if(el){el.classList.add('hidden');el.classList.remove('active');}this.sd.firstTime=false;this.save();};
VG.prototype._flash=function(msg,color){var el=document.getElementById('error-banner');if(!el)return;el.textContent=msg;if(color)el.style.borderColor=color;else el.style.borderColor='#ff4444';el.classList.add('show');setTimeout(function(){el.classList.remove('show');},2200);};
VG.prototype._formatRwd=function(r){var t=[];if(r.credits)t.push('\u00a9'+r.credits);if(r.tokens)t.push('\u2605'+r.tokens);if(r.crystals)t.push('\u25c6'+r.crystals);if(r.parts)t.push('\u2699'+r.parts);return t.join(' ');};
VG.prototype.updateMenuUI=function(){
var S=function(id,v){var el=document.getElementById(id);if(el)el.innerText=v;};
var r=this.sd.resources;S('res-credits',r.credits);S('res-crystals',r.crystals);S('res-parts',r.parts);S('res-tokens',r.tokens);
var cl=DATA.classes[this.sd.selectedClass];if(cl){S('current-class-display',this.sd.selectedClass.toUpperCase());S('current-weapon-display',cl.weapon.toUpperCase());S('current-class-desc',cl.desc||'');}
var lv=this.sd.stats.level,cx=this.sd.stats.xp,nx=this.getNextXP(lv),px=this.getLvlXP(lv);
var pct=lv>=100?100:Math.min(100,Math.floor((cx-px)/Math.max(1,nx-px)*100));
S('menu-level',lv);S('menu-kills',this.sd.stats.kills);S('menu-xp-cur',cx);S('menu-xp-next',nx);
var xb=document.getElementById('menu-xp-bar');if(xb)xb.style.width=pct+'%';
var ol=document.getElementById('objectives-list');
if(ol&&this.sd.objectives){var h='';for(var i=0;i<this.sd.objectives.length;i++){var o=this.sd.objectives[i];var op=Math.min(100,Math.floor(o.progress/o.target*100));h+='<div class="obj-item"><div class="obj-desc">\u25b8 '+o.desc+'</div><div class="obj-bar-bg"><div class="obj-bar-fill" style="width:'+op+'%"></div></div><div class="obj-reward">'+this._formatRwd(o.reward)+'</div></div>';}ol.innerHTML=h;}
S('hud-lvl',lv);S('hud-kills',this.sd.stats.kills);
};
VG.prototype.updateHUD=function(){
var S=function(id,v){var el=document.getElementById(id);if(el)el.innerText=v;};
S('hud-hp',Math.max(0,Math.floor(this.P.hp)));S('hud-ammo',this.P.rld?'RLD':this.P.ammo);S('hud-reserve',this.P.res);
S('hud-weapon-name',DATA.classes[this.sd.selectedClass].weapon.toUpperCase());S('hud-lvl',this.sd.stats.level);S('hud-kills',this.mK);
var b=document.getElementById('hud-hp-bar');if(b)b.style.width=Math.max(0,this.P.hp/this.P.mhp*100)+'%';
var md=this._mode();
if(md.waves){
S('hud-wave-num',this.wave||0);
if(this._waveBreak>0)S('hud-wave-remain','PAUSE '+Math.ceil(this._waveBreak));
else S('hud-wave-remain',Math.max(0,this.waveRemaining||0));
}
var ob=document.getElementById('hud-objective');
if(ob){
if(md.killTarget)ob.innerText='OBJECTIF: '+this.mK+' / '+md.killTarget+' ÉLIMS';
else if(md.teamBattle)ob.innerText='TDM: VANGUARD '+Math.floor(this.modeScore.player)+' / '+md.scoreTarget+'  |  BOTS '+Math.floor(this.modeScore.bots);
else if(md.domination)ob.innerText='ZONE: '+Math.floor(this.modeScore.player)+' / '+md.scoreTarget+'  |  BOTS '+Math.floor(this.modeScore.bots);
else if(md.id==='survival_plus')ob.innerText='SURVIE+ — VAGUES ÉLITES';
else if(md.waves)ob.innerText='MODE SURVIE — VAGUES PROGRESSIVES';
else if(md.id==='assault')ob.innerText='ASSAUT — PRESSION MAXIMALE';
else ob.innerText='ENTRAÎNEMENT — SANDBOX';
if(this.P.spawnShieldT>0)ob.innerText+='  |  BOUCLIER SPAWN '+this.P.spawnShieldT.toFixed(1)+'s';
}
};
VG.prototype.popLoadout=function(){
var g=document.getElementById('classes-grid');if(!g)return;g.innerHTML='';var self=this;
var ns=Object.keys(DATA.classes);
for(var ci=0;ci<ns.length;ci++){var n=ns[ci],cl=DATA.classes[n],un=self.sd.unlockedClasses.indexOf(n)!==-1,sel=self.sd.selectedClass===n;
var ch='#'+cl.color.toString(16).padStart(6,'0');
g.innerHTML+='<div class="card '+(sel?'card-selected':'')+'"><div class="card-color-bar" style="background:'+ch+'"></div><h3>'+n.toUpperCase()+'</h3><p class="card-desc">'+cl.desc+'</p><div class="card-stats"><span>HP '+cl.hp+'</span><span>SPD '+cl.speed+'</span><span>'+cl.weapon+'</span></div>'+(un?'<button onclick="app.selectClass(\''+n+'\')" '+(sel?'disabled':'')+'>'+( sel?'\u2713 \u00c9QUIP\u00c9':'\u00c9QUIPER')+'</button>':'<button onclick="app.buyClass(\''+n+'\','+cl.cost+')">\uD83D\uDD12 '+cl.cost+' TOKENS</button>')+'</div>';}
};
VG.prototype.selectClass=function(n){this.sd.selectedClass=n;this.save();this.popLoadout();this.updateMenuUI();};
VG.prototype.buyClass=function(n,c){if(this.sd.resources.tokens>=c){this.sd.resources.tokens-=c;this.sd.unlockedClasses.push(n);this.save();this.popLoadout();this.updateMenuUI();}else this._flash('Tokens insuffisants !');};
/* SHOP */
VG.prototype.popShop=function(){
var g=document.getElementById('shop-grid');if(!g)return;g.innerHTML='';var self=this;
for(var i=0;i<DATA.tokenShop.length;i++){var it=DATA.tokenShop[i];var can=self.sd.resources.credits>=it.price;
g.innerHTML+='<div class="card"><h3>\u2605 '+it.name+'</h3><p class="card-desc">\u00c9changez vos cr\u00e9dits contre des Tokens</p><div class="card-price" style="color:#44ddaa">\u00a9 '+it.price+' CR\u00c9DITS</div><button onclick="app.buyTokens(\''+it.id+'\')" '+(can?'':'disabled')+'>ACHETER</button></div>';}
};
VG.prototype.buyTokens=function(id){
var it=null;for(var i=0;i<DATA.tokenShop.length;i++)if(DATA.tokenShop[i].id===id)it=DATA.tokenShop[i];
if(!it||this.sd.resources.credits<it.price){this._flash('Cr\u00e9dits insuffisants !');return;}
this.sd.resources.credits-=it.price;this.sd.resources.tokens+=it.gives;
this.save();this.updateMenuUI();this.popShop();
};
/* BOOSTS */
VG.prototype.popBoosts=function(){
var g=document.getElementById('boosts-grid');if(!g)return;g.innerHTML='';var self=this;
var ci={crystals:'\u25c6',parts:'\u2699'};var cc={crystals:'#aa88ff',parts:'#ff8844'};
var al=document.getElementById('active-boosts-list');
if(al){if(self.sd.purchasedBoosts.length>0){var h='<span class="ab-label">PROCHAINE MISSION:</span> ';for(var i=0;i<self.sd.purchasedBoosts.length;i++){var b=null;for(var j=0;j<DATA.boosts.length;j++)if(DATA.boosts[j].id===self.sd.purchasedBoosts[i])b=DATA.boosts[j];if(b)h+='<span class="ab-tag">'+b.name+'</span>';}al.innerHTML=h;}else al.innerHTML='<span class="ab-label">Aucun boost activ\u00e9</span>';}
for(var i=0;i<DATA.boosts.length;i++){var b=DATA.boosts[i];var owned=self.sd.purchasedBoosts.indexOf(b.id)!==-1;var canBuy=(self.sd.resources[b.cur]||0)>=b.cost;
g.innerHTML+='<div class="card"><h3>'+b.name+'</h3><p class="card-desc">'+b.desc+'</p><div class="card-price" style="color:'+(cc[b.cur]||'#fff')+'">'+(ci[b.cur]||'?')+' '+b.cost+' '+b.cur.toUpperCase()+'</div>'+(owned?'<button disabled>\u2713 ACTIV\u00c9</button>':'<button onclick="app.buyBoost(\''+b.id+'\')" '+(canBuy?'':'disabled')+'>ACTIVER</button>')+'</div>';}
};
VG.prototype.buyBoost=function(id){
var b=null;for(var i=0;i<DATA.boosts.length;i++)if(DATA.boosts[i].id===id)b=DATA.boosts[i];
if(!b)return;if((this.sd.resources[b.cur]||0)<b.cost){this._flash('Ressources insuffisantes !');return;}
if(this.sd.purchasedBoosts.indexOf(id)!==-1){this._flash('D\u00e9j\u00e0 activ\u00e9 !');return;}
this.sd.resources[b.cur]-=b.cost;this.sd.purchasedBoosts.push(id);
this.save();this.updateMenuUI();this.popBoosts();
};
/* SKINS — Customization area */
VG.prototype._skinCount=function(id){var os=this.sd.ownedSkins||{};if(Array.isArray(os)){return os.indexOf(id)!==-1?1:0;}return os[id]||0;};
VG.prototype._skinOwned=function(id){return this._skinCount(id)>0;};
VG.prototype._skinAdd=function(id){var os=this.sd.ownedSkins||{};if(Array.isArray(os)){var m={};for(var i=0;i<os.length;i++)m[os[i]]=1;os=m;this.sd.ownedSkins=os;}os[id]=(os[id]||0)+1;};
VG.prototype.popSkins=function(){
var g=document.getElementById('skins-grid');if(!g)return;g.innerHTML='';var self=this;
var rl=DATA.rarityLabel,rc=DATA.rarityColor;
/* Equipped showcase */
var cur=null;for(var ii=0;ii<DATA.skins.length;ii++)if(DATA.skins[ii].id===self.sd.selectedSkin){cur=DATA.skins[ii];break;}
if(!cur)cur=DATA.skins[0];
var equipEl=document.getElementById('skin-equipped');
if(equipEl){
  var hexC='#'+cur.color.toString(16).padStart(6,'0');
  var hexA='#'+(cur.accent||cur.color).toString(16).padStart(6,'0');
  var sc=this.sd.skinCustom||{palette:'default',finish:'matte'};
  var palBtns='',finBtns='';
  for(var pp=0;pp<DATA.skinPalettes.length;pp++){
    var pal=DATA.skinPalettes[pp];
    palBtns+='<button class="'+(sc.palette===pal.id?'sel':'')+'" onclick="app.setSkinPalette(\''+pal.id+'\')">'+pal.name+'</button>';
  }
  var finishes=[{id:'matte',name:'Matte'},{id:'satin',name:'Satin'},{id:'chrome',name:'Chrome'},{id:'neon',name:'Neon'}];
  for(var ff=0;ff<finishes.length;ff++)finBtns+='<button class="'+(sc.finish===finishes[ff].id?'sel':'')+'" onclick="app.setSkinFinish(\''+finishes[ff].id+'\')">'+finishes[ff].name+'</button>';
  equipEl.innerHTML='<div class="eq-label">SKIN \u00c9QUIP\u00c9</div><div class="eq-name" style="color:'+hexA+';text-shadow:0 0 14px '+hexA+'">'+cur.name+'</div><div class="eq-rarity rarity-'+cur.rarity+'">'+(rl[cur.rarity]||'')+'</div><div class="eq-preview" style="background:linear-gradient(135deg,'+hexC+' 0%, '+hexA+' 100%);box-shadow:0 0 30px '+hexA+',inset 0 0 20px rgba(0,0,0,.4)"></div><div class="skin-custom-block"><div class="sc-title">PALETTE</div><div class="sc-row">'+palBtns+'</div><div class="sc-title">FINITION</div><div class="sc-row">'+finBtns+'</div></div>';
}
/* Order skins by rarity */
var order=['common','rare','epic','mythic','legendary','ultimate'];
var sorted=DATA.skins.slice().sort(function(a,b){return order.indexOf(a.rarity)-order.indexOf(b.rarity);});
for(var i=0;i<sorted.length;i++){var sk=sorted[i];var cnt=self._skinCount(sk.id);var owned=cnt>0;var sel=self.sd.selectedSkin===sk.id;
var hex='#'+sk.color.toString(16).padStart(6,'0');
var hexA='#'+(sk.accent||sk.color).toString(16).padStart(6,'0');
var sellPrice=DATA.skinSell[sk.rarity]||0;
var canSell=cnt>1&&sk.id!=='default';
var actions='';
if(owned){
  actions+='<button onclick="app.selectSkin(\''+sk.id+'\')" '+(sel?'disabled':'')+'>'+( sel?'\u2713 \u00c9QUIP\u00c9':'\u00c9QUIPER')+'</button>';
  if(canSell)actions+='<button class="sell-btn" onclick="app.sellSkin(\''+sk.id+'\')">VENDRE \u2605'+sellPrice+'</button>';
}else{
  actions+='<button disabled>\uD83D\uDD12 SPIN REQUIS</button>';
}
var dupTag=cnt>1?'<span class="dup-count">x'+cnt+'</span>':'';
g.innerHTML+='<div class="card skin-card '+(sel?'card-selected':'')+' rarity-bg-'+sk.rarity+'">'+dupTag+'<div class="card-color-bar" style="background:linear-gradient(90deg,'+hex+','+hexA+')"></div><h3>'+sk.name+'</h3><p class="card-desc rarity-'+sk.rarity+'">'+(rl[sk.rarity]||'')+'</p><div class="skin-preview rarity-glow-'+sk.rarity+'" style="background:linear-gradient(135deg,'+hex+','+hexA+');box-shadow:0 0 18px '+hexA+'"></div>'+actions+'</div>';
}
var btn=document.getElementById('spin-btn');if(btn)btn.disabled=self._spin||self.sd.resources.tokens<50;
};
VG.prototype.selectSkin=function(id){if(!this._skinOwned(id))return;this.sd.selectedSkin=id;this.save();this.popSkins();if(this.P&&this.P.wm&&this.state==='PLAYING')this.buildWpn();};
VG.prototype.setSkinPalette=function(id){
if(!this.sd.skinCustom)this.sd.skinCustom={palette:'default',finish:'matte'};
this.sd.skinCustom.palette=id;this.save();this.popSkins();if(this.P&&this.P.wm)this.buildWpn();
};
VG.prototype.setSkinFinish=function(id){
if(!this.sd.skinCustom)this.sd.skinCustom={palette:'default',finish:'matte'};
this.sd.skinCustom.finish=id;this.save();this.popSkins();if(this.P&&this.P.wm)this.buildWpn();
};
VG.prototype.sellSkin=function(id){
var cnt=this._skinCount(id);
if(cnt<=1){this._flash('Aucun doublon \u00e0 vendre !');return;}
if(id==='default'){this._flash('Skin par d\u00e9faut prot\u00e9g\u00e9');return;}
var sk=null;for(var i=0;i<DATA.skins.length;i++)if(DATA.skins[i].id===id){sk=DATA.skins[i];break;}
if(!sk)return;
var price=DATA.skinSell[sk.rarity]||1;
this.sd.ownedSkins[id]=cnt-1;
this.sd.resources.tokens+=price;
this._flash('+'+price+' \u2605 \u2014 '+sk.name+' vendu','#ffcc00');
this.save();this.popSkins();this.updateMenuUI();
};
VG.prototype._rollRarity=function(){
  var r=Math.random();
  var acc=0;var order=['common','rare','epic','mythic','legendary','ultimate'];
  for(var i=0;i<order.length;i++){acc+=DATA.skinDropRates[order[i]];if(r<acc)return order[i];}
  return 'common';
};
VG.prototype.doSpin=function(){
if(this._spin)return;if(this.sd.resources.tokens<50){this._flash('50 Tokens requis !');return;}
this.sd.resources.tokens-=50;this.save();this.updateMenuUI();
var rarity=this._rollRarity();
var self=this,pool=[];
for(var i=0;i<DATA.skins.length;i++)if(DATA.skins[i].rarity===rarity)pool.push(DATA.skins[i]);
if(pool.length===0){for(var i=0;i<DATA.skins.length;i++)pool.push(DATA.skins[i]);}
/* DUPLICATES ALLOWED — pure random within rarity, no filtering */
var res=pool[Math.floor(Math.random()*pool.length)];
var disp=document.getElementById('spin-display'),rEl=document.getElementById('spin-rarity'),btn=document.getElementById('spin-btn'),box=document.querySelector('.spin-box');
self._spin=true;if(btn)btn.disabled=true;
if(box)box.classList.remove('rarity-bg-common','rarity-bg-rare','rarity-bg-epic','rarity-bg-mythic','rarity-bg-legendary','rarity-bg-ultimate');
var fr=0,tot=36;
var iv=setInterval(function(){var rsk=DATA.skins[Math.floor(Math.random()*DATA.skins.length)];
if(disp){disp.textContent=rsk.name;disp.style.color='#'+(rsk.accent||rsk.color).toString(16).padStart(6,'0');disp.style.borderColor='rgba(255,255,255,.15)';}
fr++;if(fr>=tot){clearInterval(iv);
var hex='#'+res.color.toString(16).padStart(6,'0');
var hexA='#'+(res.accent||res.color).toString(16).padStart(6,'0');
if(disp){disp.textContent=res.name;disp.style.color=hexA;disp.style.borderColor=hexA;disp.style.boxShadow='0 0 30px '+hexA;}
if(rEl){rEl.textContent=(DATA.rarityLabel[res.rarity]||'')+(self._skinCount(res.id)>0?'  \u2014 DOUBLON':'');rEl.className='spin-rarity rarity-'+res.rarity;}
if(box)box.classList.add('rarity-bg-'+res.rarity);
self._skinAdd(res.id);
self.save();self._spin=false;self.popSkins();self.updateMenuUI();
var rl3=DATA.rarityLabel[res.rarity]||'';
self._flash(rl3+' \u2014 '+res.name,hexA);
}},65);
};
/* LOOP */
VG.prototype.loop=function(){
var self=this;requestAnimationFrame(function(){self.loop();});
var dt=Math.min(this.clock.getDelta(),.05);
if(this.state==='PLAYING'){this.updatePhys(dt);this.handleShoot();this.updateEnemies(dt);this._updatePickups(dt);this.updateHUD();}
if(this.state==='PLAYING')this._updateModeObjectives(dt);
this.ren.render(this.scene,this.cam);
};
window.app=new VG();
