import "./loader.css";
export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="lds-ripple">
        <div id="first"></div>
        <div id="second"></div>
      </div>
    </div>
  );
}
