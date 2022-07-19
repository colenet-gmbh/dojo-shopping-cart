# Shopping cart 

COLENET SHOP wants to sell various items via its website. Before they hire you for the job of building an e-commerce solution, they want to see a prototype where they can

- add products to a shopping cart
- view the content of the shopping cart with a list of the products and their respective amounts
- edit the shopping cart's content (change amount of products or delete them from the cart)
- see the overall amount of items that are currently in the shopping cart in the website's header when they browse COLENET SHOP.

The prototype should use `localStorage` to keep track of a customer's shopping cart even when they close the browser.

Because it's a prototype, it only needs to work for a desktop-sized viewport (>1280px) and in current Firefox or Chrome.

## Getting started
Install packages
`npm install`

Install playwright headless browsers
`npx playwright install`

## Testing

unit testing
`npm test`

e2e testing 
`npm run test:e2e`

## Useful 
https://www.chaijs.com/

https://playwright.dev/docs/test-assertions