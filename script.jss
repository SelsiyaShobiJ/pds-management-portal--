// Screen Navigator within Auth Card
function goToScreen(screenId) {
    // Hide all auth screens
    const screens = document.querySelectorAll('.auth-screen');
    screens.forEach(s => s.classList.add('hidden'));

    // Show target screen
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
    }
}

// User Login Handler
function handleUserLogin(event) {
    event.preventDefault();
    
    // Set User Profile Data
    document.getElementById('userName').textContent = "SARA";
    document.getElementById('userRoleBadge').textContent = "User ID: 12345";
    document.getElementById('userAvatar').textContent = "S";

    // Navigation menus
    document.getElementById('userNavGroup').classList.remove('hidden');
    document.getElementById('staffNavGroup').classList.add('hidden');

    // Unlock App
    unlockDashboard('user-home');
}

// Staff Login Handler
function handleStaffLogin(event) {
    event.preventDefault();

    // Set Staff Profile Data
    document.getElementById('userName').textContent = "S. DINESH";
    document.getElementById('userRoleBadge').textContent = "Staff ID: 1042";
    document.getElementById('userAvatar').textContent = "D";

    // Navigation menus
    document.getElementById('staffNavGroup').classList.remove('hidden');
    document.getElementById('userNavGroup').classList.add('hidden');

    // Unlock App
    unlockDashboard('staff-home');
}

// Complete Login & Show Dashboard
function unlockDashboard(defaultTab) {
    document.getElementById('authView').classList.add('hidden');
    document.getElementById('mainDashboardView').classList.remove('hidden');
    switchTab(defaultTab);
}

// Handle Logout
function handleLogout() {
    document.getElementById('mainDashboardView').classList.add('hidden');
    document.getElementById('authView').classList.remove('hidden');
    goToScreen('commonLandingScreen');
}

// Registration Submit
function handleRegistration(event) {
    event.preventDefault();
    alert("Registration Successful! Please login.");
    goToScreen('userLoginScreen');
}

// Forgot Password Flow
function sendOtp() {
    document.getElementById('forgotStep1').classList.add('hidden');
    document.getElementById('forgotStep2').classList.remove('hidden');
}

function verifyOtp() {
    alert("OTP Verified Successfully! Password reset link sent.");
    goToScreen('commonLandingScreen');
}

// Tab Switcher inside Dashboard
function switchTab(tabId, element) {
    const pages = document.querySelectorAll('.tab-page');
    pages.forEach(p => p.classList.remove('active'));

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const targetPage = document.getElementById(tabId);
    if (targetPage) targetPage.classList.add('active');

    if (element) element.classList.add('active');
}

// Sidebar Toggle
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
});