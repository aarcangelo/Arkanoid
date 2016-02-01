var Arkanoid = (function (module) {
    'use strict';
    var Events = {
        InitAll: function () {
            this.Update();
        },
        Update: function () {
            alert('oi');
        }
	};

    module.init = function () {
        Events.InitAll();
    };

    return module;
})(Arkanoid || {});