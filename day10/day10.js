// Parse input => instructions

const input = await Deno.readTextFile('input.txt')

// go through the instructions 
// for each cycle check if we should draw # or .
// execute instructions accordingly

const instructions = input.split('\n').map(line => line.split(' '))

// starting state 

let X = 1
let cycle = 0
let pixels = ''
let nextCycleCheck = 20
let signalstrength = 0

const addPixel = (cycle, X) => {
    const spot = cycle % 40
    const isLit = Math.abs(spot - X) <= 1
    return (spot === 0 ? '\n' : '') + (isLit ? '#' : '.')
}

const runCycle = () => {
    pixels += addPixel(cycle, X)
    cycle = cycle + 1

    if (cycle === nextCycleCheck) {
        signalstrength += cycle * X
        nextCycleCheck += 40
    }
}

for (const line of instructions) {
    if (line[0] === 'noop') {
        runCycle()
    } else {
        runCycle()
        runCycle()
        X += Number(line[1])
    }
}

console.log(signalstrength)

console.log(pixels)