document.addEventListener("DOMContentLoaded", () => {
  console.log("Z Number Lookup Loaded");
});

function lookup() {
  const rentalNumber =
    document.getElementById("searchBox")
      .value
      .trim()
      .toUpperCase();

  document.getElementById("owner").innerText =
    "Searching...";

  document.getElementById("znumber").innerText =
    rentalNumber;
}
