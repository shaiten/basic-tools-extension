let popup_toggle = document.getElementById('checkbox');
let toggle1 = document.getElementById('checkbox1');
let toggle2 = document.getElementById('checkbox2');


///////////////////////////////////////////////////////////////////////////////
// toggle allowing popups to be toggled on or off
///////////////////////////////////////////////////////////////////////////////

checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        chrome.storage.session.set({ e: e.target.checked }).then(() => {
            console.log("Value was set");
        });
        nopop();
    } else {
        chrome.storage.session.set({ e: e.target.checked }).then(() => {
            console.log("Value was unset");
        });
        pop();
    }
});

function nopop() {
    window.open = function () {
        // Your custom logic to block popups goes here
        // For example, you can simply return false to block all popups
        return false;
    };
}
function pop() {

}