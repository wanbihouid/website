$(document).ready(function() {
    const $main_img = $('#main_img');
    const main_jpg = '/img/main.jpg';
    const icon_jpg = '/img/icon.jpg';
    let now_img = true;

    $main_img.on('click', function() {
        $main_img.hide(200, function() {
            if(now_img == true){
                $main_img.css({'opacity':0.1,'padding':'30%','border':'1px dashed #ffffff'});
            }else{
                $main_img.css({'opacity':1,'padding':'unset','border':'none'});
            }
            $main_img.attr('src', now_img ? icon_jpg : main_jpg);
            now_img = !now_img; //切换0和1
            $main_img.show(200);
        });
    });
});
