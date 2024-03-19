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

// funzione per la creazione dell'oggetto contenente i dati relativi agli studenti
function generateStudentList(studentId, studentName, studentGrades ){
    const Object = {
        Id: studentId,
        Name: studentName,
        Grades: studentGrades
    }
    return Object
}

/// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\\





/////////// 1° Snack 
console.log(' ')
console.log('__________________________| 1° Snack |__________________________')


// Array di partenza
const TavoloVip =  ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
console.log('Array Tavolo Vip:')
console.log(TavoloVip)

console.log(' ')

console.log('Array Tavolo Vip per la Stampa:')
const TavoloVipStampa = [];

// ciclo for che consete dato l'array, di stampare un oggetto contenente i dati richiesti
for(i = 0; i < TavoloVip.length; i++){
    const vip = TavoloVip[i]
    const posto = TavoloVip.indexOf(vip) + 1

    const vipInfo = generateTableObject('Tavolo Vip', vip, posto)
    TavoloVipStampa.push(vipInfo)
}
console.log(TavoloVipStampa)










/////////// 2° Snack 
console.log(' ')
console.log(' ')
console.log('__________________________| 2° Snack |__________________________')


const studentListDOMElement = document.querySelector('.student-list')



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

// Array con i nomi degli studenti in maiuscolo
const studentsNames = [];

// Array con la lista degli studenti che hanno un voto minimo
const studentMinGrade = [];

// Array con la lista degli studenti che hanno sia un voto che un Id minimo
const studentMinGradeId = [];


// ciclo for che permette la creazione degli array (navigando i dati dell'Array iniziale)
for(let i = 0; i < studenti.length; i++){

    const studentId = studenti[i].Id
    const studentName = studenti[i].Name.toUpperCase()
    const studentGrades = studenti[i].Grades

    
    const studentInfo = generateStudentList(studentId, studentName, studentGrades)

    studentsNames.push(studentInfo)
    if(studenti[i].Grades > 70 && studenti[i].Id > 120){
        studentMinGradeId.push(studentInfo)
    }else if (studenti[i].Grades > 70){
        studentMinGrade.push(studentInfo)
    }
    
}

console.log(studentsNames)
console.log(studentMinGrade)
console.log(studentMinGradeId)


