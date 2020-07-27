#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const COLOR_THEME = '#c0392b'

// Text + chalk definitions
const data = {
	name: chalk.white.bold("👋 Hi! I'm Angel Cruz"),
	handle: chalk.hex(COLOR_THEME)("@abr4xas"),
	work: chalk.white(
		"Backend Developer. I know how to work with php, I'm a big fan of Laravel & WordPress. \nAlso, I have a experience with HTML5/CSS3 and Javascript. \nRight now I'm in love with ReactJS ❤︎"
	),

	twitter: chalk.hex(COLOR_THEME)("https://twitter.com/abr4xas"),
	github: chalk.hex(COLOR_THEME)("https://github.com/abr4xas"),
	linkedin: chalk.hex(COLOR_THEME)("https://linkedin.com/in/ancrz"),
	web: chalk.hex(COLOR_THEME)("https://angelcruz.me"),
	npx: chalk.white("npx angelcruzdev"),

	labelTwitter: chalk.white.bold("     Twitter:"),
	labelGitHub: chalk.white.bold("      GitHub:"),
	labelLinkedIn: chalk.white.bold("    LinkedIn:"),
	labelWeb: chalk.white.bold("         Web:"),
	labelCard: chalk.white.bold("        Card:"),
};

const output = `
${data.name} (${data.handle})

${data.work}

${data.labelTwitter}  ${data.twitter}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelWeb}  ${data.web}

${data.labelCard}  ${data.npx}

`

console.log(output)
