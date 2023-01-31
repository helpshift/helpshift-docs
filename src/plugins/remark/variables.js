/**
 * Finds all instances of variables in MDX and replaces them with the actual
 * variable values, e.g. [% android.sdk_url %] is replaced with the SDK URL for
 * legacy Android.
 *
 * This is done because JSX variables are not actually replaced inline. E.g.
 * <code>v{variables.sdkx_ios.sdk_version}</code> does NOT work
 *
 * The same thing works if kept on an independent line.
 *
 * This could be released as a plugin on npm.
 * Might require more options to make this generic, e.g. allowing custom template string
 * wrappers to be used.
 *
 * @author Saunved <saunved@helpshift.com>
 * @created 10 Jan, 2023
 */

const visit = require("unist-util-visit");

const plugin = ({ data }) => {
  const transformer = async (ast) => {
    visit(ast, (node) => {
      if (node && node.value && node.value.includes("[%")) {
        // Checks if the text node has one/more template strings
        const matches = node.value.match(/\[%(.*)%\]/m);

        matches.forEach((match) => {
          // Get rid of the template string to obtain the variable name
          const _variable = match.replace(/(\[|\]|%)/gm, "").trim();

          // This allows us to access nested variables using dot operator
          // https://stackoverflow.com/a/43849204
          const value = _variable
            .split(".")
            .reduce((p, c) => (p && p[c]) || null, data);

          if (value) {
            // Replace the variable with the actual value
            node.value = node.value.replace(match, value);
          } else {
            // We don't want to crash here because it's possible that the value
            // is in a code block for demonstration purposes
            console.log(`DID NOT FIND ${value}`);
          }
        });
      }
    });
  };

  return transformer;
};

module.exports = plugin;
