import React, { useState } from "react";
import "./sort.css"; // Подключаем файл стилей

const Sort = ({ onSort }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sort">
      <div className="container">
        <div className="sort-inner">
          <div className="sort-title">
            <h1>Sort-technique</h1>
          </div>
          <div className="sort-menu-container">
            <button className="sort-button" onClick={handleToggleMenu}>
              sort
              <span className={`sort-arrow ${isMenuOpen ? "rotated" : ""}`}>
                ▲
              </span>
            </button>

            {/* Выпадающее меню */}
            {isMenuOpen && (
              <div className="sort-dropdown">
                <div
                  className="sort-option"
                  onClick={() => {
                    onSort("high-to-low");
                    setIsMenuOpen(false);
                  }}
                >
                  price: high to low
                </div>
                <div
                  className="sort-option"
                  onClick={() => {
                    onSort("low-to-high");
                    setIsMenuOpen(false);
                  }}
                >
                  price: low to high
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
