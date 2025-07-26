import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('IT Talent Development Manager')).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('IT Talent Development Manager')
  })

  it('shows the React logo', () => {
    render(<App />)
    const reactLogo = screen.getByAltText('React logo')
    expect(reactLogo).toBeInTheDocument()
    expect(reactLogo).toHaveAttribute('src', expect.stringContaining('react'))
  })

  it('shows the Vite logo', () => {
    render(<App />)
    const viteLogo = screen.getByAltText('Vite logo')
    expect(viteLogo).toBeInTheDocument()
    // Vite logo is embedded as SVG data, so just check it exists
    expect(viteLogo).toHaveAttribute('src')
  })

  it('has a functional experience counter button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /years of experience/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Years of Experience: 10')
  })

  it('displays professional subtitle', () => {
    render(<App />)
    expect(screen.getByText('Building High-Performance Technology Teams')).toBeInTheDocument()
  })

  it('shows professional portfolio description', () => {
    render(<App />)
    expect(screen.getByText(/professional portfolio showcasing leadership/i)).toBeInTheDocument()
  })
})
