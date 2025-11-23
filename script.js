// FAQ Accordion
document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
  
      answer.classList.toggle("hidden");
      btn.querySelector("span").textContent =
        answer.classList.contains("hidden") ? "+" : "-";
    });
  });
  