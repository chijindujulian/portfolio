function a(){var a=new IntersectionObserver(A=>{for(const _ of A){console.log(_);_.target.classList.toggle('show',_.isIntersecting)}}),b=document.querySelectorAll(".hidden");for(const A of b)a.observe(A)}a();export{a as animation};