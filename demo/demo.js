//保存csv文件到本地
function outputCSV() {
    var $dom = document.getElementsByClassName('csv');
    var data = [];
    var dd = [];
    for (var i = 0; i < $dom.length; i++) {
        data.push($dom[i].value);
    }
    for (var i = 0; i < $dom.length; i++) {
        dd.push(data);
    }

    fileDownload.createCSV("demo.csv", dd);
}

//保存图片到本地
function outputImg() {
    var url = 'http://image.zhangxinxu.com/image/study/p/s200/ps2.jpg';
    var title = 'testDemo11';
    var imgType = 'gif';

    fileDownload.createImage(url, title, imgType);
}

//保存txt文件到本地
function outputTXT() {
    var data = document.getElementById('getTxt').value;
    var dataArr = [];
    dataArr.push(data);

    fileDownload.createTXT(dataArr);
}
