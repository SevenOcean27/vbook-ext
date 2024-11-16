load('config.js');
function execute(key, page) {
    if(!page) page = '1';
    let response = fetch(BASE_URL + "/tim-truyen?keyword=" + key + "&page=" + page, {
        method: "GET"
    });

    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".row .item-manga").forEach(e => {
            data.push({
                name: e.select(".title-manga").first().text(),
                link: e.select(".title-manga").first().attr("href"),
                cover: e.select(".image-item img").first().attr("data-original"),
                host: BASE_URL
            });
        });
        var next = parseInt(page, 10) + 1;
        return Response.success(data, next);
    }
    return null;
}