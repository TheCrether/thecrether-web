export function flex(className: string) {
  return `${className} flex`;
}

export function sectionAnimator() {
  const sections = document.getElementsByClassName("section");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("animated-section");
          observer.unobserve(entry.target);
        }
      });
    });

    for (const section of sections) {
      observer.observe(section);
    }
  } else {
    for (const section of sections) {
      section.classList.add("animated-section");
    }
  }
}