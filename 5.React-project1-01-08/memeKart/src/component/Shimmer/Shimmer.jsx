import { useEffect } from "react";
import "./Shimmer.css";

const Shimmer = () => {
  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div className="sh-cardcont">
      {Array.from({ length: 15 }, (_, i) => {
        return (
          <div className="sh-container" key={i}>
            <div className="sh-card"></div>
            <div className="sh-textcont">
              <div className="sh-auth"> </div>
              <div className="sh-up"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
