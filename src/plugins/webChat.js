/**
 * Docusaurus plugin to initialize web chat on dev docs
 * @returns {object|void} Script to inject for initializing web chat
 */
module.exports = function () {
  if (
    process.env.NODE_ENV !== "production" ||
    !process.env.HS_PID ||
    !process.env.HS_DOMAIN
  ) {
    return;
  }

  const webChatInitScript = {
    tagName: "script",
    innerHTML: `try {
        (function () {
          var PLATFORM_ID =
              "${process.env.HS_PID}",
            DOMAIN = "${process.env.HS_DOMAIN}";

          window.helpshiftConfig = {
            platformId: PLATFORM_ID,
            domain: DOMAIN,
          };
        })();

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
      } catch (error) {
        console.log(error);
      }`,
  };

  return {
    name: "webchat-plugin",
    injectHtmlTags() {
      return {
        postBodyTags: webChatInitScript,
      };
    },
  };
};
