//메뉴
let dep1=$('.gnb-1depth-item');
let dep2=$('.gnb-inner')
let dep3=$('.gnb-3depth');
let dep4=$('.gnb-4depth');


dep3.css('display','none');
dep4.css('display','none');
dep1.hover(function(){
    $(this).find(dep2).stop().slideDown(500);
},function(){
    $(this).find(dep2).stop().slideUp(500);
});

$('.is-arrow1').hover(function(){
  if($(this).find('.is(.is-arrow)')){
    $(this).next('ul').css('display','none');
  }
},function(){
    $(this).next('ul').css('display','none');
});
$('.gnb-3depth-link').hover(function(){
    $(this).next('ul').css('display','block');
},function(){
    
})


/* let dep2=$('.gnb-2depth-item>a');
let dep3Wrap=$('.gnb-3depth');
let dep4Wrap=$('.gnb-4depth');
dep3Wrap.hide()
dep2.hover(function(){
    $(this).next(dep3Wrap).show(500);
},function(){

});

gnbImg.hide();
$('.gnb-3depth-item > a').hover(function(){
    $(this).next(gnbImg).show(500)
},function(){

}) */

/* 1depth before 추가 */
$('.gnb-1depth-link').hover(function(){
    $(this).addClass('on')
},function(){
    $(this).removeClass('on')
})



/* 모바일메뉴 */
//열림
$('.appbarBt').click(function(){
    $('.mobile-menu').stop().animate({left:0},500);
    $('.header-mobile-menu-bar>div').stop().animate({left:100+'%'},500);
});

//닫힘
$('.appbarCloseBt').click(function(){
    $('.mobile-menu').stop().animate({left:'-100%'},500);
    $('.header-mobile-menu-bar>div').stop().animate({left:0},500);
});
