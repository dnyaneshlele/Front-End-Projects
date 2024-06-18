 let hr=document.getElementById('Hour')
 let min=document.getElementById('Minute')
 let sec=document.getElementById('Second')

 function displayTime()
 {
   let date=new Date();

   let hh=date.getHours();
   let mm=date.getMinutes();
   let ss=date.getSeconds();


   let hrotations = 30*hh + mm/2;
   let mrotations = 6*mm;
   let srotations= 6*ss;

   hr.style.transform = `rotate(${hrotations}deg)`
   min.style.transform = `rotate(${mrotations}deg)`
   sec.style.transform = `rotate(${srotations}deg)`
 }

 setInterval(displayTime,1000)