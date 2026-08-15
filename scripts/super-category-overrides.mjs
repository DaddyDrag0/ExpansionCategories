import fs from 'node:fs'

const path='index.html'
let html=fs.readFileSync(path,'utf8')

const oldBlock=`  function categoriesFor(card){
    const out=new Set(),t=textFor(card),ability=card.ability||'';
    if(SPEEDRUN_ABILITIES.has(ability))out.add('Speedrun / AOE');
    if(SUPPORT_ABILITIES.has(ability))out.add('Support');
    if(SUPER_ATTACK.has(card.name))out.add('SUPER GOOD Attack');
    if(SUPER_SUPPORT.has(card.name))out.add('SUPER GOOD Support');
    if(CHEESE.has(card.name))out.add('Cheese');`

const newBlock=`  function categoriesFor(card){
    const out=new Set(),t=textFor(card),ability=card.ability||'';
    const isSuperAttack=SUPER_ATTACK.has(card.name);
    const isSuperSupport=SUPER_SUPPORT.has(card.name);
    if(SPEEDRUN_ABILITIES.has(ability))out.add('Speedrun / AOE');
    if(SUPPORT_ABILITIES.has(ability) && !isSuperSupport)out.add('Support');
    if(isSuperAttack)out.add('SUPER GOOD Attack');
    if(isSuperSupport)out.add('SUPER GOOD Support');
    if(CHEESE.has(card.name))out.add('Cheese');`

if(!html.includes(oldBlock))throw new Error('categoriesFor header block not found')
html=html.replace(oldBlock,newBlock)

const oldAttack=`    if(offensive&&!supportOnly)out.add('Attack');`
const newAttack=`    if(offensive&&!supportOnly&&!isSuperAttack)out.add('Attack');`
if(!html.includes(oldAttack))throw new Error('Attack category line not found')
html=html.replace(oldAttack,newAttack)

fs.writeFileSync(path,html)
console.log('Super categories now override normal Support/Attack.')
