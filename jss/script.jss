// Auth Screen Switcher
function showAuthForm(viewId) {
  const stepViews = document.querySelectorAll('.auth-step-view');
  stepViews.forEach(view => view.classList.add('hidden'));

  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.remove('hidden');
  }
}

// User Login Action
function handleUserSubmit(event) {
  event.preventDefault();

  // Set Profile Header Values
  document.getElementById('displayName').textContent = "SARA";
  document.getElementById('displayRole').textContent = "User ID: 12345";
  document.getElementById('avatarIcon').textContent = "S";

  // Show User Navigation Menu
  document.getElementById('userMenu').classList.remove('hidden');
  document.getElementById('staffMenu').classList.add('hidden');

  unlockMainApp('user-home-page');
}

// Staff Login Action
function handleStaffSubmit(event) {
  event.preventDefault();

  // Set Profile Header Values
  document.getElementById('displayName').textContent = "S. DINESH";
  document.getElementById('displayRole').textContent = "Staff ID: 1042";
  document.getElementById('avatarIcon').textContent = "D";

  // Show Staff Navigation Menu
  document.getElementById('staffMenu').classList.remove('hidden');
  document.getElementById('userMenu').classList.add('hidden');

  unlockMainApp('staff-home-page');
}

// Open Dashboard
function unlockMainApp(defaultTabId) {
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('appContainer').classList.remove('hidden');
  showTab(defaultTabId);
}

// Perform Logout
function performLogout() {
  document.getElementById('appContainer').classList.add('hidden');
  document.getElementById('authScreen').classList.remove('hidden');
  showAuthForm('commonEntry');
}

// Registration Submit
function handleRegistrationSubmit(event) {
  event.preventDefault();
  alert("Registration Successful! Please proceed to login.");
  showAuthForm('userLogin');
}

// OTP Functions
function sendOtpCode() {
  document.getElementById('otpStep1').classList.add('hidden');
  document.getElementById('otpStep2').classList.remove('hidden');
}

function verifyOtpCode() {
  alert("OTP Verified! Password reset instructions sent.");
  showAuthForm('commonEntry');
}

// Navigation Tab Switcher
function showTab(tabId, element) {
  const tabs = document.querySelectorAll('.content-tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  if (element) {
    element.classList.add('active');
  }
}

// Sidebar Toggle
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('appSidebar').classList.toggle('collapsed');
});

// Staff Demo Tools
function searchCardDemo() {
  document.getElementById('searchResult').classList.remove('hidden');
}

function changeQty(amount) {
  const input = document.getElementById('qtyVal');
  let currentVal = parseInt(input.value) || 0;
  currentVal += amount;
  if (currentVal < 0) currentVal = 0;
  input.value = currentVal;
}