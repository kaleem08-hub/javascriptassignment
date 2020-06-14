//===Chapter 1===Task1===
//alert("Welcome to the Ghazi Stationary & Gift Center");

//===Chapter 1===Task2===
//alert("Error! Please Enter a valid Password.");

//===Chapter 1===Task3===
//alert("Welcome to JS Land...\nHappy Coding!");

//===Chapter 1===Task4===
//alert("Welcome to JS Land...");
//alert("Happy Coding!");

//===Chapter 1===Task5===
//console.log(alert("Hello...I can run JS through my web browser's console"))

//===Chapter 1===Task6===
//<script>alert("Welcome to the Ghazi Stationary & Gift Center")</script>

//===Chapter 1===Task7===
// I have practiced placement of <script></script> element in following sections of project in exercise 6.
//a. Head
//b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML)
//d. Body (after your page’s HTML)

//===Chapter 2===Task1===
//var username;

//===Chapter 2===Task2===
//var myname = "Kaleemullah";

//===Chapter 2===Task3===
//<script>var message= "Hello World"; alert(message)</script>

//===Chapter 2===Task4===
{/* <script>var sname="Kaleemullah";
     alert(sname);
     var sage="23 years Old";
     alert(sage);
     alert("Certified Mobile Application Development")</script> */}

//===Chapter 2===Task5===
//<script>alert("PIZZA\nPIZZ\nPIZ\nPI\nP")</script>

//===Chapter 2===Task6===
{/* <script>var email="shaikh_kaleemullah@yahoo.com";
    alert("My email address is " + email )</script> */}

//===Chapter 2===Task7===
{/* <script>var book="A smarter way to learn JavaScript";
    alert('I am trying to learn from the Book ' +book)</script> */}

//===Chapter 2===Task8===
//<script>document.write('Yah ! I can write HTML content through Javascript ')</script>

//===Chapter 2===Task9===
{/* <script>var store="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(store)</script> */}


//===Chapter 3===Task1===
{/* <script>var age="23";
    alert("I am " + age + " years old")</script> */}

//===Chapter 3===Task2===
//Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

//===Chapter 3===Task3===
{/* <script>var birthYear="1997";
        document.write("My birth year is "+ birthYear +"<br/> Data type of my declared variable is number")</script> */}


//===Chapter 3===Task4===
{/* <script>
    var visitorname=prompt("Enter Your Name:");   
    var producttitle=prompt("Enter Product Name:");
    var quantity=prompt("Enter Quantity");
    document.write(visitorname+" ordered " +quantity +" "+ producttitle + "(s) on XYZ Clothing Store");
</script> */}

//===Chapter 4===Task1===
{/* <script>
var [a,b,c]=[2,3,4];
alert('Value of a is '+a+ ' & Value if b is '+b+ ' & Value of c is ' +c);
</script> */}

//===Chapter 4===Task2===
//5 Illegal variables
{/* <script>
    var 1=kaleem;
    var 1a=kaleem;
    var full name=kaleemullah;
    var alert=Hello;
    var var=world;
</script> */}
// 5 Legal Variables
{/* <script>
    var b='4';
    var a1='shaikh';
    var FullName='kaleemullah';
    var myvar='Hello';
    var $='world';
</script> */}


//===Chapter 4===Task3===
{/* <script>
    var a='letter';
    var number='numbers';
    var _='_';
    var $='$';
    var sensitive='sensitive';
    var keyword='keywords';
document.write('<h1>Rules for naming JS variables</h1> <br/><br/>');
document.write('Variable names can only contain '+a+ ", " +number+ ", "+$+" & " +_+ '. For example $my_1stVariable<br/>');
document.write('Variables must begin with a '+a+ ", " +$+ " or " +_+ '. For example $name, _name or name<br/>');
document.write('Variable names are case '+sensitive+"<br/>");
document.write('Variable names should not be JS '+keyword);  
    </script> */}


//===Chapter 5===Task1===
{/* <script>
        var a=3;
        var b=5;
        var sum= a + b;
        document.write('The sum of ' +a+ ' & ' +b+ ' is ' +sum);
    </script> */}

