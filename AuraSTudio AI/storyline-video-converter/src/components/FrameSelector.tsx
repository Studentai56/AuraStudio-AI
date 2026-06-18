import React, { useState } from 'react';

const FrameSelector: React.FC = () => {
    const [startFrame, setStartFrame] = useState<number>(0);
    const [endFrame, setEndFrame] = useState<number>(0);

    const handleStartFrameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartFrame(Number(event.target.value));
    };

    const handleEndFrameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndFrame(Number(event.target.value));
    };

    return (
        <div className="frame-selector">
            <h2>Select Frames</h2>
            <div>
                <label htmlFor="start-frame">Starting Frame:</label>
                <input
                    type="number"
                    id="start-frame"
                    value={startFrame}
                    onChange={handleStartFrameChange}
                />
            </div>
            <div>
                <label htmlFor="end-frame">Ending Frame:</label>
                <input
                    type="number"
                    id="end-frame"
                    value={endFrame}
                    onChange={handleEndFrameChange}
                />
            </div>
        </div>
    );
};

export default FrameSelector;