$(document).ready(function(){
  $("form").submit(function(event){
    var gender = $("#gender").val();
    var age = parseInt($("#age").val());
    console.log(age);

    if (age >= 17 && gender === "Male"){
      $("#oldMen").show();

    }else if (age < 17 && gender === "Male"){
      $("#youngMen").show();

    }else if (age >= 17 && gender === "Female"){
      $("#oldWomen").show();

    }else if (age < 17 && gender === "Female"){
      $("#youngWomen").show();

    } else {
    alert("please put a valid number");
    return;
    }

    console.log(age);
    event.preventDefault();
  });
});
