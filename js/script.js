//메뉴
/* let dep1=$('.gnb-1depth-item');

dep1.hover(function(){
    let gnbWrap=$(this).find('.gnb-inner');
    let dep2=$('.gnb-inner')
    if(dep2.is(":visible")){
        dep2.css('display','none');
        gnbWrap.css('display','block')
    }else{
    
        gnbWrap.slideDown(500)
    }
},function(){
    let gnbWrap=$(this).find('.gnb-inner');
    let dep2=$('.gnb-inner')
    if(dep2.is(":visible")){
        dep2.css('display','none');
        gnbWrap.slideUp(500)
    }else{
    
        gnbWrap.slideUp(500)
    }  
}); */

/* let dep2=$('.gnb-inner > .gnb-2depth'); */
//안에 있는 리스트는 slide아닌 그냥 보이게, 높이 css 600px 해놨지만 auto로 조정 필요 

/* gnbWrap.hide();

dep1.hover(function(){
    $(this).find(gnbWrap).stop().slideDown(500);
    //dep2.show();
},function(){
    $(this).find(gnbWrap).stop().slideUp(500);

}) */

/* let dep2=$('.gnb-2depth-item>a');
let dep3Wrap=$('.gnb-3depth');
let gnbImg=$('.gnb-banner')
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
