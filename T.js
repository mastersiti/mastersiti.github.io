let matrix=[];
let step=0;
let pr;
let windows=[];
let cubes={
number:[], 
object:[], 
}
let savepr=false;
let test_on=false;
function save(){
if(savepr){

}
}


function plusplayer(){
return new Player({
//name:'Игрок '+ player.length, 
health:300, 
max_health:300, 
ncubes:8, 
cards:[clone(cards[rand(0,cards.length-1)])], 
});
}

class Player{
constructor(object){
if(object.name==undefined){
this.name=prompt('Введите имя игрока');
}
else{
this.name=object.name;
}
if(this.name==undefined||this.name==null||this.name==''){
this.name='Игрок '+(player.length+1);
}
this.health=object.health;
this.max_health=object.max_health;
this.ncubes=object.ncubes;
this.cards=object.cards;
this.choice=0;
this.hol=0;
this.kcubes=0;
if(object.effects!=undefined){
this.effects=object.effects;
}
else{
this.effects={
bleeding:0, //Кровотечение
regeneration:0, //Регениреция
failure:[0,0,0,0,0,0], //Неудача
shield:0, //Щит
blindness:0, //Слепота
poison:[0,0], //Яд
burned:0, //Ожёг
protection:0, //Защита
confusion:0, //Запутанность 
gold:[0,50], //Монеты
fury:0, //Ярость
shock:0, //Шок
}
}
}




}
class OS{
constructor(equipment){
this.text=equipment.text;
this.color=equipment.color;
this.counter=equipment.counter;
this.type=equipment.type;
this.vkusing=equipment.vkusing;
this.e=equipment;
this.func=type=>{
switch(type){
  case 0: 
return function(){
if(this.using>equipment.kusing-1&&equipment.kusing!=0){
this.parents.classList.add('ts');
let parents=this.parents;
setTimeout(function(){
parents.classList.remove('ts');
}, 400);return;}
if(player[P(0)].choice==0){
return;
}
let choice=player[P(0)].choice;
player[P(0)].choice=0;
let ccondition;
if(equipment.condition!=undefined){ccondition=false;}
else{ccondition=true;}
if(ccondition!=true){
switch(equipment.condition[0]){
case 0: 
if(cubes.number[choice-1]==equipment.condition[1]){ccondition=true;}
break;
case 1: 
if(cubes.number[choice-1]<=equipment.condition[1]){ccondition=true;}
break;
case 2: 
if(cubes.number[choice-1]>=equipment.condition[1]){ccondition=true;}
break;
case 3: 
if(cubes.number[choice-1]%2==0){ccondition=true;}
break;
case 4: 
if(cubes.number[choice-1]%2==1){ccondition=true;}
break;
}
}
let ccondition_using;
if(equipment.condition_using!=undefined){ccondition_using=false;}
else{ccondition_using=true;}
if(ccondition_using==false){
switch(equipment.condition_using[0]){
case 0: 
if(cubes.number[choice-1]==equipment.condition_using[1]){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 1: 
if(cubes.number[choice-1]<=equipment.condition_using[1]){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 2: 
if(cubes.number[choice-1]>=equipment.condition_using[1]){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 3: 
if(cubes.number[choice-1]%2==0){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 4: 
if(cubes.number[choice-1]%2==1){ccondition_using=false;}
else{ccondition_using=true;}
break;
}
}
if(ccondition&&this.parents.childNodes.length==3){
let parents=this.parents;
let using=this.using;
let value=this.value;
if(equipment.act_1!=undefined){
//equipment.act_1(choice,value,parents)
equipment.act_1({
choice:choice, 
value:value, 
parents:parents, 
e:equipment, 
})
}
this.value++;
player[P(0)].kcubes--;
cubes.object[choice-1].classList.remove('vib');
parents.appendChild(cubes.object[choice-1]);
cubes.object[choice-1].classList.add('anim');
if(cubes.object[choice-1].n==undefined){
cubes.object[choice-1].n=true;
}
else{
cubes.object[choice-1].n=false;
}
setTimeout(function(){
if(cubes.object[choice-1].n){
cubes.object[choice-1].classList.remove('anim');
cubes.object[choice-1].classList.add('hidden');
if(equipment.act_2!=undefined){
equipment.act_2({
choice:choice, 
value:value, 
parents:parents, 
e:equipment, 
})
}
if(player[P(0)].effects.shock!=0){
player[P(0)].health=player[P(0)].health-1*player[P(0)].effects.shock;
interfacef.HP.p(P(0))
}
interfacef.cubes.appendChild(cubes.object[choice-1]);
if(using==equipment.kusing-1&&equipment.kusing!=0&&ccondition_using){
parents.classList.add('pr');
}
}
}, 500);
if(equipment.kusing!=0&&ccondition_using&&cubes.object[choice-1].n){
this.using++;
if(this.v.vkusing!=undefined){
this.v.vkusing--;
}
}
}
else{
player[P(0)].choice=choice;
}
}
     break;
  case 1: 
return function(){
if(this.using>equipment.kusing-1&&equipment.kusing!=0){
this.parents.classList.add('ts');
let parents=this.parents;
setTimeout(function(){
parents.classList.remove('ts');
}, 400);return;}
if(player[P(0)].choice==0){
return;
}
let choice=player[P(0)].choice;
player[P(0)].choice=0;
let parents=this.parents;
let using=this.using;
this.thecubes[this.thecubes.length]=cubes.number[choice-1];
let thecubes=this.thecubes;
let value=this.value;
let s=0;
for(let t=0;t<this.thecubes.length;t++){
s=s+this.thecubes[t];
}
if(s>=equipment.counter){
if(equipment.act_1!=undefined){
equipment.act_1({
choice:choice, 
value:value, 
parents:parents, 
thecubes:thecubes, 
e:equipment, 
})
}
}
this.value++;
player[P(0)].kcubes--;
cubes.object[choice-1].classList.remove('vib');
parents.appendChild(cubes.object[choice-1]);
cubes.object[choice-1].classList.add('anim');
if(cubes.object[choice-1].n==undefined){
cubes.object[choice-1].n=true;
}
else{
cubes.object[choice-1].n=false;
}
setTimeout(function(){
if(cubes.object[choice-1].n){
cubes.object[choice-1].classList.remove('anim');
cubes.object[choice-1].classList.add('hidden');
interfacef.cubes.appendChild(cubes.object[choice-1]);
createcube_os(parents,cubes.number[choice-1],cubes.object[choice-1].ef)
if(s>=equipment.counter){
if(equipment.act_2!=undefined){
equipment.act_2({
choice:choice, 
value:value, 
parents:parents, 
thecubes:thecubes, 
e:equipment, 
})
}
if(player[P(0)].effects.shock!=0){
player[P(0)].health=player[P(0)].health-1*player[P(0)].effects.shock;
interfacef.HP.p(P(0))
}
for(;parents.ob3.childNodes[0]!=undefined&&parents.ob3.childNodes[0]!=null;){
parents.ob3.removeChild(parents.ob3.childNodes[0]);
}
if(using==equipment.kusing-1&&equipment.kusing!=0){
parents.classList.add('pr');
}
}
}
},500);
if(s>=equipment.counter&&cubes.object[choice-1].n){
if(equipment.kusing!=0){
this.using++;
}
this.thecubes.length=0;
if(this.v.vkusing!=undefined){
this.v.vkusing--;
}
}
}
     break;
  case 2: 
return function(){
if(this.using>equipment.kusing-1&&equipment.kusing!=0){
this.parents.classList.add('ts');
let parents=this.parents;
setTimeout(function(){
parents.classList.remove('ts');
}, 400);return;}
if(player[P(0)].choice==0){
return;
}
let choice=player[P(0)].choice;
player[P(0)].choice=0;
let ccondition;
if(equipment.condition!=undefined){ccondition=false;}
else{ccondition=true;}
if(ccondition!=true){
switch(equipment.condition[0]){
case 0: 
if(cubes.number[choice-1]==equipment.condition[1]){ccondition=true;}
break;
case 1: 
if(cubes.number[choice-1]<=equipment.condition[1]){ccondition=true;}
break;
case 2: 
if(cubes.number[choice-1]>=equipment.condition[1]){ccondition=true;}
break;
case 3: 
if(cubes.number[choice-1]%2==0){ccondition=true;}
break;
case 4: 
if(cubes.number[choice-1]%2==1){ccondition=true;}
break;
}
}
let ccondition_using;
if(equipment.condition_using!=undefined){ccondition_using=false;}
else{ccondition_using=true;}
if(ccondition_using==false){
switch(equipment.condition_using[0]){
case 0: 
if(cubes.number[choice-1]==equipment.condition_using[1]){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 1: 
if(cubes.number[choice-1]<=equipment.condition_using[1]){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 2: 
if(cubes.number[choice-1]>=equipment.condition_using[1]){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 3: 
if(cubes.number[choice-1]%2==0){ccondition_using=false;}
else{ccondition_using=true;}
break;
case 4: 
if(cubes.number[choice-1]%2==1){ccondition_using=false;}
else{ccondition_using=true;}
break;
}
}
if(ccondition){
let thecubes=this.thecubes;
let parents=this.parents;
let using=this.using;
let value=this.value;
this.thecubes[this.thecubes.length]=cubes.number[choice-1];
if(this.thecubes.length>equipment.counter){
createcube(this.thecubes[0]) 
parents.ob3.removeChild(parents.ob3.childNodes[0]);
this.thecubes.splice(0,1)
}
player[P(0)].kcubes--;
let b=0;
for(let t=0;t<=equipment.counter-2;t++){
if(this.thecubes[t]==this.thecubes[t+1]){
b=true;
}
else{
b=false;
break;
}
}
if(b&&thecubes.length!=0){
if(equipment.act_1!=undefined&&ccondition_using){
equipment.act_1({
choice:choice, 
value:value, 
parents:parents, 
e:equipment, 
})
}
}
this.value++;
cubes.object[choice-1].classList.remove('vib');
parents.appendChild(cubes.object[choice-1]);
cubes.object[choice-1].classList.add('anim');
if(cubes.object[choice-1].n==undefined){
cubes.object[choice-1].n=true;
}
else{
cubes.object[choice-1].n=false;
}
setTimeout(function(){
if(cubes.object[choice-1].n){
cubes.object[choice-1].classList.remove('anim');
cubes.object[choice-1].classList.add('hidden');
interfacef.cubes.appendChild(cubes.object[choice-1]);
createcube_os(parents,cubes.number[choice-1],cubes.object[choice-1].ef)
if(b&&thecubes.length!=0&&ccondition_using){
if(equipment.act_2!=undefined){
equipment.act_2({
choice:choice, 
value:value, 
parents:parents, 
e:equipment, 
})
}
if(player[P(0)].effects.shock!=0){
player[P(0)].health=player[P(0)].health-1*player[P(0)].effects.shock;
interfacef.HP.p(P(0))
}
if(equipment.kusing!=0){
parents.classList.add('pr');
}
for(;parents.ob3.childNodes[0]!=undefined&&parents.ob3.childNodes[0]!=null;){
parents.ob3.removeChild(parents.ob3.childNodes[0]);
}
thecubes.length=0;
}
}
},500);
if(b&&this.thecubes.length!=0&&ccondition_using&&cubes.object[choice-1].n){
if(equipment.kusing!=0){
this.using++;
}
this.thecubes=thecubes;
if(this.v.vkusing!=undefined){
this.v.vkusing--;
}
}
}
else{
player[P(0)].choice=choice;
}
}
     break;
  case 3: 
return function(){
if(this.using>equipment.kusing-1&&equipment.kusing!=0){
this.parents.classList.add('ts');
let parents=this.parents;
setTimeout(function(){
parents.classList.remove('ts');
}, 400);return;}
if(equipment.act_1!=undefined){
equipment.act_1({
value:this.value, 
parents:this.parents, 
e:equipment, 
})
}
if(player[P(0)].effects.shock!=0){
player[P(0)].health=player[P(0)].health-1*player[P(0)].effects.shock;
interfacef.HP.p(P(0))
}
if(this.using==equipment.kusing-1&&equipment.kusing!=0){
this.parents.classList.add('pr');
}
if(equipment.kusing!=0){
this.using++;
}
if(this.v.vkusing!=undefined){
this.v.vkusing--;
}
}
     break;
  case 4: 
return function(){
if(this.using>equipment.kusing-1&&equipment.kusing!=0){
this.parents.classList.add('ts');
let parents=this.parents;
setTimeout(function(){
parents.classList.remove('ts');
}, 400);return;}
if(player[P(0)].choice==0){
return;
}
let choice=player[P(0)].choice;
player[P(0)].choice=0; 
let ccondition;
if(equipment.condition!=undefined){ccondition=false;}
else{ccondition=true;}
if(ccondition!=true){
switch(equipment.condition[0]){
case 0: 
if(cubes.number[choice-1]==equipment.condition[1]){ccondition=true;}
break;
case 1: 
if(cubes.number[choice-1]<=equipment.condition[1]){ccondition=true;}
break;
case 2: 
if(cubes.number[choice-1]>=equipment.condition[1]){ccondition=true;}
break;
case 3: 
if(cubes.number[choice-1]%2==0){ccondition=true;}
break;
case 4: 
if(cubes.number[choice-1]%2==1){ccondition=true;}
break;
}
}
if(ccondition){
let thecubes=this.thecubes;
let parents=this.parents;
let using=this.using;
let value=this.value;
this.thecubes[this.thecubes.length]=cubes.number[choice-1];
let s=0;
for(let t=0;t<this.thecubes.length;t++){
s=s+this.thecubes[t];
}
player[P(0)].kcubes--;
if(thecubes.length==equipment.counter){
if(equipment.act_1!=undefined){
equipment.act_1({
choice:choice, 
value:value, 
parents:parents, 
s:s, 
e:equipment, 
})
}
}
cubes.object[choice-1].classList.remove('vib');
parents.appendChild(cubes.object[choice-1]);
cubes.object[choice-1].classList.add('anim');
if(cubes.object[choice-1].n==undefined){
cubes.object[choice-1].n=true;
}
else{
cubes.object[choice-1].n=false;
}
setTimeout(function(){
if(cubes.object[choice-1].n){
cubes.object[choice-1].classList.remove('anim');
cubes.object[choice-1].classList.add('hidden');
interfacef.cubes.appendChild(cubes.object[choice-1]);
createcube_os(parents,cubes.number[choice-1],cubes.object[choice-1].ef)
if(thecubes.length==equipment.counter){
if(equipment.act_2!=undefined){
equipment.act_2({
choice:choice, 
value:value, 
parents:parents, 
s:s, 
e:equipment, 
})
}
if(player[P(0)].effects.shock!=0){
player[P(0)].health=player[P(0)].health-1*player[P(0)].effects.shock;
interfacef.HP.p(P(0))
}
if(using==equipment.kusing-1&&equipment.kusing!=0){
parents.classList.add('pr');
for(;parents.ob3.childNodes[0]!=undefined&&parents.ob3.childNodes[0]!=null;){
parents.ob3.removeChild(parents.ob3.childNodes[0]);
}
}
}
}
},500);
if(thecubes.length==equipment.counter&&equipment.kusing!=0&&cubes.object[choice-1].n){
this.using++;
if(this.v.vkusing!=undefined){
this.v.vkusing--;
}
}
}
else{
player[P(0)].choice=choice;
}
}
     break;
}
}





}
}



function P(n){
if(idplayer+n<player.length||idplayer+n>player.length){
if(idplayer+n<0){
return (idplayer+n)*-1;}
return idplayer+n;}
if(idplayer+n==player.length){
return 0;}}
let player=[];
let idplayer=0;

let lin=[document.createElement('div'),document.createElement('div')];

let interfacef={
HP:document.createElement('div'), 
top:document.createElement('div'), 
top_text:document.createTextNode('Информация'), 
table:document.createElement('div'), 
cubes:document.createElement('div'), 
next:document.createElement('div'), 
text:document.createTextNode('Следующий ход'), 
hod:document.createElement('div'), 
hod_text:document.createTextNode('Ход: '+step), 
}
interfacef.HP.classList.add('lin_HP');
interfacef.cubes.classList.add('cubes');
interfacef.cubes.align='center';
interfacef.top.classList.add('top');
interfacef.table.classList.add('table', 'hidden');
interfacef.top.appendChild(interfacef.top_text);
interfacef.next.classList.add('next');
interfacef.next.appendChild(interfacef.text);
interfacef.hod.classList.add('hod');
interfacef.hod.appendChild(interfacef.hod_text);
lin[0].classList.add('player_1','green');
interfacef.HP.appendChild(lin[0]);
lin[1].classList.add('player_2','red');
interfacef.HP.appendChild(lin[1]);
interfacef.HP.appendChild(interfacef.top);
interfacef.HP.appendChild(interfacef.hod);
interfacef.next.classList.add('next');






interfacef.top.onclick=()=>{
if(this.value!=true){
this.value=true;
interfacef.table.classList.remove('hidden')
let object=document.createElement('div');
object.classList.add('sp');
let text=document.createTextNode('Список игроков:');
object.appendChild(text);
interfacef.table.appendChild(object);
for(let t=0;t<player.length;t++){
let objectl=document.createElement('div');
objectl.p=t;
objectl.onclick=()=>{
if(objectl.value!=true){
objectl.value=true;
let text=[];
text[text.length]='Количество кубиков: '+player[objectl.p].ncubes;
if(player[objectl.p].effects.gold[0]!=0){
text[text.length]='Монеты: '+player[objectl.p].effects.gold[0]+'/'+player[objectl.p].effects.gold[1];
}
if(player[objectl.p].effects.bleeding!=0){
text[text.length]='Кровотечение: '+player[objectl.p].effects.bleeding;
}
if(player[objectl.p].effects.regeneration!=0){
text[text.length]='Регистрация: '+player[objectl.p].effects.regeneration;
}
if(player[objectl.p].effects.shield!=0){
text[text.length]='Щит: '+player[objectl.p].effects.shield;
}
if(player[objectl.p].effects.blindness!=0){
text[text.length]='Слепота: '+player[objectl.p].effects.blindness;
}
if(player[objectl.p].effects.poison[1]!=0){
text[text.length]='Яд: на '+player[objectl.p].effects.poison[0]+' ходе, урон '+player[objectl.p].effects.poison[1];
}
if(player[objectl.p].effects.burned!=0){
text[text.length]='Ожёг: '+player[objectl.p].effects.burned;
}
if(player[objectl.p].effects.protection!=0){
text[text.length]='Защита: '+player[objectl.p].effects.protection;
}
if(player[objectl.p].effects.confusion!=0){
text[text.length]='Запутанность: '+player[objectl.p].effects.confusion;
}
if(player[objectl.p].effects.fury!=0){
text[text.length]='Ярость: '+player[objectl.p].effects.fury;
}
if(player[objectl.p].effects.shock!=0){
text[text.length]='Шок: '+player[objectl.p].effects.shock;
}


for(let t=0;t<text.length;t++){
let ob=document.createElement('div');
let te=document.createTextNode(text[t]);
ob.appendChild(te);
objectl.appendChild(ob);
}
let card=document.createElement('div');
card.classList.add('card');
for(let t=0;t<player[objectl.p].cards.length;t++){
let ob=document.createElement('div');
ob.classList.add('inline');
createOS(ob, player[objectl.p].cards[t], true)
card.appendChild(ob);
}
objectl.appendChild(card);
}
else{
objectl.value=false;
let kk=objectl.childNodes.length-1;
for(let t=0;t<kk;t++){
objectl.removeChild(objectl.childNodes[1]);
}
}

}
objectl.classList.add('spp');
if(P(0)==t||pr==t){
if(P(0)==t){
objectl.classList.add('green');
}
if(pr==t){
objectl.classList.add('red');
}
}
else{
objectl.classList.add('gold');
}
let text=document.createTextNode((t+1)+': '+player[t].name+': '+player[t].health+'/'+player[t].max_health);
objectl.appendChild(text);
interfacef.table.appendChild(objectl);
let probl=document.createElement('div');
probl.classList.add('sppp');
interfacef.table.appendChild(probl);
}
let plus=new Image;
plus.src='plus.png';
plus.classList.add('plus');
interfacef.table.appendChild(plus);
let all=new Image;
all.src='cards.jpg';
all.align='right';
all.classList.add('cards');
object.appendChild(all);


all.onclick=()=>{
windows[2]=document.createElement('div');
windows[2].classList.add('all_OS', 'cell');
document.body.appendChild(windows[2]) 
for(let t=0;t<cards.length;t++){
let object=document.createElement('div');
object.classList.add('n');
object.appendChild(document.createTextNode(t+1)) 
windows[2].appendChild(object) 
let object2=document.createElement('div');
windows[2].appendChild(object2) 
createOS(object2,cards[t],!test_on)
}
let zak=document.createElement('div');
zak.classList.add('zak');
zak.appendChild(document.createTextNode('Закрыть'));
zak.onclick=()=>{
document.body.removeChild(windows[2]) 
windows[2]=undefined;
}
windows[2].appendChild(zak);
}
plus.onclick=()=>{
player[player.length]=plusplayer();
interfacef.top.onclick()
interfacef.top.onclick()
}




}
else{
this.value=false;
interfacef.table.classList.add('hidden')
let kk=interfacef.table.childNodes.length;
for(let t=0;t<kk;t++){
interfacef.table.removeChild(interfacef.table.childNodes[0]);
}
}

}





interfacef.HP.p=p=>{
lin[0].innerHTML=player[P(0)].name+': '+player[P(0)].health*1;
lin[1].innerHTML=player[pr].name+': '+player[pr].health*1;
if(player[p].health>player[p].max_health){
player[p].health=player[p].max_health;
}
if(player[p].health<0){
player[p].health=0;
}
if(player[p].health<=0){
player[P(0)].ncubes=player[P(0)].ncubes+player[p].ncubes;
alert(`${player[p].name} покинул игру`)
player.splice(p,1)
if(pr==idplayer){
idplayer++;
if(idplayer>=player.length){
idplayer=0;
}
}
}

}
document.body.appendChild(interfacef.HP);
let ma=0;
let tab=document.createElement('table');
tab.classList.add('tab');
for(let a=0;a<4;a++){
let tr=document.createElement('tr');
for(let b=0;b<2;b++){
matrix[ma]=document.createElement('td');
matrix[ma].v=ma;
matrix[ma].classList.add('cell');
tr.appendChild(matrix[ma]);
ma++;
}
tab.appendChild(tr);
}
document.body.appendChild(tab);
document.body.appendChild(interfacef.table);
document.body.appendChild(interfacef.next);
document.body.appendChild(interfacef.cubes);
let cards=[
//1
new OS({
text:'Меч, урон=кубик', 
color:'e00030', 
type:0,
kusing:1, 
act_2:function(I){
damage(pr,cubes.number[I.choice-1])
}, 
}), 
//2
new OS({
text:'Пила, разделяет кубик на 2', 
color:'105010', 
type:0,
kusing:1, 
act_2:function(I){
let k1;
if(cubes.number[I.choice-1]!=1){
k1=cubes.number[I.choice-1]/2;
}
else{
k1=cubes.number[I.choice-1];
}
createcube(Math.ceil(k1));
createcube(Math.floor(k1));
}, 
}), 
//3
new OS({
text:'Кинжал, макс 3, кубик=урон,кровотечение', 
color:'e00030', 
type:0,
condition:[1,3], 
kusing:1, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1])
player[pr].effects.bleeding++;
}, 
}),
//4
new OS({
text:'Переброс, 3 исп. за ход', 
color:'f0d000', 
type:0,
kusing:3, 
act_2:function(I){
createcube()
}, 
}), 
//5
new OS({
text:'Бумеранг, урон=кубик, макс 4, возвращает кубик', 
color:'e00030', 
type:0,
condition:[1,4], 
kusing:1, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1])
createcube(cubes.number[I.choice-1])
}, 
}), 
//6
new OS({
text:'Дубликат, дублирует кубик', 
color:'105010', 
type:0,
kusing:1, 
act_2:function(I){
createcube(cubes.number[I.choice-1])
createcube(cubes.number[I.choice-1])
}, 
}), 
//7
new OS({
text:'Нож, урон=Х2кубик, макс 4', 
color:'e00030', 
type:0,
condition:[1,4], 
kusing:1, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1]*2)
}, 
}), 
//8
new OS({
text:'Лечение, Хилл=кубик, макс 4', 
color:'00a030', 
type:0,
condition:[1,4], 
kusing:1,
act_1:function(I){
player[P(0)].health=player[P(0)].health+cubes.number[I.choice-1];
}, 
act_2:function(I){
interfacef.HP.p(P(0))
}, 
}), 
//9
new OS({
text:'Зеркало, +1 кубик в этом бою, нечёт', 
color:'400070', 
type:0,
condition:[4], 
kusing:1, 
act_1:function(I){
player[P(0)].ncubes++;
}, 
}), 
//10
new OS({
text:'Переворот, перевернуть кубик', 
color:'105010', 
type:0,
counter:0,
kusing:1, 
act_2:function(I){
createcube(7-cubes.number[I.choice-1])
}, 
}), 
//11
new OS({
text:'Двухсторонее зеркало, +кубик себе и врагу, нужно 2', 
color:'400070', 
type:0,
condition:[0,2], 
kusing:1, 
act_1:function(I){
for(var t=0;t<player.length;t++){
player[t].ncubes++;
}
}, 
}), 
//12
new OS({
text:'Пулемёт,урон=1,+1 за каждое использование, нужно 1, 6 раз за ход', 
color:'e00030', 
type:0,
condition:[0,1], 
kusing:6, 
act_2:function(I){
damage(pr,1+I.value)
}, 
}), 
//13
new OS({
text:'Дробильщик, разбивает кубик на единицы', 
color:'105010', 
type:0,
kusing:1, 
act_2:function(I){
for(let t=0;t<cubes.number[I.choice-1];t++){
createcube(1)
}
}, 
}), 
//14
new OS({
text:'Копьё, урон=кубик+4, нужно Чёт. ', 
color:'e00030', 
type:0,
condition:[3], 
kusing:1, 
act_2:function(I){
damage(pr,cubes.number[I.choice-1]+4)
}, 
}), 
//15
new OS({
text:'Пинок, наносит 1 урон, многоразовое, кубик<=2', 
color:'e00030', 
type:0,
condition:[1,2], 
kusing:0, 
act_2:function(I){
damage(pr,1)
}, 
}), 
//16
new OS({
text:'Бензопила, добавляет 10 кровотечений, нужно 5, 1 использование', 
color:'f02000', 
type:0,
condition:[0,5], 
kusing:1, 
vkusing:1, 
act_1:function(I){
player[pr].effects.bleeding=player[pr].effects.bleeding+10;
}, 
}), 
//17
new OS({
text:'Аптечка, +10 хп, кубик>=5', 
color:'00a030', 
type:0,
condition:[2,5], 
kusing:1, 
act_1:function(I){
player[P(0)].health=player[P(0)].health+10;
}, 
act_2:function(I){
interfacef.HP.p(P(0))
}, 
}), 
//18
new OS({
text:'Молот, разделяет кубик на двойки, нужна шестёрка', 
color:'105010', 
type:0,
condition:[0,6], 
kusing:1, 
act_2:function(I){
createcube(2)
createcube(2)
createcube(2)
}, 
}), 
//19
new OS({
text:'Игла, макс 3,урон=кубик, если 2,то урон=7, 2раза за ход', 
color:'e00030', 
type:0,
condition:[1,3], 
kusing:2,
act_2:function(I){
if(cubes.number[I.choice-1]==2){
damage(pr,7)
}
else{
damage(pr,cubes.number[I.choice-1])
}
}, 
}), 
//20
new OS({
text:'Калькулятор, прибавляет к кубику 1, 2 раза за ход', 
color:'105010', 
type:0,
kusing:2, 
act_2:function(I){
if(cubes.number[I.choice-1]!=6){
createcube(cubes.number[I.choice-1]+1)
}
else{
createcube(6)
createcube(1)
}
}, 
}), 
//21
new OS({
text:'Ножницы, отрезают от кубика 1, 2 раза за ход', 
color:'105010', 
type:0,
kusing:2, 
act_2:function(I){
if(cubes.number[I.choice-1]!=1){
createcube(cubes.number[I.choice-1]-1)
createcube(1)
}
else{
createcube(1)
createcube(1)
}
}, 
}), 
//22
new OS({
text:'Сабля, урон=кубик, если 3, то можно использовать ещё, кубик<=5', 
color:'e00030', 
type:0,
condition:[1,5], 
kusing:1, 
condition_using:[0,3],
act_2:function(I){
damage(pr,cubes.number[I.choice-1])
}, 
}), 
//23
new OS({
text:'Удачный бросок, сделать все кубики:[куб], одно использование', 
color:'f0d000', 
type:0,
kusing:1, 
vkusing:1, 
act_2:function(I){
for(let t=0;t<cubes.object.length;t++){
cubes.object[t].classList.add('hidden');
}
let k=player[P(0)].kcubes;
for(let t=0;t<k;t++){
createcube(cubes.number[I.choice-1])
}
}, 
}), 
//24
new OS({
text:'Запас, нажмите, чтобы получить доп. кубик', 
color:'f0d000', 
type:3,
kusing:1, 
act_1:function(I){
createcube()
}, 
}), 
//25
new OS({
text:'Игровой автомат, шанс кубик/6 урон=10, 2 раза за ход', 
color:'f0d000', 
type:0,
kusing:2, 
act_2:function(I){
if(rand(1,7-cubes.number[I.choice-1])==1){
damage(pr,10)
}
}, 
}), 
//26
new OS({
text:'Наноботы, регенерация+1, одно использование', 
color:'00e020', 
type:0,
vkusing:1, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.regeneration=player[P(0)].effects.regeneration+1;
}, 
}), 
//27
new OS({
text:'Неудача,все кубики 1(врагу), нужно 6,одно использование', 
color:'f0d000', 
type:0,
counter:2, 
condition:[0,6], 
kusing:1, 
vkusing:1, 
act_1:function(I){
player[pr].effects.failure[0]=1;
}, 
act_2:function(I){
createcube(6)
}, 
}), 
//28
new OS({
text:'Неудача,все кубики 2(врагу), нужно 5,одно использование', 
color:'f0d000', 
type:0,
counter:2, 
condition:[0,5], 
kusing:1, 
vkusing:1, 
act_1:function(I){
player[pr].effects.failure[1]=1;
}, 
act_2:function(I){
createcube(5)
}, 
}), 
//29
new OS({
text:'Неудача,все кубики 3(врагу), нужно 4,одно использование', 
color:'f0d000', 
type:0,
counter:2, 
condition:[0,4], 
kusing:1,
vkusing:1, 
act_1:function(I){
player[pr].effects.failure[2]=1;
}, 
act_2:function(I){
createcube(4)
}, 
}), 
//30
new OS({
text:'Неудача,все кубики 4(врагу), нужно 3,одно использование', 
color:'f0d000', 
type:0,
counter:2, 
condition:[0,3], 
kusing:1, 
vkusing:1, 
act_1:function(I){
player[pr].effects.failure[3]=1;
}, 
act_2:function(I){
createcube(3)
}, 
}), 
//31
new OS({
text:'Неудача,все кубики 5(врагу), нужно 2,одно использование', 
color:'f0d000', 
type:0,
counter:2, 
condition:[0,2], 
kusing:1, 
vkusing:1, 
act_1:function(I){
player[pr].effects.failure[4]=1;
}, 
act_2:function(I){
createcube(2)
}, 
}), 
//32
new OS({
text:'Неудача,все кубики 6(врагу), нужно 1,одно использование', 
color:'f0d000', 
type:0,
counter:2, 
condition:[0,1], 
kusing:1, 
vkusing:1, 
act_1:function(I){
player[pr].effects.failure[5]=1;
}, 
act_2:function(I){
createcube(1)
}, 
}), 
//33
new OS({
text:'Конфетка, исцеляет 5 здоровье, если 4, то возвращает кубик', 
color:'00a030', 
type:0,
kusing:1, 
act_1:function(I){
player[P(0)].health=player[P(0)].health+5;
}, 
act_2:function(I){
if(cubes.number[I.choice-1]==4){
createcube(4)
}
interfacef.HP.p(P(0))
}, 
}), 
//34
new OS({
text:'Неопределённый меч,не меньше 4,наносит урон 1-20', 
color:'f0d000', 
type:0,
condition:[2,4], 
kusing:1, 
act_2:function(I){
damage(pr,rand(1,20))
}, 
}), 
//35
new OS({
text:'Нунчаки, нужен дубль, урон=20, кубики>=4', 
color:'e00030', 
type:2,
counter:2, 
condition:[2,4], 
kusing:1, 
act_2:function(I){
damage(pr,20) 
}, 
}), 
//36
new OS({
text:'Огнемёт,сжигает случайное оснащение врага,сумма 20', 
color:'e08000', 
type:1,
counter:20, 
kusing:1, 
act_2:function(I){
player[pr].cards.splice(rand(1,player[pr].cards.length-1),1)
}, 
}), 
//37
new OS({
text:'Бинты, убрать кровотечение, нужно 4', 
color:'00a030', 
type:0,
condition:[0,4], 
kusing:1, 
act_1:function(I){
player[P(0)].effects.bleeding=0;
}, 
}), 
//38
new OS({
text:'Кровавый меч, урон=кубик=лечение, кубик<=4', 
color:'e00030', 
type:0,
condition:[1,4], 
kusing:1, 
act_1:function(I){
player[P(0)].health=player[P(0)].health+cubes.number[I.choice-1];
}, 
act_2:function(I){
interfacef.HP.p(P(0))
damage(pr,cubes.number[I.choice-1]) 
}, 
}), 
//39
new OS({
text:'Тиски, соединяет два кубика', 
color:'105010', 
type:4,
counter:2, 
kusing:1, 
act_2:function(I){
if(I.s>6){
for(let t=0;t<=Math.floor(I.s/6)-1;t++){
createcube(6) 
}
}
if(I.s%6!=0){
createcube(I.s%6) 
}
else{
createcube(6) 
}
}
}), 
//40
new OS({
text:'Кубический пресс, соединяет 4 кубика', 
color:'105010', 
type:4,
counter:4, 
kusing:1, 
act_2:function(I){
if(I.s>6){
for(let t=0;t<=Math.floor(I.s/6)-1;t++){
createcube(6) 
}
}
if(I.s%6!=0){
createcube(I.s%6) 
}
else{
createcube(6) 
}
}
}), 
//41
new OS({
text:'Железный щит, щит+5, кубик==4', 
color:'e27904', 
type:0,
condition:[0,4], 
kusing:1, 
act_1:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield+5;
}, 
}), 
//42
new OS({
text:'Тройной щит, щит+20, нужно три одинаковых кубика, кубики>=4', 
color:'e27904', 
type:2,
condition:[2,4], 
counter:3, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield+20;
}, 
}), 
//43
new OS({
text:'Двойной щит, щит+кубики, нужно 2 кубика, кубики<=3', 
color:'e27904', 
type:4,
counter:2, 
condition:[1,3], 
kusing:1, 
act_1:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield+I.s;
}, 
}), 
//44
new OS({
text:'Эмблема щита, щит*2, нужен дубль 5, одно использование', 
color:'e27904', 
type:2,
counter:2, 
condition:[0,5], 
kusing:1, 
vkusing:1, 
act_1:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield*2;
}, 
}), 
//45
new OS({
text:'Чернила, слепота врагу, нужно 3,3раза за ход', 
color:'190b2c', 
type:0,
counter:0, 
condition:[0,3], 
kusing:3, 
act_1:function(I){
player[pr].effects.blindness++;
}, 
}), 
//46
new OS({
text:'Невидимый щит, Чёт. щит+кубик(себе), неЧёт слепота+кубик(врагу)', 
color:'85D2D9', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
if(0==cubes.number[I.choice-1]%2){
player[P(0)].effects.shield=player[P(0)].effects.shield+cubes.number[I.choice-1];
}
else{
player[pr].effects.blindness=player[pr].effects.blindness+cubes.number[I.choice-1];
}
},
}), 
//47
new OS({
text:'Щитолом, щит и защита/2 (врагу), сумма 5', 
color:'e27904', 
type:1,
counter:5, 
kusing:1, 
act_1:function(I){
player[pr].effects.shield=Math.floor(player[pr].effects.shield/2);
player[pr].effects.protection=Math.floor(player[pr].effects.shield/2);
}, 
}), 
//48
new OS({
text:'Яд, счётчик +2, +10 яда, сумма 12', 
color:'726ca2', 
type:1,
counter:12, 
kusing:1, 
act_1:function(I){
player[pr].effects.poison[1]=player[pr].effects.poison[1]+10;
if(player[pr].effects.poison[0]==0){
player[pr].effects.poison[0]=step+2;
}
else{
player[pr].effects.poison[0]=player[pr].effects.poison[0]+2;
}
}, 
}), 
//49
new OS({
text:'Микстура, убирает яд,нужен дубль', 
color:'00a030', 
type:2,
counter:2, 
kusing:1,
act_1:function(I){
player[P(0)].effects.poison[0]=0;
player[P(0)].effects.poison[1]=0;
}, 
}), 
//50
new OS({
text:'Очки, снимают слепоту с кубиков, кубик==4', 
color:'00a030', 
type:0,
counter:0, 
condition:[0,4], 
kusing:1, 
act_2:function(I){
pk()
},
}), 
//51
new OS({
text:'Ядовитая игла, яд+1, кубик<=3, 3 раза за ход', 
color:'726ca2', 
type:0,
counter:0, 
condition:[1,3], 
kusing:3, 
act_1:function(I){
if(player[pr].effects.poison[0]==0){
player[pr].effects.poison[0]=step+1;
}
player[pr].effects.poison[1]++;
}, 
}), 
//52
new OS({
text:'Чаша с ядом, удваивает яд, сумма 30', 
color:'726ca2', 
type:1,
counter:30, 
kusing:1, 
act_1:function(I){
player[pr].effects.poison[1]=player[pr].effects.poison[1]*2;
}, 
}), 
//53
new OS({
text:'Банка яда, +1 к счётчику яда', 
color:'726ca2', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
if(player[pr].effects.poison[1]!=0){
if(player[pr].effects.poison[0]==0){
player[pr].effects.poison[0]=step+1;
}
else{
player[pr].effects.poison[0]++;
}
}
}, 
}), 
//54
new OS({
text:'Чай с ядом, -1 к счётчику яда', 
color:'726ca2', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
if(player[pr].effects.poison[1]!=0){
player[pr].effects.poison[0]--;
}
}, 
}), 
//55
new OS({
text:'Спичка, ожёг врагу, кубик–нечёт', 
color:'c40006', 
type:0,
counter:0, 
condition:[4], 
kusing:1, 
act_1:function(I){
player[pr].effects.burned++;
}, 
}),
//56
new OS({
text:'Огненный меч, урон=кубик, если 6, то ожёг врагу', 
color:'c40006', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
if(cubes.number[I.choice-1]==6){
player[pr].effects.burned++;
}
}, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1])
}, 
}), 
//57
new OS({
text:'Броня, +защита, кубик==5', 
color:'dc9202', 
type:0,
condition:[0,5], 
kusing:1, 
act_1:function(I){
player[P(0)].effects.protection++;
}, 
}), 
//58
new OS({
text:'Призрачная сабля, бьёт не смотря на щит и защиту', 
color:'96c2e9', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
player[pr].health=player[pr].health-cubes.number[I.choice-1];
}, 
act_2:function(I){
interfacef.HP.p(pr)
}, 
}), 
//59
new OS({
text:'Двойной кубик, умножает кубик на 2, кубик<=3', 
color:'105010', 
type:0,
counter:0, 
condition:[1,3], 
kusing:1, 
act_2:function(I){
createcube(cubes.number[I.choice-1]*2) 
}, 
}), 
//60
new OS({
text:'Огненный щит, щит=кубик, +ожёг(врагу)', 
color:'c40006', 
type:0,
counter:0,
kusing:1, 
act_1:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield+cubes.number[I.choice-1];
player[pr].effects.burned++;
}, 
}), 
//61
new OS({
text:'Паяльник, урон=кубик*2, ожёг (себе)', 
color:'c40006', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.burned++;
}, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1]*2)
}, 
}), 
//62
new OS({
text:'Обратная психология, запутанность+1(врагу), сумма 20', 
color:'551936', 
type:1,
counter:20, 
kusing:1, 
act_1:function(I){
player[pr].effects.confusion++;
}, 
}), 
//63
new OS({
text:'Мешочик с золотом, монеты+5', 
color:'ffd700', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[0]+5;
if(player[P(0)].effects.gold[0]>player[P(0)].effects.gold[1]){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[1];
}
}, 
}), 
//64
new OS({
text:'Золотой переброс, выбрасывает ещё кубик,цена:2', 
color:'ffd700', 
type:0,
counter:0, 
kusing:1, 
act_2:function(I){
createcube()
if(player[P(0)].effects.gold[0]>1){
createcube()
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[0]-2;
}
}, 
}), 
//65
new OS({
text:'Золотой меч, урон=кубик*2,цена:10', 
color:'ffd700', 
type:0,
counter:0, 
kusing:1, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1])
if(player[P(0)].effects.gold[0]>9){
damage(pr, cubes.number[I.choice-1])
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[0]-10;
}
}, 
}), 
//66
new OS({
text:'Чемодан, макс монет +10', 
color:'ffd700', 
type:0,
counter:0, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.gold[1]=player[P(0)].effects.gold[1]+10;
}, 
}), 
//67
new OS({
text:'Золотая чаша яда, яд+30, счёт яда+10(врагу) цена 20, нажмите', 
color:'ffd700', 
type:3,
counter:0, 
kusing:1, 
act_1:function(I){
if(player[P(0)].effects.gold[0]>19){
player[pr].effects.poison[0]=step+10;
player[pr].effects.poison[1]=player[pr].effects.poison[1]+30;
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[0]-20;
}
}, 
}), 
//68
new OS({
text:'Нажмите, чтобы открыть случайную карту на один ход', 
color:'8a33b3', 
type:3,
counter:0, 
kusing:1, 
act_1:function(I){
createOS(I.parents.parentNode,cards[rand(1,cards.length)])
I.parents.parentNode.removeChild(I.parents.parentNode.childNodes[0]);
}, 
}), 
//69
new OS({
text:'Волшебный кошелёк, +1 монета, возвращает 5, сумма 6, многоразовое', 
color:'ffd700', 
type:1,
counter:6, 
kusing:0, 
act_1:function(I){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[0]+1;
if(player[P(0)].effects.gold[0]>player[P(0)].effects.gold[1]){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[1];
}
}, 
act_2:function(I){
createcube(5)
}, 
}), 
//70
new OS({
text:'Золотая шахта, +30 монет, сумма 20', 
color:'ffd700', 
type:1,
counter:20, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[0]+30;
if(player[P(0)].effects.gold[0]>player[P(0)].effects.gold[1]){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[1];
}
}, 
}) , 
//71
new OS({
text:'Нефтяной бур, нужно 2 кубика, монеты+сумма', 
color:'ffd700', 
type:4,
counter:2, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[0]+I.s;
if(player[P(0)].effects.gold[0]>player[P(0)].effects.gold[1]){
player[P(0)].effects.gold[0]=player[P(0)].effects.gold[1];
}
}, 
}), 
//72
new OS({
text:'Ярость, +ярость, сумма 7', 
color:'eb1313', 
type:1,
counter:7, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.fury++;
}, 
}), 
//73
new OS({
text:'Книга ярости, нужен дубль 5, +5 ярости', 
color:'eb1313', 
type:2,
counter:5, 
kusing:1, 
act_1:function(I){
player[P(0)].effects.fury=player[P(0)].effects.fury+5;
}, 
}), 
//74
new OS({
text:'Магический топор, урон=[куб]*3, одно использование', 
color:'09546a', 
type:0,
kusing:1, 
vkusing:1, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1]*3)
}, 
}), 
//75
new OS({
text:'Электрошокер, урон=[куб], шок(врагу)', 
color:'2b5ec6', 
type:0,
kusing:1, 
act_2:function(I){
damage(pr, cubes.number[I.choice-1])
player[pr].effects.shock++;
}, 
}), 
//76
new OS({
text:'Шаровая молния, урон=20, шок(врагу) , сумма 30', 
color:'2b5ec6', 
type:1,
counter:30, 
kusing:1,
act_2:function(I){
damage(pr,20)
player[pr].effects.shock++;
}, 
}), 
//77
new OS({
text:'Заземление, убирает шок, [куб]=2', 
color:'5e2418', 
type:0,
condition:[0,2], 
kusing:1, 
act_2:function(I){
player[P(0)].effects.shock=0;
}, 
}), 
//78
new OS({
text:'Молния, шок врагу, нужно 6', 
color:'2b5ec6', 
type:0,
condition:[0,6], 
kusing:1, 
act_2:function(I){
player[pr].effects.shock++;
}, 
}), 
//79
new OS({
text:'Плохая проводка, шок врагу и себе', 
color:'5e2418', 
type:0,
kusing:1, 
act_2:function(I){
player[pr].effects.shock++;
player[P(0)].effects.shock++;
}, 
}), 
//80
new OS({
text:'Конденсатор, урон=шок*2', 
color:'2b5ec6', 
type:0,
kusing:1, 
act_2:function(I){
damage(pr,player[P(0)].effects.shock*2)
}, 
}), 
//81
new OS({
text:'Электрический меч, урон=[куб]+5, шок себе', 
color:'2b5ec6', 
type:0,
kusing:1, 
act_2:function(I){
damage(pr,cubes.number[I.choice-1]+5)
player[P(0)].effects.shock++;
}, 
}), 
//82
new OS({
text:'Электрический щит, щит+[куб]+5, шок себе', 
color:'2b5ec6', 
type:0,
kusing:1, 
act_2:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield+cubes.number[I.choice-1]+5;
player[P(0)].effects.shock++;
}, 
}), 
//83
new OS({
text:'Бластер, урон=30, шок+5, врагу, нужно 6, одно использоаание', 
color:'2b5ec6', 
type:0,
kusing:1, 
vkusing:1, 
act_2:function(I){
damage(pr,30)
player[pr].effects.shock=player[pr].effects.shock+5;
}, 
}), 
//84
new OS({
text:' Катастрофа, ожёг, слепота, шок(врагу), сумма 15', 
color:'685c51', 
type:1,
kusing:1, 
counter:15, 
act_2:function(I){
player[pr].effects.shock++;
player[pr].effects.burned++;
player[pr].effects.blindness++;
}, 
}), 
//85
new OS({
text:'Миникатапульта, урон=1, сумма 4, многоразовое', 
color:'e28c3c', 
type:1,
kusing:0, 
counter:4, 
act_2:function(I){
damage(pr,1)
}, 
}), 
//86
new OS({
text:'Огненный шар, урон=10, ожёг+2(врагу) , нужен дубль', 
color:'c40006', 
type:2,
kusing:1, 
counter:2, 
act_2:function(I){
damage(pr,10)
player[pr].effects.burned++;
player[pr].effects.burned++;
}, 
}), 
//87
new OS({
text:'Квадратный щит, щит+30, сумма 25', 
color:'e27904', 
type:1,
counter:25,
kusing:1, 
act_1:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield+30;
}, 
}), 
//88
new OS({
text:'Яростный топор,+ярость, урон=кубик', 
color:'c40006', 
type:0,
kusing:1, 
counter:0, 
act_2:function(I){
player[P(0)].effects.fury++;
damage(pr,cubes.number[I.choice-1])
}, 
}), 
//89
new OS({
text:'Стена из подушек, щит+1,нужен дубль, многоразовое', 
color:'e27904', 
type:2,
kusing:0, 
counter:2, 
act_2:function(I){
player[P(0)].effects.shield++;
}, 
}), 
//90
new OS({
text:'Трюк, одолжить карты врага, на один ход, сумма 15, одно использование', 
color:'695ecb', 
type:1,
kusing:1, 
vkusing:1, 
counter:15, 
act_2:function(I){
for(let t=0;t<=matrix.length-1;t++){
if(matrix[t].childNodes[0]!=undefined){
matrix[t].removeChild(matrix[t].childNodes[0]);
}
}
for(let t=0;t<player[pr].cards.length;t++){
createOS(matrix[t],player[pr].cards[t])
}
}, 
}), 
//91
new OS({
text:'Копия, скопировать карты врага, сумма 15, одно использование', 
color:'695ecb', 
type:1,
kusing:1, 
vkusing:1, 
counter:15, 
act_2:function(I){
for(let t=0;t<player[pr].cards.length;t++){
player[P(0)].cards[t]=clone(player[pr].cards[t])
}
}, 
}), 
//92
new OS({
text:'Замена, поменяться картами с врагом, сумма 15, одно использование', 
color:'695ecb', 
type:1,
kusing:1, 
vkusing:1, 
counter:15, 
act_2:function(I){
let m=player[P(0)].cards;
player[P(0)].cards=player[pr].cards;
player[pr].cards=m;
}, 
}), 
//93
new OS({
text:'Заклинание возврата, урон=1, перебрасывает кубик, нужно нечёт, многоразовое', 
color:'d3e0ec', 
type:0,
counter:0, 
condition:[4], 
kusing:0, 
act_2:function(I){
damage(pr,1)
createcube()
}
}), 
//94
new OS({
text:'Заклинание огня, +ожёг(врагу), кубик=4', 
color:'ca0207', 
type:0,
counter:0, 
condition:[0,4], 
kusing:1, 
act_1:function(I){
player[pr].effects.burned++;
}
}), 
//95
new OS({
text:'Заклинание ярости, +ярость, кубик=2', 
color:'ca0207', 
type:0,
counter:0, 
condition:[0,2], 
kusing:1, 
act_1:function(I){
player[P(0)].effects.fury++;
}
}), 
//96
new OS({
text:'Заклинание тьмы, + слепота врагу, кубик=6', 
color:'190b2c', 
type:0,
counter:0, 
condition:[0,6], 
kusing:1, 
act_1:function(I){
player[pr].effects.blindness++;
}
}), 
//97
new OS({
text:'Молоток, перебросить все кубики, нужно чёт', 
color:'054505', 
type:0,
counter:0, 
condition:[3], 
kusing:1, 
act_2:function(I){
for(let t=0;t<cubes.object.length;t++){
cubes.object[t].classList.add('hidden');
}
let k=player[P(0)].kcubes+1;
for(let t=0;t<k;t++){
createcube()
}
}
}), 
//98
new OS({
text:'Сварочный аппарат, урон=10, [куб]==6, 2 раза за ход', 
color:'ca0207', 
type:0,
counter:0, 
condition:[0,6], 
kusing:2, 
act_2:function(I){
damage(pr,10)
}
}), 
//99
new OS({
text:'Отвёртка, знач. кубика+1, [куб]<=5', 
color:'054505', 
type:0,
counter:0, 
condition:[1,5], 
kusing:1, 
act_2:function(I){
createcube(cubes.number[I.choice-1]+1)
}
}), 
//100
new OS({
text:'Трансформатор, удваивает шок у врага, нужно чёт', 
color:'2b5ec6', 
type:0,
counter:0, 
condition:[3], 
kusing:1, 
act_2:function(I){
player[pr].effects.shock=player[pr].effects.shock*2;
}
}), 
//101
new OS({
text:'Плата питания, шок+2 врагу, сумма 10', 
color:'2b5ec6', 
type:1,
counter:10, 
kusing:1, 
act_2:function(I){
player[pr].effects.shock=player[pr].effects.shock+2;
}
}), 
//102
new OS({
text:'Электропереброс, перебрасывает кубик, шок(себе), многоразовый', 
color:'2b5ec6', 
type:0,
kusing:0, 
act_2:function(I){
createcube()
player[P(0)].effects.shock++;
}
}), 
//103
new OS({
text:'Лазер, урон 5, ожёг врагу, нужно 3, два раза ща ход', 
color:'c40006', 
type:0,
counter:0, 
condition:[0,3], 
kusing:2, 
act_2:function(I){
player[pr].effects.burned++;
damage(pr,5)
}
}), 
//104
new OS({
text:'Топор, урон=[куб]', 
color:'c40006', 
type:0,
counter:0, 
kusing:1, 
act_2:function(I){
damage(pr,cubes.number[I.choice-1])
}, 
}), 
//105
new OS({
text:'Лук, если кубик<4, то урон=кубик*2, иначе урон=кубик', 
color:'d1ac40', 
type:0,
counter:0, 
kusing:1, 
act_2:function(I){
if(cubes.number[I.choice-1]<4){
damage(pr,cubes.number[I.choice-1]*2)
}
else{
damage(pr,cubes.number[I.choice-1])
}
}, 
}), 
//106
new OS({
text:'Палаш, если кубик>2, то урон=кубик, иначе перебросить', 
color:'ca0207', 
type:0,
counter:0, 
kusing:1, 
act_2:function(I){
if(cubes.number[I.choice-1]>2){
damage(pr,cubes.number[I.choice-1])
}
else{
createcube()
}
}, 
}), 
//107
new OS({
text:'Круглый щит, щит+[куб], перебросить кубик', 
color:'e27904', 
type:0,
counter:0, 
kusing:1, 
act_2:function(I){
player[P(0)].effects.shield=player[P(0)].effects.shield+cubes.number[I.choice-1];
createcube()
}
}), 


];
for(let t=0;t<cards.length;t++){
cards[t].l=t;
}












