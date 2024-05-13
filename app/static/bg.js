let bg_ctn = document.getElementById('bg-ctn')


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    // The maximum is exclusive and the minimum is inclusive
}

const emoji_range = [
  [128513, 128591], [10000, 10160], [128640, 128704]
];
// [9986, 10160] stripped range

const rows = 5, cols = 11

function bounceEmojis(immediate=false) {
    bg_ctn.remove()
    bg_ctn = document.createElement('div')
    bg_ctn.id = 'bg-ctn'
    for (let i = 0; i < rows; i++) { // rows
        let row = document.createElement('div')
        row.classList.add('emoji-row')
        
        let lim = i % 2 == 0 ? cols : Math.ceil(cols * 0.8)
        for (let j = 0; j < lim; j++) { // cols
            const distX = ((lim - 1) / 2 - j) * 1
            const distY = ((rows - 1) / 2 - i) * 0.5
            const dist = Math.sqrt(distX * distX + distY * distY)

            const style = `transform: translateZ(${Math.round(dist * 100)}px);`;

            let emoji = document.createElement('span') 
            emoji.classList.add('emoji-img')

            if (Math.floor(lim / 2) == j && Math.floor(rows / 2) == i) {
                emoji.setAttribute('style', style.concat("visibility: hidden;"))
            }
            else {
                emoji.setAttribute('style', style)
            }


            // let er = getRandomInt(0, emoji_range.length)
            let er = 1 // can adjust or make random
            let em_id = getRandomInt(emoji_range[er][0], emoji_range[er][1])
            emoji.innerHTML = "&#" + em_id + ";";
            row.appendChild(emoji);
        }
        bg_ctn.appendChild(row)
    }
    if(immediate) {
        bg_ctn.classList.add("perp-end")
    } else {
        bg_ctn.classList.add("perp-animated")
    }
    document.body.prepend(bg_ctn)
}

let spot = document.createElement('div')
spot.classList.add("blurry-gradient")
const spot_coords = [[0, 0], [100, 70], [-10, 100]]
spot_coords.forEach(el => {
    spot.setAttribute('style', `top: ${el[0]}%; left: ${el[1]}%;`)
    document.body.appendChild(spot.cloneNode())
});

if (bg_ctn != null) bounceEmojis(true)