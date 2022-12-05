const input = await Deno.readTextFile('input.txt')

const temp = input.split('\n\n')
const separated = temp.splice(0, 1)

let array1 = ['D', 'L', 'V', 'T', 'M', 'H', 'F']
let array2 = ['H','Q','G','J','C','T','N','P']
let array3 = ['R', 'S', 'D', 'M', 'P', 'H']
let array4 = ['L','B','V','F']
let array5 = ['N','H','G','L','Q']
let array6 = ['W','B','D','G','R','M','P']
let array7 = ['G','M','N','R','C','H','L','Q']
let array8 = ['C','L','W']
let array9 = ['R', 'D', 'L', 'Q', 'J', 'Z', 'M', 'T']
const arrayOfArrays = [array1,array2,array3,array4,array5,array6,array7,array8,array9]
const instructions = temp[0].split('\n')

instructions.map(inst => {
    const nums = inst.match(/(\d[\d\.]*)/g).map(num => Number(num))
    
    const amnt = nums[0]
    const start = arrayOfArrays[nums[1]-1]
    const dest = arrayOfArrays[nums[2] -1]
    const move = start.splice(start.length - amnt ,amnt)
    dest.push(...move)
})

let result = ''

arrayOfArrays.forEach(array => result += array.pop())

console.log(result)