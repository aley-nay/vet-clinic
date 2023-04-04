 /*i created package.json with
 npm --version
 npm install express
 npm init -y
 in terminal
 
 then added "type": "module"
 in package.json*/


import patients_cats from './db/cat_logs.js';


 /*
 //How many animals are old?                                      # yaşlı hayvanlar
 let list = patients_cats.filter((elem) => {
     return elem.age >= 4;
 });
 console.log("old", list);
 */
 
 
 
 
 
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 /*
 
 //How many patient has same disease?                             # aynı hastalıklı hastalar - static  
 let list = patients_cats.filter((elem) => {
     return elem.disease == "vomit";
 });
 console.log("same disease", list);
 
 
 
 //How many patient has same disease?                            # with function - dynamic
 function filtre(diseaseX){
     let list=patients_cats.filter((elem)=>{
         return (elem.disease == diseaseX);
 
     });
     return list;
 }
 console.log(filtre("vomit"));
 
 */
 
 
 
 
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 /*
 
 //How many patients_cats_dogs in the same appointment date?                # aynı görüşme tarihli hastalar
 let list = patients_cats.filter((elem) => {
     return elem.appointment == "31.03.2023";
 });
 console.log("same appointment date", list);
 
 
 
 //How many patients_cats_dogs in the same appointment date?               # with function - dynamic
 function filtre(appointmentX){
     let list=patients_cats.filter((elem)=>{
         return (elem.appointment == appointmentX);
 
     });
     return list;
 }
 console.log(filtre("31.03.2023"));
 
 */
 
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 
 /*
 
 //How many animals does Sophia have?                            # sophia'nın hayvanları
 let list = patients_cats.filter((elem) => {
     return elem.owner == "Sophia Garcia Miller";
 });
 console.log("Sophia's animals", list);
 
 

 
 //How many animals does Sophia have?                          # with function - dynamic
function filtre(ownerX){
    let list=patients_cats.filter((elem)=>{
        return (elem.owner == ownerX);
 
    });
    return list;
}
console.log(filtre("Romeo Vasquez"));
   */

 
 
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 

 /*
 //age-weight chart for cats by name                                    # dynamic
 function filtre(nameX){                                      
     let list=patients_cats.filter((elem)=>{
         if(elem.name == nameX){
 
            if(elem.weight <= 3 && elem.age <= 1){
            console.log("normal"+elem.name); 
            return elem.name;
            }
            else if(elem.weight <= 4 && elem.age <= 2){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 5 && elem.age <= 3){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 6 && elem.age <= 4){
                console.log("normal"+elem.name); 
                return elem.name;
            }
            else if(elem.weight <= 7 && elem.age <= 5){
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
 console.log(filtre("Kiwi"));
*/