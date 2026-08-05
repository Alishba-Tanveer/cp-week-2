# Assignment 1 – React Components & Props Showcase

A simple React + TypeScript application built with Vite to demonstrate reusable components, typed props, list rendering, conditional rendering, and clean component composition.

# Technologies Used

- React
- TypeScript
- Vite
- React Icons
- CSS3

# Project Structure

src
│
├── assets
│   └── images
│
├── components
│   ├── Avatar.tsx
│   ├── Badge.tsx
│   ├── List.tsx
│   ├── StatCard.tsx
│   └── UserList.tsx
│
├── data
│   └── users.ts
│
├── types
│   └── User.ts
│
├── utils
│   └── helpers.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx

# Features

- Reusable React components
- Explicit TypeScript props interfaces
- Strong type safety (no `any`)
- Stable data-derived keys
- Conditional rendering
- List rendering using `.map()`
- Utility helper functions
- Responsive and modern UI
- Clean component composition

# Components

- Avatar – Displays a user's profile picture and name.
- Badge – Reusable badge component with different tones.
- StatCard – Displays summary statistics.
- UserList – Renders a list of users with conditional rendering.
- List<T> – Generic reusable list component.

# Component Tree

App
│
├── Badge
├── Badge
├── Badge
├── StatCard
└── UserList
    ├── Avatar
    ├── Avatar
    └── Avatar

# Utility Functions

The project includes helper functions demonstrating clean TypeScript practices:

- `initials(name)`
- `keyFor(user)`
- `classify(users)`
- `format(number)`
- `groupByRole(users)`