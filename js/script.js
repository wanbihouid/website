$(document).ready(function() {

    //禁止右键菜单
    $(document).on('contextmenu', function(event) {
        event.preventDefault();
    });

    //点击主图切换
    const $main_img = $('#main_img');
    const main_jpg = '/img/main.jpg';
    const icon_jpg = '/img/icon.jpg';
    let now_img = true;

    $main_img.on('click', function() {
        $main_img.fadeOut(200, function() {
            if(now_img == true){
                $main_img.css({'opacity':0.05,'padding':'30%','border':'1px dashed #ffffff'});
            }else{
                $main_img.css({'opacity':1,'padding':'unset','border':'none'});
            }
            $main_img.attr('src', now_img ? icon_jpg : main_jpg);
            now_img = !now_img; //切换0和1
            $main_img.fadeIn(200);
        });
    });

    //实时ETH价格
    $.ajax({
        url:'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', //CoinGecko 价格接口
        type:'GET',
        dataType:'json',
        success: function(response){
            var eth_price = response.ethereum.usd;
            $('#eth_price').html(eth_price + ' / ETH');
        }
    });
});
