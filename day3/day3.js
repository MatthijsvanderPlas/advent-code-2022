const text = await Deno.readTextFile('./input.txt')

const textArray = text.split('\n')

const SCORE_ARRAY = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ']

let total = 0;
textArray.map(line => {
    const middle = line.length / 2 
    const first = line.slice(0, middle).split('')
    const second = line.slice(middle).split('')
    const letter = first.filter(letter => second.includes(letter))
    const score = SCORE_ARRAY[0].indexOf(letter[0]) + 1
    total += score   
    return
})

console.log(total)

let total2 = 0

for (let i = 0; i <= textArray.length-3; i += 3){
    const slice = textArray.slice(i, i + 3)
    const first = slice[0].split('')
    const second = slice[1].split('')
    const third = slice[2].split('')
    const arrays = [first,second, third]
    const letter = arrays[0].filter(elem => arrays.every(array => array.includes(elem)))
    const score = SCORE_ARRAY[0].indexOf(letter[0]) + 1
    total2 += score
}

console.log(total2)
export { };
