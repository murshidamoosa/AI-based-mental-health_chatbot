document.getElementById("start-chat").addEventListener("click", function () {
    document.getElementById("landing-page").style.display = "none";
    document.getElementById("chat-container").classList.remove("hidden");
});

document.getElementById("chat-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let user_input = document.getElementById("user_input").value;
    if (user_input.trim() === "") return;

    let chatBox = document.getElementById("chat-box");

    // Add user's message
    chatBox.innerHTML += `<div><strong>You:</strong> ${user_input}</div>`;
    document.getElementById("user_input").value = "";

    let response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: user_input })
    });

    let result = await response.json();
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${result.response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
});
