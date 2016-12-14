function showfunc()
{
setTimeout("linkedin_visible()",250);
setTimeout("git_visible()",500);
setTimeout("fb_visible()",750);
}
function linkedin_visible()
{
document.getElementById("linkedin_id").style.visibility = "visible";
}
function git_visible()
{
document.getElementById("github_id").style.visibility = "visible";
}
function fb_visible()
{
document.getElementById("facebook_id").style.visibility = "visible";
}
window.onload=showfunc;

function imgover()
{
/*alert("jgchvb");
img1=document.getElementById("linkedin_id");
img1.style.position= 'relative';
img1.style.top = parseInt(img1.style.top) + 100 + 'px';*/
document.getElementById("linkedin_id").style.backgroundColor = '#0077b5';
setTimeout("disablein()",300);
}
function disablein()
{
document.getElementById("linkedin_id").style.backgroundColor = 'black';
}
function imgover1()
{
document.getElementById("facebook_id").style.backgroundColor = '#3b5998';
setTimeout("disablefb()",300);
}
function disablefb()
{
document.getElementById("facebook_id").style.backgroundColor = 'black';
}
function imgover2()
{
document.getElementById("github_id").style.backgroundColor = 'white';
setTimeout("disablegit()",300);
}
function disablegit()
{
document.getElementById("github_id").style.backgroundColor = 'black';
}