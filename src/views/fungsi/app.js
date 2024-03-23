export const createCircles = (count) => {
  const container = document.querySelectorAll(".container");
  if (container && container.length > 0) {
    container.forEach((container) => {
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      for (let i = 0; i < count; i++) {
        const circle = document.createElement("div");
        const size = Math.floor(Math.random() * 2) + 1;
        const top = Math.random() * (containerHeight - size);
        const left = Math.random() * (containerWidth - size);
        const color = "#A6BB8D";

        circle.style.position = "absolute";
        circle.style.top = `${top}px`;
        circle.style.left = `${left}px`;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.backgroundColor = color;
        circle.style.borderRadius = "50%";

        container.appendChild(circle);
      }
    });
  } else {
    console.warn("Tidak ada elemen container yang ditemukan.");
  }
};
