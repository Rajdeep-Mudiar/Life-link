const ctx = document.getElementById('monthlyChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Donations',
        data: [45, 50, 55, 63, 72],
        backgroundColor: '#3498db',
      },
      {
        label: 'Lives Saved',
        data: [60, 95, 120, 170, 210],
        backgroundColor: '#e51e3e',
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



// section 3
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // You can add filter logic here if you categorize items
  });
});



// section 4
// Optional: Tab switching logic (not functional in static table currently)
document.querySelectorAll('.tabs button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      // Add filter logic here if making dynamic
    });
  });
  