//===Chapter 5===Task2===
{/* <script>
        var a=16;
        var b=4;
        var subtraction= a - b;
        var multiply=a * b;
        var division=a / b;
        var modulus=a % b;
        document.write('The subtraction of ' +a+ ' & ' +b+ ' is ' +subtraction+'<br/>');
        document.write('The multiplication of ' +a+ ' & ' +b+ ' is ' +multiply+'<br/>');
        document.write('The division of ' +a+ ' & ' +b+ ' is ' +division+'<br/>');
        document.write('The modulus of ' +a+ ' & ' +b+ ' is ' +modulus);
    </script> */}


//===Chapter 5===Task3===
{/* <script>
        var a;
        document.write('Value after variable declaration is '+a+'<br/>');
        a=5;
        document.write('Initial Value: '+a+'<br/>');
        a++;
        document.write('Value after increment is: '+a+'<br/>');
        var b=(a++)+7;
        document.write('Value after addition is: '+b+'<br/>');
        b--;
        document.write('Value after decrement is: '+b+'<br/>');
        var c=(b--) % 3;
        document.write('The remainder is: '+c+'<br/>');
    </script> */}


//===Chapter 5===Task4===
{/* <script>
        var MovieTicket=600;
        var n=prompt('Enter the number of tickets you want to purchase: ');
        var TotalCost=600*n;
        document.write('Total Cost to buy '+n+ ' tickets to a movie is ' + TotalCost+'PKR');
    </script> */}


//===Chapter 5===Task5===
{/* <script>
        var n=prompt('Enter the number of Table you want: <br/>');
        document.write('Table of '+n+ '<br/>');
        for(var i=1; i<=10; i++){
        document.write(n+ 'x'+i+'='+ (n*i) +'<br/>');
        }
    </script> */}


//===Chapter 5===Task6===
{/* <script>
        var C=25;
        var convertCtoF=(C*9/5)+32;
        document.write(C+'°C is ' +convertCtoF+' °F <br/>');
        var F=70;
        var convertFtoC=(F-32)*5/9;
        document.write(F+'°F is ' +convertFtoC+' °C');
    </script> */}


//===Chapter 5===Task7===
{/* <script>
        document.write('<h1>Shopping Cart</h1><br/><br/><br/>')
        var Item1=prompt('Enter price of item 1:');
        var Item1quantity=prompt('Enter Ordered Quantity of Item1: ');
        var Item2=prompt('Enter price of item 2:');
        var Item2quantity=prompt('Enter Ordered Quantity of Item2: ');
        var ShippingCharges=100;
        document.write('Price of Item 1 is:' +Item1+'<br/>');
        document.write('Quantity of Item 1 is:' +Item1quantity+'<br/>');
        document.write('Price of Item 2 is:' +Item2+'<br/>');
        document.write('Quantity of Item 2 is:' +Item2quantity+'<br/>');
        document.write('Shipping Charges:' +ShippingCharges+'<br/><br/>');
        document.write('Total Cost of your order is: ' + ((Item1*Item1quantity)+(Item2*Item2quantity)+ShippingCharges)+'PKR');
    </script> */}

//===Chapter 5===Task8===
{/* <script>
        document.write('<h1>Marksheet</h1><br/><br/>')
        var ObtainedMarks=prompt('Enter Obtained Marks: ');
        var TotalMarks=prompt('Enter Total Marks: ');
        document.write('Obtained Marks: '+ObtainedMarks+'<br/>');
        document.write('Total Marks: '+TotalMarks+'<br/>');
        document.write('Percentage is: '+((ObtainedMarks*100)/TotalMarks)+'%');
    </script> */}


//===Chapter 5===Task9===
{/* <script>
        document.write('<h1>Currency in PKR</h1><br/>');
        var totalPAKRUPEE=(10*104.80)+(25*28);
        document.write('Total Currency in PKR is '+totalPAKRUPEE);
    </script> */}


//===Chapter 5===Task10===
{/* <script>
var a=(((5 +5)*10)/2);
document.write(a)
    </script> */}

