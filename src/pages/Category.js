import React from "react";
import News from "./Article";

export default function Category({ match }) {
  return (
    <div>
      <News endpoint={match.params.source_name} />
    </div>
  );
}
