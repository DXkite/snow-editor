/** Toast 弹出提示 */
;!(function (dxui) {
    // 常量
    var TOAST_PARENT_ID = 'Toast-Parent';
    var TOAST_SHOW_ID = 'Toast-Show';
    var TOAST_SHOW_CLASS = 'toast';
    var TOAST_POP_LEVEL = 10000;

    var Toast = function (text, time) {
        return new Toast.create(text, time);
    }

    // Toast队列
    Toast.Queue = new Array();
    // 构造函数
    Toast.create = function (message, time) {
        Toast.Parent = document.getElementById(TOAST_PARENT_ID);

        if (!Toast.Parent) {
            Toast.Parent = document.createElement('div');
            Toast.Parent.id = TOAST_PARENT_ID;
            document.body.appendChild(Toast.Parent);
        }
        Toast.Queue.push({
            message: message,
            timeout: time
        });
    };

    Toast.create.prototype.show = function showNext() {
        // 一个时刻只能显示一个Toast
        if (document.getElementById(TOAST_SHOW_ID)) return;
        var show = Toast.Queue.shift();
        var toastdiv = dxui.dom.element('div', {
            id: TOAST_SHOW_ID,
            class: TOAST_SHOW_CLASS
        });

        toastdiv.innerHTML = show.message;
        Toast.Parent.appendChild(toastdiv);

        var margin = window.innerWidth / 2 - toastdiv.scrollWidth / 2;
        var bottom = window.innerHeight - toastdiv.scrollHeight * 2;
        toastdiv.style.marginLeft = margin + 'px';
        toastdiv.style.top = bottom + 'px';
        var timeout = show.timeout || 2000;

        var close = function () {
            dxui.dom(toastdiv).css({
                'transition': 'opacity 0.3s ease-out',
                opacity: 0
            });

            setTimeout(function () {
                Toast.Parent.removeChild(toastdiv);
                if (Toast.Queue.length) {
                    showNext();
                }
            }, 300);
        };

        dxui.dom(toastdiv).css({
            position: 'fixed',
            opacity: 1,
            'z-index': TOAST_POP_LEVEL,
            transition: 'opacity 0.1s ease-in'
        });
        setTimeout(close, timeout);
    }
    Toast.show = Toast.create.prototype.show;
    dxui.Toast = Toast;
})(dxui)