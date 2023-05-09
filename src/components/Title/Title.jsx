import "./Title.css";

export default function AuxPanel(props) {
  const { text } = props;
  return <h1 className="Title">{text}</h1>;
}
