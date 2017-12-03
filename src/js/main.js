// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * jQuery Functions
 */
jQuery(document).ready(function ($) {

    // Open link in new tab for NOAA archive
    $(".noaa_link").click(function(e) {
        e.preventDefault();
        var url = "NOAA/NOAA-" + $(this).text() + ".txt";
        var win = window.open(url, '_blank');
        win.focus();
    });

});