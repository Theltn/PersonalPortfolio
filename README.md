# Theodore Helton - Professional Portfolio

## Project Description
This project is a professional, multi-page portfolio site built using React, Vite, and `react-router-dom`. 
It showcases my skills, projects, experience, and contact information. The application acts as a Single-Page Application (SPA) with client-side routing, providing seamless navigation without page reloads. The design is modern, professional, and utilizes a shared layout structure with a persistent navigation bar.

## Installation Instructions

1. Ensure you have Node.js installed.
2. Unzip or clone the repository to your local machine.
3. Open a terminal in the project root directory (`my-portfolio/`).
4. Install dependencies by running:
   ```bash
   npm install
   ```
5. Start the development server by running:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173/`).

## Routes and Page Components

The application is structured using a `RootLayout` which contains the `Navbar` and an `Outlet` to render the following routes:

- **`/` (Home Component):** The landing page offering a concise overview of my programming language proficiencies and bio. Contains the `SkillList` component.
- **`/projects` (Projects Component):** Showcases recent projects I have worked on, using the `ProjectCard` component.
- **`/experience` (Experience Component):** Details my professional background and internships, utilizing the `ExperienceItem` component.
- **`/contact` (Contact Component):** Provides my email address, phone number, and LinkedIn profile link.

## Quote Widget Implementation

The **`QuoteWidget`** is a reusable component integrated into the `/experience` page. 
- It uses the Fetch API to make asynchronous calls to the `https://dummyjson.com/quotes/random` endpoint.
- Upon component mount (using `useEffect` with an empty dependency array), it fetches a random motivational quote.
- It robustly handles asynchronous states (`loading`, `error`, `quote` data) using `useState`.
- If the fetch response is not `.ok`, it explicitly throws a new error to be caught by the `catch` block.
- It features an "Inspire Me" button allowing users to trigger a fresh random quote fetch seamlessly without needing to reload the entire web page.

## Stretch Goals / Enhancements
- **Custom Thematic Integration:** Extended and adapted the layout from the previous HTML assignment dynamically into React components to ensure optimal separation of concerns while keeping the aesthetic identical.
- **Extracted Reusable Building Blocks:** Created highly scalable `PageHeader`, `SkillList`, and `ExperienceItem` components with optional prop rendering.
- **Dark/Light Theme Toggle:** Implemented a theme toggle button in the Navbar that switches between dark and light modes, persisting the user's preference in `localStorage`.
- **Quote Timestamp:** Added a "Last updated" timestamp to the `QuoteWidget` that displays exactly when the quote was fetched.
