import "./Button.css";
import items from "../../pages/items/items";

function HeroButton({ text }) {
  return (
    <a src={items} className="PillButton">
      {text}
    </a>
  ); // 테두리가 생김
}

export default HeroButton;
