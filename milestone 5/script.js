function generateUserResume() {
    var userName = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var linkedin = document.getElementById("linkedin").value;
    var objective = document.getElementById("objective").value;
    var education = document.getElementById("education").value.trim();
    var certifications = document.getElementById("certifications").value;
    var experience = document.getElementById("experience").value;
    var skillsInput = document.getElementById("skills").value.trim();
    var skillsArray = skillsInput.split(/,|\n/).map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill.length > 0; });
    var pictureInput = document.getElementById("profilePicture");
    var pictureFile = pictureInput.files ? pictureInput.files[0] : null;
    if (!userName || !phone || !email || !education || skillsArray.length === 0 || !pictureFile) {
        alert("Please fill out all required fields (Name, Phone, Email, Education, Skills, and upload a Profile Picture).");
        return;
    }
    document.getElementById("nameDisplay").innerText = userName;
    document.getElementById("phoneDisplay").innerText = phone;
    document.getElementById("emailDisplay").innerText = email;
    document.getElementById("linkedinDisplay").innerText = linkedin;
    document.getElementById("objectiveDisplay").innerText = objective;
    document.getElementById("educationDisplay").innerText = education;
    document.getElementById("certificationsDisplay").innerText = certifications;
    document.getElementById("experienceDisplay").innerText = experience;
    var skillsDisplay = document.getElementById("skillsDisplay");
    skillsDisplay.innerHTML = "";
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill;
        skillsDisplay.appendChild(li);
    });
    if (pictureFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            var imgElement = document.getElementById("profilePictureDisplay");
            imgElement.src = imageSrc;
        };
        reader.readAsDataURL(pictureFile);
    }
    var resumeData = {
        userName: userName,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skillsArray: skillsArray,
    };
    localStorage.setItem(userName, JSON.stringify(resumeData));
    var shareableURL = "".concat(window.location.href, "?username=").concat(encodeURIComponent(userName));
    var shareableLinkContainer = document.getElementById('shareable-link-container');
    var shareableLinkElement = document.getElementById('shareable-link');
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
}
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('name').value = resumeData.userName;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skillsArray.join(", ");
            generateUserResume();
        }
    }
});
function toggleResumeSkills() {
    var skillsSection = document.getElementById("skillsSection");
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
}
function downloadResumeAsPDF() {
    window.print();
}
