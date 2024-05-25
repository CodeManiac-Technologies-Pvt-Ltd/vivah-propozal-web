/**
 * @author Kishor Mali
 * 
 * This JS contain chosen validation code
 */

$(document).ready(function(){

    $("#part_marital_status").change(function(){
       
       var foo = new Array();
       
       $("#part_marital_status").each(function(i, selected){
           foo = $(selected).val();
       });
       
       if( ($.inArray("2",foo) > -1) || ($.inArray("4", foo) > -1) || ($.inArray("5", foo) > -1) )
       {
           $("#part_childs").prop('disabled',false);
       }
       else
       {
           $("#part_childs").prop('disabled',true);
       }
   }); 
});