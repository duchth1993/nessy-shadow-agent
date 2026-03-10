# Nessy Shadow Agent – Privacy-Preserving AI Ghost

A modern, interactive single-page React web application proof-of-concept for the Luffa messaging platform within the Endless ecosystem.

![Nessy Shadow Agent](https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop)

## 🎯 Overview

Nessy Shadow Agent enables Nessy NFT holders to create an anonymous AI-powered "Shadow Agent" that automatically responds in Luffa chats during offline periods. All interactions demonstrate privacy preservation through simulated ZK proofs, end-to-end encryption (E2EE), decentralized identifiers (DID), and decentralized relay architecture—ensuring zero identity exposure.

## ✨ Features

- **Create Shadow Agent**: Define your agent's personality and tone
- **Interactive Chat Simulator**: Test your agent with realistic responses
- **Privacy Demo Toggle**: Visualize the difference between protected and unprotected states
- **Deploy to Luffa**: Mock deployment with animated success sequence
- **Beautiful UI**: Dark cyberpunk aesthetic with glassmorphism and neon accents

## 🛡️ Privacy Features Demonstrated

| Feature | Description |
|---------|-------------|
| **ZK Proofs** | Zero-knowledge proofs allow verification without revealing identity |
| **E2EE** | End-to-end encryption ensures only intended recipients can read messages |
| **DID** | Decentralized identifiers provide self-sovereign identity management |
| **Decentralized Relays** | Message routing through distributed nodes prevents tracking |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/endless-ecosystem/nessy-shadow-agent.git

# Navigate to project directory
cd nessy-shadow-agent

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📦 Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will automatically detect the Vite configuration
4. Click "Deploy"

The `vercel.json` configuration is already included for optimal deployment.

## 🏗️ Tech Stack

- **React 18** - UI framework with functional components and hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.tsx  # Particle and wave background
│   ├── ChatSimulator.tsx       # Interactive chat testing
│   ├── Confetti.tsx            # Deploy success animation
│   ├── CreateAgent.tsx         # Agent configuration form
│   ├── DeploySection.tsx       # Deployment interface
│   ├── FlyingNessy.tsx         # Flying ghost animation
│   ├── Footer.tsx              # Footer with links
│   └── Header.tsx              # Hero section
├── App.tsx                     # Main application component
├── index.css                   # Global styles
└── main.tsx                    # Application entry point
```

## 🎨 Design System

- **Colors**: Purple (#8b5cf6), Blue (#3b82f6), Cyan (#06b6d4), Pink (#ec4899)
- **Background**: Deep black (#050508) with gradient overlays
- **Typography**: Inter font family
- **Effects**: Glassmorphism, neon glows, particle animations

## 📝 Submission Information

This project is submitted as part of the **Endless Monthly Contribution Program**.

### Contribution Details

- **Category**: Privacy-Preserving Technology PoC
- **Platform**: Luffa Messaging (Endless Ecosystem)
- **Focus**: Zero-knowledge identity protection for AI agents

### Contact

- **GitHub**: [endless-ecosystem/nessy-shadow-agent](https://github.com/endless-ecosystem/nessy-shadow-agent)
- **Hashtag**: #EndlessDev

## 📄 License

MIT License - feel free to use this code for your own projects!

---

Made with ❤️ for the Endless ecosystem
