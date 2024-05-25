/**
 * @author Kishor Mali
 */

$(document).ready(function()
{
        var form = $("#regform");

        // $("#regform").children('div').steps({

        //     headerTag:"h5",
        //     bodyTag:"section",
        //     transitionEffect: "slideLeft",
        //     autoFocus:"true",
        //     onStepChanging: function(event, currentIndex, newIndex)
        //     {
        //         if (currentIndex > newIndex)
        //         {
        //             return true;
        //         }
        //         if(currentIndex < newIndex)
        //         {
        //             form.find(".body:eq(" + newIndex + ") label.error").remove();
        //             form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        //         }

        //         form.validate().settings.ignore = ":disabled,:hidden";
        //         return form.valid();
        //     },
        //     onFinishing: function(event, currentIndex)
        //     {
        //         form.validate().settings.ignore = ":disabled,:hidden";
        //         return form.valid();
        //     },
        //     onFinished: function(event, currentIndex)
        //     {
        //         form.submit();
        //     }
        // });


       var validator = form.validate({

           rules:
           {
               password:
               {
                   required:true
               },
               cpassword :
               {
                   required:true,
                   equalTo:"#password"
               },
               full_name:
               {
                   required:true
               },
               marital_status :
               {
                 required : true,
                 selected: true
               },
               gender :
               {
                 required : true,
                 selected: true
               },
               mother_tongue :
               {
                 required : true,
                 selected: true
               },
               religion :
               {
                 required : true,
                 selected: true
               },
               caste :
               {
                 required : true,
                 selected: true
               },
               sub_caste:
               {
                 required : true,
                 selected: true
               },
               height:
               {
                 required : true,
                 selected: true
               },
               weight:
               {
                 required : true,
                 selected: true
               },
               complexion :
               {
                 required : true,
                 selected: true
               },
               body_type :
               {
                 required : true,
                 selected : true
               },
               about_myself:
               {
                   required: true,
                   maxlength : 1024
               },

               state :
               {
                   required:true,
                   selected: true
               },
               district :
               {
                   required:true,
                   selected: true
               },
               city :
               {
                   required:true,
                   selected: true
               },

               cont_address :
               {
                   required: true,
                   maxlength: 250
               },
               pincode :
               {
                   required:true,
                   digits: true
               },

               anc_state :
               {
                   required:true,
                   selected: true
               },
               anc_district :
               {
                   required:true,
                   selected: true
               },
               anc_city :
               {
                   required:true,
                   selected: true
               },
               perm_address:
               {
                   required:true,
                   selected: true,
                   maxlength : 250
               },

               education:
               {
                   required: true,
                   selected: true
               },
               qualification:
               {
                   required: true,
                   selected: true
               },
               occupation:
               {
                   required: true,
                   selected: true
               },
               more_info:
               {
                   required:true
               },
               sub_occupation:
               {
                   required: true,
                   selected: true
               },
               employed_in:
               {
                   required: true
               },
               anual_income:
               {
                   digits: true
               },

               family_values:
               {
                   required: true,
                   selected: true
               },
               family_type:
               {
                   required: true,
                   selected: true
               },
               family_status:
               {
                   required: true,
                   selected: true
               },
               fathers_name:
               {
                   required:true
               },
               fathers_occupation:
               {
                   required:true
               },
               mothers_name:
               {
                   required:true
               },
               mothers_occupation:
               {
                   required:true
               },
               no_of_brothers:
               {
                   required:true
               },
               married_brothers:
               {
                   required : true,
                   lessThanBrothers : true
               },
               no_of_sisters:
               {
                   required:true
               },
               married_sisters:
               {
                   required:true,
                   lessThanSisters : true
               },
               relative_name:
               {
                   required:true,
                   maxlength:255
               },
               family_property:
               {
                   required:true,
                   maxlength:1024
               },
               part_age_from:
               {
                   required: true,
                   selected: true
               },
               part_age_to:
               {
                   required: true,
                   selected: true
               },
               part_height_from:
               {
                   required: true,
                   selected: true
               },
               part_height_to:
               {
                   required: true,
                   selected: true
               },
               part_anual_income_from:
               {
                   digits:true
               },
               part_anual_income_to:
               {
                   digits:true,
                   greaterThan: true
               },
               photo1:
               {
                   acceptImgExtension : true
               },
               photo2:
               {
                   acceptImgExtension : true
               },
               photo3:
               {
                   acceptImgExtension : true
               },
               id_proof:
               {
                   acceptDocExtension : true
               },
               user_name:
               {
                   required:true,
                   checkUsername: true,
				   checkWhiteSpaces : true
               },
               email:
               {
                   required : true,
                   email : true,
                   checkEmailExist : true
               },
               mobile1:
               {
                   digits : true,
                   required : true,
                   checkMobileExist : true
               },
               mobile2:
               {
                   digits : true,
                   notEqualTo : true,
                   checkMobileExist2 : true
               },
               phoneNumber:
               {
                   digits: true,
                   checkPhoneExist : true
               },
               date_of_birth:
               {
                   required : true,
                   dateITA: true,
                   checkDateFormat : true,
				          checkDateDifference : true
               },
               id_proof_desc:
               {
                  digits : true,
                  checkAadhaarExist : true
                  
               }
           },
           messages:
           {
               user_name :
               {
                   required : "This field is required.",
               },
               email :
               {
                   required : "This field is required."
               },
               mobile1:
               {
                   checkMobileExist: "Mobile number already exist."
               },
               cpassword : {equalTo : "Please enter same password." },
               date_of_birth:
               {
                    required: "This field is required.",
                    checkDateFormat : "Please enter correct date."
               },
               mobile2 :
               {
                   notEqualTo : "Please select another number.",
                   checkMobileExist2 : "Mobile number already exist."
               },
               phoneNumber:
               {
                   checkPhoneExist : "Phone number already exist."
               },
               married_brothers:
               {
                   required : "This field is required.",
                   lessThanBrothers : "Married brothers must be less than or equal to brothers."
               },
               married_sisters:
               {
                   required : "This field is required.",
                   lessThanSisters : "Married sisters must be less than or equal to sisters."
               },
               photo1:
               {
                   acceptImgExtension : "Only JPG, JPEG, GIF or PNG files allowed."
               },
               photo2:
               {
                   acceptImgExtension : "Only JPG, JPEG. GIF or PNG files allowed."
               },
               photo3:
               {
                   acceptImgExtension : "Only JPG, JPEG, GIF or PNG files allowed."
               },
               id_proof:
               {
                   acceptDocExtension : "Only JPG, JPEG, PNG or GIF files allowed."
               }
           },
           submitHandler: function(form) {
               // do other things for a valid form
               $(form).find(":submit").attr("disabled", true).attr("value","Submitting...");
               form.submit();
           }
       });

$("#regform").validate();




     /* DatePicker - Start */

     $("#date_of_birth").datepick({
         dateFormat: 'dd/mm/yyyy',
         yearRange: '1950:-17',
         defaultDate: '',
         selectDefaultDate : true
     });

     /* DatePicker - End */

   /* No of children load - Start */

   $("#marital_status").change(function(){

       var ms_id = $("#marital_status").val();

       if(!(ms_id == 2 || ms_id == 4 || ms_id == 5))
       {
           $("#no_of_childrens").val(0);
           $("#no_of_childrens").prop('disabled',true);
       }
       else
       {
           $("#no_of_childrens").prop('disabled',false);
       }
   });

   /* No of children load - End */




    $('#part_age_from').change(function(){

        $('#part_age_to').val($('#part_age_from').val());
    });

    $('#part_age_to').change(function(){

        var part_age_to = parseInt($('#part_age_to').val()),
            part_age_from = parseInt($('#part_age_from').val());

        if(part_age_to < part_age_from)
        {
            alert("To age must be greater than From age, please re-select");
            $('#part_age_to').val($('#part_age_from').val());
        }
    });

    $('#part_height_from').change(function(){

        $('#part_height_to').val($('#part_height_from').val());
    });

    $('#part_height_to').change(function(){

        var part_height_to = parseFloat($('#part_height_to').val()),
            part_height_from = parseFloat($('#part_height_from').val());

        if(part_height_to < part_height_from)
        {
            alert("To height must be greater than From height, please re-select");
            $('#part_height_to').val($('#part_height_from').val());
        }
    });


    /* Multiselect - Start */

    $(".chzn-select").chosen({
       width:"100%"
    });

    /* Multiselect - End */

});
