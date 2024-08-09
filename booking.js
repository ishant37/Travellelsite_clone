var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById("darkchenge");
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
});
