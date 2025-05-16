
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                machineflows: {
                    light: "#9b87f5",
                    DEFAULT: "#8B5CF6", 
                    dark: "#7c3aed"
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'spin-medium': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'spin-fast': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				// Orbital animations for each speed value - adjusted for smaller orbits
				'orbit-20': {
					'0%': { transform: 'rotate(0deg) translateX(30px)' },
					'100%': { transform: 'rotate(360deg) translateX(30px)' }
				},
				'orbit-25': {
					'0%': { transform: 'rotate(0deg) translateX(30px)' },
					'100%': { transform: 'rotate(360deg) translateX(30px)' }
				},
				'orbit-28': {
					'0%': { transform: 'rotate(0deg) translateX(50px)' },
					'100%': { transform: 'rotate(360deg) translateX(50px)' }
				},
				'orbit-30': {
					'0%': { transform: 'rotate(0deg) translateX(30px)' },
					'100%': { transform: 'rotate(360deg) translateX(30px)' }
				},
				'orbit-35': {
					'0%': { transform: 'rotate(0deg) translateX(50px)' },
					'100%': { transform: 'rotate(360deg) translateX(50px)' }
				},
				'orbit-38': {
					'0%': { transform: 'rotate(0deg) translateX(70px)' },
					'100%': { transform: 'rotate(360deg) translateX(70px)' }
				},
				'orbit-40': {
					'0%': { transform: 'rotate(0deg) translateX(50px)' },
					'100%': { transform: 'rotate(360deg) translateX(50px)' }
				},
				'orbit-45': {
					'0%': { transform: 'rotate(0deg) translateX(70px)' },
					'100%': { transform: 'rotate(360deg) translateX(70px)' }
				},
				'orbit-50': {
					'0%': { transform: 'rotate(0deg) translateX(70px)' },
					'100%': { transform: 'rotate(360deg) translateX(70px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'spin-medium': 'spin-medium 15s linear infinite',
				'spin-fast': 'spin-fast 10s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
