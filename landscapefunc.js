function isLandscape(width,height){
    if(width>height)return true;
    return false;
}
let answer= isLandscape(100,50);
console.log(answer);