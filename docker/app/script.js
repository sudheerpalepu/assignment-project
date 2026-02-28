document.getElementById("btn").addEventListener("click", function() {
    const greeting = document.getElementById("greeting");
    greeting.textContent = "Hello Docker! 👋";
    alert("You clicked the button!");
});