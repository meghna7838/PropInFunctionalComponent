import "./styles.css";

// Do not remove the export statement from Card Component.
//Refactor the given Card component.
export const Card = (prop) => (
  <div className="card">
    <h3>Name: {prop.name}</h3>
    <span>About: {prop.about}</span>
  </div>
);

export default function App() {
  return <Card name="Your Name." about="Your Message." />;
}
