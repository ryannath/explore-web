import { useState, useRef, useLayoutEffect } from 'react';
import { useViewportScroll } from 'framer-motion';

const usePosition = () => {
  const ref = useRef()
  const { scrollY } = useViewportScroll();

  // Stores the absolute position of the referenced component
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);

  // height of the viewport
  const [clientHeight, setClientHeight] = useState(0);
  
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    // If the referenced element is re-rendered, we would
    // like to get its new position and client height
    // since client height is used to calculate where animation should start
    const onResize = () => {
      console.log(element, element.getBoundingClientRect(), window.scrollY);
      // getBoundingClientRect gives position relative to the viewport
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementBottom(rect.top + window.scrollY + rect.height);
      setClientHeight(window.innerHeight);
    }
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);
  

  // Where the animation should begin and ends
  // Namely, when the top of the element first a  ppears in the viewport
  const start = elementTop - clientHeight;
  // and when the end of the element is last seen in the viewport
  const end = elementBottom;

  return {ref, start, end, scrollY};
}

export default usePosition;