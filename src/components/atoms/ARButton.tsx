import { getDeviceOS, isMobile } from "../../utils";

const ARButton: React.FC = () => {
  const os = getDeviceOS();

  const handleARClick = () => {
    if (os === "android") {
      window.open("/ar-viewer-android.html", "_blank");
    }
  };

  if (!isMobile() || os === "unknown") {
    return (
      <p className="text-sm text-secondary-red opacity-60 italic flex items-center">
        AR viewer is only available on mobile devices.
      </p>
    );
  }

  if (os === "ios") {
    return (
      <>
        <a
          rel="ar"
          href="/ar/skip.usdz"
          className="bg-primary text-white px-4 py-2 rounded-md flex items-center text-sm shadow-md inline-block"
          target="_blank"
        >
          View in AR
        </a>
      </>
    );
  }

  return (
    <button
      onClick={handleARClick}
      className="bg-primary text-white px-4 py-2 flex items-center rounded-md text-sm shadow-md"
    >
      View in AR
    </button>
  );
};

export default ARButton;
