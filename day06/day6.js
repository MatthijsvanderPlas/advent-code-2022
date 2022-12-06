const input = await Deno.readTextFile('input.txt')

let result = 0;

const letterArray = input.split('')

for (let i = 0; i <= letterArray.length - 14; i++) {
    const letters = [...letterArray]
    const slice = letters.splice(i, 14)
    const evalBool = slice.length === new Set(slice).size
    if (evalBool) {
        if(result !== 0) break
        result = i+14
    }
}
console.log(result)