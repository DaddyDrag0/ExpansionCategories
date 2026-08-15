import fs from 'node:fs'

const url='https://raw.githubusercontent.com/DaddyDrag0/CardRngExpansionDepths/main/src/data/thumbnails.json'
const response=await fetch(url,{headers:{'user-agent':'ExpansionCategories'}})
if(!response.ok)throw new Error(`Thumbnail source failed: ${response.status}`)
const thumbs=await response.json()
fs.writeFileSync('thumbnails.json',JSON.stringify(thumbs,null,2)+'\n')
console.log(`Imported ${Object.keys(thumbs).length} card/aura thumbnails.`)
