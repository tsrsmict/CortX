import "./loader.css";
export default function Loader() {
  return (
    <div className="lds-ripple">
      <div id="first"></div>
      <div id="second"></div>
    </div>
  );
}
