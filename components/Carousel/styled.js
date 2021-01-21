import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 350px;
  overflow: hidden;
  border: 1px solid cadetblue;
  background-color: #1b5385;
`;

export const CarouselSlider = styled.div`
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  --webkit-overflow-scrolling: touch;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  transform: ${(props) => `scale(${props.active ? "1.02" : "1"})`};
`;

export const CarouselItem = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 300px;
  min-width: 100vw;
  scroll-snap-align: center;
`;

export const CarouselCircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselCircle = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  &::last-child {
    margin-right: 0;
  }
`;
