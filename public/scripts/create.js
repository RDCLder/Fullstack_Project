// Includes all JS for create community and discuss topic

// ------------------------------------------------------------------------------

// Discuss Topic JS
$(document).ready(function(){
    $('mediaDrgDrpBox input').change(function () {
        $('mediaDrgDrpBox label').text(this.files.length + " file(s) selected");
    });
});
// End of Discuss Topic JS