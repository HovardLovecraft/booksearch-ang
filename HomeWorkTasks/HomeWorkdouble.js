const TEST_COLLECTION = [
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
  


function getNumbers(incomingString){
    let stringArr = [];
    for (i = 0; i < incomingString.length; i++){
        if (!isNaN(incomingString[i])){
            stringArr.push(parseInt(incomingString[i]));
        }
    }
    console.log(stringArr);
}

//getNumbers('n1um3ber95');



function executeForEach(incomingArr, func){
    for (i = 0; i < incomingArr.length; i++){
        func(incomingArr[i]);   
    }
}
//executeforEach([1,2,3], el => console.log(el));


function mapArray(incomingArr, func){
    let newArr = [];
    executeForEach(incomingArr, el => newArr.push(func(el)));
    console.log(newArr);
}

//mapArray([2, 5, 8], el => el + 3);


function filterArray(incomingArr, fn){
    let newArr = [];
    executeForEach(incomingArr, function(el){
        if (fn(el)){
            newArr.push(el);
        }
    })
    return newArr;
}

//filterArray([2, 5, 8], el => el > 4);



function showFormattedDate(date){
    const MONTH_ARR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth(MONTH_ARR);

    console.log(`Date: ${MONTH_ARR[month]} ${day} ${year}`);
}

//showFormattedDate(new Date('2019-01-27T01:10:00'));



function canConvertToDate(date){
    let convertible = new Date(date);
    if (!isNaN(convertible)){
        console.log(true);
    } else {
        console.log(false);
    }
}


//canConvertToDate('2016-13-18T00:00:00');
//canConvertToDate('2016-03-18T00:00:00');



function daysBetween(firstDate, secondDate){
    let firstDay = firstDate.getTime();
    let secondDay = secondDate.getTime();

    return Math.round((secondDay - firstDay) / 86400000);
}

//daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));



function getAmountOfAdultPeople(data){
    let dataArr = [];
    filterArray(data, obj => {
        let todayDate = new Date();
        let inspectedBirthday = new Date(obj[" birthday "]);
        if (daysBetween(todayDate, inspectedBirthday) < -6570) {
            dataArr.push(inspectedBirthday);
        }
    })
    console.log(dataArr);
    console.log(dataArr.length);
}

//getAmountOfAdultPeople(TEST_COLLECTION);

function keys(obj){
    let propArr = [];
    for (let prop in obj){
       if(obj.hasOwnProperty(prop)){
            propArr.push(prop);
       } 
    }
    console.log(propArr);
}

//keys({keyOne: 1, keyTwo: 2, keyThree: 3});


function values(obj){
    let valuesArr = [];
    for (let prop in obj){
        if(obj.hasOwnProperty(prop)){
            valuesArr.push(obj[prop]);
        }
        
    }
    console.log(valuesArr);
}

//values({keyOne: 1, keyTwo: 2, keyThree: 3});


function findTypes(...args){
    let dataObj = {};
    // let objectCounter = 0;
    // let numberCounter = 0;
    // let stringCounter = 0;
    //let args = [].slice.call(arguments);
    for (let i = 0; i < args.length; i++) {

        dataObj[typeof args[i]] = (dataObj[typeof args[i]] || 0) + 1

        // if (typeof args[i] === 'object'){
        //     dataObj['object'] = ++objectCounter;
        // };

        // if (typeof args[i] === 'number'){
        //     dataObj['number'] = ++numberCounter;
        // };

        // if (typeof args[i] === 'string'){
        //     dataObj['string'] = ++stringCounter;
        // };
    }
    console.log(dataObj);
}

findTypes(null, 5, 'hello', 3, 2, {}, [], '', undefined, false, true);