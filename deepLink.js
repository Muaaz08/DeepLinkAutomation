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

// Apply filters from query params on page load
window.addEventListener("DOMContentLoaded", applyFiltersFromQueryParams);
