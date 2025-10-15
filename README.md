# 🎮 Obliterate

**A 3D Scorched Earth artillery game with strategic fuel management, procedural chromatic music, and blockchain token rewards.**

[![Play Now](https://img.shields.io/badge/Play-Now-00ff00?style=for-the-badge)](https://tsotchke-corporation.github.io/obliterate_OPG/)
[![Open Game Protocol](https://img.shields.io/badge/OGP-Integrated-blue?style=for-the-badge)](https://opengameprotocol.com/)

---

## 🌟 What is Obliterate?

Obliterate is a modern 3D take on the classic Scorched Earth artillery game, set on a dynamically deformable spherical planet. Navigate the surface, aim your cannon, and destroy enemy targets while carefully managing your limited fuel supply. Every shot matters - miss too often or waste fuel, and you'll be stranded. Get too close to your own explosions, and you'll obliterate yourself!

**Key Innovation**: Earn blockchain tokens for your high scores through Open Game Protocol integration.

---

## ✨ Features

### 🎯 Core Gameplay

- **3D Spherical Battlefield** - Fight on a fully 3D planet that deforms from impacts
- **Strategic Fuel System** - 100 units of fuel consumed by movement and shooting
- **Blast Radius Physics** - Explosions damage everything within 5 units
- **Dynamic Terrain** - Craters form where projectiles hit, affecting the battlefield
- **Score System** - Balance kills (+100) vs shots (-30), fuel (-0.5), and time (-1)

### 🎖️ Victory & Defeat Conditions

**Victory**: Destroy all 6 enemy targets  
**Defeat**:
- ☠️ **Suicide** - Hit by your own projectile or explosion blast radius
- ⛽ **Out of Fuel** - Deplete all 100 fuel units

### 🎹 Controls

**Movement**:
- `W/A/S/D` - Move on planet surface (screen-relative)
- Virtual Joystick - Touch/mouse controls

**Combat**:
- `Space` - Fire projectile
- `Q / E` - Adjust heading (turret rotation)
- `R / F` - Adjust angle (barrel elevation)
- `T / G` - Adjust velocity (shot power)

**Modifiers**:
- `Shift + key` - Fine control (1° or 1 unit increments)
- `Ctrl + key` - Coarse control (10-15° or units)

**Interface**:
- `H` - Toggle help overlay
- `ESC` - Pause/Resume game
- Sliders - Adjust weapon settings

### 🎵 Procedural Music System

**Unique Feature**: All music is procedurally generated using a chromatic composition system!

**6 Original Tracks** (no external audio files):
- **Epic Main Menu** (30 seconds) - Heroic, memorable theme
- **Calm Settings** (24 seconds) - Peaceful, atmospheric
- **Driving Game** (36 seconds) - Action-packed with smooth loop
- **Boss Battle** (28 seconds) - Intense combat music
- **Victory** (8 seconds) - Triumphant fanfare
- **Defeat** (10 seconds) - Somber descent

**Technical Details**:
- Full chromatic scale (C2-B6 with sharps/flats)
- Multi-channel composition (melody + bass + harmony)
- Text-based notation system
- Real-time volume control

### 🔊 Sound Effects

**8 Procedural 8-bit Style SFX**:
- Launch sounds (whoosh)
- Explosions (small/large)
- Target hits (success chords)
- UI interactions (clicks)
- Low fuel warnings
- Victory/defeat stingers

### 🏆 Open Game Protocol Integration

**Earn crypto tokens for playing!**

Obliterate is integrated with the [Open Game Protocol](https://opengameprotocol.com/) blockchain platform:

- 🪙 **Token Rewards** - Earn tokens based on your final score
- 📊 **Leaderboards** - Compete globally for high scores
- 🔐 **Secure Authentication** - Optional Google login
- 💎 **Points Widget** - Real-time token tracking

Your gameplay earns real blockchain tokens automatically saved to the OGP platform.

---

## 🚀 Quick Start

### Play Online
Visit **[obliterate_OPG](https://tsotchke-corporation.github.io/obliterate_OPG/)** to play instantly in your browser!

### Run Locally

```bash
# Clone repository
git clone https://github.com/Tsotchke-Corporation/obliterate_OPG.git
cd obliterate_OPG

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🎮 How to Play

### Getting Started

1. **Click to Start** - Initialize audio system
2. **Navigate Menus** - Main Menu → Play Game
3. **Control Your Tank** - Move with WASD, adjust aim with Q/E/R/F/T/G
4. **Fire Projectiles** - Press Space to launch
5. **Watch Your Fuel** - Monitor the gauge (top-left)
6. **Destroy Targets** - Eliminate all 6 red targets
7. **Avoid Suicide** - Don't get hit by your own explosions!
8. **Earn Tokens** - Score saved to OGP platform on victory/defeat

### Strategy Tips

💡 **Fuel Management**
- Each shot costs 5 fuel units
- Movement costs fuel based on distance
- Plan your shots carefully!
- No fuel = automatic defeat

💡 **Aiming**
- Use fine control (Shift) for precision aiming
- Vertical shots (90° angle) can loop back - be careful!
- Factor in gravity and planet curvature

💡 **Scoring**
- Kills: +100 each
- Shots: -30 each
- Fuel used: -0.5 per unit
- Time: -1 per second
- **Maximize kills, minimize shots and fuel!**

💡 **Survival**
- Explosions have blast radius (5 units)
- Stay away from your own impacts
- Plan escape routes before shooting

---

## 🛠️ Technical Details

### Architecture

**Modern Stack**:
- React 19 + Vite 7
- Three.js for 3D rendering
- Zustand for state management
- Web Audio API for procedural sound
- Open Game Protocol SDK

**Modular Design**:
```
src/
├── components/     # UI components
├── state/          # Zustand stores
├── audio/          # Music & SFX systems
├── utils/          # Reusable utilities
├── constants/      # Game configuration
├── hooks/          # Custom React hooks
└── tests/          # Test suites
```

### Key Innovations

1. **Pole-Safe Sphere Navigation**
   - Solved spherical coordinate singularities
   - Uses rotation matrices instead of theta/phi
   - Smooth movement anywhere on sphere

2. **Chromatic Music Notation**
   - Text-based composition: `"C4:0.5 D#4:0.5 G4:1"`
   - Full chromatic scale support
   - Multi-channel audio architecture

3. **Audio Bus System**
   - Master gain → (Music, SFX) → Output
   - Real-time volume control
   - All procedurally generated

4. **Strategic Resource Management**
   - Fuel consumption tracking
   - Real-time calculations
   - Victory/defeat conditions

### Performance

- **60 FPS** on mid-range hardware
- **~1.5MB** bundle size (gzipped)
- **0 external audio files** (all procedural)
- **Responsive** design (mobile → desktop)
- **54 passing tests**

---

## 📚 Development Documentation

Comprehensive development documentation available in `/dev` directory:

- **GAME_ANALYSIS.md** - Complete codebase analysis
- **IMPLEMENTATION_PLAN.md** - 8-sprint development roadmap  
- **PROJECT_RETROSPECTIVE_AND_ROADMAP.md** - Strategic review
- **Sprint Guides** (0-3) - Execution instructions
- **OGP_SDK_INTEGRATION_PLAN.md** - Blockchain integration details

---

## 🤝 Contributing

This project was developed through comprehensive analysis and iterative development. See documentation in `/dev` for detailed architecture and implementation guides.

**Testing**:
```bash
npm run test          # Run all tests
npm run test:ui       # Run tests with UI
npm run test:coverage # Generate coverage report
```

---

## 📝 License

TSOTCHKE CORPORATION PROPRIETARY LICENCE

---

## 🙏 Credits

**Game Design & Development**: Obliterate Team  
**Platform**: Open Game Protocol  
**Technologies**: React, Three.js, Zustand, Web Audio API

**Special Thanks**: The chromatic music system and pole-safe navigation algorithms were developed specifically for this project and may be open-sourced in the future.

---

## 🎯 Future Roadmap

- 🔫 Multiple weapon types (cluster bomb, laser, nuke)
- 🤖 Enemy AI (turrets, moving targets)
- 🌍 8 themed planets (Mars, Ice, Volcanic, etc.)
- 📖 Campaign mode (15+ levels)
- 🎁 Power-ups (fuel pickups, shields)
- 👥 Multiplayer modes
- 🏆 Achievement system

---

**Play now and earn tokens: [obliterate_OPG](https://github.com/Tsotchke-Corporation/obliterate_OPG)**
