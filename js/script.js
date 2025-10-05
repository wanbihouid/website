$(document).ready(function() {
    const $img = $('#main_img');
    const img_1 = '/img/main.jpg';
    const img_2 = '/img/icon.jpg';
    let now_img = 1;

    $img.on('click', function() {
        $img.fadeOut(500, function() {
            $img.attr('src', now_img ? img_2 : img_1);
            now_img = 0;
            $img.fadeIn(500);
        });
    });
});
