let counter = 0;
document.getElementById('increment').addEventListener('click', function() {
  counter++;
  document.getElementById('counter').textContent = counter;
});
