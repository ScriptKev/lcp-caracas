import { Item } from "./styled";

export default function CarouselItem({ img }) {
  return (
    <li>
      <Item img={img} />
    </li>
  );
}