//===Chapter 5===Task11===
{/* <script>
        document.write('<h1>Age Calculator</h1><br/><b1/>')
        var CurrentYear=2020;
        var BirthYear=1997;
        document.write('Current Year: '+CurrentYear+'<br/>');
        document.write('Birth Year: '+BirthYear+'<br/>');
        document.write('Your Age is: '+(CurrentYear-BirthYear))
    </script> */}


//===Chapter 5===Task12===
{/* <script>
        document.write('<h1>Geometizer</h1><br/><b1/>')
        var Radius=20;
        pi=3.142;
        var Circumference=2*pi*Radius;
        var Area=pi*(Radius*Radius);
        document.write('Radius of a Circle is: '+Radius+'<br/>');
        document.write('The Cicumference is: '+Circumference+'<br/>');
        document.write('The Area is: '+Area+'<br/>');
    </script> */}



//===Chapter 5===Task13===
{/* <script>
        document.write('<h1>The Lifetime Supply Calculator</h1><br/><b1/>')
        var FavSnack='Chocolate Chip';
        var CurrentAge=23;
        var MaxAge=65;
        var EstAmountperDay=3;
        document.write('Favourite Snack is: '+FavSnack+'<br/>');
        document.write('My Current Age is: '+CurrentAge+'<br/>');
        document.write(' Estimated Maximum Age is: '+MaxAge+'<br/>');
        document.write('Amount of Snack per Day is: '+EstAmountperDay+'<br/>');
        document.write('You will need '+ ((MaxAge-CurrentAge)*EstAmountperDay) +' to last you until the ripe old age of '+MaxAge);
    </script> */}


//===Chapter 6-9===Task1===
{/* <script>
        var a=10;
        document.write('Result:<br/>');
        document.write('The value of a is: '+a+'<br/>');
        document.write('.........................................<br/><br/>');
        ++a;
        document.write('The value of ++a is: '+a+'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
        document.write('The value of a++ is: '+ a++ +'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
        --a;
        document.write('The value of --a is: '+a+'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
        document.write('The value of a-- is: '+ a-- +'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
    </script> */}


//===Chapter 6-9===Task2===
{/* <script>
        var a=2;
        var b=1;
        var result = --a - --b + ++b + b--;
        //===Explanation of Steps===
        // --a means now value of a=1
        // --a - --b means now value of a=1 & b=0. So, 1-0=1 here
        // --a - --b + ++b means in previous step b=0 now after b++ it becomes 1. So now total value is 2
        //--a - --b + ++b + b-- means previous equation value is 2 now add 1 to b due to previous value after that it decrease bcoz of b--. So, Final result is 3
        document.write('a is '+a+'<br/>');
        document.write('b is '+b+'<br/>');
        document.write('Result is '+result);
    </script> */}

//===Chapter 6-9===Task3===
{/* <script>
        var a=prompt("Input your Name:");
        document.write('************************************************************************<br/>');        
        document.write('<h1>Welcome to our Webpage Dear '+a+'<br/>Thanks for Visiting Us</h1>');
        document.write('*************************************************************************');
    </script> */}


//===Chapter 6-9===Task5===
{/* <script>    
        var n=prompt('Enter the number of Table you want:');
        if( n=="" ){
            document.write('Table of '+5+'<br/>');
        for(var i=1; i<=10; i++){
        document.write(5+ 'x'+i+'='+ (5*i) +'<br/>');
        }
    }
    else{ 
        document.write('Table of '+n+ '<br/>');
        for(var i=1; i<=10; i++){
        document.write(n+ 'x'+i+'='+ (n*i) +'<br/>');
        }
    }
    </script> */}