function clone(object){
let clone_object={};
for(key in object){
clone_object[key]=object[key];
}
clone_object.clone=1;
return clone_object;
}



if(savepr==false){
kp=2;
kp=prompt('Введите количество игроков');
if(kp==''){
kp=2;
}
for(var t=0;t<kp;t++){
player[t]=plusplayer();
}
}











save()
if(player.length>2){
let players='';
for(let t=0;t<player.length;t++){
players=`${players} ${(t+1)}: ${player[t].name}
`;
}
pr=prompt(`${player[P(0)].name} выбери цель
${players}`)
if(pr-1==P(0)){
alert('Нельзя играть против себя!')
pr=undefined;
}
if(pr>player.length||pr<0||pr==null||pr==undefined) {
pr=undefined;
}
for(;pr-1==P(0)||pr>player.length||pr<0||pr==null||pr==undefined||pr=='';){
if(pr-1==P(0)){
alert('Нельзя играть против себя!')
}
pr=prompt(`${player[P(0)].name} выбери цель
${players}`)
}
pr--;
}
else{
pr=P(1);
}

for(let t=0;t<player[P(0)].ncubes;t++){
createcube()
}
for(let t=0;t<player[P(0)].cards.length;t++){
if(typeof player[P(0)].cards[t]=='number'){
createOS(matrix[t],cards[player[P(0)].cards[t]-1])
}
else{
createOS(matrix[t],player[P(0)].cards[t])
}
}

