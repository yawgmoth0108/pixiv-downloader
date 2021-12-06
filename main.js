let
// xmlhttp = null,
maindom = $("#stacc_timeline");

// if(window.XMLHttpRequest){
//     xmlhttp = new XMLHttpRequest();
// }else if (window.ActiveXObject){
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }

$("#stacc_timeline").bind('DOMNodeInserted', function(e){
    let
    that = $(e.target);
    if(that.find(".stacc_ref_illust_img").length > 0){
        let
        thelink = that.find(".stacc_ref_illust_img ._layout-thumbnail > img"),
        arturl = getArturlInUrl(thelink.attr("src")),
        // filename = getFilename(arturl),
        downurl = `https://i.pximg.net/img-original${arturl}`,
        downlinks = $("<div></div>"),
        downlink = $("<a class='button' target='_blank'></a>"),
        downlink2 = downlink.clone();
        // console.log(arturl);
        // downurl = checkFileExit(downurl);

        downlink.attr({
            "href": downurl + ".jpg",
            // "download": filename + ".jpg"
        }).css("float", "left").html("下载jpg");
        downlink2.attr({
            "href": downurl + ".png",
            // "download": filename + ".png"
        }).css("float", "left").html("下载png");
        downlinks.css({
            "position": "absolute",
            "bottom": "8px",
            "right": 0
        });
        downlinks.append(downlink).append(downlink2);
        that.css("position", "relative").append(downlinks);
    }
});

// function checkFileExit(downurl){
//     let
//     files = [".jpg", ".png"];
//     for(let i in files){
//         let
//         file = files[i];
//         xmlhttp.open("GET", downurl + file, false);
//         xmlhttp.send();
//         if(xmlhttp.readyState == 4) {
//             if(xmlhttp.status == 200) {
//                 downurl += file;
//                 break;
//             }else if(xmlhttp.status == 404) {
//                 //不存在
//             }else{
//                 urlPath += ""
//             }
//         }
//     }
//     return downurl;
// }

function getArturlInUrl(url){
    let
    first = url.indexOf("/img/"),
    last = url.lastIndexOf("_"),
    tmp = url.substring(first, last);
    return tmp;
}

function getFilename(url){
    let
    tmp = url.lastIndexOf("/") + 1;
    return url.substr(tmp);
}

function getArtidInUrl(url){
    let
    tmp = url.lastIndexOf("?") + 1,
    theid = -1;
    url = url.substr(tmp);
    url = url.split("&");
    for(let i in url){
        let
        key = url[i];
        key = key.split("=");
        if(key[0] == "illust_id"){
            theid = key[1];
        }
    }
    return theid;
}