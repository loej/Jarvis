/* Welcome to ~/Jarvis!. A Simple startup page for chrome. The html/css/js files will be commented thoroughly. */

function showTree() {
    /* Value is inline text by default. */

    document.getElementById('treeText').style.display = ''
}
function showPrompt() {
    document.getElementById('secondPrompt').style.display = ''
}

setTimeout(showTree, 4100)
setTimeout(showPrompt, 4200)
