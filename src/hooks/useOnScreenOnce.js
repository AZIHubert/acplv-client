import {
    useState, 
    useEffect
} from 'react';

export default (ref, rootMargin = '0px') => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry], obs) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
          if(entry.isIntersecting > 0){
            obs.unobserve(ref.current);
          }
        },
        {
          rootMargin
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return isIntersecting;
  }
  