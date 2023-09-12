const biscuit = document.querySelector("#biscuit");
const button = document.querySelector("#button");

biscuit.addEventListener('click', function () {
    document.getElementById("div1").classList.remove('visible');
    document.getElementById("div1").classList.add('hidden');
    document.getElementById("div2").classList.remove('hidden');
    document.getElementById("div2").classList.add('visible');
});

button.addEventListener('click', function (event) {
    event.preventDefault();
    
    document.getElementById("div2").classList.remove('visible');
    document.getElementById("div2").classList.add('hidden');
    document.getElementById("div1").classList.remove('hidden');
    document.getElementById("div1").classList.add('visible');
});