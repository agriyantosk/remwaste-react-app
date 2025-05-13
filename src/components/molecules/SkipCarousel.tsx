import { Carousel, Image } from "antd";
import type { Skip } from "../../types";
import type React from "react";

type Props = {
  skip: Skip;
};

const SkipCarousel: React.FC<Props> = ({ skip }) => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  const imageUrl = `/4-yarder-skip.jpg`;
  return (
    <>
      <Carousel arrows infinite={false}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default SkipCarousel;
