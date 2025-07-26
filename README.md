# IT Talent Development Manager Website

A professional, responsive website for an IT Talent Development Manager built with modern React and deployment-ready for GitHub Pages.

## Technology Stack

- **Frontend**: React 18+ with functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: CSS3 with modern styling approaches
- **Deployment**: GitHub Pages with automated CI/CD
- **Package Manager**: npm
- **Development**: VS Code with professional tooling

## Getting Started

### Prerequisites
- Node.js 18+ (check `.nvmrc` or `package.json` engines field)
- npm (comes with Node.js)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd copilot-workspace
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── services/           # API calls and external services
├── constants/          # Application constants
├── assets/             # Static assets
└── styles/             # Global styles
```

## Development Guidelines

This project follows professional development practices outlined in `.github/copilot-instructions.md`. Key points:

- **Code Quality**: ESLint + Prettier for consistent formatting
- **Testing**: Jest + React Testing Library (to be implemented)
- **Git Workflow**: Feature branches with PR reviews
- **Documentation**: Keep `CHANGELOG.md` updated with all changes
- **Performance**: Optimized builds with code splitting

## Deployment

The website is configured for deployment to GitHub Pages:

1. **Automatic Deployment**: Pushes to `main` branch trigger deployment
2. **Manual Deployment**: Run `npm run build` and deploy `dist/` folder
3. **Environment Variables**: Configure in GitHub repository settings

## Contributing

1. Create a feature branch from `develop`
2. Make your changes following the coding guidelines
3. Update `CHANGELOG.md` with your changes
4. Submit a pull request with detailed description
5. Ensure all tests pass and code review approval

## Project Goals

This website serves as a professional portfolio and information hub for an IT Talent Development Manager, showcasing:

- Professional experience and achievements
- Leadership in IT talent development
- Modern web development skills
- Clean, accessible, and responsive design

## Support & Documentation

- **Custom Instructions**: See `.github/copilot-instructions.md`
- **Change History**: See `CHANGELOG.md`
- **Issues**: Use GitHub Issues for bug reports and feature requests
