const input = await Deno.readTextFile('input.txt')

// commands
// directories
// files with a size

// create an object with where the key is the directory and the value is the size of the files inside (start at 0) also has a parent value.
// file sizes get added to the current directory and the parent directory

// looping with a currentDirectory


const commandArray = input.split('\n')

const result = []

function increment(dir, size) {
    let target = result.filter(item => item.dir === dir)
    target[0].val += size
    if (target[0].par) {
        increment(target[0].par, size)
    }
}


let currentDirectory = ''

commandArray.map((item, index) => {
    if (item === '$ cd /') {
        currentDirectory = '/'
        result.push({dir: currentDirectory, val: 0 })
    } else if (item[0] === 'd') {
        let child = currentDirectory === '/' ? currentDirectory.concat(item.slice(4)) : currentDirectory.concat('/' + item.slice(4))
        if (!result.includes(child)) {
            result.push({dir: child, val: 0, par: currentDirectory})
        }
    } else if (item === '$ cd ..') {
        
        const newParent = result.filter(item => item.dir === currentDirectory).map(item => item.par)
        currentDirectory = newParent[0]

    } else if (/(\$ cd )[a-z]/.test(item)) {
        if (currentDirectory === '/') {
            currentDirectory += item.slice(5) 
        } else {
            currentDirectory += '/' + item.slice(5)
        }
    }
    else if (item === '$ ls') {

    } else {
        let size = Number(item.replace(/[a-z]+.?[a-z]+/, '').replace(/[a-z]+$/, ''))
        increment(currentDirectory, size)
    }
})

// console.log(result)

// console.log(result.filter(item => item.val < 100000).map(item => item.val).reduce((acc, curr) => acc + curr, 0))

const TOTAL = 70000000
const NEEDED = 30000000
// 70000000
// 42805968
const used = result[0].val

const minDeleteSize = used - (TOTAL - NEEDED)
const directoryArray = result.filter(item => item.val > minDeleteSize)

let minSize = 0;
directoryArray.map(item => {
    if(minSize === 0) {
        minSize = item.val
    } else if (item.val < minSize) {
        minSize = item.val
    } else {
        return
    }
})

console.log(minSize)