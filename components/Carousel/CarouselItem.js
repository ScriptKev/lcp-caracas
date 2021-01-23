import { forwardRef } from "react";

import { Item } from "./styled";

const CarouselItem = forwardRef(({ img, index }, ref) => (
  <li id={index} ref={ref}>
    <Item img={img} />
  </li>
));

export default CarouselItem;
