import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('IT Talent Development Manager')).toBeInTheDocument()
  })

  it('displays the navigation', () => {
    render(<App />)
    expect(screen.getByText('Marshall Okafor')).toBeInTheDocument()
    expect(screen.getByText('IT Talent Development')).toBeInTheDocument()
  })

  it('displays all main sections', () => {
    render(<App />)
    expect(screen.getByText('Building High-Performance Technology Teams')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('has call-to-action buttons in hero section', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Explore Services' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('displays professional content in sections', () => {
    render(<App />)
    expect(screen.getByText(/Experienced IT Talent Development Manager/i)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive consultancy services/i)).toBeInTheDocument()
    expect(screen.getByText(/Over a decade of experience/i)).toBeInTheDocument()
  })

  it('has navigation menu items', () => {
    render(<App />)
    expect(screen.getByLabelText('Navigate to Home section')).toBeInTheDocument()
    expect(screen.getByLabelText('Navigate to About section')).toBeInTheDocument()
    expect(screen.getByLabelText('Navigate to Services section')).toBeInTheDocument()
    expect(screen.getByLabelText('Navigate to Experience section')).toBeInTheDocument()
    expect(screen.getByLabelText('Navigate to Contact section')).toBeInTheDocument()
  })

  it('displays professional photo placeholder', () => {
    render(<App />)
    expect(screen.getByText('Professional Photo')).toBeInTheDocument()
  })
})
