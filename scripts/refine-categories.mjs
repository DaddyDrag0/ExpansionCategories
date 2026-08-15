import fs from 'node:fs'

const path='index.html'
let s=fs.readFileSync(path,'utf8')
function swap(before,after,label){const n=s.split(before).length-1;if(n!==1)throw new Error(`${label}: expected 1 match, found ${n}`);s=s.replace(before,after)}

swap(
"    'Sacred Judgment','Railgun','Origin','Sudden Demise','Laser Gun','Horned Attack','Long Reach','Bind Fate','Decapitate','Insatiable','Haste','The World','Accelerate','Berserk','First Progenitor','Speedy Progression','Outshine','Stardust Driver','Quick Strike','First Blood','Fight Dirty','Deadly Ambush','Azure Dragon Wrath','Northern Winds','Heart Hunter','Stampede','Behavioral Therapy','Dagger Storm','Rapid Blows','Firepower','Chainsaw','Creep'",
"    'Sacred Judgment','Railgun','Origin','Sudden Demise','Laser Gun','Horned Attack','Long Reach','Bind Fate','Decapitate','Insatiable','Haste','The World','Accelerate','Berserk','First Progenitor','Speedy Progression','Outshine','Stardust Driver','Quick Strike','First Blood','Fight Dirty','Deadly Ambush','Azure Dragon Wrath','Northern Winds','Heart Hunter','Stampede','Behavioral Therapy','Creep'",
'speedrun list')

swap(
"    'Influence','Tonic','Art of War','Destiny Sight','Heart Legacy','Blessing','Happy Family','We Want YOU','Fusion... HA!','Perfect Sacrifice','Better Days','Housewife\\'s Blessing','Eternal Devotion','Never Forgotten','Mother of Dragons','Safeguarding','Final Stand','Protection of Gods','Absolute Sovereignty','Lotus Sutra','Water Shield of Xuanwu','Naughty List','Three Gifts','Luminescent Veil','Creation and Restoration','Order of the Cosmos','Gehenna','Divine Barrier'",
"    'Influence','Tonic','Art of War','Destiny Sight','Heart Legacy','Blessing','Happy Family','We Want YOU','Fusion... HA!','Perfect Sacrifice','Better Days','Housewife\\'s Blessing','Eternal Devotion','Never Forgotten','Draconian','Mother of Dragons','Safeguarding','Final Stand','Protection of Gods','Absolute Sovereignty','Lotus Sutra','Water Shield of Xuanwu','Naughty List','Three Gifts','Luminescent Veil','Creation and Restoration','Order of the Cosmos','Gehenna','Aura Farm','Mr. Piccolo','Meow','Nightmare Melody','Creep'",
'support list')

swap(
"    const offensive=/(deal|damage|attack|attacker|counter|steal|reduce enemy|lower enemy|enemy loses|opponent loses|poison|burn|bleed|freeze|frostbite|stun|confusion|double atk|gain .*atk|gain .*damage|boost damage|boost stats|increase damage|increase stats|kill|defeat|doom|death|assassinate|lifesteal|current hp|max hp|hit chance)/i.test(t);",
"    const offensive=/(deal(?:s|ing)?[^.]*damage|attack(?:s|ing)? (?:the|enemy|again|on entry|twice|alongside)|attacker takes damage|counterattack|reflect|steal[^.]*enemy|reduce opponent|lower enemy|cut target|enemy loses|opponent loses|poison|burn|bleed|freeze target|frostbite|stun|confusion|double atk|gain[^.]*atk|gain[^.]*damage|boost damage|boost stats|increase damage|increase stats|attacks? convert|kill|defeat|doom|assassinate|lifesteal|current hp|max hp damage|instant(?:ly)? defeated)/i.test(t);",
'attack rule')

fs.writeFileSync(path,s)
console.log('Refined Speedrun, Support, and Attack category rules.')
