const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function() {
    console.log("I'm ready...")
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});