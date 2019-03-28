$(document).ready(function(){
  $("form").submit(function(event){
    var gender = $("#gender").val();
    var age = $("#age").val();

    if (age >= 17 && gender === "Male"){
      $("#oldMen").show();

    }else if (age <17 && gender === "Male"){
      $("#youngMen").show();

    }else if (age >= 17 && gender === "Female"){
      $("#oldWomen").show();

    }else if (age < 17 && gender === "Female"){
      $("#youngWomen").show();

    }else{
      return;
    }

    console.log(age);
    console.log(gender);
    event.preventDefault();
  });
});
