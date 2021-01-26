import { Indicator } from './styled'

const CarouselIndicator = ({ index, indexActive }) =>
  <li>
    <Indicator active={index == indexActive} />
  </li>

export default CarouselIndicator
