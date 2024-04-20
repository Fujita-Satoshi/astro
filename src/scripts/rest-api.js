// document.addEventListener('DOMContentLoaded', ()=> {
//   console.log("rest-api");
// });


$(function () {

  $.ajax({
    url: "https://kamutya.net/wp-json/wp/v2/works_category/",
    type: "GET",
    dataType: "json",
  }).done(function (data, textStatus, jqXHR) {
    console.log(data);

    $.each(data, function (index, value) {
      let title = value['name'];
      let link = value['link'];
      let html = `<div><a href="${link}">${title}</a></div>`
      $('#link').append(html);
    });

  }).fail(function (jqXHR, textStatus, errorThrown) {
  }).always(function () {
  });


  $.ajax({
    //		url:"https://kamutya.net/wp-json/wp/v2/posts/",
    url: "https://kamutya.net/wp-json/wp/v2/works/",
    type: "GET",
    dataType: "json",
  }).done(function (data, textStatus, jqXHR) {
    console.log(data);

    $.each(data, function (index, item) {
      let title = item.title.rendered;
      let link = item.link;
      let img = item.acf.cf_works_thumbnail.url;
      let html = `<div><a href="${link}"><img src="${img}"></a><p>${title}</p></div>`
      $('#result').append(html);
    });

  }).fail(function (jqXHR, textStatus, errorThrown) {
  }).always(function () {
  });

});
