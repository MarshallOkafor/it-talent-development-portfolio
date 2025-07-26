# Copilot Instructions for ReactJS Web Development Projects

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a professional ReactJS web development project using modern development practices, tools, and deployment strategies. The project follows industry best practices for maintainability, scalability, and team collaboration.

## Technology Stack & Architecture

### Core Technologies
- **Framework**: React 18+ with modern hooks and functional components
- **Build Tool**: Vite for fast development and optimized production builds
- **Language**: JavaScript (ES6+) with consideration for TypeScript migration
- **Styling**: CSS3, CSS Modules, or styled-components (specify as needed)
- **Package Manager**: npm

### Development Environment
- **IDE**: Visual Studio Code with appropriate extensions
- **Node.js**: Version 18+ (check package.json engines field)
- **Git**: Version control with feature branch workflow

## Code Standards & Best Practices

### React Component Guidelines
1. **Functional Components**: Always use functional components with hooks
2. **Component Naming**: Use PascalCase for component files and exports
3. **File Structure**: One component per file, named after the component
4. **Props Validation**: Use PropTypes or TypeScript for prop validation
5. **State Management**: Use useState for local state, consider Context API or external libraries for global state
6. **Effect Handling**: Use useEffect appropriately with proper dependency arrays
7. **Custom Hooks**: Extract reusable logic into custom hooks when appropriate

### Code Organization
```
src/
├── components/           # Reusable UI components
│   ├── common/          # Generic components
│   ├── layout/          # Layout-specific components
│   └── ui/              # Basic UI elements
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── services/            # API calls and external services
├── constants/           # Application constants
├── assets/              # Static assets (images, fonts, etc.)
└── styles/              # Global styles and theme files
```

### Coding Standards
1. **Naming Conventions**:
   - Variables and functions: camelCase
   - Components: PascalCase
   - Constants: UPPER_SNAKE_CASE
   - Files: kebab-case or PascalCase for components

2. **Code Formatting**:
   - Use Prettier for consistent formatting
   - Follow ESLint rules for code quality
   - Maximum line length: 100 characters
   - Use trailing commas in objects and arrays

3. **Comments and Documentation**:
   - Write JSDoc comments for complex functions
   - Use inline comments sparingly and only when necessary
   - Document component props and their types
   - Maintain up-to-date README.md

## Git Workflow & Branch Management

