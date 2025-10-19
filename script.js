//your JS code here. If required.
 const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit');
    const existingButton = document.getElementById('existing');

    // Check if credentials are saved in localStorage
    const savedUser = localStorage.getItem('username');
    const savedPass = localStorage.getItem('password');

    if (savedUser && savedPass) {
      existingButton.style.display = 'block'; // Show "Login as existing user" button
    }

    // Form submission behavior
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form from reloading the page

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        alert('Please enter both username and password.');
        return;
      }

      alert(`Logged in as ${username}`);

      if (rememberCheckbox.checked) {
        // Store credentials
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingButton.style.display = 'block';
      } else {
        // Remove stored credentials
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingButton.style.display = 'none';
      }

      // Clear inputs
      usernameInput.value = '';
      passwordInput.value = '';
      rememberCheckbox.checked = false;
    });

    // Existing user login behavior
    existingButton.addEventListener('click', () => {
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });