/**
 * Timeline Vanilla JS Behavior
 * Handles URL hash navigation and accessibility enhancements
 */

// Handle URL hash on page load
function handleInitialHash() {
  const hash = window.location.hash.slice(1); // Remove the '#'
  if (hash) {
    // Wait for the DOM to be fully rendered
    setTimeout(() => {
      const element = document.querySelector(`[data-event-id="${hash}"]`);
      if (element) {
        const details = element.querySelector('details');
        if (details) {
          details.open = true;
        }
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
}

// Update URL hash when event is expanded
function setupHashNavigation() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.addEventListener('toggle', (event) => {
    const target = event.target as HTMLDetailsElement;
    if (target.tagName === 'DETAILS' && target.open) {
      const timelineItem = target.closest('[data-event-id]');
      if (timelineItem) {
        const eventId = timelineItem.getAttribute('data-event-id');
        if (eventId) {
          // Update URL without triggering scroll
          history.replaceState(null, '', `#${eventId}`);

          // Smooth scroll to the opened item
          setTimeout(() => {
            timelineItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 50);
        }
      }
    }
  }, true); // Use capture phase to catch the event
}

// Keyboard navigation enhancement
function setupKeyboardNavigation() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  const summaries = Array.from(timeline.querySelectorAll('summary'));

  summaries.forEach((summary, index) => {
    summary.addEventListener('keydown', (event) => {
      const key = event.key;
      let targetIndex: number | null = null;

      switch (key) {
        case 'ArrowDown':
          targetIndex = Math.min(index + 1, summaries.length - 1);
          break;
        case 'ArrowUp':
          targetIndex = Math.max(index - 1, 0);
          break;
        case 'Home':
          targetIndex = 0;
          break;
        case 'End':
          targetIndex = summaries.length - 1;
          break;
      }

      if (targetIndex !== null && targetIndex !== index) {
        event.preventDefault();
        const targetSummary = summaries[targetIndex] as HTMLElement;
        targetSummary.focus();

        // Scroll the focused element into view
        targetSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

// Initialize on DOM content loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    handleInitialHash();
    setupHashNavigation();
    setupKeyboardNavigation();
  });
} else {
  handleInitialHash();
  setupHashNavigation();
  setupKeyboardNavigation();
}

// Handle hash changes (back/forward navigation)
window.addEventListener('hashchange', () => {
  handleInitialHash();
});

