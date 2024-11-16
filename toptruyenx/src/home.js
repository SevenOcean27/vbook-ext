function execute() {
    return Response.success([
        { title: "Truyện Mới Cập Nhật", input: "/", script: "home1.js" },
        { title: "Ngày cập nhật", input: "/tim-truyen/?sort=1", script: "gen.js" },
        { title: "Top all", input: "/tim-truyen/?sort=2", script: "gen.js" },
        { title: "Top tháng", input: "/tim-truyen/?sort=3", script: "gen.js" },
        { title: "Top tuần", input: "/tim-truyen/?sort=5", script: "gen.js" },
        { title: "Top ngày", input: "/tim-truyen/?sort=6", script: "gen.js" },
        { title: "Số chapter", input: "/tim-truyen/?sort=8", script: "gen.js" },
        { title: "Theo dõi", input: "/tim-truyen/?sort=9", script: "gen.js" },
        { title: "Bình luận", input: "/tim-truyen/?sort=10", script: "gen.js" },
        { title: "Hot", input: "/hot", script: "gen.js" },
        { title: "Con trai", input: "/truyen-con-trai", script: "home1.js" },
        { title: "Con gái", input: "/truyen-con-gai", script: "home1.js" },
        { title: "Manhwa 18", input: "/tim-truyen/18", script: "dos.js" }
    ]);
}