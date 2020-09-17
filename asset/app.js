$(document).ready(function () {
  $.ajax({
    type: "GET",
    url:
      "https://gnews.io/api/v4/top-headlines?token=c30066fd91e7d7bc341f522c17b0143b&lang=en",
  }).then(function (res) {
    console.log(res);

    for (var i = 0; i < res.articles.length; i++) {
      var col = $("<div>").addClass("col-md-4 container");
      var card = $("<div>").addClass("card bg-info text-white");
      var body = $("<div>").addClass("card-body");
      var title = $("<h5>").addClass("card-title").text(res.articles[i].title);
      var img = $("<img>").attr("src", res.articles[i].image);
      var description = $("<p>")
        .addClass("card-text")
        .text(res.articles[i].description);
      var button = $("<button>").addClass("btn btn-secondary");
      var link = $("<a>")
        // .attr("target", "_blank")
        .attr("href", res.articles[i].url)
        .text("View Article");
      button.append(link);

      col.append(card.append(body.append(img, title, description, button)));
      $("#newsId").append(col);
    }
  });
});
