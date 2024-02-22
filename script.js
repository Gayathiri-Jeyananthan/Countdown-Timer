const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");





function updateTime() {
  const currentYear = new Date().getFullYear(); //it is get the current year from new Date()

  const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`); //It will show when our next newyear will come with Day

  const currentDate = new Date(); // it shows the currentDate

  const diff = newYear - currentDate; //Difference between currentDate and newYear date

  const d = Math.floor(diff / 1000 / 60 / 60 / 24); //Reminder vidum, ex => 1.345 enda 1

  const h = Math.floor((diff / 1000 / 60 / 60) % 24); //it shows the balance hour from the day

  const m = Math.floor((diff / 1000 / 60) % 60); //it shows the balance minutes from the hour

  const s = Math.floor((diff / 1000) % 60); //it shows the balance minutes from the hour

  
  
  days.innerHTML=d<10?"0"+d:d;                       
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;

  /* d<10?"0"+d:d;
  d<10? (d 10 aa vida kuraivu enda) d=5
  d<10?"0" (0 add pannu)          0
  d<10?"0"+d (then d add pannu)   05
  d<10?"0"+d: (illa enda)          d=45
  d<10?"0"+d:d; (d only add pannu)  45
  */


   //console.log(d+" "+h+" "+m+" "+s)
}

updateTime()

/* 
1000ms = 1 s 
60s = 1m
60m = 1hr
24hr = 1 day
*/

//We can use setInterval function to avoid refresh all the Time for show the time .
setInterval(updateTime,1000) // 1000ms kku orukka which means 1s kku orukka automatic aa refresh aakum.