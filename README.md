# Calendar Day view component - React App with Typescript

🚀 A Calendar component offers a comprehensive day view of a calendar, showcasing a list of events while adhering to two important constraints.   
Firstly, for events that overlap, they are assigned an identical width, ensuring consistency in their visual representation.  
Secondly, each event dynamically utilizes the maximum available width while adhering to the first constraint.

<img src="https://i.ibb.co/y0jGCMB/React-App-Day-View-Calendar.png" width="500" alt="Screenshot" />

<hr/>   

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
### Choose your javaScript package managers `npm/yarn/pnpm`

### `pnpm start` 
Start the application with `Vite`   
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
Runs the app in the development mode.

### `pnpm build` 
Build the application with `Vite`
Builds the app for production to the `build` folder.   
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.  

### `pnpm serve` 
Preview the application with `Vite`

### `pnpm test`
Launch tests unit with `Jest`

### `pnpm check-types`
Launch types tests with `Typescript`

### `pnpm prepare`
Launch `husky` to improves commits

### `pnpm coverage` 
Launch coverage with `Jest`

### `pnpm lint` 
Launch `eslint` src path

### `pnpm lint --fix` 
Launch `eslint` & automatically fix problems

### `pnpm lint --ci` 
Launch `eslint` and generate an eslint.xml

### `pnpm prettify` 
Launch `prettier` --write --log-level=warn

### `pnpm prettify --check` 
Launch `prettier` --check

### `pnpm lp`
Launch clean code : `eslint` fix & `prettier` --write

## App Folder Structure   

```bash

├── public/
│   ├── assets/
│
├── src/
│   ├── __tests__/
│   ├── assets/
│   ├── datas/
│   ├── features/
│   ├── hooks/
│   ├── models/
│   ├── pages/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
│
└── package.json

```

## Learn More

### UI/UX
The Color Scheme palette has 2 colors
- Primary color ![#152336](https://placehold.it/15/152336/000000?text=)
- Secondary color ![#e55d47](https://placehold.it/15/e55d47/000000?text=)  
