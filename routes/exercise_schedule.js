const express = require("express");
const schedule = require("../models/schedule");
const { alert } = require("../lib/common");
const router = express.Router();

router.use((req, res, next) => {
    res.locals.addScript = ["schedule", "layer"];
    res.locals.addCss = ["schedule", "form"];
    next();
});
router.route("/")


/** 스케줄 달력 */
router.get("/", async (req, res) => {
    const data = await schedule.getCalendar(req.query.year, req.query.month);

    return res.render("schedule/exercise_calendar", data);
});
router.post("/", async (req, res) => {

    const result = await schedule.update(req.body);
    if (result) { // 스케줄 등록/수정 성공 - 달력 페이지 새로고침
        return res.send("<script>parent.parent.location.reload();</script>");
    }

    // 스케줄 등록/수정 실패
    return alert("스케줄 등록/수정 실패하였습니다.", res);
});
router.get("/form", async (req, res) => {
    const stamp = Number(req.query.stamp); //  문자열 -> 숫자
    const date = new Date(stamp);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = (month < 10) ? `0${month}` : month;

    let day = date.getDate();
    day = (day < 10) ? `0${day}` : day;

    const scheduleDate = `${year}${month}${day}`;

    let data = await schedule.get(scheduleDate);
    data = data || {};
    data.date = scheduleDate;
    data.datetit = `${year} - ${month} - ${day}`
    return res.render("schedule/form", data);
})

/** 스케줄 삭제 */
router.get("/:date", async (req, res) => {

    const result = await schedule.delete(req.params.date);
    if (result) {
        // 삭제 성공
        return res.send("<script>parent.parent.location.reload();</script>",);
    }

    // 삭제 실패
    return alert("삭제 실패하였습니다.", res);
});

module.exports = router;
