$(document).ready(function() {
    const $main_img = $('#main_img');
    const main_jpg = '/img/main.jpg';
    const icon_jpg = '/img/icon.jpg';
    let now_img = true;

    $main_img.on('click', function() {
        $main_img.fadeOut(500, function() {
            if(now_img == true){
                $main_img.css('opacity',0.1);
            }else{
                $main_img.css('opacity',1);
            }
            $main_img.attr('src', now_img ? icon_jpg : main_jpg);
            now_img = !now_img; //切换0和1
            $main_img.fadeIn(500);
        });
    });
});
