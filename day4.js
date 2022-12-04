const input = await Deno.readTextFile('input.txt')

const createNumberArray = ([start, end]) => {
    const result = []
    for (let i = Number(start); i <= end; i++) {
        result.push(i)
    }
    return result
}

const array = input.split('\n')

const splitArray = array.map(element => {
    const pairs = element.split(',') 
    const first = createNumberArray(pairs[0].split('-'))
    const second = createNumberArray(pairs[1].split('-'))
    return [first, second]
});

let result = 0;

splitArray.map(item => {
    const first = item[0].some(i => item[1].includes(i))
    const second = item[1].some(i => item[0].includes(i))
    if (first || second) {
        result++
    }
})
console.log(result)