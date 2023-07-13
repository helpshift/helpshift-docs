import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PropTypes from "prop-types";

export default function Root({ children }) {
  const {
    siteConfig: {
      customFields: { hsDomain, hsPid, envIsProduction },
    },
  } = useDocusaurusContext();

  // Initialize Web Chat on mount
  useEffect(() => {
    if (envIsProduction && hsDomain && hsPid) {
      !(function (t, e) {
        if ("function" != typeof window.Helpshift) {
          var n = function () {
            n.q.push(arguments);
          };
          (n.q = []), (window.Helpshift = n);
          var i,
            a = t.getElementsByTagName("script")[0];
          if (t.getElementById(e)) return;
          (i = t.createElement("script")),
            (i.async = !0),
            (i.id = e),
            (i.src = "https://webchat.helpshift.com/webChat.js");
          var o = function () {
            window.Helpshift("init");
          };
          window.attachEvent
            ? i.attachEvent("onload", o)
            : i.addEventListener("load", o, !1),
            a.parentNode.insertBefore(i, a);
        } else window.Helpshift("update");
      })(document, "hs-chat");
    }

    (function () {
      var PLATFORM_ID = hsPid,
        DOMAIN = hsDomain;

      window.helpshiftConfig = {
        platformId: PLATFORM_ID,
        domain: DOMAIN,
      };
    })();
  }, []);

  return <>{children}</>;
}

Root.propTypes = {
  children: PropTypes.node,
};
