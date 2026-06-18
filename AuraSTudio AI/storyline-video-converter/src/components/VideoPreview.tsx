import React from 'react';

interface VideoPreviewProps {
    startFrame: string;
    endFrame: string;
    selectedStyle: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ startFrame, endFrame, selectedStyle }) => {
    return (
        <div className="video-preview">
            <h2>Video Preview</h2>
            <div className="frames">
                <img src={startFrame} alt="Start Frame" className="start-frame" />
                <img src={endFrame} alt="End Frame" className="end-frame" />
            </div>
            <div className="style">
                <p>Selected Style: {selectedStyle}</p>
            </div>
        </div>
    );
};

export default VideoPreview;