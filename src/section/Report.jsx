import React from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "../sass/report.scss";

function Report() {
  const [show, setShow] = useState(false);
  return (
    <div className="report">
      <div className="container">
        <button onClick={() => setShow(!show)}><FormattedMessage id="Reports"/></button>
        {show ? (
          <li>
            <a href="https://media-exp1.licdn.com/dms/document/C4E1FAQFQ9ItYx9rnpQ/feedshare-document-pdf-analyzed/0/1646181887861?e=1646467200&v=beta&t=ZEI32qsBZau8FcVbSyevBCnJaTQTYSQcYd9HzytatZA"><FormattedMessage id="ClickHere"/> </a>
          </li>   
        ) : null}
      </div>
    </div>
  );
}

export default Report;
