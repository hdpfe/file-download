(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    fileDownload: __webpack_require__(1)
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * 创建本地文件
	 */
	var fileDownload = {};

	module.exports = fileDownload;


	/* 导出CSV文件参数传递：
	/  filename:要保存的csv文件名字
	/  data：要保存到csv文件的数据源，格式如下：
	/  data[[],[],[]...]  数组元素必须为一个个数组
	*/

	fileDownload.createCSV = function(fileName, data) {
		var seq = (navigator.appName === "Microsoft Internet Explorer") ? "\t" : ",";
		var csvData = [];
		var mimeType = 'text/csv';
		for (var i = 0; i < data.length; i++) {
			csvData.push(data[i].map(function(col) {
				return (col + '').replace(/,/g, '，')
			}).join(seq))
		}
		csvData = csvData.join("\n"); //加BOM

		if (navigator.appName === "Microsoft Internet Explorer" && !navigator.msSaveBlob) { // IE10以下
			var new_iframe = document.createElement("iframe");
			new_iframe.src = "about:blank";
			window.document.body.appendChild(new_iframe);
			var iframe = new_iframe.contentWindow || new_iframe.contentDocument;
			iframe.document.open(mimeType);
			iframe.document.write(csvData);
			iframe.document.close();
			iframe.focus();
			iframe.document.execCommand('SaveAs', 'true', fileName);
			window.document.body.removeChild(new_iframe);
		} else {
			var url;
			if (window.Blob) {
				var blob = new Blob(['\ufeff' + csvData], {
					type: mimeType + ',charset=UTF-8'
				});
				if (navigator.msSaveBlob) { // IE10
					return navigator.msSaveBlob(blob, fileName);
				}
				url = window.URL.createObjectURL(blob);
			} else {
				url = "data:" + mimeType + ";charset=utf-8,\ufeff" + encodeURIComponent(
					csvData);
			}
			var a = document.createElement("a");
			a.href = url;
			a.download = fileName;
			a.style = 'display:none';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			if (window.Blob) {
				window.URL.revokeObjectURL(url);
			}
			a = null;
		}
	}

	/* 导出图片参数传递：
	/  dataURL:要导出图片的引入路径
	/  title:下载到本地的图片的名称
	/  imageType: 图像类型
	*/
	fileDownload.createImage = function(dataURL, title, imageType) {
		var $a = document.createElement('a');
		imageType = imageType || 'png';
		title = title || 'Image';

		$a.download = title + '.' + imageType;
		$a.target = '_blank';
		$a.href = dataURL;

		// Chrome and Firefox
		if (typeof MouseEvent === 'function') {
			var evt = new MouseEvent('click', {
				view: window,
				bubbles: true,
				cancelable: false
			});
			$a.dispatchEvent(evt);
		}
		// IE
		else {
			var html = '' + '<body style="margin:0;">' + '<img src="' + dataURL +
				'" style="max-width:100%;" title="' + title + '" />' + '</body>';
			var tab = window.open();
			tab.document.write(html);
		}
	}

	/*导出TXT文件参数传递：
	/ data:要保存的csv文件名字,必须为数组
	/ title:下载到本地的图片的名称
	*/

	fileDownload.createTXT = function(data, title) {
		var blob = new Blob(data);
		var a = document.createElement("a");
		a.href = window.URL.createObjectURL(blob);
		var title = title || 'test';
		a.download = title + '.' + "txt";

		// Chrome and Firefox
		if (typeof MouseEvent === 'function') {
			var evt = new MouseEvent('click', {
				view: window,
				bubbles: true,
				cancelable: false
			});
			a.dispatchEvent(evt);
		}
		// IE
		else {
			var text = '' + '<body style="margin:0;">' + '<p>' + data + '</p>' +
				'</body>';
			var tab = window.open();
			tab.document.write(text);
		}
	}


/***/ }
/******/ ])
});
;