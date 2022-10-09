import { RoundFunc, getColor, getSwing, getDelay} from "./functions";

const SwingingCard = ({ item, index, isAnimation }) => {
  const blobWidth = RoundFunc(20, 26);
  return (
    <div
      className="swingingCard"
      style={{
        "--blob-width": `${blobWidth}vh`,
        "--blob-color": getColor(),
        "--swing-angle": `${getSwing()}deg`,
        "--animation-delay": `${getDelay()}ms`,
      }}
    >
      <div className="topBlob">{item.text}</div>
      <img
        className="swingCardIMG"
        src={item.image_url}
        alt={`benifit ${index + 1}`}
        style={{ animationPlayState: isAnimation ? "running" : "paused" }}
      />
      <h4>{item.text_1}</h4>
    </div>
  );
};

export default SwingingCard;
