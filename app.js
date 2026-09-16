document.addEventListener("DOMContentLoaded", () => {
  console.log("Z Number Lookup Loaded");

  const searchBox = document.getElementById("searchBox");

  if (searchBox) {
    searchBox.addEventListener("input", lookup);
  }
});

function lookup() {
  const rentalNumber =
    document.getElementById("searchBox")
      .value
      .trim()
      .toUpperCase();

  document.getElementById("owner").innerText =
    rentalNumber === ""
      ? "---"
      : "Searching for: " + rentalNumber;

  document.getElementById("znumber").innerText =
    rentalNumber === ""
      ? "---"
      : "Database connection next";
}
