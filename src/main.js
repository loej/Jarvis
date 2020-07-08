/* Welcome to ~/Jarvis!. A Simple startup page for chrome. The html/css/js files will be commented thoroughly. */

/* Allows .dev to link to youtube (for now). */
function linkFunction() {
    let search = 'dev'
    let result = search.link('https://www.youtube.com/')
    document.getElementById('dev').innerHTML = result
}