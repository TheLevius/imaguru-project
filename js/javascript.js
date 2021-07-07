/* << ===== НАЧАЛО: ПЛАВНАЯ ПРОКРУТКА на JQuery */
// Cache selectors
var lastId,
    topMenu = $(".menu-cont"),
    topMenuHeight = topMenu.outerHeight()+15,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
});
/* < ===  для круглой кнопки плавная прокрутка===>*/
$(document).ready(function() {
    $("a.scroll-btn, a.btn-a-our-work").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 600 );
        return false;
    });
});
/* << ===== конец: плавная прокрутка на JQuery =====>>*/

/* << ===== НАЧАЛО: меняющийся HEADER =====>>*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("spirit-menu");
    }
    else{
        $('header').removeClass("spirit-menu");
    }
});

/* << ===== конец: меняющийся header =====>>*/

/* << ===== НАЧАЛО: ФИЛЬТР для OUR WORKS =====>>*/
$(function() {

    var newSelection = "";

    $("#filter-var a").click(function(){

        $("#all-examples").fadeTo(200, 0.10);

        $("#filter-var a").removeClass("current");
        $(this).addClass("current");

        newSelection = $(this).attr("rel");

        $(".work-examp-item").not("."+newSelection).slideUp();
        $("."+newSelection).slideDown();

        $("#all-examples").fadeTo(600, 1);

    });

});
/* << ===== конец: фильтр для our works =====>>*/

/* НАЧАЛО АДАПТИВНАЯ КАРУСЕЛЬ нa owv-carousel */
$(document).ready(function() {

    $("#clients-carousel-owl").owlCarousel({

        autoPlay: 7000, //Set AutoPlay to 3 seconds

        items : 5,
        itemsDesktop : [1152,3], // совпадает с 1169
        itemsDesktopSmall : [858,2] // совпадает с 875

    });

});
/* конец адаптивная карусель нa owv-carousel */

/* НАЧАЛО OUR TEAM Portrait-carousel */
var cellwidth = parseInt(window.getComputedStyle(document.getElementById('first-team-cell')).width, 10); // сразу поолучем ширину не в пикселях, а в цифрах, у ячейки карусели
var wrapperwidth = parseInt(window.getComputedStyle(document.getElementById('team-carousel-wrapper')).width, 10);
var count = Math.floor(wrapperwidth / cellwidth );

var carousel = document.getElementById('team-carousel');
var list = carousel.querySelector('#team-portrait-cont');
var listElems = carousel.querySelectorAll('.person-cell-wrap');

var position = 0; // текущий сдвиг влево

carousel.querySelector('#team-back').onclick = function() {
    // сдвиг влево
    position = Math.min(position + cellwidth * count, 0)
    list.style.left = position + 'px';
};

carousel.querySelector('#team-next').onclick = function() {
    // сдвиг вправо
    position = Math.max(position - cellwidth * count, -cellwidth * (listElems.length - count));
    list.style.left = position + 'px';
};
/* НАЧАЛО OUR TEAM Portrait-carousel */