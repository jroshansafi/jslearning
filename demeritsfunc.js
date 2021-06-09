//speed limit = 70
//5 -> 1 point
//math.floor(1.3)
//12 points -> suspended

function checkspeed(speed){
    const speedlimit= 70;
    const kmPerSpeed= 5;

    if(speed<speedlimit+kmPerSpeed){
        return "ok";
    }
    else {
        const points= Math.floor((speed-speedlimit) / kmPerSpeed);
        if (points>=12)
        return "Licence Suspended";
    
        else 
        return points + ' point';
    }
    
}
let output= checkspeed(70);
console.log(output);