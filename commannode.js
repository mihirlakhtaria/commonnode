


/* 
This is updated through GITHUB!!!!!


const file_buffer = require('fs');
const os_buffer = require('os');

var mydata = os_buffer.userInfo();

file_buffer.appendFile('myfile.txt',JSON.stringify(mydata),function(err){
    if(err){console.log('error occured');}
    else{console.log('work done!');}

});
var reference = require ('./manipulator');
var _ = require('lodash');

var result=reference.sum(50,49);
console.log(result);
console.log(_.isNumber(result));




A *****DUMB***** try to create notes application in Nodejs, since it does not wait for input,
it goes into infinite loop!!!!!


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var _ = require('lodash');
var myaray = [];

var input='';
var buffer;
console.log('---------------- My Note ----------------');
console.log('Enter your operations as follows:');
console.log(`'add <data>' to add new data to array`);
console.log(`'remove <index>' to remove data from that index of array`);
console.log(`'list' to show data of array`);
console.log(`'exit' to close the program`);


do{
    buffer=[];
    rl.question('Enter your choice', (answer) => {
        input = answer;
        rl.close();
      });

      if(input=='exit'){break;}
      buffer = input.split(' ');

switch(buffer.length){
    
      
    case 3:
    {
    if(buffer[0]=='list')
    {
        if(myaray.length == 0){
            console.log('No elements till now!');
        }
        else{
            console.log('Data:');
            for(let  i=0;i<myaray.length;i++){
                console.log(`${i+1}. ${myaray[i]} `);
            }
        }
        
    }
    else{
        console.log(`You can use only 'list' command in single argument`);
    }
    break;
    }

    case 4:
    {

        if(buffer[0]=='add'){
            myaray.push(process.argv[3]);
        }

        if(buffer[0]=='remove' && _.isNumber(buffer[1])){
            myaray.pop(buffer[1]);
        }
        else{
            console.log(`You can use only 'add' and 'remove' commands with double argument`);
        }

    break;
    }


    default:
    console.log('please enter valid number of inputs!');
}
}while(1);


---------------------- Default values of 0,1 index in command line argument ---------------------------

console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);




const yargs = require('yargs');

var argv = yargs.argv;
let temp = JSON.stringify(argv);

console.log(JSON.parse(temp));




const fs = require('fs');

var mydata={
    name:'Mihir',
    age:21,
    city:'Ahmedabad'
}
fs.writeFile('datadata.json',JSON.stringify(mydata),function(){
    if(err){console.log('Error in writing');}
    else{console.log('Write work done!');}
});

fs.readFile('datadata.json',function(err,data){
    if(err){console.log('Error in reading');}
    else{console.log(JSON.parse(data).name);}
});



************ use of map and filter ********************
mydata = [1,2,3,4,5,6,7,8,9,10,11,12];
var  filtered = mydata.filter((temp)=>temp%2===0);
console.log(filtered);

mydata = [1,2,3,4,5,6,7,8,9,10,11,12];
var  mapped = mydata.map((temp)=>temp%2===0);
console.log(mapped);


**************** Implementation of notes with NodeJS ****************
Status:done!
 

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');
var note_class = require('./note_class');

var argv = yargs.argv;
var storage = [];
//Get data in local array
storage =  JSON.parse(fs.readFileSync('datadata.json'));


//For adding new note
if(argv.title && argv.data && argv._[0]==='add' && argv._.length===1 ){

note_class.title = argv.title;
note_class.data = argv.data;

var temparray = storage.filter((data)=> data.title === note_class.title );

    if(temparray.length !== 0 ){
        console.log('Title already exist!');
    }
    else{
        storage.push(note_class);
        fs.writeFile('datadata.json',JSON.stringify(storage),(err)=>{
        if(err){console.log('Had some issues with Insertion of data');}
        console.log('Inserted');
        });
    }

}

//For listing all notes
else if( argv._[0]==='list' && argv._.length===1 ){
    if(storage.length ===0 ){
        console.log('No notes are there now');
    }
    else{
        console.log('Listing Notes (Index,Title,Data Format):');
        storage.map((each,index)=>console.log(`${index} ${each.title} ${each.data}`));

    }
}

//for updation of any note
else if(argv.title && argv.data && argv._[0]==='update' && argv._.length === 2 && _.isNumber(argv._[1]) ){

    if(argv._[1] > (storage.length-1)){
        console.log('Index does not exist');
    }
    else{
        storage[argv._[1]].title = argv.title;
        storage[argv._[1]].data = argv.data;
        fs.writeFile('datadata.json',JSON.stringify(storage),(err)=>{
        if(err){console.log('Had some issues with Insertion of data');}
        console.log('Updated');
        });
    }
}


//for deletion of any note
else if ( argv._[0]==='delete' && _.isNumber(argv._[1])){
  
    if(argv._[1] > (storage.length-1)){
        console.log('Index does not exist');
    }
    else{
    storage.pop(argv._[1]);
    fs.writeFile('datadata.json',JSON.stringify(storage),(err)=>{
    if(err){    
        console.log('Had some issues with Insertion of data');
        }
    else{
        console.log('Deleted');
        }
        });
    }
    }


//to get help in operations
else if (argv._[0]==='options'){
    console.log(`
    type 'node provider add --title="<title name>" --data="<data>"' to add new note
    type 'node provider delete <index>' to delete note
    type 'node provider list' to show list of all notes

    `);
}

//to discard any unintended operation and inputs
else{
    debugger;
    console.log(`you have entered wrong input, type 'node provider options' to get operaion details `);
}


************* Unexpected behaviour of arrow function ****************

var tname = 'NAME';

var x = {
    name:'Mihir',
    fun:()=>{console.log(`${name}`);}
};

x.fun();



function myfun1(){console.log(arguments);}

var myfun2 = () => {console.log(arguments);}

myfun1(1,2,3,4,5);
myfun2(1,2,3,4,5);


***************  Callbacks and event loops  ******************
myfun = ()=>{console.log('just normal arrow function')};
myfun();
console.log('Starting');

setTimeout(()=>{
    console.log('Came out from zero second');
},0);

setTimeout(() => {
    console.log('Came out from two second');  
}, 2000);

console.log('Ending');


/-/-/-/-/-/-/-/-/ Callbacks /-/-/-/-/-/-/-/-/-/
var myfun =  (data,callback)=>{
    var mydata = {
        
        age : data,
        name : 'NAME HERE'
    };
    callback(mydata);
};


var myfunobj = myfun(21,(dummy)=>{console.log(`${JSON.stringify(dummy)} received...`);});


***************** getting data from map API, with error handling **********************
Status: Done!
// use this username-password for  mapquest: o10953128@nwytg.net

//Weather: goweya@mymailbest.com  ----- call ::: https://api.darksky.net/forecast/37.8267,-122.4233
// Site: http://www.mapquestapi.com/geocoding/v1/address?key=&location=1301%20lombard%20street%20philadelphia

const request = require('request');
const yargs = require('yargs');
console.log('Getting Geo co-ordinates for location...\n');

var argv = yargs.options(
    {
        a: {
            demand : true,
            alias : 'address',
            describe : 'address to fetch the weather data',
            string:true
        }
    }
).help().alias('help','h').argv;
var address = encodeURIComponent(argv.address);
var lat;
var long;
request (
    {
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=&location=${address}`,
        json:true
    }    
    ,(error,responce,body)=>{
        if(error || body.results[0].locations[0].latLng.lat == 39.390897){
            console.log('Error getting data,enter correct spelling for location');}
        else{
            // console.log(`Lattitude: ${body.results[0].locations[0].latLng.lat}`);
            // console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
            lat = body.results[0].locations[0].latLng.lat;
            long = body.results[0].locations[0].latLng.lng;
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log(`Co-ordinates Received: Lattitude: ${lat}, Longitude: ${long}\n`);
            printdata();


        }
});



function printdata(){

    
    console.log(`Getting the temperature details \n\n`);
request (
    {
        url: `https://api.darksky.net/forecast//${lat},${long}`,
        json:true
    }    
    ,(error,responce,body)=>{
        if(error){console.log('Error getting data');}
        else{
            console.log(`Current Temperature in Celsius: ${Number(((body.currently.temperature-32)*(5/9)).toFixed(2))}\n`);
            console.log(`Summary for the day: ${body.hourly.summary}`);
        }
});
}
*/

