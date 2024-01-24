const currentYear=new Date().getFullYear();//it is get the current year from new Date()

const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
console.log(newYear); //It will show when our next newyear will come with Day

const currentDate = new Date();
console.log(currentDate); // it shows the currentDate

const diff = newYear-currentDate; //Difference between currentDate and newYear date 
console.log(diff); //Javascript store the date in MS 
/* 1000ms = 1 s 
60s = 1m


*/