function damage(p,damage){
if(player[P(0)].effects.confusion==0){
player[p].effects.shield=player[p].effects.shield-damage+player[p].effects.protection-player[P(0)].effects.fury;
if(player[p].effects.shield<0){
player[p].health=player[p].health+player[p].effects.shield;
player[p].effects.shield=0;
}
interfacef.HP.p(p)
}
else{
player[P(0)].effects.shield=player[P(0)].effects.shield-damage+player[P(0)].effects.protection;
if(player[P(0)].effects.shield<0){
player[P(0)].health=player[P(0)].health+player[P(0)].effects.shield;
player[P(0)].effects.shield=0;
}
interfacef.HP.p(P(0))
player[P(0)].effects.confusion--;
}
}




function createOScomplicated(dopOS){
windows[0]=document.createElement('div');
windows[0].classList.add('book');
windows[0].style.ckgroundColor='#a85c1e';
let ti=0;
let tab=document.createElement('table');
for(let a=0;a<2;a++){
let tr=document.createElement('tr');
for(let b=0;b<2;b++){
m=document.createElement('td');
m.classList.add('cell');
if(ti<dopOS.length){
createOS(m, dopOS[ti])
}
tr.appendChild(m);
ti++;
}
tab.appendChild(tr);
}
windows[0].appendChild(tab);
let zak=document.createElement('div');
zak.classList.add('zak');
zak.appendChild(document.createTextNode('Закрыть'));
zak.onclick=()=>{
document.body.removeChild(windows[0])
windows[0]=undefined;
}
windows[0].appendChild(zak);
document.body.appendChild(windows[0]);
}






