document.querySelector('#signUpForm').addEventListener('submit',e=>{
    e.preventDefault();
    const signUpObj ={
        signUpForm:document.querySelector('#signUpForm').ariaValueMax,
        signUpPassword:document.querySelector('#signUpPassword').value
    }
    console.log(signUpObj)
    fetch('/api/users/password',{
        method:'POST',
        body:JSON.stringify(signUpObj),
        headers:{
            'Content-Type':"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href='/profile'
        }else{
            alert('trumpet sound')
        }
    })
})