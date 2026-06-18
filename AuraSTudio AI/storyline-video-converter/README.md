# Storyline Video Converter

## Overview
The Storyline Video Converter is a web application that allows users to create videos from scripts by defining storylines with starting and ending frames. Users can select various visual effects to enhance their videos, making it a versatile tool for content creators.

## Features
- **Frame Selection**: Users can choose starting and ending frames for their video storyline.
- **Script Editing**: An intuitive interface for inputting and editing the script.
- **Style Selection**: A variety of visual effects to choose from, including:
  - Painted Anime
  - Cinematic
  - Digital Painting
  - 3D Disney Character
  - And many more!
- **Video Preview**: Real-time preview of the video based on selected frames and styles.

## Project Structure
```
storyline-video-converter
├── public
│   ├── index.html          # Main HTML document
│   └── favicon.ico         # Favicon for the website
├── src
│   ├── components          # React components
│   │   ├── FrameSelector.tsx
│   │   ├── StorylineEditor.tsx
│   │   ├── StyleSelector.tsx
│   │   └── VideoPreview.tsx
│   ├── styles              # CSS styles
│   │   └── main.css
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/storyline-video-converter.git
   ```
2. Navigate to the project directory:
   ```
   cd storyline-video-converter
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.