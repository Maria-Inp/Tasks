function showVideo(th) {
    var videoSrc = th.getAttribute("data-video-address");
    console.log(videoSrc)
    var vid = document.getElementById("video-tag");
    // console.log(vid)
    vid.src = videoSrc;

    document.querySelector(".btn-close-video").addEventListener('click', () => {
        document.querySelector('video').pause();
    })
}
