let timerdisplay= document.querySelector('.timerdisplay')
let Stop = document.getElementById('Stop')
let Start = document.getElementById('Start')
let Reset = document.getElementById('Reset')


let msec= 0;
let mm= 0;
let sec= 0;

let timerId= null

Start.addEventListener('click',function(){
    if(timerId!==null)
        {
            clearInterval(timerId);
        }
        timerId = setInterval(starttimer,10)
})

Stop.addEventListener('click',function(){
            clearInterval(timerId);
})

Reset.addEventListener('click',function(){
            clearInterval(timerId);
            timerdisplay.innerHTML= `00:00:00`
            msec=sec=mm=0;
})




function starttimer()
{
    msec++;
    if(msec==100)
        {
            msec=0;
            sec++
            if(sec==60)
                {
                    sec=0;
                    mm++ 
                }
        }

        let msecString = msec < 10 ? `0${msec}` : msec;
        let secString = sec < 10 ? `0${sec}` : sec;
        let mmString = mm < 10 ? `0${mm}` : mm;
        
    
        timerdisplay.innerHTML = `${mmString} : ${secString} : ${msecString}`;
    
    

}