interfacef.HP.p(0)
interfacef.HP.p(1)


function createOS(numb,v,view){
let OS=document.createElement('div');
OS.classList.add('osn');
OS.style.backgroundColor='#'+v.color;
let object2=document.createElement('div');
OS.ob3=document.createElement('div');
object2.classList.add('osn1');
OS.ob3.classList.add('osn2');
OS.ob3.onclick=function(){
for(let t=0;t<this.childNodes.length;t++){
createcube(this.childNodes[t].k,this.childNodes[t].ef)
}
for(;this.childNodes[0]!=undefined&&this.childNodes[0]!=null;){
this.removeChild(this.childNodes[0]);
}
OS.childNodes[1].thecubes.length=0;
}
let node1_user=document.createTextNode(v.text);
object2.appendChild(node1_user);
OS.appendChild(object2);
let cell=new Image;
cell.value=0;
cell.thecubes=[];
cell.k=0;
cell.using=0;
cell.parents=OS;
if(view!=true){
cell.onclick=v.func(v.type);
}
cell.src='svg0.png';
cell.classList.add('mykyd');
cell.l=v.l;
cell.v=v;
if(v.vkusing<=0){
OS.classList.add('pr');
cell.using=v.e.kusing;
}
OS.appendChild(cell);
OS.appendChild(OS.ob3);
numb.appendChild(OS);
}
function createcube_os(parents,number,ef){
object=new Image;
object.classList.add('pk_os');
object.k=number;
if(ef==undefined){
object.src='IMG'+number+'.png';
}
else{
object.src='blindness.jpg';
object.ef=1;
}
parents.ob3.appendChild(object);
}


