import styled from "styled-components";

const Wrapper = styled.div.attrs(({ parentScroll }) => ({
  style: {
    backgroundPosition: `50% ${100 * parentScroll}%`,
  },
}))`
  background-image: url(${({
    backgroundImage: {
      urls: { small },
    },
  }) => small});
  background-repeat: no-repeat;
  background-size: 90% 90%;
  height: 25%;
  opacity: ${({ fullyVisible }) => (fullyVisible ? 1 : 0.25)};
  transition: opacity 2s ease;
`;

export default Wrapper;
