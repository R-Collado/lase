import gsap from "gsap";

export const resetOverlay = () => {
  gsap.to(".overlay", {
    y: "0",
    duration: 0.5,
    ease: "sine.in",
  });
};

export const fadeOutOverlay = () => {
  gsap.fromTo(
    ".overlay",
    {
      y: 0,
    },
    {
      y: "-100%",
      duration: 0.5,
      ease: "sine.in",
    },
  );
};
