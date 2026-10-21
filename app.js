const sidebar = document.getElementById('sidebar');
const toast = document.getElementById('toast');
const modal = document.getElementById('modal');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function showModal(title, text) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent = text;
  modal.showModal();
}
document.getElementById('openNav').addEventListener('click', () => sidebar.classList.add('open'));
document.getElementById('closeNav').addEventListener('click', () => sidebar.classList.remove('open'));
function navigate(page) {
  document.getElementById('pageTitle').textContent = page;
  document.querySelectorAll('.nav-link[data-page]').forEach(btn => btn.classList.toggle('active', btn.dataset.page === page));
  sidebar.classList.remove('open');
  const descriptions = {
    'Dashboard': 'Your dashboard is already visible. This is a front-end preview.',
    'Buy Keys': 'Browse the sample digital key catalog on the dashboard. Real checkout needs a secure backend.',
    'My Keys': 'Purchased keys will appear here after a real order is confirmed and fulfilled.',
    'Orders': 'Order records will be connected to the database in the next setup stage.',
    'Wallet': 'Wallet top-ups are not active in this demo. Connect a verified payment gateway before accepting money.',
    'Resellers': 'Reseller accounts and commission rules need database tables and server-side permissions.',
    'History': 'Transactions and order history will be stored in the database once connected.',
    'Support': 'Add your support email or ticket service before launching.',
    'Settings': 'Account settings require real authentication before going live.'
  };
  showModal(page, descriptions[page] || 'This section is part of the preview.');
}
document.querySelectorAll('.nav-link[data-page]').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.page)));
document.querySelectorAll('[data-goto]').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.goto)));
document.querySelectorAll('.buy-btn').forEach(btn => btn.addEventListener('click', () => {
  showModal('Sample product: ' + btn.dataset.product, 'Sample price: ₹' + btn.dataset.price + '. This preview does not charge you or deliver a key. Connect inventory, authentication, and a secure order API before taking real orders.');
}));
document.getElementById('helpBtn').addEventListener('click', () => showModal('How this panel works', 'This is the visual starter. Next, connect Supabase for login and database, then add admin-only product management and a verified payment gateway. Never store secret keys in browser code.'));
