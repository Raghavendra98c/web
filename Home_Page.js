var i=0;
var images=[]
var time=2000;
images[0] = "https://images.pexels.com/photos/8197544/pexels-photo-8197544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
images[1] = "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
images[2] = "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
images[3] = "https://images.pexels.com/photos/1110355/pexels-photo-1110355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
images[4] = "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
images[5] = "https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
function changeImg(){
    document.slide.src=images[i]

    if(i<images.length -1){
        i++
    }
    else{
        i=0
    }
    setTimeout("changeImg()",time)
}
window.onload=changeImg


function FormValidation(){
    var name=document.myform.name.value
    var email=document.myform.email.value
    var phone=document.myform.phone.value
    
    
    if(name==""){
        const x=document.getElementById('name-input')
        x.innerHTML="Please Enter You Name..!"
        
    }
    else if(phone==""){
        const y=document.getElementById("phone-input")
        y.innerHTML="Please Enter Your Phone Number"
    }
    else if(phone.length<10){
        const y=document.getElementById("phone-input")
        y.innerHTML="Enter Valid Phone Number"
    }
    else{
        alert("You Query Submitted , Our Team Contact You ASAP...!")
    }

}




const modal=document.getElementById("modal-content")
const btn=document.getElementById("mybtn")
const span=document.getElementById("close")


btn.onclick=function(){
    modal.style.display="block"
}
span.onclick=function(){
    modal.style.display="none"
}

document.onclick=function(e){
    if(e.target == modal){
        modal.style.display="none"
    }
}
    













