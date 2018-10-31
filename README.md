# ms_module_demo

This demo shows how to use a module.

## Steps 

1. Download https://github.com/softtouchit/ms_module_examples
2. Build the module and copy the module jar file ms_module_examples.jar to the modules dir of your MS installation home dir.
3. Restart the MS.
4. Build this project in your Web IDE and go to /demo and you should see "Hello Hello"

## How it works?

In the mml file, we added:

```xml
   <hello encoding="UTF8" />
   
   <!-- create one more object for different configuration -->
   
   <hello name="hello2" encoding="GBK" />

```
This has created two objects in the JavaScript engine with name hello and hello2.  We then call the sayHello method on each of the object:


```javascript
    	resp.body=hello.sayHello()+"  "+ hello2.sayHello();
```

