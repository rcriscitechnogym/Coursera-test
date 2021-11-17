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


/*si usa for stile python per scorrere le proprietà*/
for (var prop in facebook) {
    console.log(prop);    
}

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

/* Function constructors*/

function Circle(radius){
    console.log(this); 
}

var myCircle = new Circle(10);   /* con il new punta alla funzione perciò il console log mi restituisce l'object Circle, ricorda che function sono object!*/
console.log(myCircle);


/*array*/

var array = new Array();
array[0]="Riccardo";
array[1]= function (name){
    console.log("Ciao" + name)
};

/*per richiamare funzione nell'array*/
array[1](array[0]); /* dico che voglio invocare funzione passando cone name= array[0] */
