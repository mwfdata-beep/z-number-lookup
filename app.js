document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");

  if (searchBox) {
    searchBox.addEventListener("input", lookup);
  }
});

async function lookup() {
  const rentalNumber =
    document.getElementById("searchBox")
      .value
      .trim()
      .toUpperCase();

  if (rentalNumber === "") {
    document.getElementById("owner").innerText = "---";
    document.getElementById("znumber").innerText = "---";
    return;
  }

  try {
    const response = await fetch(
      "https://pmqxhztjivklpfszvikv.supabase.co/rest/v1/trailers_import?rental_number=eq." +
      encodeURIComponent(rentalNumber),
      {
        headers: {
          apikey:
            "sb_publishable_9QBIWqfd9DOpcIs2wm0Osg_XXEuYlRi"
        }
      }
    );

    const data = await response.json();

    if (data.length > 0) {
      document.getElementById("owner").innerText =
        data[0].owner;

      document.getElementById("znumber").innerText =
        data[0].z_number;
    } else {
      document.getElementById("owner").innerText =
        "No trailer found.";

      document.getElementById("znumber").innerText =
        "---";
    }
  } catch (err) {
    document.getElementById("owner").innerText =
      "Connection error";

    document.getElementById("znumber").innerText =
      "---";
  }
}
