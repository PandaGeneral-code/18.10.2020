import React, { useCallback, useEffect, useRef } from "react";

import useAppHooks from "./AppHooks";
import Wrapper, { Content } from "./styled";
import TestComponent from "./components/TestComponent/TestComponent";

const App = () => {
  const { setVisibleArea } = useAppHooks();
  const wrapperRef = useRef();

  const handleSetVisibleArea = useCallback(
    (clientHeight, scrollTop) =>
      setVisibleArea({
        bottom: scrollTop + clientHeight,
        height: clientHeight,
        top: scrollTop,
      }),
    [setVisibleArea]
  );

  const handleScroll = useCallback(
    ({ target: { clientHeight, scrollTop } }) => {
      handleSetVisibleArea(clientHeight, scrollTop);
    },
    [handleSetVisibleArea]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("scroll", handleScroll);
    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const { bottom, height, top } = wrapperRef.current.getBoundingClientRect();
    setVisibleArea({ bottom, height, top });
  }, [setVisibleArea]);

  return (
    <Wrapper ref={wrapperRef}>
      <Content>
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
      </Content>
    </Wrapper>
  );
};

export default App;
