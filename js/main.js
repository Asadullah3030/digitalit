const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function changeText(titleText, descText) {
    var titles = document.getElementById('title');
    var decr = document.getElementById('desc');
    titles.innerHTML = titleText;
    decr.innerHTML = descText;
}

// Instagram functions

function changeTextVideo() {
    changeText('Instagram Video Downloader', 'Download Videos, Photos, Reels, Stories from Instagram');
}

function changeTextPhoto() {
    changeText('Instagram Photo Downloader', 'Download Videos, Photos, Reels, Stories from Instagram');
}

function changeTextReels() {
    changeText('Instagram Reels Downloader', 'Download Videos, Photos, Reels, Stories from Instagram');
}

function changeTextStories() {
    changeText('Instagram Stories Downloader', 'Download Videos, Photos, Reels, Stories from Instagram');
}

// TikTok functions

function changeTextVideoTikTok() {
    changeText('TikTok Videos Downloader', 'Download Videos, Photos, Reels, Stories from TikTok');
}

function changeTextReelsTikTok() {
    changeText('TikTok Reels Downloader', 'Download Videos, Photos, Reels, Stories from TikTok');
}

// YouTube functions

function changeTextVideoYouTube() {
    changeText('YouTube Videos Downloader', 'Download Videos, Photos, Reels, Stories from YouTube');
}

function changeTextShortYouTube() {
    changeText('YouTube Shorts Downloader', 'Download Videos, Photos, Reels, Stories from YouTube');
}


