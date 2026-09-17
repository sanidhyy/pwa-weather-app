# A Progressive Weather Application using React and TypeScript

![PWA Weather App using React JS](https://user-images.githubusercontent.com/71302066/177005735-619edae8-6740-45fa-bb70-19b8a74e7d5a.png "PWA Weather App using React JS")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/sanidhyy/pwa-weather-app)](https://github.com/sanidhyy/pwa-weather-app/blob/main/LICENSE.md "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sanidhyy/pwa-weather-app/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/sanidhyy/pwa-weather-app)](https://github.com/sanidhyy/pwa-weather-app/branches "GitHub branches")
[![Github commits](https://badgen.net/github/commits/sanidhyy/pwa-weather-app/main)](https://github.com/sanidhyy/pwa-weather-app/commits "Github commits")
[![Netlify Status](https://api.netlify.com/api/v1/badges/c3d78e12-4a59-4a95-a90f-7a2b673cffc4/deploy-status)](https://react-app-pwa-weather.netlify.app/ "Netlify Status")
[![GitHub issues](https://img.shields.io/github/issues/sanidhyy/pwa-weather-app)](https://github.com/sanidhyy/pwa-weather-app/issues "GitHub issues")

## :warning: Before you start

1. Make sure [Git](https://git-scm.com "Git") and [NodeJS](https://nodejs.org "NodeJS") are installed
2. Create `.env` file in root folder.
3. Contents of `.env`

```
OPENWEATHER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
```

4. Create an [Open Weather Map](https://openweathermap.org/ "Open Weather Map") account.
5. Copy your API Key as shown below and paste it in `.env` file.

   ![Copy API Key](https://user-images.githubusercontent.com/71302066/177005905-b2dba122-0b24-4c08-b331-cabd6c55d3fa.png "Copy API Key")

6. You are ready to go :fire:

   _NOTE:_ Never share these keys publicly. The key is read only by the Netlify function at `/api/weather` and is not exposed to the browser. If you previously used `REACT_APP_OPENWEATHER_API_KEY`, rename it to `OPENWEATHER_API_KEY` locally and in the Netlify site environment variables.

## :pushpin: How to use this App?

1. Clone this **repository** to your local computer.
2. Open **terminal** in root directory.
3. Type and Run `pnpm install`.
4. Once packages are installed, you can start this app using `pnpm start`
5. Now app is fully configured and you can start using this app :+1:

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/pwa-weather-app/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## :fire: Features

- Supports all **PWA Apps** Functionality.
- **Offline** Mode.
- Weather lookups go through a **Netlify Function**, so the OpenWeather API key stays server-side.
- **Easy to customize** file structure.
- Can be installed like **native** web app.
- Passes all **Lighthouse** checks.
- **Mobile** Responsive Layout

## :camera: Screenshots:

![Mobile Responsive](https://user-images.githubusercontent.com/71302066/177006299-5e0b9d80-75d6-44c7-be11-f00016bbbe47.png "Mobile Responsive")

![PWA Support](https://user-images.githubusercontent.com/71302066/177006363-6ed1330d-fd7f-4c28-947b-538a001f8e0a.png "PWA Support")

![Lighthouse pwa check passed](https://user-images.githubusercontent.com/71302066/177006407-72df3769-443d-4956-a4b5-16c3d60158ae.png "Lighthouse pwa check passed")

## :gear: Built with

[<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" width="150" height="40" />](https://www.typescriptlang.org/ "TypeScript")

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://react.dev/ "React")

[<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" width="150" />](https://vite.dev/ "Vite")

[<img src="https://user-images.githubusercontent.com/71302066/177006646-8e755ff6-3776-4173-846c-d82b12e12e57.svg" width="200" />](https://en.wikipedia.org/wiki/Progressive_web_application "Progressive Web Apps")

[<img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Built with Love">](https://github.com/sanidhyy "Built with Love")

## :wrench: Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/177006450-9311051e-3bee-4fec-ba07-62d00f1a5f67.svg "Stats for this App")

[PWA Lighthouse Report](https://googlechrome.github.io/lighthouse/viewer/?gist=de3fa97d313f8d75e0878ec5f84ff279 "PWA Lighthouse Report")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :books: Available Scripts

In the project directory, you can run:

### `pnpm start` / `pnpm dev`

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The Netlify Vite plugin emulates `/api/weather` locally, so weather search works without the Netlify CLI.

### `pnpm lint`

Runs ESLint across the project.

### `pnpm build`

Type-checks the project and builds the production bundle to the `dist` folder.

### `pnpm preview`

Serves the production build locally.

## :page_with_curl: Learn More

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Netlify Functions](https://docs.netlify.com/build/functions/overview/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
