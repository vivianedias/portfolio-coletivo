export default function scrollIntoView(id) {
  return document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
