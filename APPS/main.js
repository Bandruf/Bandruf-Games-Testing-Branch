function fullscreen(frame) {
    if (frame.requestFullscreen) {
        frame.requestFullscreen();
    } else if (frame.webkitRequestFullscreen) { /* Safari */
        frame.webkitRequestFullscreen();
    } else if (frame.msRequestFullscreen) { /* IE11 */
        frame.msRequestFullscreen();
    }
  }

document.getElementById("tiktok").onclick = function(){
    console.log("hi")
    let app_frame = document.createElement("iframe")
    app_frame.classList.add("frame")
    app_frame.src = "https://romanarts.wiki/service/hvtrs8%2F-wuw%2Ctkkvoi.aoo%2Fdopymu%3Diq_aory%5Dupl%3F1%24iq_drmm%5Dwgbcpr%3Dt1%22"
    document.body.appendChild(app_frame)
    document.getElementById("main_holder").remove()
    document.getElementById("notice").remove()
    fullscreen(app_frame)
}
document.getElementById("youtube").onclick = function(){
    console.log("hi")
    let app_frame = document.createElement("iframe")
    app_frame.classList.add("frame")
    app_frame.src = "https://romanarts.wiki/service/hvtrs8%2F-wuw%2Cymuvu%60e%2Ccmm-"
    document.body.appendChild(app_frame)
    document.getElementById("main_holder").remove()
    document.getElementById("notice").remove()
    fullscreen(app_frame)
}
document.getElementById("geforce").onclick = function(){
    console.log("hi")
    let app_frame = document.createElement("iframe")
    app_frame.classList.add("frame")
    app_frame.src = "https://romanarts.wiki/service/hvtrs8%2F-pna%7B.eedopcgnmw%2Ccmm-mcln%2F"
    document.body.appendChild(app_frame)
    document.getElementById("main_holder").remove()
    document.getElementById("notice").remove()
    fullscreen(app_frame)
}