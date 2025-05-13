import { Carousel, Image } from "antd";
import type { EnrichedSkip } from "../../types";
import type React from "react";

type Props = {
  skip: EnrichedSkip;
};

const SkipCarousel: React.FC<Props> = ({ skip }) => {
  return (
    <>
      <Carousel dots arrows infinite={false} className="w-full h-full">
        {skip.imgs.map((src, idx) => (
          <>
            <div key={idx} className="w-full h-full">
              <Image
                src={src}
                alt={`Skip ${skip.size} Yard ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </>
        ))}
      </Carousel>
    </>
  );
};

export default SkipCarousel;
