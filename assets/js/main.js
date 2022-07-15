const entranceAnimations = [ "animate__bounceInRight", "animate__fadeInRightBig",  "animate__flipInX", "animate__rotateInDownRight", "animate__jackInTheBox", "animate__rollIn"]
// const exitAnimations=["animate__backOutDown","animate__backOutRight","animate__bounceOutDown","animate__bounceOutUp","animate__fadeOutDown","animate__fadeOutTopRight","animate__flipOutX","animate__rotateOut","animate__rollOut"]
// console.log(randomAnimation);
$(".sideHome").click(function () {
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
    $(this).parent().parent().parent().next().next().children().addClass("d-none")
    $(".rightbar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    // const randomExitAnimation=Math.floor(Math.random()*9)
    // if(!($(this).siblings().hasClass("d-none"))){
    //     console.log($(this).siblings().hasClass("d-none"))
    // }else{
    //     console.log("Yoxdur");
    // }
    $(".rightbar").addClass(entranceAnimations[randomAnimation])
});
$(".sideAboutMe").click(function () {
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
    $(this).parent().parent().parent().next().next().children().addClass("d-none")
    $(".aboutMeBar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    $(".aboutMeBar").addClass(entranceAnimations[randomAnimation])
});
$(".sideResume").click(function () {
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
    $(this).parent().parent().parent().next().next().children().addClass("d-none")
    $(".resumeBar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    $(".resumeBar").addClass(entranceAnimations[randomAnimation])

});
$(".sideContact").click(function () {
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
    $(this).parent().parent().parent().next().next().children().addClass("d-none")
    $(".contactBar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    $(".contactBar").addClass(entranceAnimations[randomAnimation])

});

$(".burgerMenuIcon").click(function () {
    $(".menuBar").css("display", "block")
    $(".menuBar").addClass("animate__slideInRight")
    $(".menuBar").removeClass("animate__slideOutRight")
    $(".burgerMenuIcon").addClass("d-none")
    // setTimeout(() => {
    $(".closeMenuIcon").removeClass("d-none")
    $(".closeMenuIcon").addClass("d-block")
    // }, 300)

});
$(".closeMenuIcon").click(function () {
    $(".menuBar").addClass("animate__slideOutRight")
    $(".menuBar").removeClass("animate__slideInRight")
    $(".burgerMenuIcon").removeClass("d-none")
    $(".burgerMenuIcon").addClass("d-block")
    $(".closeMenuIcon").removeClass("d-block")
    $(".closeMenuIcon").addClass("d-none")

});

$(".menuHome").click(function(){
    
    $(this).parent().parent().parent().prev().children().addClass("d-none")
    $(".rightBar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    $(".rightbar").addClass(entranceAnimations[randomAnimation])z
})
$(".menuAboutMe").click(function(){
    
    $(this).parent().parent().parent().prev().children().addClass("d-none")
    $(".aboutMeBar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    $(".aboutMeBar").addClass(entranceAnimations[randomAnimation])
})
$(".menuResume").click(function(){
    
    $(this).parent().parent().parent().prev().children().addClass("d-none")
    $(".resumeBar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    $(".resumeBar").addClass(entranceAnimations[randomAnimation])
})

$(".menuContact").click(function(){
    
    $(this).parent().parent().parent().prev().children().addClass("d-none")
    $(".contactBar").removeClass("d-none")
    const randomAnimation = Math.floor(Math.random() * 9)
    $(".contactBar").addClass(entranceAnimations[randomAnimation])
})

