// megmondja egy szamrol, hogy prim-e vagy sem
function isPrime(number) {
    var dividers = [];
    for (var i = 0; i <= Math.abs(number); i++) {
        dividers.push(i);
    }
    // console.log(dividers);
    var count=0;
    //hány számmal oszható a dividers-ek közül az adott number
    for (var j = 0; j <= Math.abs(number); j++) {
        if (number % dividers[j] === 0) {
            count +=1;
            // console.log(j,count, number);
        }
    }
   // console.log(count);
    if (count === 2) {
        return true;
    } else {
        return false;
    }
}


/*
 Ha csak két osztója van (1 és önmaga): prím --> osztók száma === 2
 Különben: nem prím --> minden más esetben
 */