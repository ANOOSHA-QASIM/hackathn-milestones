function generateUserResume() {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var linkedin = document.getElementById("linkedin").value;
    var objective = document.getElementById("objective").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value.trim().split(",");
    var certifications = document.getElementById("certifications").value;
    var experience = document.getElementById("experience").value;
    document.getElementById("nameDisplay").innerText = name;
    document.getElementById("phoneDisplay").innerText = phone;
    document.getElementById("emailDisplay").innerText = email;
    document.getElementById("linkedinDisplay").innerText = linkedin;
    document.getElementById("objectiveDisplay").innerText = objective;
    document.getElementById("educationDisplay").innerText = education;
    document.getElementById("certificationsDisplay").innerText = certifications;
    document.getElementById("experienceDisplay").innerText = experience;
    var skillsList = document.getElementById("skillsDisplay");
    skillsList.innerHTML = "";
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    var pictureInput = document.getElementById("profilePicture");
    var pictureFile = pictureInput.files ? pictureInput.files[0] : null;
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
    if (!name || !phone || !email || !skills || !pictureFile) {
        alert("Please fill out all required fields (Name, Phone, Email, Skills, and upload a Profile Picture).");
        return;
    }
    var form = document.getElementById("resumeForm");
    var formElements = form.elements;
    for (var i = 0; i < formElements.length; i++) {
        var element = formElements[i];
        element.disabled = true;
    }
}
function toggleResumeSkillsSection() {
    var skillsSection = document.getElementById("skillsSection");
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
}
