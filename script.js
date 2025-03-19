let tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
   stagger:0.25,
   duration:0.6,
   delay:0.5
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function () {
        let h5timer = document.querySelector('#line1-part1 h5');
        let count = 0;
        setInterval(function(){
            if( count<100 ){
                h5timer.innerHTML = count++
            }else{
                h5timer.innerHTML = count
            }
            
        },30)
    }
})
tl.to(".line h2",{
    AnimationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3.5,

});

tl.from("#page1",{
    y:1200,
    opacity:0,
    duration:0.5,
    delay:0.2
    
});

tl.to("#loader",{
    display:"none"
})

