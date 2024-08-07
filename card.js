document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("orderForm");
    const button = document.querySelector("button");
    const inputs = form.querySelectorAll("input[required]");

    button.addEventListener("click", function(event) {
        let allValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allValid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (!allValid) {
            event.preventDefault();
            alert("Please fill in all required fields.");
        } else {
            form.submit();
        }
    });
});
