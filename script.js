function updateClock() {
  const now = new Date();
  
  // Get time components
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Format time as HH:MM:SS
  const timeString = `${hours}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;
  
  // Get date components
  const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
  };
  const dateString = now.toLocaleDateString('en-US', options);
  
  // Get timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Update DOM elements
  document.getElementById('clock').innerHTML = timeString;
  document.getElementById('date').textContent = dateString;
  document.getElementById('timezone').textContent = timezone;
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
  const clockContainer = document.querySelector('.clock-container');
  
  // Add hover effect
  clockContainer.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
  });
  
  clockContainer.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
  });
  
  // Add click to change color theme
  let colorTheme = 0;
  const themes = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  ];
  
  clockContainer.addEventListener('click', function() {
      colorTheme = (colorTheme + 1) % themes.length;
      document.body.style.background = themes[colorTheme];
  });
});