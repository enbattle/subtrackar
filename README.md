# Subtrackar

A modern subscription management and analytics platform built with Next.js and TypeScript.

Live site here: [https://enbattle.github.io/subtrackar/](https://enbattle.github.io/subtrackar/)

## Features

- 📊 Dashboard with analytics and insights
- 📅 Calendar view for subscription management
- ⚙️ User settings and preferences
- 🔐 Secure authentication system
- 🌓 Dark/Light mode support
- 📱 Responsive design
- 🔍 Subscription tracking and management

## Tech Stack

- **Framework**: Next.js 15.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: TanStack Query
- **Data Visualization**: Recharts
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/subtrackar.git
cd subtrackar
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
# Add your environment variables here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Routes

- `/` - Home page
- `/login` - Authentication page
- `/signup` - User registration
- `/dashboard` - Main dashboard
  - `/dashboard/analytics` - Analytics view
  - `/dashboard/calendar` - Calendar view
  - `/dashboard/settings` - User settings
  - `/dashboard/subscriptions` - Subscription management

## Development

### Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy the application (via Github pages)

### Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── shared/          # Shared utilities and types
└── lib/             # Library code and utilities
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TanStack Query](https://tanstack.com/query/latest) - Data-fetching and state management

## Disclaimer

This is just a sample of a consumer-subscription platform project. Not all functionalities and implementations are included.
