var schedule = require('node-schedule');
var date = new Date(new Date().getTime() + 1*1000*30);
var date2 = new Date('2015/1/31 21:28:00');
console.log(new Date());

console.log('j will start at:', date);
var j = schedule.scheduleJob(date, function(){
        console.log('The job j is going to end...');
});

console.log('j2 will start at:',date2);
var j2 = schedule.scheduleJob(date2, function(){
        console.log('The job j2 is going to end...');
});
