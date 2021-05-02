function mensajeContact(){
  alert('Don´t forget to leave me a message')
}

function validateFormContact(){
  var msj = '';
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if(name == ''){
    msj += 'please fill this box. ';
    document.getElementById('name').style.borderColor = '#dc4e41';
  }else{
    document.getElementById('name').style.borderColor = '#179458';
  }
  if(email == ''){
    msj += 'please put a correct email. ';
    document.getElementById('email').style.borderColor = '#dc4e41';
  }else{
    document.getElementById('email').style.borderColor = '#179458';
  }
  if(message == ''){
    msj += 'Leave me a message please'
    document.getElementById('message').style.borderColor = '#dc4e41';
  }else {
      document.getElementById('message').style.borderColor = '#179458';
  }
  if(msj != ''){
    alert(msj);
  }else{
    alert('Thank you for contact me')
  }
}
