const common = require('./common');
const chaoxing = require('./chaoxing/chaoxing');

common.removeinjected(document);
global.config = JSON.parse(localStorage['config']);
global.timer = new Array();
if (window.location.href.indexOf('mycourse/studentstudy?') > 0) {
    //超星学习页面
    document.addEventListener('load', function (ev) {
        var ev = ev || event;
        var _this = ev.srcElement || ev.target;
        if (_this.id == 'iframe') {
            factory('chaoxing').studentstudy();
        }
    }, true);
    var frame = document.getElementById('iframe');
    if (frame != null) {
        factory('chaoxing').studentstudy();
    }
} else if (window.location.href.indexOf('ztnodedetailcontroller/visitnodedetail') > 0) {
    //超星阅读页面
    factory('chaoxing').read();
}

/**
 * 工厂
 * @param {string} object 
 * @return plugin
 */
function factory(object) {
    switch (object) {
        case 'chaoxing': {
            return new chaoxing();
        }
    }
}
