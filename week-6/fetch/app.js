/*
? Challenge
* parse thru the data
* build blocks that display the following:
* name
* description
* updated date
* recent issues
! SPICEY MODE
* add an input field and a button
* as you type, the search removes all irrelvant blocks */


const url = 'https://prismix.dev/api/v1/statuses';
const list = document.getElementById('service-list');
const statusLine = document.getElementById('status');
const input = document.getElementById('search-input');
const form = document.getElementById('search-form');

let services = [];

const badgeColor = { none: 'success', minor: 'warning', major: 'warning', critical: 'danger' };

function render(items) {
  list.innerHTML = items.map((s) => `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between align-items-center">
            ${s.name}
            <span class="badge bg-${badgeColor[s.indicator] || 'secondary'}">${s.indicator}</span>
          </h5>
          <p class="card-text">${s.description}</p>
          <p class="card-text"><small class="text-secondary">Updated ${s.updatedAt ? new Date(s.updatedAt).toLocaleString() : 'unknown'}</small></p>
        </div>
        <ul class="list-group list-group-flush">
          ${(s.recentIncidentBriefs || []).map((b) => `<li class="list-group-item">${b.impact}: ${b.name}</li>`).join('') || '<li class="list-group-item text-secondary">No recent incidents.</li>'}
        </ul>
      </div>
    </div>
  `).join('') || '<p class="col-12 text-center text-secondary py-5">No services match that search.</p>';
}

function search() {
  const q = input.value.trim().toLowerCase();
  render(services.filter((s) => `${s.name} ${s.description}`.toLowerCase().includes(q)));
}

input.addEventListener('input', search);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  search();
});

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    services = data.services;
    statusLine.textContent = `${services.length} services tracked`;
    render(services);
  })
  .catch((err) => {
    statusLine.textContent = `Could not load services: ${err.message}`;
  });
