document.querySelector('#signUpForm').addEventListener('submit', e => {
    e.preventDefault();
    const signUpObj = {
        username: document.querySelector('#signupUsername').value,
        password: document.querySelector('#signupPassword').value
    }
    console.log(signUpObj)
    fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify(signUpObj),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.href = '/profile'
        } else {
            alert('Error creating account')
        }
    })
})