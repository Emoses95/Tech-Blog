document.querySelector("#new-comment-form").addEventListener("submit", e => {
    e.preventDefault();
    const commentObj = {
        blog: document.querySelector("#comment-input").value
    }
    console.log(commentObj)
    fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify(commentObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload()
        } else {
            alert("Error creating comment")
        }
    })
})