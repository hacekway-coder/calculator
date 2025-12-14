
/**
 * @param {string} birthDate
 * @returns {number} .
 */
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}


function displayAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    if (birthDateInput) {
        const age = calculateAge(birthDateInput);
        document.getElementById('ageResult').textContent = `Your age is: ${age} years`;
    } else {
        document.getElementById('ageResult').textContent = 'Please enter a valid birth date.';
    }
}
