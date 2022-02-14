"use strict"


function calcer (input){
    let result=Function("return " + input)();
    if(result == undefined){
        return "";
    } else return result;
    
    }