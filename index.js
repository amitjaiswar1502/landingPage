const animate = () => {
  gsap.to(".imgContainer", {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 3,
    repeat: -1
  });

  gsap.to(".imgContainer", {
    delay: 3,
    ease: Expo.easeInOut,
    width: "0%",
    stagger: 3,
    repeat: -1
  });

  gsap.to(".text h1", {
    ease: Expo.easeInOut,
    stagger: 3,
    top: 0,
    repeat: -1
  });

  gsap.to(".text h1", {
    delay: 3,
    ease: Expo.easeInOut,
    stagger: 3,
    top: "-100%",
    repeat:-1
  });


};

animate();
