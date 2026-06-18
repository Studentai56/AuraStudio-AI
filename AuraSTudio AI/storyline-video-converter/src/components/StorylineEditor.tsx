import React, { useState } from 'react';

const StorylineEditor: React.FC = () => {
    const [script, setScript] = useState<string>('');

    const handleScriptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setScript(event.target.value);
    };

    return (
        <div className="storyline-editor">
            <h2>Storyline Editor</h2>
            <textarea
                value={script}
                onChange={handleScriptChange}
                placeholder="Enter your storyline script here..."
                rows={10}
                cols={50}
            />
        </div>
    );
};

export default StorylineEditor;