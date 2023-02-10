document.querySelector("#new-blog-form").addEventListener("submit",e=>{
    e.preventDefault();
    const blogObj = {
        blog:document.querySelector("#blog-input").value
    }
    console.log(blogObj)
    fetch("/api/tech",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("")
        }
    })
})