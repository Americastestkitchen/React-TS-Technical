import { useMemo } from "react";
import primeFactorize from "../../lib/utils";

export default function Footer() {

  const arbitrarilyImportantNumber = useMemo(() => primeFactorize(1000000).length, []);

  return (
    <div style={{ position: "fixed", bottom: 0, background: "rgb(255 255 255)", padding: "20px 0", width: "100%", textAlign: "center" }}>
      <span>Total Recipes </span>
      <span>(and counting): </span>
      <span style={{ fontWeight: "bold" }}>{arbitrarilyImportantNumber}</span>
    </div>
  )
}