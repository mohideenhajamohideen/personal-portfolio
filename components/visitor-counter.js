export async function registerVisit() {
  try {
    const res = await fetch('/api/visit', { method: 'POST' });
    const data = await res.json();
    const el = document.getElementById('visitor-count');
    if (el) el.textContent = data.visits;
  } catch (err) {
    console.error('Visitor counter failed', err);
  }
}

document.addEventListener('DOMContentLoaded', registerVisit);
