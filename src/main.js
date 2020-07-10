/* Welcome to ~/Jarvis!. A Simple startup page for chrome. The html/css/js files will be commented thoroughly. */

/* Allows .dev to link to youtube (for now). */
function linkFunction() {
    let search = 'dev'
    document.getElementById('dev').innerHTML = search.link('https://github.com/loej')
}

function showTree() {
    document.getElementById('treeText').style.display = 'inline'
}

setTimeout(showTree,4100)