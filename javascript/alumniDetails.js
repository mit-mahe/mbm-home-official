const SUBSYSTEM_ALIASES = {
  SOCIALMEDIA: "Social Media & Graphic Design",
  GRAPHICDESIGN: "Social Media & Graphic Design",
  SOCIALMEDIAGRAPHICDESIGN: "Social Media & Graphic Design",
  GRAPHICSMEDIA: "Social Media & Graphic Design",
  MANAGEMENTHUMANPRACTICES: "Human Practices",
  HUMANPRACTICESMANAGEMENT: "Human Practices",
};

async function loadAlumni() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4lLXODL9JogM1LxEbh4Pc6amJICv-5KGsxrionRFfFRejJPSknhPaXGdHYrNsHve6zr6ydrMOEdXE/pub?gid=0&single=true&output=csv",
  );
  const csvText = await res.text();
  const { data } = Papa.parse(csvText, { header: true, skipEmptyLines: true });

  function extractSubsystem(roleRaw) {
    let s = roleRaw.replace(/\b(co[\s-]?heads?|heads?|members?)\b/gi, "");
    s = s
      .replace(/[-,&]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return s || roleRaw.trim();
  }

  function normalizeKey(s) {
    return s.toUpperCase().replace(/[^A-Z]/g, "");
  }

  const years = {};
  let currentYear = "";
  let currentRole = "";

  data.forEach((row) => {
    const tenure = (row.Tenure || "").trim();
    const roleRaw = (row.Subsystem || "").trim();
    const name = (row.Name || "").trim();

    if (tenure) currentYear = tenure;
    if (roleRaw) currentRole = roleRaw;

    if (!name) return;
    const year = currentYear;
    const role = currentRole;
    if (!year || !role) return;

    const isMember = /\bmembers?\b/i.test(role);
    const derivedDisplay = extractSubsystem(role);
    const normKey = normalizeKey(derivedDisplay);
    const display = SUBSYSTEM_ALIASES[normKey] || derivedDisplay;
    const aliasKey = normalizeKey(display);

    years[year] ??= {};
    years[year][aliasKey] ??= { display, people: [] };

    years[year][aliasKey].people.push({
      name,
      linkedin: row["Linkedin Links"] || "",
      isMember,
    });
  });

  const container = document.getElementById("alumni-container");
  container.innerHTML = "";

  function resolveImage(year) {
    const extensions = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"];
    return new Promise((resolve) => {
      let i = 0;
      function tryNext() {
        if (i >= extensions.length) {
          resolve(null);
          return;
        }
        const path = `../images/alumni/${year}.${extensions[i]}`;
        const img = new Image();
        img.onload = () => resolve(path);
        img.onerror = () => {
          i++;
          tryNext();
        };
        img.src = path;
      }
      tryNext();
    });
  }

  const sortedYears = Object.keys(years).sort((a, b) => b - a);

  for (const year of sortedYears) {
    const imagePath = await resolveImage(year);
    if (!imagePath) continue;

    const bgStyle = `background-image: url('${imagePath}')`;

    const card = document.createElement("div");
    card.className = "alumni-card-container";
    card.innerHTML = `
      <div class="alumni-card">
        <div class="front" style="${bgStyle}">
          <h5>${year}</h5>
        </div>
        <div class="back">
          <h2>Team ${year}</h2>
          <div class="alumni">
            ${Object.values(years[year])
              .map(({ display, people }) => {
                people.sort((a, b) =>
                  a.isMember === b.isMember ? 0 : a.isMember ? 1 : -1,
                );
                return `
                <div class="subsystem">
                  <h3>${display}</h3>
                  <ul>
                    ${people
                      .map((p) =>
                        p.linkedin
                          ? `<li><a target="_blank" href="${p.linkedin}">${p.name}</a></li>`
                          : `<li>${p.name}</li>`,
                      )
                      .join("")}
                  </ul>
                </div>`;
              })
              .join("")}
          </div>
        </div>
      </div>`;
    container.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", loadAlumni);
