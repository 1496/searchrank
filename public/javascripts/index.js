(function(window, $) {
    var G = {};

    G.init = function()
    {
    	G.submit();
    };

    G.submit = function()
    {
    	var $bt_check = $('.bt_check');




    	$bt_check.on('click',function(){
            var URL = $('.url_box input').val();
            var KEYWORD = $('.keyword_box input').val();

			$.ajax({
                type: "POST",
                url:'/result',
                data:{serchURL:URL,keywords:KEYWORD}
			}).done(function(data){
                console.log('sucsess');
                console.log(data);
			}).fail(function(data){
				console.log(data);
				return false;
			});
    	});

    };

    window.index = G;

})(window, jQuery);







/* ↓ページのDOMがすべて生成されたら*/
jQuery(window).ready(function()
{
    index.init();
});

/* ↓ページすべての画像を読み込んだら
$(window).load(function()
{
     index.init();
});
*/