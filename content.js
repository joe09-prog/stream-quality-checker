function createQualityBadge(quality) {

    const oldBadge = document.getElementById("stream-quality-badge");

    if (oldBadge) {
        oldBadge.remove();
    }

    const badge = document.createElement("div");

    badge.id = "stream-quality-badge";

    badge.innerText = quality;

    badge.style.position = "fixed";
    badge.style.top = "20px";
    badge.style.right = "20px";
    badge.style.zIndex = "999999";
    badge.style.background = "#0ea5e9";
    badge.style.color = "#000";
    badge.style.padding = "10px 15px";
    badge.style.borderRadius = "10px";
    badge.style.fontSize = "16px";
    badge.style.fontWeight = "bold";
    badge.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

    document.body.appendChild(badge);
}

function detectVideoQuality() {

    const video = document.querySelector("video");

    if (!video) {
        return;
    }

    video.addEventListener("loadedmetadata", () => {

        const quality = video.videoHeight + "p";

        createQualityBadge(quality);

    });

}

detectVideoQuality();
