var tl = new TimelineMax();
//Animatie toevoegen met Tweenmax
tl.from(".text1", 3, {x:300, ease: Back.easeOut.config(1.7)})
 .from(".text2", 3, {x:-300, ease: Back.easeOut.config(1.7)}, "-=0,5")
 .from(".titel", 4, {y:30, opacity:0, ease:Elastic.easeOut}, "-=0,5");