// Includes all toggle and sidebar functions

// --------------------------------------------------------------------------------

// Toggle Cards JS
$(document).ready(() => {
    function toggledisplay(elementID) {
        if (document.getElementById(elementID).style.display === 'none') {
            document.getElementById(elementID).style.display = 'block';
        }
        else {
            document.getElementById(elementID).style.display = 'none';
        }
    }
});
// End of Toggle Cards JS

// --------------------------------------------------------------------------------

// Toggle Trending Communities
// $(document).ready(function () {
//     $trendingCommunities = $(".communityBody").toArray();
//     $trendingCommunities[i].onclick
//     $(".communityBody").style.display = "none";
// });
// End of Toggle Trending Communities

// --------------------------------------------------------------------------------

// Sidebar JS
$(document).ready(() => {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $('#dismiss').on('click', () => {
        $('#sidebar').removeClass('active');
        // $('.overlay').removeClass('active');
    });
    $('#sidebarCollapse').on('click', () => {
        $('#sidebar').addClass('active');
        // $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
// End of Sidebar JS