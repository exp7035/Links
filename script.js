// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded successfully!');

  // Set Dark Mode as Default
  document.documentElement.setAttribute('data-theme', 'dark');
  const themeText = document.getElementById('theme-text');

  // Toggle Light/Dark Mode
  const checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    // Update the toggle text
    if (newTheme === 'dark') {
      themeText.textContent = '☀️ Light Mode';
    } else {
      themeText.textContent = '🌙 Dark Mode';
    }
  });

  // Floating Social Media Icons
  const socialIcons = document.querySelectorAll('.link-button .icon');
  socialIcons.forEach(icon => {
    let direction = Math.random() > 0.5 ? 1 : -1; // Randomize floating direction
    icon.style.animation = `float ${Math.random() * 2 + 3}s infinite ease-in-out`;
    icon.style.transform = `translateY(${direction * 3}px)`; // Initial offset
  });

  // Hover Effects on Links
  const linkButtons = document.querySelectorAll('.link-button');
  linkButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
      button.style.boxShadow = `0 10px 20px var(--hover-color)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = 'none';
    });
  });

  // Touch Events for Mobile
  linkButtons.forEach(button => {
    button.addEventListener('touchstart', () => {
      button.style.transform = 'scale(1.05)';
      button.style.boxShadow = `0 10px 20px var(--hover-color)`;
    });

    button.addEventListener('touchend', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = 'none';
    });
  });
});
