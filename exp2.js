// Subdomain options for each domain
const subdomainOptions = {
    "Central Government Exams": [
        "UPSC IAS/IPS/IFS", "UPSC IFS", "UPSC IPS", "UPSC IRS", "SSC CGL", 
        "SSC CHSL", "SSC JE", "RBI Grade B Officer", "RBI Assistant", "IBPS PO", 
        "IBPS Clerk", "IBPS SO", "NABARD Grade A", "NABARD Grade B", "DRDO Scientist", 
        "ISRO Scientist", "ECIL Technical Officer"
    ],
    "State Government Exams": [
        "TNPSC Group I", "TNPSC Group II", "TNPSC Group IV", "UPPSC PCS", 
        "UPPSC RO", "MPSC State Services Exam", "MPSC Police Sub Inspector", 
        "KPSC KAS", "BPSC Bihar PCS", "RPSC Rajasthan Police", 
        "WBPSC West Bengal PCS", "MPPSC Madhya Pradesh PCS", "APPSC Andhra Pradesh PSC"
    ],
    "Bank Exams": [
        "IBPS PO", "IBPS Clerk", "IBPS SO", "SBI PO", "SBI Clerk", "SBI SO", 
        "RBI Grade B Officer", "RBI Assistant", "NABARD Grade A", "NABARD Grade B", 
        "IBPS RRB PO", "IBPS RRB Clerk"
    ],
    "Railway Exams": [
        "RRB NTPC", "RRB JE", "RRB Group D", "RRB ALP", "RRB Staff Nurse"
    ],
    "Defense Exams": [
        "UPSC NDA", "UPSC CDS", "Army Soldier Recruitment", "Navy AA", "Navy SSR", 
        "Air Force Group X", "Air Force Group Y", "CRPF Constable", 
        "BSF Head Constable", "ITBP Sub Inspector"
    ],
    "Teaching Exams": [
        "CTET", "UPTET", "KTET", "HTET", "DSSSB TGT/PGT", "NVS TGT/PGT", 
        "KVS TGT/PGT", "APSET", "GSET", "CG SET", "MP SET", "TNSET"
    ],
    "Others": [
        "ICAR AIEEA", "ICAR JRF", "CSIR NET", "UGC NET", "GATE", "NEET", 
        "AIIMS MBBS", "AIIMS PG", "JIPMER MBBS", "JIPMER PG", "CLAT", 
        "AILET", "NIFT Entrance Exam", "NID Entrance Exam"
    ]
};

    // ... other subdomain options
};

// Function to update subdomains based on selected domain
function updateSubdomains() {
    const domain = document.getElementById("domain").value;
    const subdomain = document.getElementById("subdomain");

    // Clear current subdomains
    subdomain.innerHTML = "";

    // Add new options based on the selected domain
    if (domain && subdomainOptions[domain]) {
        subdomainOptions[domain].forEach(sub => {
            const option = document.createElement("option");
            option.value = sub;
            option.textContent = sub;
            subdomain.appendChild(option);
        });
    }
}

// Real-time validation function
function validateInput() {
    const form = document.forms['career-quest-registration-form'];
    const password = form['password'].value;
    const confirmPassword = form['confirmPassword'].value;
    const email = form['email'].value;
    const phone = form['phone'].value;
    const subdomain = form['subdomain'];

    let isValid = true;

    // Password validation
    const passwordErrors = {
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        length: password.length >= 8
    };

    Object.keys(passwordErrors).forEach(key => {
        document.getElementById(key + 'Error').style.display = passwordErrors[key] ? 'none' : 'block';
        if (!passwordErrors[key]) isValid = false;
    });

    // Confirm password validation
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.style.display = password === confirmPassword ? 'none' : 'block';
    if (password !== confirmPassword) isValid = false;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');
    emailError.style.display = emailPattern.test(email) ? 'none' : 'block';
    if (!emailPattern.test(email)) isValid = false;

    // Phone validation
    const phoneError = document.getElementById('phoneError');
    phoneError.style.display = phone.length === 10 && /^\d{10}$/.test(phone) ? 'none' : 'block';
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) isValid = false;

    // Subdomain validation
    const subdomainError = document.getElementById('subdomainError');
    subdomainError.style.display = subdomain.selectedOptions.length > 0 ? 'none' : 'block';
    if (subdomain.selectedOptions.length === 0) isValid = false;

    return isValid;
}

// Event listeners for real-time validation
document.getElementById('password').addEventListener('input', validateInput);
document.getElementById('confirmPassword').addEventListener('input', validateInput);
document.getElementById('email').addEventListener('input', validateInput);
document.getElementById('phone').addEventListener('input', validateInput);
document.getElementById('subdomain').addEventListener('change', validateInput);

// Call updateSubdomains when the domain changes
document.getElementById('domain').addEventListener('change', updateSubdomains);
