This is a [Plasmo extension](https://www.plasmo.com/docs/framework) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. For further guide on popups, see [Popup Doc](https://www.plasmo.com/docs/popup).

To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported, then reload the extension on your browser. For further information, see [Options Doc](https://www.plasmo.com/docs/options).

Likewise to add a contents page, add a `contents.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser. For further information, see [Contents Doc](https://www.plasmo.com/docs/contents).

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow the setup instruction and you should be on your way for automated submission!
