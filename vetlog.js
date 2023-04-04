let patients = [
    { name: "Mia", age: 4, weight: 2, kind: "cat", breed: "siamese", disease: "vomit", appointment:"31.03.2023", owner: "Emma Walter" },
    { name: "Münir Bey", age: 2, weight: 20, kind: "cat", breed: "persian", disease: "vomit", appointment:"05.03.2023", owner: "Tate Langdon" },
    { name: "Felix", age: 2, weight: 4, kind: "cat", breed: "bengal", disease: "hook worm", appointment:"31.03.2023", owner: "Sophia Garcia Miller" },
    { name: "Oscar", age: 1, weight: 4, kind: "dog", breed: "chow chow", disease: "leptospirosis", appointment:"03.04.2023", owner: "Scott Allen" },
    { name: "Pele", age: 3, weight: 20, kind: "dog", breed:"german shephard", disease: "vomit", appointment:"03.04.2023", owner: "Sophia Garcia Miller" },
  ];


//How many animals are old?                                      # yaşlı hayvanlar
let list = patients.filter((elem) => {
    return elem.age >= 4;
});
console.log("old", list);


//How many patient has same disease?                             # aynı hastalıklı hastalar   
list = patients.filter((elem) => {
    return elem.disease == "vomit";
});
console.log("same disease", list);


//How many patients in the same appointment date?                # aynı görüşme tarihli hastalar
list = patients.filter((elem) => {
    return elem.appointment == "31.03.2023";
});
console.log("same appointment date", list);


//How many cat patients does the clinic have?                   # klinikteki kedi hastalar
list = patients.filter((elem) => {
    return elem.kind == "cat";
});
console.log("cat list", list);


//How many animals does Sophia have?                            # sophia'nın hayvanları
list = patients.filter((elem) => {
    return elem.owner == "Sophia Garcia Miller";
});
console.log("Sophia's animals", list);




//age-weight chart for cats                                     # yaş ve kiloya göre obez-normal kediler
list = patients.filter((elem) => {

    if(elem.kind == "cat"){
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
        
    }else{
        console.log("kedi değil");
    }
    
});
console.log(list);

    
    
    
//age-weight chart for dogs                                     # yaş ve kiloya göre obez-normal köpekler
list = patients.filter((elem) => {

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
    
    






































































