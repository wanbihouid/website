$(document).ready(function() {
    const $main_img = $('#main_img');
    const img_1 = '/img/main.jpg';
    const img_2 = '/img/icon.jpg';
    let now_img = 1;

    $main_img.on('click', function() {
        $main_img.fadeOut(500, function() {
            $main_img.attr('src', now_img ? img_2 : img_1);
            now_img = !now_img; //切换0和1
            $main_img.fadeIn(500);
        });
    });
});
