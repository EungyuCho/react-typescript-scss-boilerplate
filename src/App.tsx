import React from "react";
import "./App.scss";

const App = () => {
  const colors = [
    "red",
    "orange",
    "amber",
    "lime",
    "green",
    "teal",
    "blue",
    "purple",
    "pink",
  ];

  const lightPercent = [40, 50, 60, 70, 80, 90];

  const PaletteItem = (color: string) => {
    return (
      <div className="palette-container">
        <div
          className={`palette-description ${color}50 font-white font-${color}`}
        >
          {color}
        </div>
        {lightPercent.map((light) => (
          <div className={`${color}${light}`}>{light}%</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1 className="font-white">react-typescript-scss-boilerplate</h1>
      <div className="palette">
        {React.Children.map(colors, (color) => PaletteItem(color))}
      </div>
    </div>
  );
};

export { App };
