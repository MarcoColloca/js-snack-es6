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




const vipTableDOMElement = document.getElementById('vip-table')

console.dir(vipTableDOMElement)

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

    vipTableDOMElement.innerHTML += 
    `
    <tr>
        <th scope="row"> Tavolo Vip</th>
        <td>${vip}</td>
        <td>${posto}</td>
    </tr>
    ` 
}
console.log(TavoloVipStampa)










/////////// 2° Snack 
console.log(' ')
console.log(' ')
console.log('__________________________| 2° Snack |__________________________')



const list1FirstColDOMElement = document.querySelector('.student-list #first-col')
const list1SecondColDOMElement = document.querySelector('.student-list #second-col')
const list1ThirdColDOMElement = document.querySelector('.student-list #third-col')


const list2FirstColDOMElement = document.querySelector('.student-list-2 #first-col')
const list2SecondColDOMElement = document.querySelector('.student-list-2 #second-col')
const list2ThirdColDOMElement = document.querySelector('.student-list-2 #third-col')

const list3FirstColDOMElement = document.querySelector('.student-list-3 #first-col')
const list3SecondColDOMElement = document.querySelector('.student-list-3 #second-col')
const list3ThirdColDOMElement = document.querySelector('.student-list-3 #third-col')



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
        list3FirstColDOMElement.innerHTML += `<p>${studentId}</p>`
        list3SecondColDOMElement.innerHTML += `<p>${studentName}</p>`
        list3ThirdColDOMElement.innerHTML += `<p>${studentGrades}</p>`
    }
    
    if (studenti[i].Grades > 70){
        studentMinGrade.push(studentInfo)
        list2FirstColDOMElement.innerHTML += `<p>${studentId}</p>`
        list2SecondColDOMElement.innerHTML += `<p>${studentName}</p>`
        list2ThirdColDOMElement.innerHTML += `<p>${studentGrades}</p>`
    }
    
    list1FirstColDOMElement.innerHTML += `<p>${studentId}</p>`
    list1SecondColDOMElement.innerHTML += `<p>${studentName}</p>`
    list1ThirdColDOMElement.innerHTML += `<p>${studentGrades}</p>`
}

console.log(studentsNames)
console.log(studentMinGrade)
console.log(studentMinGradeId)


