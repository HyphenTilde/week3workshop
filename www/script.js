$( document ).ready(function(){
    console.log("Page ready");
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
})

function ajaxPost(){
    var formData = {
        email : $("#email").val(),
        pass : $("#pass").val()
    }
    $.ajax({
        type: "POST",
        contentType : "application/json",
        url : window.location + "api/login",
        data : JSON.stringify(formData),
        dataType : 'json',
        success : function(user){
            if(user.valid == true){
                $("#loginform").removeClass("fail");
                $("#loginform").addClass("success");
            }else{
                $("#loginform").removeClass("success");
                $("#loginform").addClass("fail");
            }
            $("#postResultDiv").html("<p>" + "Post Successfully <br>" + "Email Address: " + user.email+ "</br>" + "Password: " + user.pass + "</br>" + "Valid User: " + user.valid + "</p>");
        },
        error : function(e){
            alert("Error")
            console.log("ERROR: ", e);
        }
    });
    resetData();
}

function resetData(){
    $("#email").val("");
    $("#pass").val("");
}