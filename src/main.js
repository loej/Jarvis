/* Welcome to ~/Jarvis!. A Simple startup page for chrome. The html/css/js files will be commented thoroughly. */

/* Functions that sets a timeout for both prompts to be displayed. */
function showTree() {
    

    document.getElementById('treeText').style.display = ''
}

function showPrompt() {
    document.getElementById('secondPrompt').style.display = ''
}

setTimeout(showTree, 4100)
setTimeout(showPrompt, 4200)
