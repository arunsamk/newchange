function doit(){

ilen=imglist.length; 
var thebody=document.getElementById("church_page_inner");
var getlen=0;


while(i<ilen){
  //alert("inside while i= "+i);
//for(i=getlen;i<(getlen+4);i++){
  if(i==(ilen-1)){
    exit;
  }
   itemdiv=document.createElement("div");
fulldiv=document.createElement("div");
fulldiv.setAttribute("class","col-sm-12 col-md-12 col-xs-12");
fulldiv.setAttribute("style","display:inline;");

  if(i==0){
     
    thebody.insertBefore(itemdiv,thebody.firstChild);
itemdiv.setAttribute("class","item active") ; 
itemdiv.setAttribute("id","item"+i);
itemdiv.appendChild(fulldiv);
fulldiv.setAttribute("id","fulldiv"+i);
for(inlen=i;inlen<(i+3);inlen++)
{
  creatediv(inlen);
}
}
else{
  thebody.appendChild(itemdiv);
itemdiv.setAttribute("class","item") ; 
itemdiv.setAttribute("id","item"+i);
itemdiv.appendChild(fulldiv);
fulldiv.setAttribute("id","fulldiv"+i);
for(inlen=i;inlen<(i+3);inlen++)
{
  creatediv(inlen);
}
}//}
i=inlen;
} //while loop ends


} //funtion ends

function creatediv(inlen){

coldiv=document.createElement("div");
coldiv.setAttribute("class","col-sm-2 col-md-2 col-xs-6");
paneldiv=document.createElement("div");
paneldiv.setAttribute("class","panel");
panhead_div=document.createElement("div");
panhead_div.setAttribute("class","panel-heading");
panbody_div=document.createElement("div");
panbody_div.setAttribute("class","panel-body");
js_div=document.createElement("div");
js_div.setAttribute("class", "vid-item");
thumb_div=document.createElement("div");
thumb_div.setAttribute("class","thumb");
panfoot=document.createElement("div");
panfoot.setAttribute("class","panel-footer");
link_knowmore=document.createElement("a");
link_knowmore.setAttribute("href", "#");
coldiv.setAttribute("style","display:inline;float:left;");
fulldiv.appendChild(coldiv);
coldiv.setAttribute("id","coldiv"+inlen);
coldiv.appendChild(paneldiv);
paneldiv.setAttribute("id","paneldiv"+inlen);
paneldiv.appendChild(panhead_div);
var heading=document.createTextNode(church_name[inlen]);
panhead_div.appendChild(heading);
paneldiv.appendChild(panbody_div);
panbody_div.appendChild(js_div);
js_div.setAttribute("id","js_div"+[inlen]);
vidivlist.push(js_div.getAttribute("id"));

 panbody_div.appendChild(thumb_div);
theimg=document.createElement("img");
theimg.setAttribute("src",imglist[inlen]);
thumb_div.appendChild(theimg); 
theimg.setAttribute("style","margin:5px;");
panbody_div.appendChild(panfoot);
panfoot.appendChild(link_knowmore);
var t = document.createTextNode("Know more..");
link_knowmore.appendChild(t);

}

$(document).on('click', function (e) {
  var player=document.getElementById("vid_frame");
 var target=$(e.target);
 var x=0;
if(target.is("img")){
  var a=imglist.indexOf(target.attr("src"));
  player.src=vidlist[a];

  }
});