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

const { visit } = require("unist-util-visit");

/**
 * Given a string that may contain one/more "[% variable.path %]" template
 * strings, replaces each one with its resolved value from `data`. Used for
 * both plain text node values and JSX attribute values, since the
 * substitution logic itself is identical in both cases.
 *
 * @param {string} value - the raw string to substitute templates within
 * @param {object} data - the variables object to resolve "variable.path" against
 * @returns {string} the string with all resolvable templates replaced
 */
const substituteTemplateStrings = (value, data) => {
  // Checks if the text node has one/more template strings
  const matches = value.match(/\[%(.*)%\]/m);

  matches.forEach((match) => {
    // Get rid of the template string to obtain the variable name
    const _variable = match.replace(/(\[|\]|%)/gm, "").trim();

    // This allows us to access nested variables using dot operator
    // https://stackoverflow.com/a/43849204
    const resolvedValue = _variable
      .split(".")
      .reduce((p, c) => (p && p[c]) || null, data);

    if (resolvedValue) {
      // Replace the variable with the actual value
      value = value.replaceAll(match, resolvedValue);
    } else {
      // We don't want to crash here because it's possible that the value
      // is in a code block for demonstration purposes
      console.log(`DID NOT FIND ${resolvedValue}`);
    }
  });

  return value;
};

const plugin = ({ data }) => {
  const transformer = async (ast) => {
    visit(ast, (node) => {
      if (node && node.value && node.value.includes("[%")) {
        node.value = substituteTemplateStrings(node.value, data);
      }

      //handle MDX JSX attributes
      if (
        (node.type === "mdxJsxFlowElement" ||
          node.type === "mdxJsxTextElement") &&
        node.attributes
      ) {
        node.attributes.forEach((attr) => {
          if (typeof attr.value === "string" && attr.value.includes("[%")) {
            attr.value = substituteTemplateStrings(attr.value, data);
          }
        });
      }
    });
  };

  return transformer;
};

module.exports = plugin;
