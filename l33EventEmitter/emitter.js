//Emitter Module
/*
    Save a event and responde to that.
*/

function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || []; //if a property is exist good otherwise make a new array.
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){ // Emitting particular type of property
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        })
    }
}

module.exports = Emitter; //Make this available.



