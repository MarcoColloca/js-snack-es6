console.log('JS Test')

/// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\\


function generateTableObject(tableName, guestName, guestSeat){
    const Object = {
        nomeTavolo: tableName,
        nomeOspite: guestName,
        posto: guestSeat
    }
    return Object
}


/// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\\





/////////// 1° Snack 
console.log(' ')
console.log('__________________________| 1° Snack |__________________________')

const TavoloVip =  ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']





for(i = 0; i < TavoloVip.length; i++){
    const vip = TavoloVip[i]
    const posto = TavoloVip.indexOf(vip) + 1

    const ciao = generateTableObject('Tavolo Vip', vip, posto)
    console.log(ciao)
}











/////////// 2° Snack 
console.log(' ')
console.log(' ')
console.log('__________________________| 2° Snack |__________________________')
