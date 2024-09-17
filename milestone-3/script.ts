function generateUserResume() {

    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.trim().split(",");
    const certifications = (document.getElementById("certifications") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

 
    (document.getElementById("nameDisplay") as HTMLElement).innerText = name;
    (document.getElementById("phoneDisplay") as HTMLElement).innerText = phone;
    (document.getElementById("emailDisplay") as HTMLElement).innerText = email;
    (document.getElementById("linkedinDisplay") as HTMLElement).innerText = linkedin;
    (document.getElementById("objectiveDisplay") as HTMLElement).innerText = objective;
    (document.getElementById("educationDisplay") as HTMLElement).innerText = education;
    (document.getElementById("certificationsDisplay") as HTMLElement).innerText = certifications;
    (document.getElementById("experienceDisplay") as HTMLElement).innerText = experience;


    const skillsList = document.getElementById("skillsDisplay") as HTMLUListElement;
    skillsList.innerHTML = ""; 
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });


    const pictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const pictureFile = pictureInput.files ? pictureInput.files[0] : null;

    if (pictureFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageSrc = e.target?.result as string;
            const imgElement = document.getElementById("profilePictureDisplay") as HTMLImageElement;
            imgElement.src = imageSrc;
        };
        reader.readAsDataURL(pictureFile); 
    }

if (!name || !phone || !email || !skills || !pictureFile) {
    alert("Please fill out all required fields (Name, Phone, Email, Skills, and upload a Profile Picture).");
    return; 
}

    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const formElements = form.elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i] as HTMLInputElement | HTMLTextAreaElement;
        element.disabled = true; 
    }
}

function toggleResumeSkillsSection() {
    const skillsSection = document.getElementById("skillsSection") as HTMLElement;
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block"; 
    } else {
        skillsSection.style.display = "none"; 
    }
}
