# HeroUiPages


# Installation
Requirements:

Node.js version 18.17.x or later

Global Installation
To install the CLI globally, execute one of the following commands in your terminal:

npm install heroui-cli -g

Without Installation
Alternatively, you can use the CLI without a global installation by running the following command:

npx heroui-cli@latest

# Quick Start
Once the CLI is installed, run the following command to display available commands:
heroui

This will produce the following help output:

HeroUI CLI <version>

A command line tool for seamless integration with HeroUI

Usage: heroui [command]

Options:
  -v, --version  Show the version number
  --no-cache     Disable cache, by default data will be cached for 30m after the first request
  -h, --help     Display help for commands

Commands:
  init [options] [projectName]       Start a new HeroUI project
  add [options] [components...]      Add HeroUI components to your project
  upgrade [options] [components...]  Update HeroUI components to the latest versions
  remove [options] [components...]   Remove HeroUI components from your project
  list [options]                     Show details of installed components
  env [options]                      Display debug information about the local environment
  doctor [options]                   Diagnose problems in your project
  help [command]                     Get help on a specific command

# init
Initialize a new HeroUI project using the init command. This sets up your project with the necessary configurations.
heroui init my-heroui-app


### Install the dependencies to start the local server:
cd my-heroui-app && npm install

### Start the local server:
npm run dev

# add
Add components to your HeroUI project with the add command. This command manages component dependencies and updates your project configurations.
Without specifying a specific component:

You will be prompted to select the components you wish to add:

? Which components would you like to add? › - Space to select. Return to submit
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer

Filtered results for: Enter something to filter

◯  accordion
◯  autocomplete
◯  avatar
◯  badge
◯  breadcrumbs
◉  button
◯  card
◯  checkbox
◯  chip
◯  code

### To add a specific component:

heroui add button

You will see an output confirming the addition of the component:
Adding the required dependencies: @heroui/button
Tailwind CSS settings have been updated in: /project-path/tailwind.config.js

✅ Components added successfully
upgrade

# Upgrade all the HeroUI components within your project.

heroui upgrade --all

### Upgrade specific HeroUI components within your project using the upgrade command to ensure they are up to date.

heroui upgrade button
You will be asked to confirm the upgrade:
╭───────────────────────── Component ─────────────────────────╮
│  @heroui/button              ^2.0.11  ->  ^2.0.31       │
╰─────────────────────────────────────────────────────────────╯

Required min version: @heroui/theme>=2.1.0, tailwindcss>=3.4.0
╭───────────────────── PeerDependencies ─────────────────────╮
│  @heroui/theme               2.0.1    ->  2.1.0        │
│  tailwindcss                     ^3.2.3   ->  ^3.4.0       │
╰────────────────────────────────────────────────────────────╯
2 minor, 1 patch

? Would you like to proceed with the upgrade? › - Use arrow-keys. Return to submit.
❯   Yes
    No
Upon confirmation, the command will execute and provide an output similar to:

✅ Upgrade complete. All components are up to date.