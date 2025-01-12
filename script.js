// Intialixze
updateTime();

function updateTime() {

    const d = new Date();
    const timeElement = document.getElementById("time");
    timeElement.innerHTML = d;

}
// Live time 
setInterval(updateTime, 1000);