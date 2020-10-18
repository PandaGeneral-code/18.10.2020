import { transform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

import useAppHooks from "../../AppHooks";
import Wrapper from "./styled";

import sampleImagesMetadata from "../../images/sampleImagesMetadata.json";

const TestComponent = () => {
  const {
    state: { visibleArea },
  } = useAppHooks();
  const wrapperRef = useRef();
  const [fullyVisible, setFullyVisible] = useState(null);
  const [wrapperDimensions, setWrapperDimensions] = useState(null);

  const background = useMemo(
    () =>
      sampleImagesMetadata[
        Math.floor(Math.random() * sampleImagesMetadata.length)
      ],
    []
  );

  useEffect(() => {
    setWrapperDimensions(() => wrapperRef.current.getBoundingClientRect());
  }, []);

  useEffect(() => {
    setFullyVisible(
      () =>
        wrapperDimensions?.top >= visibleArea?.top &&
        wrapperDimensions?.bottom <= visibleArea?.bottom
    );
  }, [visibleArea, wrapperDimensions]);

  return (
    <Wrapper
      backgroundImage={background}
      fullyVisible={fullyVisible}
      parentScroll={transform(
        visibleArea?.bottom - wrapperDimensions?.top,
        [0, visibleArea?.height + wrapperDimensions?.height],
        [0, 1]
      )}
      ref={wrapperRef}
    ></Wrapper>
  );
};

export default TestComponent;
