var wrapper=document.querySelector(".testimonials__wrapper"),indicators=document.querySelectorAll(".dot"),currentTestimonial=0;indicators.forEach((function(e,i){e.addEventListener("click",(function(){indicators[currentTestimonial].classList.remove("active"),document.querySelector(".visible").classList.remove("visible"),wrapper.children[i].classList.add("visible"),e.classList.add("active"),currentTestimonial=i}))}));
//# sourceMappingURL=index.f32d976f.js.map
