// var topicTextBody = document.getElementById("topicTextBody");
// if (topicTextBody.addEventListener) {
//     topicTextBody.addEventListener('keydown', this.keyHandler, false);
// } else if (topicTextBody.attachEvent) {
//     topicTextBody.attachEvent('onkeydown', this.keyHandler); /* damn IE hack */
// }

// var topicLinkBody = document.getElementById("topicLinkBody");
// if (topicLinkBody.addEventListener) {
//     topicLinkBody.addEventListener('keydown', this.keyHandler, false);
// } else if (topicLinkBody.attachEvent) {
//     topicLinkBody.attachEvent('onkeydown', this.keyHandler); /* damn IE hack */
// }

// var submitComment = document.getElementById("submitComment");
// if (submitComment.addEventListener) {
//     submitComment.addEventListener('keydown', this.keyHandler, false);
// } else if (submitComment.attachEvent) {
//     submitComment.attachEvent('onkeydown', this.keyHandler); /* damn IE hack */
// }

// function keyHandler(e) {
//     var TABKEY = 9;
//     if (e.keyCode == TABKEY) {
//         this.value += "\t";
//         if (e.preventDefault) {
//             e.preventDefault();
//         }
//         return false;
//     }
// }

$("textarea").keydown(function(e) {
    if(e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
            end = this.selectionEnd;

        var $this = $(this);

        // set textarea value to: text before caret + tab + text after caret
        $this.val($this.val().substring(0, start)
                    + "\t"
                    + $this.val().substring(end));

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        return false;
    }
});