export function initCounters() {
  const counters = document.querySelectorAll('.counter, .counter-fraction');
  if (!counters.length) return;

  function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const suffix = element.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.floor(easeOut * target) + suffix;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function animateFraction(element) {
    const targetNum = parseInt(element.dataset.numerator);
    const denominator = parseInt(element.dataset.denominator);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.floor(easeOut * targetNum)}/${denominator}`;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains('counter-fraction')) {
        animateFraction(entry.target);
      } else {
        animateCounter(entry.target);
      }

      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}