//===Chapter 6-9===Task6===
{/* <script>    
     var Subject1=prompt('Enter your Subject 1 Name:');
     var Subject2=prompt('Enter your Subject 2 Name::');
     var Subject3=prompt('Enter your Subject 3 Name::');
     var ObtainedMarks1=prompt('Enter your Obtained Marks of '+Subject1+' ');
     var ObtainedMarks2=prompt('Enter your Obtained Marks of '+Subject2+' ');
     var ObtainedMarks3=prompt('Enter your Obtained Marks of' +Subject3+' ');
     var TotalEachSubject=100;
     var percentage1=(ObtainedMarks1*100)/TotalEachSubject;
     var percentage2=(ObtainedMarks2*100)/TotalEachSubject;
     var percentage3=(ObtainedMarks3*100)/TotalEachSubject;
     var totaSubjectMarks=TotalEachSubject*3;
     var totalObtained=""(ObtainedMarks1+ObtainedMarks2+ObtainedMarks3);
     var FinalPercentage=((percentage1+percentage2+percentage3)/3);
     document.write("<h1>Subject &nbsp;Total Marks&nbsp;Obtained Marks&nbsp; Percentage </h1><br/>");
     document.write(Subject1+" &nbsp; &nbsp; &nbsp;"+TotalEachSubject+"&nbsp; &nbsp;&nbsp;"+ObtainedMarks1+"&nbsp; &nbsp;&nbsp;"+percentage1+"%<br/>");
     document.write(Subject2+"&nbsp;&nbsp;&nbsp;&nbsp;"+TotalEachSubject+"&nbsp;&nbsp;&nbsp;"+ObtainedMarks2+"&nbsp;&nbsp;&nbsp;"+percentage2+"%<br/>");
     document.write(Subject3+"&nbsp;&nbsp;&nbsp;&nbsp;"+TotalEachSubject+"&nbsp;&nbsp;&nbsp;"+ObtainedMarks3+"&nbsp;&nbsp;&nbsp;"+percentage3+"%<br/>");
     document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+totaSubjectMarks+"&nbsp;&nbsp;&nbsp;"+totalObtained+"&nbsp;&nbsp;&nbsp;"+FinalPercentage+"%<br/>");
    </script> */}


//===Chapter 9-11===Task1===
{/* <script>    
     var city=prompt('Enter City Name: ')
     var arr=['Islamabad', 'Karachi', 'Hyderabad', 'Faisalabad', 'Lahore']
     for (var i=0; i<arr.length; i++){
     if (arr[i] === 'Karachi'){
         alert('Welcome to city of Lights');
     }
    }
    </script> */}
//===Chapter 9-11===Task2===
{/* <script>
        var gender=prompt('Enter gender: ')
     if (gender=== 'Male'){
         alert('Good Morning Sir');}
         else {
             alert('Good Morning Maam');
         }
</script>     */}


//===Chapter 9-11===Task3===
{/* <script>
    var colour=prompt('Enter road signal colour name');
    if(a==Red)
    {
        alert('Must Stop');
    }
    else if(a==Yellow){
        alert('Ready to move');
    }
    else if(a==Green){
        alert('Move Now');
    }
</script> */}


//===Chapter 9-11===Task5===
{/* <script>
//alert message displayed
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
//alert message not displayed
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
//alert message not displayed
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } 
//alert message displayed
if (c === 13){ alert("condition 2 is true"); } 
//alert message not displayed
if (++c < 14){ alert("condition 3 is true"); } 
//alert message displayed
if(c === 14){ alert("condition 4 is true"); }
//alert message displayed
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
//alert message displayed
if (true){ alert("True"); } if (false){ alert("False"); }
//alert message displayed
if("car" < "cat"){ alert("car is smaller than cat"); }
</script> */}


//===Chapter 12-13===Task1===
{/* <script>
    var a=prompt('Enter a number or string');
    if(a.charCodeAt(a)>=65 && a.charCodeAt(a)<=90)
    {
        alert('Input is Upper case Letter');
    }
    else if(a.charCodeAt(a)>=97 && a.charCodeAt(a)<=122){
        alert('Input is lower case Letter');
    }
    else{
        alert('Its a number');
    }
</script> */}

//===Chapter 12-13===Task2===
{/* <script>
    var a=prompt('Enter integer1');
    var b=prompt('Enter integer2');
    if(a>b)
    {
        alert('Integer1 is larger');
    }
    else if(b>a){
        alert('integer2 is larger');
    }
    else if(a==b){
        alert('Both are equal');
    }
</script>  */}


//===Chapter 12-13===Task3===
{/* <script>
    var a=prompt('Enter integer1');
    if(a>0)
    {
        alert('Positive Value');
    }
    else if(a<0){
        alert('Negative value');
    }
    else if(a==0){
        alert('Value is zero');
    }
</script>  */}