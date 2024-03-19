console.log('JS Test')

/// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\\

// funzione per la creazione dell'oggetto contenente i dati relativi al vip
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


// Array di partenza
const TavoloVip =  ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']


// ciclo for che consete dato l'array, di stampare un oggetto contenente i dati richiesti
for(i = 0; i < TavoloVip.length; i++){
    const vip = TavoloVip[i]
    const posto = TavoloVip.indexOf(vip) + 1

    const vipInfo = generateTableObject('Tavolo Vip', vip, posto)
    console.log(vipInfo)
}











/////////// 2° Snack 
console.log(' ')
console.log(' ')
console.log('__________________________| 2° Snack |__________________________')


// Array degli studenti
const studenti = [
    {
        Id: 213,
        Name: 'Marco della Rovere',
        Grades: 78
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50
    },
    {
        Id: 120,
        Name: 'Francesca da Polenta',
        Grades: 84
    },
]


const studentsNames = [];

const studentMinGrade = [];

const studentMinGradeId = [];



for(i = 0; i < studenti.length; i++){

    const studentName = studenti[i].Name.toUpperCase()
    studentsNames.push(studentName)

    if(studenti[i].Grades > 70){
        studentMinGrade.push(studenti[i])
    }
    
    if ((studenti[i].Grades > 70 && studenti[i].Id > 120)){
        studentMinGradeId.push(studenti[i])
    }
}

console.log(studentsNames)
console.log(studentMinGrade)
console.log(studentMinGradeId)


const studentListDOMElement = document.querySelector('.student-list')
