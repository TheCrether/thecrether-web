export function flex(className: string) {
  return `${className} flex`;
}

export function sectionAnimator(selector = ".section", animatedClass = "animated-section") {
  const sections = document.querySelectorAll(selector);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(animatedClass);
          observer.unobserve(entry.target);
        }
      });
    });

    for (const section of sections) {
      observer.observe(section);
    }
  } else {
    for (const section of sections) {
      section.classList.add(animatedClass);
    }
  }
}