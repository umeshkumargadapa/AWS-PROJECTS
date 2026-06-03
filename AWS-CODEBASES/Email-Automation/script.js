const apiUrl =
"";

async function sendForm(){

    const data = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        phone:
        document.getElementById("phone").value,

        subject:
        document.getElementById("subject").value,

        message:
        document.getElementById("message").value
    };

    const response = await fetch(

        apiUrl,

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:
            JSON.stringify(data)
        }
    );

    const result =
    await response.json();

    document.getElementById("result")
    .innerHTML =
    result.message || result.error;
}