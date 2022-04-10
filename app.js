const tl = gsap.timeline({defaults: {ease: "power1.out"}}); //tl stands for timeline whereby I can chain different animations together, who run one by one

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25}); //timeline to=grab text class, move it up along the y axes to normal position within 1 second, but all three span classes staggered
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5})// slider was pushed down 100%, now it comes up    
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");//grab intro section and slide it up, but before the previous tl has finished, so put -1 sec outside the object
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})//from to defines a certain range
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")