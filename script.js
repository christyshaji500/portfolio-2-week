var nameerror= document.getElementById('nameerror');
var emailerror= document.getElementById('emailerror');
var subjecterror= document.getElementById('subjecterror');
var messageerror= document.getElementById('messageerror');
var submiteerror= document.getElementById('submiterror');
// var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validatename(){

    var name=document.getElementById('name').value;
    if(name.len==0){
        nameerror.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML='write full name';
        return false;
    }
    
    nameerror.innerHTML='valid'
    return true;
}

function validateEmail(){
    var email=document.getElementById('email').value;
    
    if(email.length==0){
        emailerror.innerHTML='email is required'
        return false;
    }
    if(!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
        emailerror.innerHTML='email is invalid'
        return false;
    }
    emailerror.innerHTML='valid'
    return true;
}

function validatesubject(){
    var subject=document.getElementById('subject').value;
    var required=15;
    var right=required -subject.length;

    if(right>0){
        subjecterror.innerHTML= right +'more characters required';
        return false;
    }
    subjecterror.innerHTML='valid'
    return true;
}

function validatemessage(){
    var message=document.getElementById('message').value;
    var required= 30;
    var left =required -message.length;

    if(left>0){
        messageerror.innerHTML=left+ 'more characters required';
        return false;
    }
    messageerror.innerHTML='valid'
    return true;
}
function validateform(){
    if(!validatename()|| !validateEmail()|| !validatemessage()||!validatesubject()){
        submiteerror.innerHTML='please fix error to submit';
        return false;
    }

}