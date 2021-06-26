var maindate = new Date();
var day,today,endDate,prevDate;
var grid;
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var weekname=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var x,i;
function getdate() {
    maindate.setDate(1);
     day = maindate.getDay();
     console.log(day);
     today = new Date();
     endDate = new Date(
        maindate.getFullYear(),
        maindate.getMonth() + 1,
        0
    ).getDate();

     prevDate = new Date(
        maindate.getFullYear(),
        maindate.getMonth(),
        0
    ).getDate();
    
    document.getElementById("month").innerHTML = months[maindate.getMonth()];
    document.getElementById("year").innerHTML = maindate.getFullYear();
    grid = "";
    for (x = day; x > 0; x--) {
        grid += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && maindate.getMonth() == today.getMonth()) grid += "<div id='"+i+"' class='today' onclick='addevents1("+i+")'>" + i+  "</div>";//"<p class='innercon' id='"+(i+31)+"'></p>"+
        else
            grid += "<div id='"+i+"' onclick='addevents1("+i+")'>" + i +"</div>";//"<p class='innercon' id='"+(i+31)+"'></p>"+ 
    }
    document.getElementsByClassName("days")[0].innerHTML = grid;
  
}

function changemonth(npmonth) {
    if(npmonth == "prev") {
        maindate.setMonth(maindate.getMonth() - 1);
    } else if(npmonth == 'next') {
        maindate.setMonth(maindate.getMonth() + 1);
    }
    getdate();
   
}
function time(){
var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
   h=checkTime(h);
    m = checkTime(m);
    document.getElementById('time').innerHTML =h + ":" + m ;
    var t = setTimeout(time, 1000);
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
}
  window.onload=function(){
      getdate();
      time();
    }
function weekly(){
    grid = "";
    for (x = day; x > 0; x--) {
        grid += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    j=7;
    for (i = 1; i <= 7-maindate.getDay() ; i++) {
        
            grid += "<div>" + i + "</div>";
            
    }
    console.log(x,i);
    document.getElementsByClassName("days")[0].innerHTML = grid;
    
}
var arr=[];
var val=["Teachername","Event Name","Start Date","End Date","Description"];
function save1(){
  
  var teachername=document.getElementById("teachername").value;
  var eventcon=document.getElementById("eventcon").value;
  var fromday=document.getElementById("fromdate").value;
  var todates=document.getElementById("todate").value;
  var description=document.getElementById("description").value;
  var x=new Date(fromday);
  var y=x.getDate()+31;
  arr.push(teachername);
  arr.push(eventcon);
  arr.push(fromday);
  arr.push(todates);
  arr.push(description);
  let fLen = arr.length;
    
    text = "<ul style='list-style-type:none;'>";
    for (let i = 0; i < fLen; i++) {
        if(arr[i]!="")
            text += "<li class='rem'>"+val[i]+": " + arr[i] + "</li>";
    }
    text +="</ul>";
    
    document.getElementById("answers").innerHTML = text;
    document.getElementById("eventcon").value="";
    document.getElementById("todate").value="";
    document.getElementById("description").value="";
    document.getElementById("teachername").value="";
  //document.getElementById(y).innerHTML=eventcon;
  
}
function addevents1(i){
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  if(i<10){
   // console.log(maindate.getFullYear()+"-0"+(maindate.getMonth()+1)+"-0"+i+"T"+"15:11");
    if(maindate.getMonth()+1<10)
  document.getElementById("fromdate").value=maindate.getFullYear()+"-0"+(maindate.getMonth()+1)+"-0"+i+"T"+addZero(maindate.getHours())+":"+addZero(maindate.getMinutes());
    else
    document.getElementById("fromdate").value=maindate.getFullYear()+"-"+(maindate.getMonth()+1)+"-0"+i+"T"+addZero(maindate.getHours())+":"+addZero(maindate.getMinutes());
}
  else{
    console.log(maindate.getFullYear()+"-06-"+i+"T"+"15:11");
    if(maindate.getMonth()+1<10)
  document.getElementById("fromdate").value=maindate.getFullYear()+"-0"+(maindate.getMonth()+1)+"-"+i+"T"+addZero(maindate.getHours())+":"+addZero(maindate.getMinutes());
    else
    document.getElementById("fromdate").value=maindate.getFullYear()+"-"+(maindate.getMonth()+1)+"-"+i+"T"+addZero(maindate.getHours())+":"+addZero(maindate.getMinutes());
 // document.getElementById("fromdate").value=maindate.getFullYear()+"-06-"+i+"T"+"15:11";
}
  var modal = document.getElementById("myModal");
  var btn = document.getElementById(i);
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }
  function showall1(){
    var modal = document.getElementById("myModal2");
  var btn = document.getElementById("showall");
  var span = document.getElementsByClassName("close1")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }
  