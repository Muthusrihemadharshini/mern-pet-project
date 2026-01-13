# 🐾 Digital Pet Palace: An Object-Oriented Journey
Welcome to Digital Pet Palace, an interactive web application built for the MLH Global Hack Week: Beginners challenge. While the objective was to learn Object-Oriented Programming (OOP) basics, this project evolved into a full-scale game featuring modern UI design and complex state management.

## 🎯 MLH Challenge Requirements Met
This project successfully implements all core requirements of the "Object Oriented Pet" challenge:

✅ Pet Class: Created a robust Pet class with a constructor for name, hunger, and happiness.

✅ Feed Logic: Implemented feed() to reduce hunger by 15 points.

✅ Play Logic: Implemented play() to increase happiness by 20 points.

✅ Status System: A getStatus() method that returns your pet's emotional state based on its current needs.

## 🚀 Advanced Features Added
Beyond the challenge requirements, I implemented several features to enhance the user experience:

Modern Glassmorphism UI: A frosted-glass interface with vibrant gradients and floating animations.

Game State Management: Navigation between "Welcome," "Rules," and "Play" screens using React useState.

Waterfall Mood Logic: A priority-based system that changes the pet's avatar based on its most urgent need.

Dynamic Progress Bars: Interactive visual feedback for Hunger and Happiness levels.

## 🛠️ Step-by-Step Construction
The Brain (OOP): I started by writing PetLogic.js, focusing on the class structure and ensuring data encapsulation for pet stats.

The Heart (React Logic): I integrated the class into a React app, managing the "Pet" object through state and using Object.assign to maintain class methods during updates.

The View (UI/UX): I built a conditional rendering system to guide the user from the welcome screen to the game.

The Polish (CSS): I applied a custom Glassmorphism style, focusing on backdrop blurs and smooth transitions for the progress bars.

## 💻 Tech Stack
React (Vite): For the component-based architecture.

JavaScript (ES6+): Specifically utilizing Class-based OOP.

CSS3: Custom glassmorphism effects and keyframe animations.

## 📝 How to run
Clone the repository.

Run npm install.

Run npm run dev.

## 🏁 Final Project Status
Live Link: https://fluffy-game-object-oriented-pet.vercel.app/

MLH Challenge Submission: Object Oriented Pet
