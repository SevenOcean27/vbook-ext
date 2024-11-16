load('config.js');

function execute(url, page) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL1);
    if(!page) page = '1';
    const doc = fetch(BASE_URL1 + url + "?page=" + page).html();
    const el = doc.select(".item-manga");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".caption h3 a").first().text(),
            link: e.select(".caption h3 a").first().attr("href"),
            cover: e.select(".image-item img").first().attr("data-original"),
            description: e.select(".caption ul li").first().text(),
            host: BASE_URL || BASE_URL1
        });
    }
    var next = parseInt(page, 10) + 1;
    return Response.success(data, next.toString());
}