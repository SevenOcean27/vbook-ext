load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL)
    const doc = fetch(url).html();
    
    const name = doc.select("h1").last().text().replace(/NEW |Ongoing /gi,'');
    const cover = doc.select('meta[property="og:image"]').attr("content");
    const description = doc.select(".summary-content p").html();
    const category = doc.select(".info-detail-comic .category").html();

    const author = doc.select("ul.info-detail-comic li.author .detail-info").text();
    const status = doc.select("ul.info-detail-comic li.status .detail-info").text();
    const translator = doc.select("ul.info-detail-comic li.translate-group .detail-info").text();
    const views = doc.select("ul.info-detail-comic li.view-total .detail-info").text();
    const likes = doc.select("ul.info-detail-comic li.view-like .detail-info").text();
    const follows = doc.select("ul.info-detail-comic li.total-follow .detail-info").text();

    const detail = "Tác giả: " + author + "<br>" + "Tình trạng: " + status + "<br>" + "Thể loại: " + category + "<br>" + "Nhóm dịch: " + translator + "<br>" + "Lượt xem: " + views + "<br>" + "Lượt thích: " + likes + "<br>" + "Theo dõi: " + follows;

    return Response.success({
        name: name,
        cover: cover,
        author: author,
        description: description,
        detail: detail,
        category: category,
        host: BASE_URL
    });
}