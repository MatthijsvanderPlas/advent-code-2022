const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    
    const input = data.split('\n').map(data => data.split('\n'))
    const temp = input.map(dat => dat[0].replace(' ', ''))
    
    let total = 0
    temp.map(data => {
        switch (data) {
            case 'BX':
                total += 1
                break;
            
            case 'CY':
                total += 6
                break;
            
            case 'AZ':
                total += 8
                break;
            
            case 'AX':
                total += 3
                break;
            
            case 'BY':
                total += 5
                break;
            
            case 'CZ':
                total += 7
                break;
            
            case 'CX':
                total += 2
                break;
            
            case 'AY':
                total += 4
                break;
            
            case 'BZ':
                total += 9
                break;
            
            default:
                break;
        }

    } )
    console.log(total)
 
})

