import "./AuxPanel.css";

export default function AuxPanel(props) {
  const { children } = props;
  return <section className="AuxPanel">{children}</section>;
}
