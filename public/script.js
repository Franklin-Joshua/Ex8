const API_URL = "https://ex8-ebwr.onrender.com/api/children";

const form = document.getElementById("childForm");
const listContainer = document.getElementById("childList");

async function fetchChildren() {
  const res = await fetch(API_URL);
  const children = await res.json();

  listContainer.innerHTML = children.map(c => `
    <div class="col-md-4">
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${c.name}</h5>
          <p><strong>Age:</strong> ${c.age} years</p>
          <p><strong>Height:</strong> ${c.height} cm</p>
          <button class="btn btn-danger btn-sm" onclick="deleteChild('${c._id}')">Delete</button>
        </div>
      </div>
    </div>
  `).join("");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const child = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    height: document.getElementById("height").value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(child),
  });

  form.reset();
  fetchChildren();
});

async function deleteChild(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchChildren();
}

fetchChildren();

