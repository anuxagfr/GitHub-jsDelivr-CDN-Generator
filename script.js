
let fileCache = [];

function fetchFiles() {
  const user = document.getElementById("user").value.trim();
  const repo = document.getElementById("repo").value.trim();
  const branch = document.getElementById("branch").value.trim() || "main";
  const token = document.getElementById("token").value.trim();

  if (!user || !repo) return alert("Username and Repo required");

  fetch(`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`, {
    headers: token ? { Authorization: `token ${token}` } : {}
  })
  .then(res => res.json())
  .then(data => {
    if (!data.tree) return alert("Invalid repo or branch.");
    fileCache = data.tree.filter(f => f.type === "blob");
    renderFileList(fileCache, user, repo, branch);
  })
  .catch(() => alert("Error fetching repo data."));
}

function renderFileList(files, user, repo, branch) {
  const list = document.getElementById("fileList");
  list.innerHTML = "";
  files.forEach(f => {
    const cdn = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${f.path}`;
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${f.path}</strong> 
      <button id="cdnbutton" onclick="showCDN('${cdn}', '${f.path}')">Generate CDN</button>
    `;
    list.appendChild(li);
  });
}
function showCDN(cdnLink, path) {
  const ext = path.split('.').pop().toLowerCase();
  const fileName = path.split('/').pop();
  let tag = "";

  if (ext === "js") tag = `<script src="${cdnLink}"></script>`;
  else if (ext === "css") tag = `<link rel="stylesheet" href="${cdnLink}">`;
  else if (["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) tag = `<img src="${cdnLink}" alt="">`;

  // Get file size using HEAD request
  fetch(cdnLink, { method: 'HEAD' })
    .then(res => {
      const size = res.headers.get("content-length");
      const sizeKB = size ? (parseInt(size) / 1024).toFixed(2) : "Unknown";
      const type = res.headers.get("content-type") || "Unknown";

      document.getElementById("output").innerHTML = `
        <p><strong>File Name:</strong> ${fileName}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Size:</strong> ${sizeKB} KB</p>

        <p>CDN Link:</p>
        <div class="input-group">
          <input id="cdnInput" value="${cdnLink}" readonly>
          <div class="link-icon" onclick="copyText('${cdnLink}')">
            <i class="bi bi-copy"></i>
          </div>
        </div>

        ${tag ? `
        <p>HTML Tag link:</p>
        <div class="input-group">
          <input id="tagInput" value="${tag.replace(/"/g, '&quot;')}" readonly>
          <div class="link-icon" onclick='copyText(\`${tag.replace(/`/g, "\\`")}\`)'>
            <i class="bi bi-copy"></i>
          </div>
        </div>` : ''}

        <a class="download-btn" href="${cdnLink}" download="${fileName}">Download file</a>
      `;
    })
    .catch(() => {
      document.getElementById("output").innerHTML = `
        <p>Error loading file details.</p>
        <a class="download-btn" href="${cdnLink}" download="${fileName}">Download file</a>
      `;
    });
}
function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      const alert = document.getElementById("customAlert");
      alert.classList.add("show");
      setTimeout(() => {
        alert.classList.remove("show");
      }, 2000); // hide after 2s
    })
    .catch(() => alert("Copy failed."));
}
function filterFiles() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const filtered = fileCache.filter(f => f.path.toLowerCase().includes(keyword));
  const user = document.getElementById("user").value;
  const repo = document.getElementById("repo").value;
  const branch = document.getElementById("branch").value || "main";
  renderFileList(filtered, user, repo, branch);
}

function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light");
  else if (!saved && window.matchMedia('(prefers-color-scheme: light)').matches)
    document.body.classList.add("light");
})();
