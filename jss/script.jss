// Auto-advance OTP Inputs
document.addEventListener("DOMContentLoaded", function () {
  const otpInputs = document.querySelectorAll(".otp-box");

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      if (e.target.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });
});

// Toggle password visibility
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input) {
    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  }
}