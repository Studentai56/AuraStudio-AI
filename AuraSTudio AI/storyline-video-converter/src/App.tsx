import React from 'react';
import FrameSelector from './components/FrameSelector';
import StorylineEditor from './components/StorylineEditor';
import StyleSelector from './components/StyleSelector';
import VideoPreview from './components/VideoPreview';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <h1>Storyline Video Converter</h1>
            <FrameSelector />
            <StorylineEditor />
            <StyleSelector />
            <VideoPreview />
        </div>
    );
};

export default App;