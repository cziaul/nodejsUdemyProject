var person ={
    firstname:'Zia';
    lastname:'Chowdhury',
    greet:function() {
        console.log('Hello, '+ this.firstname + ' ' +this.lastname);
    }
};

person.greet();