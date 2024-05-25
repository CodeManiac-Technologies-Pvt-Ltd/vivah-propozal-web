/**
 * @author Kishor Mali
 */

$(document).ready(function(){
    
   var formForgotPassword = $('#forget_password');
   
   var validator =  formForgotPassword.validate({
       
          rules:
          {
              login_email:
              {
                  email : true,
                  required : true
              }
          }
      });
      
   formForgotPassword.submit(function(e){
      
      e.preventDefault();
      
      if(formForgotPassword.valid())
      {
          var login_email = $('#login_email').val();
          $('#btnSend').hide();
                    
          $.ajax({
              type : 'POST',
              url : resetUrl,
              data : {login_email : login_email}, 
              dataType : 'json'
          }).done(function(data){
              
              switch(data.status)
              {
                  case 'send'       :  $('#send').show();
                                       $('#forgot_body').hide();
                                       $('#notsend').hide();
                                       $('#invalid').hide();
                                       $('#unable').hide();
                                       break;
                  
                  case 'notsend'    :  $('#notsend').show();
                                       $('#send').hide();
                                       $('#unable').hide();
                                       $('#invalid').hide();
                                       $('#btnSend').show();
                                       break;
                  
                  case 'unable'     :  $('#unable').show();
                                       $('#notsend').hide();
                                       $('#send').hide();
                                       $('#invalid').hide();
                                       $('#btnSend').show();
                                       break;
                  
                  case 'invalid'    :  $('#invalid').show();
                                       $('#unable').hide();
                                       $('#notsend').hide();
                                       $('#send').hide();
                                       $('#btnSend').show();
                                       break;
                                       
                  default           :  alert('Error');
              }
          });
      }
   });
   
   
   var formCreatePassword = $('#create_password');
   
   var validator =  formCreatePassword.validate({
       
        rules:
        {
            password:
            {
                required : true
            },
            cpassword:
            {
                required : true,
                equalTo:"#password" 
            }
        }
   });
   
   formCreatePassword.submit(function(e){
       
      e.preventDefault();
      
      if(formCreatePassword.valid())
      {
          var serializedData = $(formCreatePassword).serialize();
                    
          $.ajax({
              type : 'POST',
              url : createUrl,
              data : serializedData, 
              dataType : 'json'
          }).done(function(data){
              
              switch(data.status)
              {
                  case 'success'    :  alert(data.message);
                                       window.location.replace(replaceUrl);
                                       break;
                                       
                  case 'error'      :  alert(data.message);break;
                  
                  case 'invalid'    :  alert(data.message);break;
                  
                  default           :  alert('Error');
              }
          });
      }
       
   });
      
});