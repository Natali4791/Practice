import React from "react";
const copyright = "Авторские права принадлежат мне";
const FooterItem = () => {
  return (
    <div>
      <p className="m-3">
        &copy; {copyright} {new Date().getFullYear()}
      </p>
    </div>
  );
};
export default FooterItem;
