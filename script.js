// script.js – toggle expanded class, click outside close
(function() {
  const wrapper = document.getElementById('fabWrapper');
  const toggleBtn = document.getElementById('fabToggle');

  if (!wrapper || !toggleBtn) return;

  toggleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    wrapper.classList.toggle('expanded');
  });

  document.addEventListener('click', function(event) {
    if (wrapper.classList.contains('expanded') && !wrapper.contains(event.target)) {
      wrapper.classList.remove('expanded');
    }
  });
})();