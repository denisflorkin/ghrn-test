/* .grenrc.js */
const pkg = require('./package.json')
const {
  version
} = pkg;

module.exports = {
  template: {
    // issue: function (placeholders) {
    //   console.log('placeholders', placeholders)
    //   return JSON.stringify(placeholders, 2, 2)
    //   return '- ' + placeholders.labels + ' | ' + placeholders.name.toLowerCase() + ' | ';
    // },
    "commit": "- [{{message}}]({{url}}) - @{{author}}",
    "issue": "- {{labels}} {{name}} [{{text}}]({{url}})",
    "label": "[**{{label}}**]",
    "noLabel": "closed",
    "group": "\n#### {{heading}}\n",
    "changelogTitle": "# Changelog\n\n",
    "release": `## {{release}} ({{date}})\n{{body}}\n`,
    "releaseSeparator": "\n---\n\n"
  }
}
