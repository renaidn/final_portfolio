// TEXT HOVER

const letters = "_";

document.querySelectorAll(".menuItem").forEach((menuItem) => {
  let interval = null; // Move the interval declaration inside the loop to handle multiple elements independently

  let done = false;

  menuItem.addEventListener("mouseleave", (event) => {
    done = false;
  });

  menuItem.addEventListener("mouseover", (event) => {
    if (done) return;

    const target = menuItem.querySelector(".hacker-effect");
    let iteration = 0;

    clearInterval(interval); // Ensure any previous interval is cleared

    interval = setInterval(() => {
      target.innerHTML = target.dataset.value
        .split("")
        .map((correctLetter, index) => {
          if (index < iteration) {
            return `<span style="color: black;">${correctLetter}</span>`; // Settled letters in blue
          } else if (index === iteration) {
            const randomLetter =
              letters[Math.floor(Math.random() * letters.length)];
            return `<span style="color: black;">${randomLetter}</span>`; // Currently changing letter in black
          } else {
            return `<span style="color: transparent;">${correctLetter}</span>`; // Unsettled letters in black
          }
        })
        .join("");

      if (iteration >= target.dataset.value.length) {
        clearInterval(interval); // Stop the interval once all letters are settled
      } else {
        iteration++;
      }
    }, 50);
    done = true;
  });
});

// MOUSE TOOLTIP

document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");
  const targets = document.querySelectorAll(".tooltip-target");

  let mouseX = 0, mouseY = 0; // Mouse position relative to the viewport


  const updateTooltipPosition = () => {
    // Update the tooltip position with respect to the viewport
    tooltip.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    request = null;
  };

  targets.forEach((target) => {
    target.addEventListener("mouseenter", (e) => {
      const tooltipText = e.target.getAttribute("data-tooltip");
      tooltip.innerText = tooltipText;
      tooltip.style.opacity = 1;
    });

    target.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });

    target.addEventListener("mousemove", (e) => {
      mouseX = e.clientX + 20; // Offset the tooltip slightly from the cursor
      mouseY = e.clientY + 20;
      updateTooltipPosition()
    });
  });
});

// make the movement more smooth (+ tiny bit delayed)
// tooltip doesn't follow cursor if you use touchpad to scroll
