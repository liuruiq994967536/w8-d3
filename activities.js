$(document).ready(function () {
  $("#activities main tbody tr td:not(:first-child)").each(function () {
    if ($(this).text() !== "Not Available") {
      $(this).css({ cursor: "pointer" });

      $(this).attr({ "data-toggle": "modal", "data-target": "#myModal" });

      $(this).click(function () {
        $(this).toggleClass("activitiesCell");

        // week5-day3-lab-home-work
        if ($(this).hasClass("activitiesCell")) {
          // $("#displaySelected").css("visibility", "visible");
          // $("#displaySelected").css("margin-top", "2em");
          // $("#result").append(
          //   "<p>" +
          //     $(this).text() +
          //     " at " +
          //     $("th").eq($(this).index()).text() +
          //     "</p>"
          // );
          $(".modal-body").append(
            "<p>" +
              $(this).text() +
              " at " +
              $("th").eq($(this).index()).text() +
              "</p>"
          );
        } else {
          // $("#result p:contains(" + $(this).text() + ")").remove();
          $(".modal-body p:contains(" + $(this).text() + ")").remove();

          // if (!!!$("#result").has("p").length) {
          //   $("#displaySelected").css("visibility", "hidden");
          //   $("#displaySelected").css("maigin-top", "0");
          // }
        }
      });
    }
  });
});
