const testData = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      " birthday ": '2016-03-18T00:00:00',
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      " birthday ": '1991-02-11T00:00:00',
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      " birthday ": '1984-04-17T00:00:00',
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      " birthday ": '1994-04-17T00:00:00',
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ];
  


function toExtractNumbers(randomString){
    let numbers = [];
    for (i = 0; i < randomString.length; i++){
        if (!isNaN(+randomString[i])){
            numbers.push(randomString[i]);
        } 
    }
      console.log(numbers);
    }
// toExtractNumbers('12d3asdasd1234');


function executeForEach(incomingArr, fn){
    if (typeof fn === 'function'){
        incomingArr.forEach(value => {fn(value);})
    }
}
//executeForEach([1,2,3], el => { console.log(el) }) 


function mapArray(incomingArr, fn){
    let resultArr = [];
    executeForEach(incomingArr, el => {resultArr.push(fn(el))})

        // for (i = 0; i < incomingArr.length; i++){
        //     resultArr.push(fn(incomingArr[i]));
        // }
    console.log(resultArr);
}
// mapArray([2,5,8], el => el + 3);


function filterArray(incomingArr, fn){
    let resultArr = [];
    executeForEach(incomingArr, function(el){
        if (fn(el)){
            resultArr.push(el);
        }
    })
    console.log (resultArr);
}

filterArray([2,5,8,11], el => el > 5);


function showFormattedDate(date){
    const MONTHNAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

console.log(`Date: ${MONTHNAMES[monthIndex]} ${day} ${year}`)
}

//showFormattedDate(new Date('2019-01-27T01:10:00'));

function canConvertToDate(date){
    
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    
    if (day || monthIndex || year === true){
        return true;
    } else {
        return false;
    }
}

//canConvertToDate('2019-13-27T01:10:00');

function daysBetween(firstDate, secondDate){
    let firstDay = firstDate.getTime();
    let secondDay = secondDate.getTime();
    return Math.round((secondDay - firstDay) / 86400000);
    //console.log(Math.round((secondDay - firstDay) / 86400000));
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));


// function getAmountOfAdultPeople(data) {
//     const finalArr = [];

//     filterArray(data, function(obj){
//         let preArr = [];
//         let dateArr = [];
//         let currentDate = new Date();
//         let objAge = obj[" birthday "];
//         preArr.push(objAge);
        
//         for (let i = 0; i < preArr.length; i++){
//             dateArr.push(new Date(preArr[i]));
//             for (n = 0; n < dateArr.length; n++){
//                 if (daysBetween(currentDate, dateArr[n]) < -6574){
//                     finalArr.push(dateArr[n]);
//                 }
//             }
//         }
//     })
    
//     console.log(finalArr);
//     console.log(finalArr.length); 
// }

//getAmountOfAdultPeople(testData);

function values(obj){
    valuesArr = [];
    
    for (let prop in obj) {
        valuesArr.push(obj[prop])
    }

    console.log(valuesArr);
}

//values({keyOne: 1, keyTwo: 2, keyThree: 3} );

function keys(obj){
    valuesArr = [];
    
    for (let prop in obj) {
        valuesArr.push(prop)
    }

    console.log(valuesArr);
}

//keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function getAmountOfAdultPeople(data) {
    const finalArr = [];

    filterArray(data, function(obj){
        let currentDate = new Date();
        let objAge = new Date(obj[" birthday "]);
        if (daysBetween(currentDate, objAge) < -6574){
            finalArr.push(objAge)
        }   
    })
    
    //console.log(finalArr);
    console.log(finalArr.length); 
}

getAmountOfAdultPeople(testData);