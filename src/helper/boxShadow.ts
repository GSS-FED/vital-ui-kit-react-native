export default function(
  x: number,
  y: number,
  radius: number,
  color: string,
  opacity: number,
) {
  return `
    shadow-opacity: ${opacity};
    shadow-color: ${color};
    shadow-offset: ${x}px ${y}px;
    shadow-radius: ${radius}px;
  `;
}
