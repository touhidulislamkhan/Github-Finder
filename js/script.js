let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', ()=>{
    let userText = searchUser.value;
    if (userText != ''){
        //fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then (data=> {
            if (data.message == 'Not Found'){
                //show alert
                ui.showAlert('User Not Found!', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data);
            }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
});