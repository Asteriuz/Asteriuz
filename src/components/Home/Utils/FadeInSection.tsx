import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
