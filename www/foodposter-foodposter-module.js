(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodposter-foodposter-module"],{

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./src/app/foodposter/foodposter.module.ts":
/*!*************************************************!*\
  !*** ./src/app/foodposter/foodposter.module.ts ***!
  \*************************************************/
/*! exports provided: FoodposterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodposterPageModule", function() { return FoodposterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodposter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodposter.page */ "./src/app/foodposter/foodposter.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__);










// import { BrowserModule } from '@angular/platform-browser';

var routes = [
    {
        path: '',
        component: _foodposter_page__WEBPACK_IMPORTED_MODULE_6__["FoodposterPage"]
    }
];
var FoodposterPageModule = /** @class */ (function () {
    function FoodposterPageModule() {
    }
    FoodposterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                // BrowserModule,
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"]
            ],
            declarations: [_foodposter_page__WEBPACK_IMPORTED_MODULE_6__["FoodposterPage"]]
        })
    ], FoodposterPageModule);
    return FoodposterPageModule;
}());



/***/ }),

/***/ "./src/app/foodposter/foodposter.page.html":
/*!*************************************************!*\
  !*** ./src/app/foodposter/foodposter.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"home-mw\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"postmyfood\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Food Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Textarea in an item with a floating label -->\n  <ion-item class=\"home-mw\">\n    <ion-label position=\"floating\">Food Title</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item class=\"home-mw\">>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea></ion-textarea>\n  </ion-item>\n\n\n  <ion-grid class=\"home-mw\">\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Upload Food Picture</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <img style=\"width: 50px;\" src=\"/assets/icon/_ionicons_svg_md-cloud-upload.svg\">\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n\n      <ion-col>\n\n        <ion-card class=\"home-mw\">\n          <ion-card-header>\n            <ion-card-title>Number of Servings</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-input type=\"number\" value=\"5\"></ion-input>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n\n\n    </ion-row>\n  </ion-grid>\n\n  <!-- Default Segment -->\n  <ion-segment class=\"home-mw\">\n    <ion-segment-button value=\"friends\">\n      <ion-label>Pick-up only</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"enemies\">\n      <ion-label>Deliver</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n</ion-content>\n\n<ion-footer class=\"home-mw\">\n\n  <ion-toolbar>\n    <ion-title>\n\n\n      <ion-button expand=\"full\">Publish</ion-button>\n\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n<div class=\"home-dw\"\n  style=\"position: fixed; z-index:  111000; top:0; left:0; width:100%; height:100%; overflow-y: scroll; background: #333;\">\n\n\n  <div style=\"width:100%; height: 90px; position: absolute; top:0; left:0;  z-index: 1000000;\">\n    <div class=\"flex-container\">\n\n        <div  [routerLink]=\"['/postmyfood']\" routerDirection=\"forward\" style=\"cursor: pointer;  text-align: left; font-size: 25px; padding: 10px; background: #fff;\">\n          &nbsp; &nbsp; Food<span style=\"color: darkgreen; \">Ali</span>\n        </div>\n      <div [routerLink]=\"['/profile']\" style=\" cursor: pointer; text-align: left; font-size: 25px; position: relative;\">\n        <div\n          style=\"width: 100%; padding:0; line-height:0; padding-right:20px;  position: absolute; top: 50%;  transform: translateY(-50%);\">\n\n          <ion-icon class=\"icon\" style=\"float: right; margin-top:5px; \" name=\"contact\"></ion-icon>\n\n          <div style=\"clear: both;\"></div>\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n  </div>\n  <br /><br /><br /><br />\n  <ion-card style=\"background: #fff; margin: 120px;\">\n    <ion-card-header style=\"height: 100px;\">\n      <ion-tabs>\n\n        <ion-tab-bar slot=\"top\">\n\n\n          <ion-tab-button tab=\"tab1\" style=\"background:goldenrod !important;   color: white !important;\">\n            <ion-icon name=\"jet\"></ion-icon>\n            <ion-label>Poster</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"tab2\" [routerLink]=\"['/manage']\" routerDirection=\"forward\">\n            <ion-icon name=\"menu\"></ion-icon>\n            <ion-label>Manage</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"tab2\" [routerLink]=\"['/blacklist']\" routerDirection=\"forward\">\n            <ion-icon name=\"hand\"></ion-icon>\n            <ion-label>Blacklist</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <!--\n            stepper ref : \n            https://devdactic.com/angular-material-ionic-4/ -->\n\n\n      <!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n                {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n              </button> -->\n\n      <div class=\"flex-container2\">\n\n\n        <div>\n\n          <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n            <mat-step [stepControl]=\"eighthFormGroup\">\n              <form [formGroup]=\"eighthFormGroup\" (ngSubmit)=\"zero()\" #formone=\"ngForm\">\n                <ng-template matStepLabel>Which cuisine type your food belong to?</ng-template>\n                <mat-form-field>\n                  <input matInput placeholder=\"Cuisine type\" formControlName=\"eighthCtrl\" required>\n                </mat-form-field>\n                <div>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n            <mat-step [stepControl]=\"firstFormGroup\">\n              <form [formGroup]=\"firstFormGroup\" (ngSubmit)=\"form1()\" #formone=\"ngForm\">\n                <ng-template matStepLabel>Fill your Dish name</ng-template>\n                <mat-form-field>\n                  <input matInput placeholder=\"Food title\" formControlName=\"firstCtrl\" required>\n                </mat-form-field>\n                <div>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n\n            <mat-step [stepControl]=\"secondFormGroup\">\n              <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"form2()\" #formone=\"ngForm\">\n                <ng-template matStepLabel>Fill out your food description</ng-template>\n                <mat-form-field>\n                  <input matInput placeholder=\"Food description\" formControlName=\"secondCtrl\" required>\n                </mat-form-field>\n                <div>\n                  <button mat-button matStepperPrevious>Back</button>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n\n            <mat-step [stepControl]=\"thirdFormGroup\">\n              <form [formGroup]=\"thirdFormGroup\">\n                <ng-template matStepLabel>Upload one picture for your food</ng-template><br />\n                <!-- <button mat-button>BROWSE FILES</button> -->\n\n\n              <!-- Use the following,  -->\n                <!-- <input\n                style=\"display: none\"\n                type=\"file\" (change)=\"onFileChanged($event)\"\n                #fileInput>\n              <button (click)=\"fileInput.click()\">Select File</button>\n              <button (click)=\"onUpload()\">Upload!</button> -->\n\n              <!-- or,  -->\n\n              <div class=\"container mt-5 mb-5\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <!-- <label class=\"col-sm-3 col-form-label\" for=\"files\">Documents</label> -->\n                        <div class=\"col-sm-9\">\n                          <span class=\"hidden-file\">\n                            <input style=\"display:none;\" type=\"file\" #fileInput ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"onFileSelected($event)\" />\n                          </span>\n                          <div class=\"btn-group\" (click)=\"fileInput.click()\">\n                            <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider\">\n                                 <i class=\"ion-plus-round\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-primary\" mat-button>\n                               BROWSE Image\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <br/>\n                  <div class=\"col-md-9 mt-5\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th>Name</th>\n                          <th>Size</th>\n                          <th>Actions</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let item of uploader.queue\">\n                          <td>\n                            {{ item?.file?.name }}\n                          </td>\n                          <td>\n                            {{ item?.file?.size/1024/1024 | number:'.2' }} MB\n                          </td>\n                          <td>\n                            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\" mat-button>\n                       <span class=\"glyphicon glyphicon-trash\"></span> \n                       Remove\n                      </button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                  <br/>\n                </div>\n              </div>\n\n                <div>\n                  <button mat-button matStepperPrevious>Back</button>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n\n\n            <mat-step [stepControl]=\"fourthFormGroup\">\n              <form [formGroup]=\"fourthFormGroup\" (ngSubmit)=\"form4()\" #formone=\"ngForm\">\n                <ng-template matStepLabel>Provide number of servings</ng-template>\n\n                <mat-form-field>\n                  <input matInput type=\"number\" placeholder=\"Number of servings\" min=\"1\" formControlName=\"fourthCtrl\"\n                    required>\n                </mat-form-field>\n\n\n\n                <div>\n                  <button mat-button matStepperPrevious>Back</button>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n\n\n            <mat-step [stepControl]=\"fifthFormGroup\">\n              <form [formGroup]=\"fifthFormGroup\" (ngSubmit)=\"form5()\" #formone=\"ngForm\">\n                <ng-template matStepLabel>Choose delivery option?</ng-template><br />\n\n                <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\"\n                  #foo=\"matButtonToggleGroup\" formControlName=\"fifthCtrl\" required>\n                  <mat-button-toggle value=\"0\">Pick-up only</mat-button-toggle>\n                  <mat-button-toggle value=\"1\">Home delivery</mat-button-toggle>\n                </mat-button-toggle-group>\n\n\n                <div>\n                  <button mat-button matStepperPrevious>Back</button>\n                  <button mat-button matStepperNext >Next</button>\n                </div>\n              </form>\n            </mat-step>\n            <mat-step [stepControl]=\"sixthFormGroup\">\n              <form [formGroup]=\"sixthFormGroup\" (ngSubmit)=\"form6()\" #formone=\"ngForm\">\n                <ng-template matStepLabel>Choose your location</ng-template>\n                <mat-form-field>\n                  <input matInput placeholder=\"Search for location\" formControlName=\"sixthCtrl\" required>\n                </mat-form-field>\n                <div>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n            <mat-step [stepControl]=\"seventhFormGroup\">\n              <form [formGroup]=\"seventhFormGroup\" (ngSubmit)=\"form7()\" #formone=\"ngForm\">\n                <ng-template matStepLabel>Is your recipe Veg?</ng-template><br />\n\n                <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\"\n                  #foo=\"matButtonToggleGroup\" formControlName=\"seventhCtrl\" required>\n                  <mat-button-toggle value=\"1\">Yes</mat-button-toggle>\n                  <mat-button-toggle value=\"0\">No</mat-button-toggle>\n                </mat-button-toggle-group>\n\n\n                <div>\n                  <button mat-button matStepperPrevious>Back</button>\n                  <button mat-button matStepperNext >Next</button>\n                </div>\n              </form>\n            </mat-step>\n            <mat-step>\n              <ng-template matStepLabel>Done</ng-template>\n              You are now done.<br />\n              <button mat-button (click)=\"createFoodcard()\">POST MY FOOD CARD</button>\n              <br />\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button (click)=\"stepper.reset()\">Reset</button>\n              </div>\n            </mat-step>\n          </mat-vertical-stepper>\n\n        </div>\n        <div>\n\n          <ion-row>\n\n            <ion-col>\n              <ion-card style=\"background: #fff; \">\n                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n\n                <ion-card-header>\n\n                  <img\n                    src=\"https://www.mylands.com/media/wysiwyg/Colour_Palettes/Mylands_Grey_Palette_Main_Image_.jpg\" />\n\n                  <img class=\"veg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n                    src=\"https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetarian-3-565377.png\" />\n\n                    <img class=\"nonveg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n                    src=\"https://www.trzcacak.rs/file/max/53/538140_non-veg-png.png\" />\n                    \n\n                  <!-- <ion-card-subtitle>Cuisine type</ion-card-subtitle> -->\n                  <ion-card-subtitle>{{Cuisinename}}</ion-card-subtitle>\n                  <ion-card-title>{{Foodname}}</ion-card-title>\n                  <ion-card-subtitle>{{Fooddesc}}</ion-card-subtitle>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n\n\n                  <ion-badge color=\"success\">\n                    <ion-icon name=\"star\"></ion-icon> 5.0\n                  </ion-badge>\n                  <ion-badge style=\"margin-left:10px \" color=\"primary\">\n                    <ion-icon name=\"bicycle\"></ion-icon> {{deliverytype}}\n                  </ion-badge><br />\n                  <b> {{servings}} number of servings</b>\n                  <br />\n{{wlocation}}\n\n                </ion-card-content>\n                <ion-footer>\n                  <ion-toolbar>\n\n                    <ion-grid>\n                      <ion-row>\n\n                        <ion-col style=\"text-align: center;\">\n                          <ion-icon name=\"share\"></ion-icon>\n                        </ion-col>\n\n                        <ion-col (click)=\"goFoodInfo()\" style=\"text-align: center; cursor: pointer\">\n\n                          <ion-icon name=\"eye\"></ion-icon>\n\n                        </ion-col>\n\n                      </ion-row>\n\n                    </ion-grid>\n\n\n\n\n                  </ion-toolbar>\n                </ion-footer>\n              </ion-card>\n\n            </ion-col>\n          </ion-row>\n\n        </div>\n\n      </div>\n      <br />\n      <br />\n\n    </ion-card-content>\n\n\n  </ion-card>\n\n  <div style=\"width: 100%; height:450px; background: rgb(56, 40, 9); color: honeydew\">\n    <div class=\"flex-container\">\n\n      <div class=\"foo\">\n        <br />\n        <ion-text style=\"text-align: left\">\n          <h3>About Foodali</h3>\n        </ion-text>\n        <p class=\"listing-foo\">About us</p>\n        <p class=\"listing-foo\">Team</p>\n        <p class=\"listing-foo\">Careers</p>\n        <p class=\"listing-foo\">Offers</p>\n        <p class=\"listing-foo\">Contact</p>\n      </div>\n      <div class=\"foo\">\n        <br />\n        <ion-text style=\"text-align: left\">\n          <h3>Get Help</h3>\n        </ion-text>\n        <p class=\"listing-foo\">Help and support</p>\n        <p class=\"listing-foo\">Partner with us</p>\n        <p class=\"listing-foo\">Ride with us</p>\n        <p class=\"listing-foo\">Blog</p>\n      </div>\n      <div class=\"foo\">\n        <br />\n        <ion-text style=\"text-align: left\">\n          <h3>Get FoodAli in your phone</h3>\n        </ion-text>\n        <img style=\"margin-top: 10px; float:left; margin-right: 10px;\" width=\"150px;\"\n          src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp\" />\n\n        <img style=\"margin-top: 10px; float:left; \" width=\"150px;\"\n          src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty\" />\n\n      </div>\n\n    </div>\n  </div>\n  <ion-footer style=\"background: rgb(20, 20, 20); text-align:center\">\n    <ion-toolbar>\n      <ion-title>Copyright 2019, Foodali inc.\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/foodposter/foodposter.page.scss":
/*!*************************************************!*\
  !*** ./src/app/foodposter/foodposter.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #dddddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jhamtpc2hvci9EZXNrdG9wL2Zvb2RhbGkvbW9kZXJuLWZvb2RpZXMtaW5kaWEvc3JjL2FwcC9mb29kcG9zdGVyL2Zvb2Rwb3N0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vZHBvc3Rlci9mb29kcG9zdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/foodposter/foodposter.page.ts":
/*!***********************************************!*\
  !*** ./src/app/foodposter/foodposter.page.ts ***!
  \***********************************************/
