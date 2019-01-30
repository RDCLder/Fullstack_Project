// Includes all JS for create community and discuss topic

// ------------------------------------------------------------------------------

// Discuss Topic JS
$(document).ready(function() {
  $("mediaDrgDrpBox input").change(function() {
    $("mediaDrgDrpBox label").text(this.files.length + " file(s) selected");
  });
});

// $(function () {
//     $("#loginForm").submit((e) => {
//         e.preventDefault();
//          let shownVal = document.getElementById("communitySearchInput");
//          let community_id = document.querySelector("#communitySearch option[id='"+shownVal+"']").dataset.value;
//         $.post(
//             "login",
//             {
//                 // Parameters
//                 username: $("#loginUsername").val(),
//                 email: $("#loginUsername").val(),
//                 password: $("#loginPassword").val()
//             },
//             () => {
//                 // Success callback function
//                 console.log("Data passed to Login API");
//             }
//         );
//     });
// }); // End of jQuery

// End of Discuss Topic JS
