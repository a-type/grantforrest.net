function initProcessing() {
    var canvas = document.getElementById("processing-canvas");
    var p = new Processing(canvas, sketchProc);

    var cloudCanvas = document.getElementById("cloud-canvas");
    var p2 = new Processing(cloudCanvas, cloudSketch);

    var sunsetCanvas = document.getElementById("sunset-canvas");
    var p3 = new Processing(sunsetCanvas, sunsetSketch);
    
    $("span:contains('AAAAAAAA')").remove();
}