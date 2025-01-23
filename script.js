// Parse query parameters from the URL
function getQueryParams() {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}

// Apply filters based on query parameters
function applyFiltersFromQueryParams() {
  const params = getQueryParams();

  // Loop through the query parameters and set filter values
  Object.keys(params).forEach((key) => {
    const input = document.querySelector(`[data-filter-name="${key}"]`);
    if (input) {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = input.value === params[key];
      } else if (input.tagName === "SELECT") {
        input.value = params[key];
      } else {
        input.value = params[key];
      }
      input.dispatchEvent(new Event("change"));
    }

    // Handle dropdown menus
    if (key === "region") {
      const dropdownItem = document.querySelector(
        `#regionDropdownMenu [data-value="${params[key]}"]`
      );
      if (dropdownItem) {
        dropdownItem.click();
      }
    }
  });

  filterDataTable();
}

// Filter the data table based on current input values
function filterDataTable() {
  const projectId = document.getElementById("projectId").value.trim();
  const status = document.getElementById("status").value.trim();
  const region = document
    .querySelector("#regionDropdownMenu .active")
    ?.getAttribute("data-value");
  const type = document.querySelector('input[name="type"]:checked')?.value;
  const features = Array.from(
    document.querySelectorAll('input[data-filter-name="feature"]:checked')
  ).map((el) => el.value);
  const toggleActive = document.getElementById("toggleActive").checked;

  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    const rowProjectId = row.getAttribute("data-project-id");
    const rowStatus = row.getAttribute("data-status");
    const rowRegion = row.getAttribute("data-region");
    const rowType = row.getAttribute("data-type");
    const rowFeature = row.getAttribute("data-feature");
    const rowToggleActive = row.getAttribute("data-toggle-active") === "true";

    const matchesProjectId = !projectId || rowProjectId === projectId;
    const matchesStatus = !status || rowStatus === status;
    const matchesRegion = !region || rowRegion === region;
    const matchesType = !type || rowType === type;
    const matchesFeature =
      features.length === 0 || features.includes(rowFeature);
    const matchesToggleActive = toggleActive === rowToggleActive;

    if (
      matchesProjectId &&
      matchesStatus &&
      matchesRegion &&
      matchesType &&
      matchesFeature &&
      matchesToggleActive
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Add event listeners
document
  .getElementById("applyFilters")
  .addEventListener("click", filterDataTable);

// Apply filters from query params on page load
window.addEventListener("DOMContentLoaded", () => {
  applyFiltersFromQueryParams();
});
