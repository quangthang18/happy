const btn = document.getElementById("btn");
 const   happy = document.getElementById("happy");
const overlow = document.getElementById("overlow");

btn.addEventListener('click', function(){
    hide();
    show();
})

function show() {
    happy.style.display="block";
    happy.style.transition="all .3s";
}
function hide() {
    overlow.style.display="block";
}