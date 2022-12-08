const input = await Deno.readTextFile('input.txt')

const temp = input.split('\n')
const ROWS = temp.length
const gridArray = temp.map(row => row.split(''))
const COLS = gridArray[0].length

let result = []

function checkLeft(x, y) {
    const row = gridArray[y]
    let result = []
    for (let i = (x - 1); i >= 0; i--){
        if (row[x] > row[i]) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result.filter(d => d === false).length <= 0 
}
 
function checkRight(x, y) { 
    const row = gridArray[y]
    let result = []
    for (let i = (x + 1); i < COLS; i++){
        if (row[x] > row[i]) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result.filter(d => d === false).length <= 0 
}

function checkTop(x, y) {
    let result = []
    for (let i = (y-1); i >= 0; i--){
        if (gridArray[y][x] > gridArray[i][x]) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result.filter(x => x === false).length <= 0
}
 
function checkBottom(x, y) {
    let result = []
    for (let i = (y+1); i < COLS; i++) {
        if (gridArray[y][x] > gridArray[i][x]) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result.filter(d => d === false).length <= 0
}


for (let y = 0; y < ROWS; y++){
    for (let x = 0; x < COLS; x++){
        if (x === 0 || y === 0 || x === COLS - 1 || y === ROWS - 1) {
            result.push({coord: [x,y], visible: true})
        } else if (
            checkLeft(x, y) ||
            checkRight(x, y) ||
            checkTop(x, y) ||
            checkBottom(x, y)
        ) {
            result.push({coord: [x,y], visible: true})
        } else {
            result.push({coord: [x,y], visible: false})
        }
    }
} 

console.log(result.map(item => item.visible).filter(val => val === true).length)

function visLeft(x, y) {
    if(x === 0) return 1
    const row = gridArray[y]
    let vis = 0
    for (let i = (x - 1); i >= 0; i--){
        if (row[x] > row[i]) {
            vis++
        } else {
            vis++
            return vis
        }
    }
    return vis
}

function visRight(x, y) { 
    if(x === COLS-1) return 1
    const row = gridArray[y]
    let vis = 0
    for (let i = (x + 1); i < COLS; i++){
        if (row[x] > row[i]) {
            vis++ 
        } else {
            vis++ 
            return vis
        }
    }
    return vis
}

function visTop(x, y) {
    if(y === 0) return 1
    let vis = 0
    for (let i = (y-1); i >= 0; i--){
        if (gridArray[y][x] > gridArray[i][x]) {
            vis++
        } else {
            vis++
            return vis
        }
    }
    return vis
}
 
function visBottom(x, y) {
    if(y === ROWS-1) return 1
    let vis = 0
    for (let i = (y+1); i < COLS; i++) {
        if (gridArray[y][x] > gridArray[i][x]) {
            vis++
        } else {
            vis++ 
            return vis
        }
    }
    return vis
}

const result2 = []

for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
        const left = visLeft(x,y)
        const right = visRight(x,y)
        const top = visTop(x,y)
        const bottom = visBottom(x,y)

        let total = left * right * top * bottom
        result2.push({coord: [x,y], score: total})
    }
}

console.log(Math.max(...result2.map(x => x.score)))