let counter = localStorage.getItem('counter') || 0;
document.getElementById('counter').textContent = counter;

document.getElementById('increment').addEventListener('click', function() {
  counter++;
  document.getElementById('counter').textContent = counter;
  localStorage.setItem('counter', counter);
});
