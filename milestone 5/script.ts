function generateUserResume() {

    const userName = (document.getElementById("name") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
    const certifications = (document.getElementById("certifications") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;


    const skillsInput = (document.getElementById("skills") as HTMLTextAreaElement).value.trim();
    const skillsArray = skillsInput.split(/,|\n/).map(skill => skill.trim()).filter(skill => skill.length > 0);

    const pictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const pictureFile = pictureInput.files ? pictureInput.files[0] : null;

    if (!userName || !phone || !email || !education || skillsArray.length === 0 || !pictureFile) {
        alert("Please fill out all required fields (Name, Phone, Email, Education, Skills, and upload a Profile Picture).");
        return;
    }
    (document.getElementById("nameDisplay") as HTMLElement).innerText = userName;
    (document.getElementById("phoneDisplay") as HTMLElement).innerText = phone;
    (document.getElementById("emailDisplay") as HTMLElement).innerText = email;
    (document.getElementById("linkedinDisplay") as HTMLElement).innerText = linkedin;
    (document.getElementById("objectiveDisplay") as HTMLElement).innerText = objective;
    (document.getElementById("educationDisplay") as HTMLElement).innerText = education;
    (document.getElementById("certificationsDisplay") as HTMLElement).innerText = certifications;
    (document.getElementById("experienceDisplay") as HTMLElement).innerText = experience;


    const skillsDisplay = document.getElementById("skillsDisplay") as HTMLElement;
    skillsDisplay.innerHTML = ""; 
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsDisplay.appendChild(li);
    });

    if (pictureFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageSrc = e.target?.result as string;
            const imgElement = document.getElementById("profilePictureDisplay") as HTMLImageElement;
            imgElement.src = imageSrc;
        };
        reader.readAsDataURL(pictureFile);
    }
    const resumeData = {
        userName,
        email,
        phone,
        education,
        experience,
        skillsArray,
    };

    localStorage.setItem(userName, JSON.stringify(resumeData));
    const shareableURL = `${window.location.href}?username=${encodeURIComponent(userName)}`;

    const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
    const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('name') as HTMLInputElement).value = resumeData.userName;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skillsArray.join(", ");

            generateUserResume();
        }
    }
});
function toggleResumeSkills() {
    const skillsSection = document.getElementById("skillsSection") as HTMLElement;
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
}
function downloadResumeAsPDF() {
    window.print(); 
}
