$(document).ready(function () {
  $("#look").click(function (x) {
    let actor_code = $("#actor_code").val();
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://imdb8.p.rapidapi.com/actors/get-awards?nconst=" + actor_code,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ea358cebf9mshe62eae2795132b0p1f5db0jsnbe630f03821c",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      for (i = 0; i < response.resource.awards.length; i++) {
        let old_al = $("#awards_list").html();
        let result = response.resource.awards[i];
        let award = `<li>${result.awardName}, ${result.eventName} (${result.year})</li>`;
        $("#awards_list").html(old_al + award);
      }
    });
    x.preventDefault();
  });
});
