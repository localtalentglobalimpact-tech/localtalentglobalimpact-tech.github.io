
let sendEmailClient = (event) => {
    event.preventDefault(); // prevent default form reload

    const data = getData();
    makeHttpRequest(data, '/client');
}

let sendEmailCollaborator = (event) => {
    event.preventDefault(); // prevent default form reload

    const data = getData();
    makeHttpRequest(data, '/collaborator');
}

let sendEmailConsulting = (event) => {
    event.preventDefault(); // prevent default form reload

    const data = getData();
    makeHttpRequest(data, '/consulting');
}

let sendEmailMentorship = (event) => {
    event.preventDefault(); // prevent default form reload

    const data = getData();
    makeHttpRequest(data, '/mentorship');
}

let getData = () => {
    const data = {
        fullName: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phoneNumber: document.querySelector("#phone").value,
        message: document.querySelector("#message").value
    }

    return data;
}


let makeHttpRequest = (data, endpoint) => {
    const url = "http://localhost:8081/send/mail";

    // Send request using fetch
    fetch(url + endpoint, {  // your backend endpoint
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert("✅ Form submitted successfully!");
            } else {
                alert("❌ Failed to submit form.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("⚠️ Something went wrong.");
        });
}


// document.getElementById("contactForm").addEventListener("submit", sendEmailClient);
var cf = document.getElementById("contactForm");
if(cf){
    cf.addEventListener("submit", sendEmailClient);
}


// document.getElementById("contactFormCollaborator").addEventListener("submit", sendEmailCollaborator);
var cfc = document.getElementById("contactFormCollaborator")
if(cfc){
    cfc.addEventListener("submit", sendEmailCollaborator);
}


var mentorshipContactForm = document.getElementById("mentorshipContactForm")
if(mentorshipContactForm){
    mentorshipContactForm.addEventListener("submit", sendEmailMentorship);
}

// 
var consultingContactForm = document.getElementById("consultingContactForm")
if(consultingContactForm){
    consultingContactForm.addEventListener("submit", sendEmailConsulting);
}

