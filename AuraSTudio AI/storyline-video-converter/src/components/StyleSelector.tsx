import React, { useState } from 'react';

const styles = [
    "Painted Anime",
    "Casual Photo",
    "Cinematic",
    "Digital Painting",
    "Concept Art",
    "No style",
    "3D Disney Character",
    "2D Disney Character",
    "Disney Sketch",
    "Concept Sketch",
    "Painterly",
    "Oil Painting - Realism",
    "Oil Painting - Old",
    "Oil Painting - 70s Pulp",
    "Professional Photo",
    "Anime",
    "Drawn Anime",
    "Anime Screencap",
    "Cute Anime",
    "Soft Anime",
    "Fantasy Painting",
    "Fantasy Landscape",
    "Fantasy Portrait",
    "Studio Ghibli",
    "50s Enamel Sign",
    "Vintage Comic",
    "Franco-Belgian Comic",
    "Tintin Comic",
    "Medieval",
    "Pixel Art",
    "Furry - Oil",
    "Furry - Cinematic",
    "Furry - Painted",
    "Furry - Drawn",
    "Cute Figurine",
    "3D Emoji",
    "Illustration",
    "Cute Illustration",
    "Flat Illustration",
    "Watercolor",
    "1990s Photo",
    "1980s Photo",
    "1970s Photo",
    "1960s Photo",
    "1950s Photo",
    "1940s Photo",
    "1930s Photo",
    "1920s Photo",
    "Vintage Pulp Art",
    "50s Infomercial Anime",
    "3D Pokemon",
    "Painted Pokemon",
    "2D Pokemon",
    "Vintage Anime",
    "Neon Vintage Anime",
    "Manga",
    "Fantasy World Map",
    "Fantasy City Map",
    "Old World Map",
    "3D Isometric Icon",
    "Flat Style Icon",
    "Flat Style Logo",
    "Game Art Icon",
    "Digital Painting Icon",
    "Concept Art Icon",
    "Cute 3D Icon",
    "Cute 3D Icon Set",
    "Crayon Drawing",
    "Pencil",
    "Tattoo Design",
    "Waifu",
    "YuGiOh Art",
    "Traditional Japanese",
    "Nihonga Painting",
    "Claymation",
    "Cartoon",
    "Cursed Photo",
    "MTG Card"
];

const StyleSelector = ({ onStyleChange }) => {
    const [selectedStyle, setSelectedStyle] = useState(styles[0]);

    const handleStyleChange = (event) => {
        const newStyle = event.target.value;
        setSelectedStyle(newStyle);
        onStyleChange(newStyle);
    };

    return (
        <div className="style-selector">
            <label htmlFor="style-select">Choose a style:</label>
            <select id="style-select" value={selectedStyle} onChange={handleStyleChange}>
                {styles.map((style, index) => (
                    <option key={index} value={style}>
                        {style}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StyleSelector;