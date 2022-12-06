document.getElementById("dinoSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://dinosaur-facts-api.shultzlab.com/dinosaurs/random"// + "?q=" + value;
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
        let results = "<div class = 'dinoName'>";
          results += '<p>' + json.Name + "</p>";
          results += "</div>";
          results += "<h2>Description:</h2>"
          results += "<div class = 'dinoContent'>";
          results += '<p>' + json.Description + "</p>";
          results += "</div>"
          document.getElementById("dinoResults").innerHTML = results;
    });
});
