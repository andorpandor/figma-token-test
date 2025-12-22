# Figma Token Test - Style Dictionary Implementation

This project demonstrates how to transform design tokens (exported from Figma/Tokens Studio) into platform-specific code (CSS, Android XML, iOS, Swift) using [Style Dictionary](https://amzn.github.io/style-dictionary/#/).

It serves as a bare-bones framework to verify token transformation pipelines.

## Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)

## Installation

Install the project dependencies locally:

```bash
npm install
```

## Usage

### Build Tokens

To transform the tokens located in `tokens/` into build artifacts, run:

```bash
npx style-dictionary build
```

This command uses the configuration in `config.js` to generate files in the `build/` directory.

### Visual Verification

After building the tokens, you can open `index.html` in your browser to see a visual demonstration of the generated CSS variables in action.

## Output Formats

The build process generates the following artifacts:

| Platform | Format | Location |
|----------|--------|----------|
| **Web** | CSS Variables | `build/css/_variables.css` |
| **Android** | XML Resources (Colors, Dimens) | `build/android/` |
| **Jetpack Compose** | Kotlin Objects | `build/compose/` |
| **iOS** | Objective-C (.h/.m) | `build/ios/` |
| **iOS Swift** | Swift Classes & Enums | `build/ios-swift/` |

## Project Structure

- `tokens/`: Source JSON token files (e.g., exported from Tokens Studio).
- `config.js`: Style Dictionary configuration defining platforms, transforms, and build paths.
- `index.html`: A demo page validating the CSS output.
- `build/`: Generated output files (created after running the build command).
