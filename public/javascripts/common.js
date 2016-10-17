

(function(window, $) {
    var G = {};

    G.init = function()
    {
        G.footerFix();        
    };

    G.fechGoogle = function(){

    };

    G.footerFix = function()
    {
        var $main = $('.main_content');
        var $footer = $('footer');

        resize();
        $(window).on('resize',resize);

        function resize()
        {
            var footer_H = $footer.outerHeight();
            var window_H = $(window).outerHeight();
            $main.css({height:window_H - footer_H});
            $footer.addClass('view');
        };

    };

    window.common = G;

})(window, jQuery);







/* ↓ページのDOMがすべて生成されたら*/
jQuery(window).ready(function()
{
    common.init();
});

/* ↓ページすべての画像を読み込んだら
$(window).load(function()
{
     common.init();
});
*/


function log() {
    if(typeof console == "undefined") return;

    var args = jQuery.makeArray(arguments);
    console.log.apply(console, args);
}


/*スクロールの値を取得*/
function getScrollTop(){ ///  verifica el calculo total en pixeles de toda la pagina
    if(typeof pageYOffset!= 'undefined')
    {
        $('#wirhe').text(pageYOffset);

        //most browsers
        return pageYOffset;
    }
    else
    {
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        $('#wirhe').text(D.scrollTop);
        return D.scrollTop;
    }
}