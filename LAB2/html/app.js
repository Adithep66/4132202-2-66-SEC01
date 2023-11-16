
    var num = 10;
    let name = "Tik";
    age = 20;

    fruit = ["apple","mango","tangmo"];
    obj = {name:"Drusawin",age:20, tel: "123-456"};

    data = { adress: ["69", "jira", "Buriram",3100], name: "tik"};


    console.log(fruit[1]);
    console.log(obj.tel);
    console.log(data.adress[2]);

    document.getElementById("msg").innerHTML = data.adress[2];
        
    let longTxt = data.name + " : " + fruit[0];
        
    longTxt = `${data.name} :
              ${fruit[1]}`; 
    
    $(function(){
        $("#msg").html(longTxt);
    }); //jQuery ready
