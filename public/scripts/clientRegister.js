$(function () {
    $("#registerForm").submit(e => {
        e.preventDefault();
        $.post(
            "register",
            {
                // Parameters
                username: $("#registerUsername").val(),
                email: $("#registerEmail").val(),
                password: $("#registerPassword").val()
            },
            () => {
                // Success callback function
                console.log("Data passed to Register API");
            }
        );
    });
}); // End of jQuery