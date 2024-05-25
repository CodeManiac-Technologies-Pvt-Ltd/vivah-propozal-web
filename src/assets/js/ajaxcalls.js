/**
 * @author Kishor Mali
 */

$(document).ready(function(){
	
    var post_url_caste = baseurl + "user/getCasteByReligionId/";
       
	var rel_id = $('#religion').val();
	
    $('#religion').change(function(){
	  
      var r_id = $('#religion').val();
      
      $.ajax({
          type  : "POST",
          url   :  post_url_caste,
          data  : {religion_id : r_id},
		  async : false,
      }).done(function(caste)
      {
          $('#caste').empty();
              
          var select = $('<option />');
          select.val(0);
          select.text('Select Caste');
          $("#caste").append(select);
          
          $('#sub_caste').empty();
          
          var select2 = $('<option />');
          select2.val(0);
          select2.text('Select Sub Caste');
          $("#sub_caste").append(select2);
          
          $.each(caste, function(cast_id, cast){
              var opt = $('<option />');
              opt.val(cast.cast_id);
              opt.text(cast.cast);
              $("#caste").append(opt);
          });
      });
	});	

	$('#religion').trigger('change');
      
  var post_url_subcaste = baseurl + "user/getSubCasteByCasteId/";
       
   $('#caste').change(function(){
       
       var caste_id = $('#caste').val();
       
       $.ajax({
          type  : "POST",
          url   : post_url_subcaste,
          data  : {cast_id : caste_id},
          async : false
      }).done(function(sub_caste)
      {
          $('#sub_caste').empty();
              
          var select = $('<option />');
          select.val(0);
          select.text('Select Sub Caste');
          $("#sub_caste").append(select);
          
          $.each(sub_caste, function(subcast_id, subcast){
              var opt = $('<option />');
              opt.val(subcast.subcast_id);
              opt.text(subcast.subcast);
              $("#sub_caste").append(opt);
          });
      });
   });
   
/* Get District list using state ids : ajax call */
      
      var post_url_district = baseurl + "user/getDistrictByStateId/";
      
      var state_ids = $("#state").val();
      
      $('#state').change(function(){
         
         var state_ids = $("#state").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_district,
              data  : {state_id : state_ids},
              async : false
         }).done(function(district)
         {
            
             $('#district').empty();
               
              var select = $('<option />');
              select.val(0);
              select.text('Select District');
              $('#district').append(select);
              
              $('#city').empty();
              
              var select2 = $('<option />');
              select2.val(0);
              select2.text('Select Tehsil');
              $('#city').append(select2);
              
              $.each(district, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.dist_id);
                  opt.text(data.dist_name);
                  $('#district').append(opt); 
              });
         });
      });
      
      var post_url_city = baseurl + "user/getCityByDistrictId/";
      
      $('#district').change(function(){
        
         var dist_ids = $("#district").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_city,
              data  : {dist_id : dist_ids},
              async : false
         }).done(function(city)
         {
              $('#city').empty();
                  
              var select = $('<option />');
              select.val(0);
              select.text('Select Tehsil');
              $("#city").append(select);
              
              $.each(city, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.city_id);
                  opt.text(data.city_name);
                  $("#city").append(opt); 
              });            
         });
      });
      

      $('#anc_state').change(function(){
         
         var state_ids = $("#anc_state").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_district,
              data  : {state_id : state_ids},
              async : false
         }).done(function(district)
         {
             $('#anc_district').empty();
                  
              var select = $('<option />');
              select.val(0);
              select.text('Select District');
              $("#anc_district").append(select);
              
              $('#anc_city').empty();
              
              var select2 = $('<option />');
              select2.val(0);
              select2.text('Select Tehsil');
              $("#anc_city").append(select2);
              
              $.each(district, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.dist_id);
                  opt.text(data.dist_name);
                  $("#anc_district").append(opt); 
              });
         });
      });
      
      
      $('#anc_district').change(function(){
        
         var dist_ids = $("#anc_district").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_city,
              data  : {dist_id : dist_ids},
              async : false
         }).done(function(city)
         {
             $('#anc_city').empty();
                  
              var select = $('<option />');
              select.val(0);
              select.text('Select Tehsil');
              $("#anc_city").append(select);
              
              $.each(city, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.city_id);
                  opt.text(data.city_name);
                  $("#anc_city").append(opt); 
              });
         });
      });
      
      
      $('#chk_same_address').click(function(){
          
          if($('#chk_same_address').prop('checked') == false)
          {
              $("#anc_state").prop('disabled',false);
              $("#anc_district").prop('disabled',false);
              $("#anc_city").prop('disabled',false);
              $("#perm_address").prop('disabled',false);
          }
          else
          {
              $("#anc_state").val($("#state").val());
              
              $('#anc_state').trigger("change");
                            
              $("#anc_district").val($("#district").val());
              
              $('#anc_district').trigger("change");
              
              $("#anc_city").val($("#city").val());
              
              $("#perm_address").val($("#cont_address").val());
              
              $("#anc_state").prop('disabled',true);
              $("#anc_district").prop('disabled',true);
              $("#anc_city").prop('disabled',true);
              $("#perm_address").prop('disabled',true);
          }
          
      });
      
      
      var post_url_qualification = baseurl + "user/getQualificationByEducationId/";
      
      $('#education').change(function(){
        
         var education_id = $("#education").val();

         $.ajax({
              type  : "POST",
              url   : post_url_qualification,
              data  : {edu_id : education_id},
              async : false
         }).done(function(qualification)
         {
             $('#qualification').empty();
                  
              var select = $('<option />');
                  select.val(0);
                  select.text('Select Qualification');
                  $("#qualification").append(select);
              
              $.each(qualification, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.edusubcatagory_id);
                  opt.text(data.qualification);
                  $("#qualification").append(opt); 
              });
         });
      });
      
      
      
      var post_url_sub_occupation = baseurl + "user/getSubOccupationByOccupationId/";
      
      $('#occupation').change(function(){
        
         var occupation_id = $("#occupation").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_sub_occupation,
              data  : {occ_id : occupation_id},
              async : false
        }).done(function(sub_occupation)
        {
            $('#sub_occupation').empty();
                  
              var select = $('<option />');
                  select.val(0);
                  select.text('Select Sub Occupation');
                  $("#sub_occupation").append(select);
                                
              $.each(sub_occupation, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.occusubcatagory_id);
                  opt.text(data.sub_name);
                  $("#sub_occupation").append(opt); 
              });
        }); 
      });
      
	  
      /* Partner Preference : Religion & Caste Dropdowns - Start */
      
      var post_url_part_caste = baseurl + "user/getCasteByReligionIdMultiple/";
      
      $('#part_religion').change(function(){
          
          var r_id = new Array(); 
          
          r_id = $('#part_religion').val();
          
          if(r_id == 0)
          {
              $('#part_caste').prop('disabled', true).trigger("chosen:updated");
              $('#part_sub_caste').prop('disabled', true).trigger("chosen:updated");
          }
          else
          {
              $('#part_caste').prop('disabled', false).trigger("chosen:updated");
              $('#part_sub_caste').prop('disabled', false).trigger("chosen:updated");
              
              $.ajax({
              type  : "POST",
              url   :  post_url_part_caste,
              data  : {religion_id : r_id},
			  async : false,
              }).done(function(caste)
              {
                  $('#part_caste').empty();
                  
                  var select = $('<option />');
                      select.val(0);
                      select.text('Caste No Bar');
                      $("#part_caste").append(select);
                  
                  $.each(caste, function(cast_id, cast){
                      var opt = $('<option />');
                      opt.val(cast.cast_id);
                      opt.text(cast.cast);
                      $("#part_caste").append(opt);
                  });
                  
                  $('#part_caste').trigger("chosen:updated");
              });
          }
        });
		
		
       
       
       var post_url_part_subcaste = baseurl + "user/getSubCasteByCasteIdMultiple/";
       
       $('#part_caste').change(function(){
           
           var caste_id = $('#part_caste').val();
           
           if(caste_id == 0)
           {           
               $('#part_sub_caste').prop('disabled', true).trigger("chosen:updated");
           }
           else
           {
               $('#part_sub_caste').prop('disabled', false).trigger("chosen:updated");
               
               $.ajax({
                  type  : "POST",
                  url   : post_url_part_subcaste,
                  data  : {cast_id : caste_id},
                  async : false
               }).done(function(sub_caste){
                  
                  $('#part_sub_caste').empty();
                      
                  $.each(sub_caste, function(subcast_id, subcast){
                      var opt = $('<option />');
                      opt.val(subcast.subcast_id);
                      opt.text(subcast.subcast);
                      $("#part_sub_caste").append(opt);
                  });     
                  
                  $('#part_sub_caste').trigger("chosen:updated");
               });
           }
       });
      
      /* Partner Preference : Religion & Caste Dropdowns - End  */
     
     
     var post_url_district_multiple = baseurl + "user/getDistrictByStateIdMultiple/";
     
      $('#state_multipl').change(function(){
         
         var state_ids = $("#state_multipl").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_district_multiple,
              data  : {state_id : state_ids},
              async : false
         }).done(function(district)
         {
            
             $('#district_multipl').empty();

             $('#city_multipl').empty();
              
              $.each(district, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.dist_id);
                  opt.text(data.dist_name);
                  $('#district_multipl').append(opt); 
              });
              
              $('#district_multipl').trigger("chosen:updated");
              $('#city_multipl').trigger("chosen:updated");
         });
      });
      
      
      var post_url_city_multiple = baseurl + "user/getCityByDistrictIdMultiple/";
      
      $('#district_multipl').change(function(){
        
         var dist_ids = $("#district_multipl").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_city_multiple,
              data  : {dist_id : dist_ids},
              async : false
         }).done(function(city)
         {
              $('#city_multipl').empty();
              
              $.each(city, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.city_id);
                  opt.text(data.city_name);
                  $("#city_multipl").append(opt); 
              });
              
              $('#city_multipl').trigger("chosen:updated");            
         });
      });
     
     
     $('#anc_state_multipl').change(function(){
         
         var state_ids = $("#anc_state_multipl").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_district_multiple,
              data  : {state_id : state_ids},
              async : false
         }).done(function(district)
         {
             $('#anc_district_multipl').empty();
              
              $('#anc_city_multipl').empty();

              $.each(district, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.dist_id);
                  opt.text(data.dist_name);
                  $("#anc_district_multipl").append(opt); 
              });
              
              $('#anc_district_multipl').trigger("chosen:updated");
              $('#anc_city_multipl').trigger("chosen:updated");
         });
      });
      
      
      $('#anc_district_multipl').change(function(){
        
         var dist_ids = $("#anc_district_multipl").val();
         
         $.ajax({
              type  : "POST",
              url   : post_url_city_multiple,
              data  : {dist_id : dist_ids},
              async : false
         }).done(function(city)
         {
             $('#anc_city_multipl').empty();
              
              $.each(city, function(id, data)
              {
                  var opt = $('<option />');
                  opt.val(data.city_id);
                  opt.text(data.city_name);
                  $("#anc_city_multipl").append(opt); 
              });
              
              $('#anc_city_multipl').trigger("chosen:updated");
         });
      });
      
     
     
     /* Partner Preference : Religion & Caste Dropdowns for search - Start */
      
      var post_url_part_caste = baseurl + "user/getCasteByReligionIdMultiple/";
      
      $('#part_religion_multipl').change(function(){
          
          var r_id = new Array(); 
          
          r_id = $('#part_religion_multipl').val();
          
              $.ajax({
              type  : "POST",
              url   :  post_url_part_caste,
              data  : {religion_id : r_id},
              async : false,
              }).done(function(caste)
              {
                  $('#part_caste_multipl').empty();
                  
                  $.each(caste, function(cast_id, cast){
                      var opt = $('<option />');
                      opt.val(cast.cast_id);
                      opt.text(cast.cast);
                      $("#part_caste_multipl").append(opt);
                  });
                  
                  $('#part_caste_multipl').trigger("chosen:updated");
              });
        });
        
        
       
       var post_url_part_subcaste = baseurl + "user/getSubCasteByCasteIdMultiple/";
       
       $('#part_caste_multipl').change(function(){
           
           var caste_id = $('#part_caste_multipl').val();
                      
               $.ajax({
                  type  : "POST",
                  url   : post_url_part_subcaste,
                  data  : {cast_id : caste_id},
                  async : false
               }).done(function(sub_caste){
                  
                  $('#part_sub_caste_multipl').empty();
                      
                  $.each(sub_caste, function(subcast_id, subcast){
                      var opt = $('<option />');
                      opt.val(subcast.subcast_id);
                      opt.text(subcast.subcast);
                      $("#part_sub_caste_multipl").append(opt);
                  });     
                  
                  $('#part_sub_caste_multipl').trigger("chosen:updated");
               });
       });
      
      /* Partner Preference : Religion & Caste Dropdowns for search - End  */
});