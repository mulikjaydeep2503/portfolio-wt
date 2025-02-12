function collectUserInfo() {
    let name = prompt("Enter your name:");
    let profession = prompt("Enter your profession:");
    let profilePic = prompt("Enter the URL of your profile picture:");

    if (name && profession && profilePic) {
        alert(`Name: ${name}\nProfession: ${profession}`);
        console.log(`Name: ${name}`);
        console.log(`Profession: ${profession}`);
        console.log(`Profile Picture URL: ${profilePic}`);
        
        document.getElementById("name").textContent = name;
        document.getElementById("profession").textContent = profession;
        document.getElementById("profilePic").src = profilePic;
    } else {
        alert("Please fill out all the fields.");
    }
}

function updateUserInfo() {
    collectUserInfo();
}
