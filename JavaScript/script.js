var x ="Hello world"

/*create an object*/

var company = new Object();
company.name="Facebook";
company.ceo= new Object();  /*bisogna definire nuovo object se variabile ha più campi sotto*/
company.ceo.firstName ="Mark";
company.ceo.lastName="Zuckenberg";

/*miglior modo di dichiararlo è con object literaly notation (tipo json)*/

var facebook = {
    name: "facebook",
    ceo: {
        firstName:"Mark",
        facolor:"blue"
    },
    $stock: 110
};

/* function sono object, puoi assegnarli proprietà!*/

function multiply(x,y) {
    return x+y;
}

multiply.version ="v.1.0.0";
console.log(mutiply.version);

/*Function FACTORY */ /*Non chiaro */

function makeMultiplier(multiplier){
    var myFunc = function (x) {
        return multiplier*x;
    };
    return myFunc;
}

var raddoppia= makeMultiplier(2);
console.log(raddoppia(25));