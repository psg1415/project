$(function () {
    /** 날자를 클릭하면 -> 레이어 팝업 */
    $(".calendar .days > li").click(function () {
        const stamp = $(this).data("stamp");
        layer.open("/exercise/form?stamp=" + stamp, 600, 400);
    });
});
