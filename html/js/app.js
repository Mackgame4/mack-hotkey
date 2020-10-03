var debug = false

window.addEventListener('message', function (event) {
    ShowHotKey(event.data);
});

function ShowHotKey(data) {
    if (data.exit == false) {
        // hotkey-container
        var container = document.createElement("div");
        container.id = `hotkey-container-${data.id}`;
        container.class = "hotkey-container";
        document.getElementById("body").appendChild(container);
        // key
        var key = document.createElement("div");
        key.id = `key-${data.id}`;
        key.class = "key";
        document.getElementById(`hotkey-container-${data.id}`).appendChild(key);
        // text
        var text = document.createElement("p");
        text.id = `text-${data.id}`;
        text.class = "text";
        document.getElementById(`hotkey-container-${data.id}`).appendChild(text);
        // pressto
        var pressto = document.createElement("p");
        pressto.id = `pressto-${data.id}`;
        pressto.class = "pressto";
        document.getElementById(`hotkey-container-${data.id}`).appendChild(pressto);
        // change values
        document.getElementById(`hotkey-container-${data.id}`).style = "width:270px;height:75px;position:absolute;bottom:10px;right:10px;display:none;flex-flow:row;flex-wrap:wrap;background-color:rgba(255,255,255,.7);border-radius:10px;";
        document.getElementById(`text-${data.id}`).innerHTML = data.text;
        document.getElementById(`text-${data.id}`).style = "position:absolute;font-size:27px;margin-top:7px;margin-left:85px;";
        document.getElementById(`key-${data.id}`).innerHTML = data.hotkey;
        document.getElementById(`key-${data.id}`).style = "position:absolute;font-size:27px;margin-top:13px;margin-left:20px;color:#fff;border-radius:3px;border:1px solid #fff;box-shadow:0 1px 1px rgba(0,0,0,.2),0 2px 0 0 rgba(255,255,255,.7) inset;padding:7px 10px;";
        document.getElementById(`pressto-${data.id}`).innerHTML = "Press [<span></span>] to interact";
        document.getElementById(`pressto-${data.id}`).style = "position:absolute;font-size:13px;margin-top:45px;margin-left:85px;";
        //$("#hotkey-container").fadeIn();
        document.getElementById(`hotkey-container-${data.id}`).style.display = "flex";
        if (debug == true) {
            console.log(data.id)
            console.log(data.text)
            console.log(data.hotkey)
            console.log(container.id)
        }
    } else {
        //$("#hotkey-container").fadeOut();
        document.getElementById(`hotkey-container-${data.id}`).style.display = "none";
        document.getElementById(`text-${data.id}`).innerHTML = "";
        document.getElementById(`key-${data.id}`).innerHTML = "";
        document.getElementById(`pressto-${data.id}`).innerHTML = "";
        if (debug == true) {
            console.log(data.id)
        }
    }
}