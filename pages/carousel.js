import Carousel from "components/Carousel";

export default function carousel() {
  const items = [
    { src: "/img/formHeader-24-01-2021.webp", alt: "Amor correspondido" },
    { src: "/img/formHeader-17-01-2021.webp", alt: "Aquí estoy" },
    {
      src: "/img/formHeader-10-01-2021.webp",
      alt: "Seguimos llenos de esperanza",
    },
  ];

  return <Carousel items={items} />;
}