### Branch Strategy
- **main**: Production-ready code, protected branch
- **develop**: Integration branch for features, staging environment
- **feature/***: Individual feature development branches
- **hotfix/***: Critical production fixes
- **release/***: Release preparation branches

### Commit Standards
- Use conventional commits format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Keep commit messages clear and descriptive
- Reference issues/tickets when applicable

### Pull Request Guidelines
- Create PR from feature branch to develop
- Include descriptive title and detailed description
- Add reviewers and assignees
- Ensure all tests pass and code coverage requirements are met
- Update documentation if necessary

## Testing Strategy

### Testing Framework
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: React Testing Library with MSW for API mocking
- **E2E Tests**: Cypress or Playwright (specify as needed)

### Testing Guidelines
1. **Test Coverage**: Maintain minimum 80% code coverage
2. **Test Organization**: Mirror src/ structure in tests/
3. **Test Naming**: Descriptive test names that explain expected behavior
4. **Test Data**: Use factories or fixtures for consistent test data
5. **Mocking**: Mock external dependencies and API calls appropriately

### Required Tests
- Component rendering and basic functionality
- User interactions and event handling
- API integration points
- Error handling and edge cases
- Accessibility compliance

## Performance & Optimization

### Performance Guidelines
1. **Code Splitting**: Implement lazy loading for routes and heavy components
2. **Bundle Optimization**: Use Vite's built-in optimizations
3. **Image Optimization**: Use appropriate formats and sizes
4. **Memoization**: Use React.memo, useMemo, and useCallback judiciously
5. **Bundle Analysis**: Regular bundle size monitoring

### Accessibility (a11y)
- Follow WCAG 2.1 AA guidelines
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation support
- Test with screen readers

## Deployment & CI/CD

### GitHub Pages Deployment
- Build process: Vite build optimized for production
- Deploy from main branch after successful CI/CD pipeline
- Environment-specific configuration management

### CI/CD Pipeline Requirements
1. **Automated Testing**: All tests must pass before merge
2. **Code Quality**: ESLint and Prettier checks
3. **Build Verification**: Successful production build
4. **Security Scanning**: Dependency vulnerability checks
5. **Performance Checks**: Bundle size limits and Lighthouse scores

### Environment Management
- **Development**: Local development with hot reload
- **Staging**: Deployed from develop branch for testing
- **Production**: Deployed from main branch to GitHub Pages

## Change Management & Documentation

### Changelog Requirements
**IMPORTANT**: For every change made to the codebase, you MUST add a summary description to `CHANGELOG.md` following this format:

```markdown
## [Version/Date] - YYYY-MM-DD

### Added
- New features or functionality

### Changed
- Modifications to existing functionality

### Fixed
- Bug fixes and corrections

### Removed
- Deprecated or removed features

### Security
- Security-related changes
```

### Documentation Standards
1. **README.md**: Keep updated with setup instructions, scripts, and project overview
2. **Component Documentation**: Document complex components with usage examples
3. **API Documentation**: Document all API interactions and data structures
4. **Deployment Guide**: Maintain deployment and environment setup instructions

## Dependencies & Package Management

### Package Guidelines
1. **Dependency Auditing**: Regular security audits with `npm audit`
2. **Version Management**: Use exact versions for critical dependencies
3. **Bundle Size**: Monitor and limit unnecessary dependencies
4. **Updates**: Regular but cautious dependency updates with thorough testing

### Recommended Dependencies
- **UI Libraries**: Consider React Bootstrap, Material-UI, or Ant Design
- **Routing**: React Router for SPA navigation
- **State Management**: Context API, Zustand, or Redux Toolkit
- **HTTP Client**: Axios or native fetch with custom hooks
- **Styling**: Styled-components, Emotion, or CSS Modules

## Code Review & Quality Assurance

### Code Review Checklist
- [ ] Code follows established patterns and conventions
- [ ] All tests pass and coverage meets requirements
- [ ] No console.log statements in production code
- [ ] Proper error handling and user feedback
- [ ] Accessibility considerations addressed
- [ ] Performance implications considered
- [ ] Documentation updated if necessary
- [ ] CHANGELOG.md updated with change summary

### Quality Gates
- ESLint: No errors, warnings addressed
- Prettier: Consistent code formatting
- Tests: Minimum coverage threshold met
- Build: Successful production build
- Lighthouse: Performance score > 90

## Security Considerations

### Security Best Practices
1. **Input Validation**: Validate and sanitize all user inputs
2. **XSS Prevention**: Use React's built-in XSS protection, avoid dangerouslySetInnerHTML
3. **Dependency Security**: Regular audit and update of dependencies
4. **Environment Variables**: Secure handling of sensitive configuration
5. **HTTPS**: Ensure all production traffic uses HTTPS

## Project-Specific Considerations

### IT Talent Development Manager Website
- **Content Focus**: Professional presentation of skills, experience, and achievements
- **Performance**: Fast loading times for professional impression
- **Responsive Design**: Mobile-first approach for accessibility
- **SEO Optimization**: Proper meta tags and semantic structure
- **Professional Aesthetics**: Clean, modern design reflecting IT leadership

## Maintenance & Updates

### Regular Maintenance Tasks
1. **Weekly**: Dependency security audit
2. **Monthly**: Update non-critical dependencies
3. **Quarterly**: Performance and bundle size review
4. **As Needed**: Major dependency updates with thorough testing

### Monitoring & Analytics
- Performance monitoring with Lighthouse CI
- User analytics (if applicable)
- Error tracking and reporting
- Build and deployment monitoring

---

**Note**: This instruction file should be updated as the project evolves and new requirements emerge. All team members should review and contribute to these guidelines to ensure consistency and quality across the codebase.

**Remember**: Always update the CHANGELOG.md file with a summary of your changes before committing!
