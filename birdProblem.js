const birds = [1,1,2,2,4,4,4,4,5];
// const birds = [1,2,2,4,4,4,4,5];
// const birds = [2,2,2,2,4,4,4,4,5];

const birdsDict = {};

// updating birdsDict with key,value  from birds array
for(const i of birds){
    if(!birdsDict[i]){
        birdsDict[i] = 1;
    }
    else{
        birdsDict[i]=birdsDict[i]+1
    }
}

// initial value of maximumBird and minimumBird
let maximumBird = parseInt(birds[0])
let minimumBird = parseInt(birds[0])

// evaluating the maximumBird and minimumBird
for(const key in birdsDict){
    if(birdsDict[key]<birdsDict[minimumBird] && birdsDict[key]!=birdsDict[minimumBird]){
        minimumBird=key
        continue
    }
    else if(birdsDict[key]>birdsDict[maximumBird] && birdsDict[key]!=birdsDict[maximumBird]){
        maximumBird=key
        continue
    }
}
// output/result of the input 
console.log([parseInt(maximumBird),parseInt(minimumBird)]);