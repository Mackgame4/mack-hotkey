window.addEventListener('message', function (event) {
    ShowHotKey(event.data);
});

function ShowHotKey(data) {
    if (data.exit == false) {
        document.getElementById("text").innerHTML = data.text;
        document.getElementById("key").innerHTML = data.hotkey;
        $('#pressto span').text(data.hotkey);
        //$("#hotkey-container").fadeIn();
        document.getElementById("hotkey-container").style.display = "flex";
    } else {
        //$("#hotkey-container").fadeOut();
        document.getElementById("hotkey-container").style.display = "none";
    }
}