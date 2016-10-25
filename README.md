# file-download
创建本地文件(包括csv、图片以及txt文件)功能


## Install

```html
<script src="./dist/file-download.js"></script>
```

Or

```
npm install file-download
```

## Demo
[https://hdpfe.github.io/file-download/](https://hdpfe.github.io/file-download/)

## Usage
```js

    /* 保存csv文件到本地
    / @paramas
    / filename:         要保存的csv文件名字,必选。格式：string,**后缀名必须为.csv**，如：damo.csv
    / data:             输出到csv文件的数据,必选。格式：data[[],[],[]...]  数组元素必须为一个数组
    */
    fileDownload.createCSV(filename, data);


    /* 保存图片到本地
    / @paramas
    /  dataURL:         要导出图片的引入路径，必选。格式：string,且为img的src属性值
    /  title:           下载到本地的图片的名称，可选。格式：string
    /  imageType:       图像类型，可选。格式：string 必须为图片后缀名如："jpg" or "jpeg" or "png" or "gif"
    */
    fileDownload.createImage(url, title, imgType);



    /* 保存txt文件到本地
    /  @paramas
    /  data:            要保存的text文件名字,格式必须为数组，必须。格式：stirng
    /  title:           下载到本地的图片的名称，可选。格式：string
    */
    fileDownload.createTXT(dataArr,title);

```
