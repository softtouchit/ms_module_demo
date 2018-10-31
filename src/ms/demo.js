/**
 * 
 * This shows how to call a module implemented as java object
 * 
 */ 
(function() {


    var process = function(req, resp) {
        //the hello object was declared in ms_demo.mml
    	resp.body=hello.sayHello()+"  "+ hello2.sayHello();
    };

    return {
        onGet: process,
        onPost: process,
        onDel: process,
        onPut: process
    };


}());