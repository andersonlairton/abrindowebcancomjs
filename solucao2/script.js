console.log('arquivo scrit js')
    (function () {
        if (!"mediaDevices" in navigator || !"getUserMedia" in navigator.mediaDevices) {
            alert("sem cameras neste dispositivo");
            return;
        }
    })