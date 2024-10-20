window.onload = function() {
    document.getElementById("popup").style.display = "block"; 
    document.getElementById("content").style.filter = "blur(5px)"; 
};

function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("content").style.filter = "none"; 
}
