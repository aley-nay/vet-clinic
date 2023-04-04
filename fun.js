 /*i created package.json with
 npm --version
 npm install express
 npm init -y
 in terminal
 
 then added "type": "module"
 in package.json*/


import patients_dogs from './db/dog_logs.js';


/*
//How many animals are old?                                      # yaşlı hayvanlar
let list = patients_dogs.filter((elem) => {
    return elem.age >= 4;
});
console.log("old", list);
*/






///////////////////////////////////////////////////////////////////////////////////////////////////


/*

//How many patient has same disease?                             # aynı hastalıklı hastalar - static  
let list = patients_dogs.filter((elem) => {
    return elem.disease == "vomit";
});
console.log("same disease", list);



//How many patient has same disease?                            # with function - dynamic
function filtre(diseaseX){
    let list=patients_dogs.filter((elem)=>{
        return (elem.disease == diseaseX);

    });
    return list;
}
console.log(filtre("vomit"));

*/





///////////////////////////////////////////////////////////////////////////////////////////////////


/*

//How many patients_dogs_dogs in the same appointment date?                # aynı görüşme tarihli hastalar
let list = patients_dogs.filter((elem) => {
    return elem.appointment == "31.03.2023";
});
console.log("same appointment date", list);



//How many patients_dogs_dogs in the same appointment date?               # with function - dynamic
function filtre(appointmentX){
    let list=patients_dogs.filter((elem)=>{
        return (elem.appointment == appointmentX);

    });
    return list;
}
console.log(filtre("31.03.2023"));

*/


///////////////////////////////////////////////////////////////////////////////////////////////////



/*

//How many animals does Sophia have?                            # sophia'nın hayvanları
let list = patients_dogs.filter((elem) => {
    return elem.owner == "Sophia Garcia Miller";
});
console.log("Sophia's animals", list);




//How many animals does Sophia have?                          # with function - dynamic
function filtre(ownerX){
    let list=patients_dogs.filter((elem)=>{
        return (elem.owner == ownerX);

    });
    return list;
}
console.log(filtre("Sophia Garcia Miller"));

*/



///////////////////////////////////////////////////////////////////////////////////////////////////

/*


//age-weight chart for dogs                                     # yaş ve kiloya göre obez-normal köpekler
list = patients_dogs.filter((elem) => {

    if(elem.kind == "dog"){
        if(elem.weight <= 8 && elem.age <= 1){
            console.log("normal"+elem.name); 
            return elem.name;
        }
        else if(elem.weight <= 15 && elem.age <= 2){
            console.log("normal"+elem.name); 
            return elem.name;
        }
        else if(elem.weight <= 25 && elem.age <= 3){
            console.log("normal"+elem.name); 
            return elem.name;
        }
        else if(elem.weight <= 35 && elem.age <= 4){
            console.log("normal"+elem.name); 
            return elem.name;
        }
        else if(elem.weight <= 45 && elem.age <= 5){
            console.log("normal"+elem.name);  
            return elem.name;
        }
        else{
            console.log("şişkooooo"+elem.name);
        }
        
    }else{
        console.log("köpek değil");
    }
    
});
console.log(list);


//age-weight chart for dogs                                     # dynamic
function filtre(ageX,weightX){                                      
    let list=patients_dogs.filter((elem)=>{
        if(elem.age == ageX, elem.weight == weightX){

            if(elem.weight <= 8 && elem.age <= 1){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 15 && elem.age <= 2){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 25 && elem.age <= 3){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 35 && elem.age <= 4){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 45 && elem.age <= 5){
                console.log("normal"+elem.name);  
                return elem.name;
            }
            else{
                console.log("şişkooooo"+elem.name);
            }
        }
        
        
    });
    return list;
}
console.log(filtre(2,13));
*/




//age-weight chart for dogs by name                                    # dynamic
function filtre(nameX){                                      
    let list=patients_dogs.filter((elem)=>{
        if(elem.name == nameX){

            if(elem.weight <= 8 && elem.age <= 1){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 15 && elem.age <= 2){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 25 && elem.age <= 3){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 35 && elem.age <= 4){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 45 && elem.age <= 5){
                console.log("normal"+elem.name);  
                return elem.name;
            }
            else{
                console.log("şişkooooo"+elem.name);
            }
        }
        
        
    });
    return list;
}
console.log(filtre("Milo"));