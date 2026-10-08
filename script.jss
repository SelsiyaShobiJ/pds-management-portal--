// Sidebar Toggle Handler
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

// Portal Switcher Functionality
function switchRole(role) {
    const userNav = document.getElementById('userNavGroup');
    const staffNav = document.getElementById('staffNavGroup');
    const userName = document.getElementById('userName');
    const userRoleBadge = document.getElementById('userRoleBadge');
    const userAvatar = document.getElementById('userAvatar');

    if (role === 'staff') {
        userNav.classList.add('hidden');
        staffNav.classList.remove('hidden');
        userName.textContent = "S. DINESH";
        userRoleBadge.textContent = "Staff ID: 1042";
        userAvatar.textContent = "D";
        switchTab('staff-home', staffNav.querySelectorAll('.nav-item')[0]);
    } else {
        staffNav.classList.add('hidden');
        userNav.classList.remove('hidden');
        userName.textContent = "SARA";
        userRoleBadge.textContent = "User ID: 12345";
        userAvatar.textContent = "S";
        switchTab('user-home', userNav.querySelectorAll('.nav-item')[0]);
    }
}

// Navigation Tab Switcher
function switchTab(tabId, element) {
    // Hide all tab pages
    const pages = document.querySelectorAll('.tab-page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Display selected tab page
    const targetPage = document.getElementById(tabId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Set active link highlight
    if (element) {
        element.classList.add('active');
    }
}

// Modal Controls
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Authentication Step Switches inside Modal
function switchAuthStep(stepId) {
    document.getElementById('loginStep').classList.add('hidden');
    document.getElementById('otpStep').classList.add('hidden');
    document.getElementById('forgotStep').classList.add('hidden');

    document.getElementById(stepId).classList.remove('hidden');
}

// Staff Search Demonstration
function showStaffSearchResult() {
    const resultBox = document.getElementById('staffSearchResult');
    resultBox.classList.remove('hidden');
}

// Quantity Adjuster for Staff Stock Update
function adjustQty(amount) {
    const qtyInput = document.getElementById('stockQty');
    let currentVal = parseInt(qtyInput.value) || 0;
    currentVal += amount;
    if (currentVal < 0) currentVal = 0;
    qtyInput.value = currentVal;
}