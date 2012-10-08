var Utils = (function(){
    _prototype = Utils.prototype;

    //Constructor
    function Utils(){
        var _self = this;
    }
    
    //Método para pegar Object (JSON) e fazer um merge com outro Object
    _prototype.merge = function(object, merge){
        var value;
        for(key in object){
            if(key!='merge'){
                if(typeof object[key] == 'string')
                    value = object[key].toString().split(" ").join("");
                else
                    value = object[key];
                if(value != "" && value != null && value != undefined)
                    merge[key] = value;
            }
        }    
    };

    //Método que faz multiplos replace
    _prototype.replaceAll = function(value, find, replace) {
        return value.split(find).join(replace);
    };

    return Utils;
})();
