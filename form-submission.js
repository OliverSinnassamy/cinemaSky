var form = document.getElementById('signup');

formData = $("#signup").serializeArray();
console.log(formData);

function formSubmit(event) {
    console.log("here");
    fetch("http://localhost:3000/users", {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type" : "application/json"
        },
        body : formData
    }
    ).then((response) => {
        alert("Data Received...");
    }).catch((error) => {
        console.log(error);
    });
}