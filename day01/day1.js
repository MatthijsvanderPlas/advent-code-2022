const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const dataArrayByElf = data.split('\n\n').map(data => data.split('\n'))
    const reducedArrayByElf = dataArrayByElf.map(data => data.reduce((acc, curr) => acc + Number(curr), 0))

    let total= 0
    for (let i = 0; i <= 2; i++){
        const index = reducedArrayByElf.indexOf(Math.max(...reducedArrayByElf))
        const topElf = reducedArrayByElf.splice(index, 1)
        total += Number(topElf)
    }
    console.log(total)

})
