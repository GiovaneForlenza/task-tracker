import React from "react";

function SizeIndicator() {
  return (
    <div className="*:hidden">
      <div className="max-sm:block">xsm</div>
      <div className="sm:max-md:block">sm</div>
      <div className="md:max-lg:block">md</div>
      <div className="lg:max-xl:block">lg</div>
      <div className="xl:max-2xl:block">xlg</div>
      <div className="2xl:block">2xlg</div>
    </div>
  );
}

export default SizeIndicator;
