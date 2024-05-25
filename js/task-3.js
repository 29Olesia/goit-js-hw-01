document.addEventListener('DOMContentLoaded', () => {
  function getElementWidth(content, padding, border) {
      const contentWidth = parseFloat(content);
      const paddingWidth = parseFloat(padding);
      const borderWidth = parseFloat(border);

      const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

      return totalWidth;
  }

  const elementWidthResults = document.getElementById('element-width-results');

  const widths = [
      getElementWidth("50px", "8px", "4px"),
      getElementWidth("60px", "12px", "8.5px"),
      getElementWidth("200px", "0px", "0px")
  ];

  widths.forEach(width => {
      const p = document.createElement('p');
      p.textContent = `Element width: ${width}px`;
      elementWidthResults.appendChild(p);
  });
});
