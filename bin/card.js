#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from "chalk";
const COLOR_THEME = "#c0392b";

// Text + chalk definitions
const data = {
	name: chalk.white.bold("👋 Hi! I'm Angel Cruz"),
	handle: chalk.hex(COLOR_THEME)("@abr4xas"),
	work: chalk.white(
		"Software Engineer | PHP | Laravel | WordPress developer \nSometimes I like to do some fun things with JavaScript, just like this card."
	),

	twitter: chalk.hex(COLOR_THEME)("https://twitter.com/abr4xas"),
	github: chalk.hex(COLOR_THEME)("https://github.com/abr4xas"),
	linkedin: chalk.hex(COLOR_THEME)("https://linkedin.com/in/angelcruzdev"),
	web: chalk.hex(COLOR_THEME)("https://angelcruz.me"),
	blog: chalk.hex(COLOR_THEME)("https://angelcruz.dev"),
	npx: chalk.white("npx angelcruzdev"),

	labelTwitter: chalk.white.bold("     Twitter:"),
	labelGitHub: chalk.white.bold("      GitHub:"),
	labelLinkedIn: chalk.white.bold("    LinkedIn:"),
	labelBlog: chalk.white.bold("         Blog:"),
	labelCard: chalk.white.bold("        Card:"),
};

const output = `
${data.name} (${data.handle})

${data.work}

${data.labelTwitter}  ${data.twitter}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelBlog}  ${data.blog}
${data.labelCard}  ${data.npx}

`;

console.log(output);
