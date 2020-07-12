var lan1=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"    ,"yesterday I bought a book that I told her"]]
var alleng=["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]


var lan2=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया" ,"मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];

var allhin=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]



function goal2()
{
     b=allhin[Math.floor(Math.random() * allhin.length)];
          b1=b.split(" ");
                a=alleng[Math.floor(Math.random() * alleng.length)];
a1=a.split(" ");
    document.getElementById("fix3").innerHTML=""
    document.getElementById("fix5").innerHTML=""
    document.getElementById("fix4").innerHTML=""
    document.getElementById("fix6").innerHTML=""
    document.getElementById("fix7").innerHTML=""
    document.getElementById("k5").innerHTML="Get Correct Sentence"


    document.getElementById("k3").style.visibility="hidden";
    document.getElementById('k4').style.visibility="hidden"
    document.getElementById("k5").style.visibility="hidden";
    count=0
    

if(document.getElementById("eng").selected)
{


    document.getElementById("fix").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
    document.getElementById("fix1").innerHTML="(select the buttons in proper order)";
    
    let body = document.getElementsByTagName("p")[3];
    
    for(i=0;i<a1.length;i++)
{
    j=Math.floor(Math.random()*a1.length)
    a2=a1[i];
    a1[i]=a1[j]
    a1[j]=a2;
}


for(i=0;i<a1.length;i++)
{
         let button = document.createElement("button");
         button.id='button'+i;
    
  button.innerHTML = a1[i]
  body.appendChild(button);
     
button.addEventListener ("click", function() {
    document.getElementById("fix4").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("fix5").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;
 
    if (count>0 ) 
     {
        document.getElementById("k3").style.visibility="visible";
     }
     var v=String(document.getElementById("fix5").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
  
     
     if(a1.length==v1.length)
     {
        document.getElementById("k4").style.visibility="visible";
     }


});

}
}
else if (document.getElementById("hin").selected) 
{ 
    document.getElementById("fix").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
    document.getElementById("fix1").innerHTML="(select the buttons in proper order)";
    
    let body = document.getElementsByTagName("p")[3];
    for(i=0;i<b1.length;i++)
{
    j=Math.floor(Math.random()*b1.length)
    a2=b1[i];
    b1[i]=b1[j]
    b1[j]=a2;

}
for(i=0;i<b1.length;i++)
{
         let button = document.createElement("button");
         button.id='button'+i
  button.innerHTML = b1[i]
  body.appendChild(button)

button.addEventListener ("click", function() {
    document.getElementById("fix4").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("fix5").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;

    if (count>0) 
     {
        document.getElementById("k3").style.visibility="visible";
     }
      var v=String(document.getElementById("fix5").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
    if (b1.length==v1.length) 
     {
        document.getElementById("k4").style.visibility="visible";
     
     }
});

}
}


else
{
    document.getElementById("fix").innerHTML=""
    document.getElementById("fix1").innerHTML=""
    document.getElementById("fix3").innerHTML=""
}
}
function back()

{

  for(i=0;i<a1.length||i<b1.length;i++)
  {
    if(document.getElementById('button'+i).style.visibility=="hidden")
    {
   document.getElementById('button'+i).style.visibility="visible";
    document.getElementById('fix4').innerHTML=""
    document.getElementById('fix5').innerHTML=""
    document.getElementById('fix6').innerHTML=""
    document.getElementById("fix7").innerHTML=""
    document.getElementById('k3').style.visibility="hidden"
     document.getElementById('k4').style.visibility="hidden" 
      document.getElementById("k5").style.visibility="hidden";  
}
}
}
    function find()
{

  var x=String(document.getElementById("fix5").innerHTML).replace(/\s+$/, '');
  c=0;
  p=0
  if(document.getElementById("eng").selected)
  {
  for(i=0;i<10;i++)
  {
    for(j=0;j<lan1[i].length;j++)
    {

      if(x==lan1[i][j])
      {
           
        c++;

      }
    }
  }

if(c==1)
{
      document.getElementById("fix6").innerHTML="<span style='color:green;font-size:30px'>Right answer!!!</span>"

}
else
{
      document.getElementById("fix6").innerHTML="<span style='color:red;font-size:30px'>Wrong answer!!!</span>"
      document.getElementById("k5").style.visibility="visible";
  
}

}

 else if(document.getElementById("hin").selected)
  {
  for(i=0;i<7;i++)
  {
    for(j=0;j<lan2[i].length;j++)
    {

      if(x==lan2[i][j])
      {
           
        p++;

      }
    }
  }


if(p==1)
{
      document.getElementById("fix6").innerHTML="<span style='color:green;font-size:30px'>Right answer!!!</span>"

}
else
{
      document.getElementById("fix6").innerHTML="<span style='color:red;font-size:30px'>Wrong answer!!!</span>"
        document.getElementById("k5").style.visibility="visible";
  
}

}
}

function toggle()
{
f=alleng.indexOf(a)
s=lan1[f]
g=allhin.indexOf(b)
r=lan2[g]



if(document.getElementById("eng").selected)
  {
    if(document.getElementById("k5").innerHTML=="Get Correct Sentence")
    {
       for(i=0;i<s.length;i++)
  { 
   document.getElementById("fix7").innerHTML+=s[i]+"<br>";
   document.getElementById("k5").innerHTML="Hide the correct Sentence" 
} 
}
else if(document.getElementById("k5").innerHTML=="Hide the correct Sentence")
  {
    
   document.getElementById("fix7").innerHTML=""
   document.getElementById("k5").innerHTML="Get Answers"
}
else if(document.getElementById("k5").innerHTML=="Get Answers")
{

       for(i=0;i<s.length;i++)
  { 
   document.getElementById("fix7").innerHTML+=s[i]+"<br>";
   document.getElementById("k5").innerHTML="Hide the correct Sentence" 
} 
}
}
else if(document.getElementById("hin").selected)
  { 

    if(document.getElementById("k5").innerHTML=="Get Correct Sentence")
    {
       for(i=0;i<r.length;i++)
  { 
   document.getElementById("fix7").innerHTML+=r[i]+"<br>";
   document.getElementById("k5").innerHTML="Hide the correct Sentence" 
} 
}
else if(document.getElementById("k5").innerHTML=="Hide the correct Sentence")
  {
    
   document.getElementById("fix7").innerHTML=""
   document.getElementById("k5").innerHTML="Get Answers"
}
else if(document.getElementById("k5").innerHTML=="Get Answers")
{

  for(i=0;i<r.length;i++)

  {
   
   document.getElementById("fix7").innerHTML+=r[i]+"<br>";
   document.getElementById("k5").innerHTML="Hide the correct Sentence" 
} 
 
}
}
}