// const birds = [1,1,2,2,4,4,4,4,5];
// const birds = [1,2,2,4,4,4,4,5];
// const birds = [2,2,2,2,4,4,4,4,5];

const birdsDict = {};

for(const i of birds){
    if(!birdsDict[i]){
        birdsDict[i] = 1;
    }
    else{
        birdsDict[i]=birdsDict[i]+1
    }
}
// console.log(birdsDict)

let maximumBird = parseInt(birds[0])
let minimumBird = parseInt(birds[0])

// console.log('initial',[maximumBird,minimumBird]);

for(const key in birdsDict){
    // console.log('input key',key)
    if(birdsDict[key]<birdsDict[minimumBird] && birdsDict[key]!=birdsDict[minimumBird]){
        // console.log('--------------in minimum---------------')
        // console.log('min',`key-> ${key}`,`value->${birdsDict[key]}`,minimumBird)
        minimumBird=key
        // console.log('running',[parseInt(maximumBird),parseInt(minimumBird)]);
        continue
    }
    else if(birdsDict[key]>birdsDict[maximumBird] && birdsDict[key]!=birdsDict[maximumBird]){
        // console.log('--------------in maximum---------------')
        // console.log('max',`key-> ${key}`,`value->${birdsDict[key]}`,maximumBird)
        maximumBird=key
        // console.log('running',[parseInt(maximumBird),parseInt(minimumBird)]);
        continue
    }
}

// console.log('final',[parseInt(maximumBird),parseInt(minimumBird)]);
console.log([parseInt(maximumBird),parseInt(minimumBird)]);