function createcube(number,ef){
if(player[P(0)].effects.burned==0){
player[P(0)].kcubes++;
cubes.object[cubes.object.length]=new Image;
cubes.object[cubes.object.length-1].classList.add('pk');
cubes.object[cubes.object.length-1].value=cubes.object.length-1;
cubes.object[cubes.object.length-1].onclick=function(){
player[P(0)].choice=this.value+1;
cubes.object.forEach(function(person){
person.classList.remove('vib');}) 
this.classList.add('vib');
}
if(number==undefined||number==0){
cubes.number[cubes.number.length]=rand(1,6);
}
else{
cubes.number[cubes.number.length]=number;
}
if(ef==undefined){
if(player[P(0)].effects.blindness==0){
cubes.object[cubes.number.length-1].src='IMG'+cubes.number[cubes.number.length-1]+'.png';
}
else{
cubes.object[cubes.number.length-1].src='blindness.jpg';
cubes.object[cubes.number.length-1].ef=1;
player[P(0)].effects.blindness--;
}
}
else{
cubes.object[cubes.number.length-1].src='blindness.jpg';
cubes.object[cubes.number.length-1].ef=1;
}

interfacef.cubes.appendChild(cubes.object[cubes.object.length-1]);
}
else{
player[P(0)].effects.burned--;
}
}
interfacef.next.onclick=()=>{
if(windows[0]!=undefined){
document.body.removeChild(windows[0])
windows[0]=undefined;
}
for(let t=0;t<=matrix.length-1;t++){
if(matrix[t].childNodes[0]!=undefined){
matrix[t].removeChild(matrix[t].childNodes[0]);
}
}
let kk=interfacef.cubes.childNodes.length;
for(let t=0;t<=kk-1;t++){
interfacef.cubes.removeChild(interfacef.cubes.childNodes[0]);
}
player[P(0)].kcubes=0;
cubes.number.length=0;
cubes.object.length=0;
player[P(0)].effects.burned=0;
player[P(0)].effects.blindness=0;
player[P(0)].effects.confusion=0;
player[P(0)].effects.shock=0;
player[P(0)].effects.fury=0;
if(player[P(0)].cards.length==matrix.length){
player[P(0)].cards.length=0;
player[P(0)].cards[0]=clone(cards[rand(0,cards.length-1)]);
}
else{
player[P(0)].cards[player[P(0)].cards.length]=clone(cards[rand(0,cards.length-1)]);
}
if(player[P(0)].effects.poison[0]<=step){
player[P(0)].health=player[P(0)].health-player[P(0)].effects.poison[1];
player[P(0)].effects.poison[0]=0;
player[P(0)].effects.poison[1]=0;
}
idplayer++;
if(idplayer>=player.length){
idplayer=0;
}

player[P(0)].effects.protection=0;
if(player.length>2){
let players='';
for(let t=0;t<player.length;t++){
players=`${players} ${(t+1)}: ${player[t].name}
`;
}
pr=prompt(`${player[P(0)].name} выбери цель
${players}`)
if(pr-1==P(0)){
alert('Нельзя играть против себя!')
pr=undefined;
}
if(pr>player.length||pr<0||pr==null||pr==undefined) {
pr=undefined;
}
for(;pr-1==P(0)||pr>player.length||pr<0||pr==null||pr==undefined||pr=='';){
if(pr-1==P(0)){
alert('Нельзя играть против себя!')
}
pr=prompt(`${player[P(0)].name} выбери цель
${players}`)
}
pr--;
}
else{
pr=P(1);
}
interfacef.HP.p(P(0))
interfacef.HP.p(pr)
step++;
interfacef.hod.removeChild(interfacef.hod.childNodes[0]);
let hod=document.createTextNode('Ход: '+step);
interfacef.hod.appendChild(hod)
if(player[P(0)].effects.poison[0]<=step){
player[P(0)].health=player[P(0)].health-player[P(0)].effects.poison[1];
player[P(0)].effects.poison[0]=0;
player[P(0)].effects.poison[1]=0;
}
player[P(0)].health=player[P(0)].health-player[P(0)].effects.bleeding;
player[P(0)].health=player[P(0)].health+player[P(0)].effects.regeneration;
let ku=0;
for(let t=0;t<6;t++){
if(player[P(0)].effects.failure[t]==1){
ku=t+1;
player[P(0)].effects.failure[t]=0;
break;
}
}
for(let t=0;t<player[P(0)].ncubes;t++){
createcube(ku)
}
for(let t=0;t<player[P(0)].cards.length;t++){
createOS(matrix[t],player[P(0)].cards[t])
}
}






































function pk(){
for(let t=0;t<=cubes.number.length;t++){
switch(cubes.number[t]) {
  case 1: 
     cubes.object[t].src='IMG1.png';
     break;
  case 2: 
     cubes.object[t].src='IMG2.png';
     break;
  case 3: 
     cubes.object[t].src='IMG3.png';
     break;
  case 4: 
     cubes.object[t].src='IMG4.png';
     break;
  case 5: 
     cubes.object[t].src='IMG5.png';
     break;
  case 6: 
     cubes.object[t].src='IMG6.png';
     break;
}
}
};
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




