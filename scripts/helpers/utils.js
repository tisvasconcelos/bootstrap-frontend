//Método para pegar Object (JSON) e fazer um merge com outro Object
Object.prototype.merge = function(object){    
    var value;
    for(key in object){
        if(key!='merge'){
            if(typeof object[key] == 'string')
                value = object[key].toString().split(" ").join("");
            else
                value = object[key];
            if(value != "" && value != null && value != undefined)
                this[key] = value;
        }
    }    
}

//Método que faz multiplos replace
String.prototype.replaceAll = function(find, replace) {
    return this.split(find).join(replace);
}