/*! exports provided: FoodposterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodposterPage", function() { return FoodposterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dish/dish.service */ "./shared/dish/dish.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/Session/session.service */ "./shared/Session/session.service.ts");










var URL = 'http://localhost:8080/upload/';
var FoodposterPage = /** @class */ (function () {
    function FoodposterPage(http, sessionService, toastController, navCtrl, _formBuilder, dishService) {
        this.http = http;
        this.sessionService = sessionService;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this._formBuilder = _formBuilder;
        this.dishService = dishService;
        this.foodCard = {};
        this.isLinear = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: URL,
            disableMultipart: false,
            autoUpload: true,
            method: 'post',
            itemAlias: 'myFile',
            allowedFileType: ['image', 'pdf']
        });
    }
    FoodposterPage.prototype.onFileSelected = function (event) {
        var file = event[0];
        console.log(file);
    };
    FoodposterPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your FOOD have been added successfully.',
                            position: 'top',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodposterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.fourthFormGroup = this._formBuilder.group({
            fourthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.fifthFormGroup = this._formBuilder.group({
            fifthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.sixthFormGroup = this._formBuilder.group({
            sixthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.seventhFormGroup = this._formBuilder.group({
            seventhCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.eighthFormGroup = this._formBuilder.group({
            eighthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        var user = getCookie("foodali_access_token");
        console.log(user + " <<< session access token ");
        if (user != "") {
            this.sessionService.GetSessionAccess(user).subscribe(function (response) {
                _this.userid = response[0].userId;
                console.log(response[0].userId);
            }, function (err) { return console.log(err); });
            // this.navCtrl.navigateForward("postmyfood");
            this.dishService.GetDishId(this.userid).subscribe(function (response) {
                console.log(response);
            });
        }
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    };
    FoodposterPage.prototype.zero = function () {
        console.log(this.eighthFormGroup.value);
        this.foodCard.cuisine = this.eighthFormGroup.value.eighthCtrl;
        this.Cuisinename = this.foodCard.cuisine;
    };
    FoodposterPage.prototype.form1 = function () {
        console.log(this.firstFormGroup.value);
        this.foodCard.dishName = this.firstFormGroup.value.firstCtrl;
        this.Foodname = this.foodCard.dishName;
    };
    FoodposterPage.prototype.form2 = function () {
        console.log(this.secondFormGroup.value);
        this.foodCard.foodDesc = this.secondFormGroup.value.secondCtrl;
        this.Fooddesc = this.foodCard.foodDesc;
    };
    FoodposterPage.prototype.form3 = function () {
        console.log(this.thirdFormGroup.value);
    };
    FoodposterPage.prototype.form4 = function () {
        console.log(this.fourthFormGroup.value);
        this.foodCard.noOfServings = this.fourthFormGroup.value.fourthCtrl;
        this.servings = this.foodCard.noOfServings;
    };
    FoodposterPage.prototype.form5 = function () {
        console.log(this.fifthFormGroup.value);
        this.foodCard.delivery = this.fifthFormGroup.value.fifthCtrl;
        if (this.foodCard.delivery == true) {
            this.deliverytype = "Delivery";
        }
        else {
            this.deliverytype = "Pick-up Only";
        }
    };
    FoodposterPage.prototype.form6 = function () {
        console.log(this.sixthFormGroup.value);
        this.foodCard.address = this.sixthFormGroup.value.sixthCtrl;
        this.wlocation = this.foodCard.address;
    };
    FoodposterPage.prototype.form7 = function () {
        console.log(this.seventhFormGroup.value);
        this.foodCard.isVeg = this.seventhFormGroup.value.seventhCtrl;
        if (this.foodCard.isVeg == true) {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(".veg").fadeIn(1);
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(".nonveg").fadeOut(1);
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(".nonveg").fadeIn(1);
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(".veg").fadeOut(1);
        }
    };
    // file upload spring ref 
    // https://stackoverflow.com/questions/49845355/spring-boot-controller-upload-multipart-and-json-to-dto
    FoodposterPage.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    FoodposterPage.prototype.onUpload = function () {
        // upload code goes here
        // this.http is the injected HttpClient
        var uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile);
        uploadData.forEach(function (value, key) {
            console.log(key + " " + value);
            console.log(JSON.stringify(value));
        });
        this.foodCard.img = uploadData;
        this.http.post('http://localhost:8080/upload', uploadData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(function (event) {
            console.log(event); // handle event here
        });
    };
    FoodposterPage.prototype.goFoodInfo = function () {
        this.navCtrl.navigateForward("foodinfo");
    };
    FoodposterPage.prototype.createFoodcard = function () {
        console.log(this.foodCard);
        var data = { "cuisine": this.foodCard.cuisine, "dishName": this.foodCard.dishName, "foodDescription": this.foodCard.foodDesc, "noOfServings": this.foodCard.noOfServings, "delivery": this.foodCard.delivery, "address": this.foodCard.address, "isVeg": this.foodCard.isVeg, "Image": this.foodCard.img, "uId": this.userid };
        this.dishService.CreateDish(data).subscribe(function (response) {
            console.log(response);
        }, function (err) { return console.log(err); });
        this.presentToast();
        this.navCtrl.navigateForward('manage');
    };
    FoodposterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foodposter',
            template: __webpack_require__(/*! ./foodposter.page.html */ "./src/app/foodposter/foodposter.page.html"),
            styles: [__webpack_require__(/*! ./foodposter.page.scss */ "./src/app/foodposter/foodposter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_5__["DishService"]])
    ], FoodposterPage);
    return FoodposterPage;
}());



/***/ })

}]);
//# sourceMappingURL=foodposter-foodposter-module.js.map