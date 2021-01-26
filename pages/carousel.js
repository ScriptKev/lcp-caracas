import Carousel from 'components/Carousel'

export default function carousel() {
  const items = [
    { src: "/img/HeaderBg-10-01-21.webp", alt: "Amor correspondido" },
    { src: "/img/HeaderBg-17-01-21.webp", alt: "Aquí estoy" },
    { src: "/img/HeaderBg-24-01-21.webp", alt: "Seguimos llenos de esperanza" },
  ]

  return <Carousel items={items} />
}
