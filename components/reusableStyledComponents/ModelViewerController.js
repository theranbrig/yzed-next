import React, { useEffect, useContext, useState } from 'react';
import AnimatedModelViewer from './AnimatedModelViewer';
import StationaryModelViewer from './StationaryModelViewer';
import theme from '../../utilities/theme';

const ModelViewerController = ({ model, lightMode, setLightMode }) => {
  const [showAnimated, setShowAnimated] = useState(false);

  return (
    <>
      <div className={lightMode ? 'control-container light' : 'control-container'}>
        {showAnimated ? (
          <AnimatedModelViewer model={model} />
        ) : (
          <StationaryModelViewer model={model} />
        )}
        <div className='controls'>
          <div className='animated-buttons'>
            <button
              className={!showAnimated ? 'toggle-animated-button filled' : 'toggle-animated-button'}
              onClick={() => setShowAnimated(false)}>
              Stationary
            </button>
            <button
              className={showAnimated ? 'toggle-animated-button filled' : 'toggle-animated-button'}
              onClick={() => setShowAnimated(true)}>
              Walking
            </button>
          </div>
          <div className='dark-light-buttons'>
            <div className='toggle-button-container'>
              <button
                className={lightMode ? 'toggle-light-button filled' : 'toggle-light-button'}
                onClick={() => setLightMode(true)}
                aria-label='Toggle Light'
              />
              <p>Light</p>
            </div>
            <div className='toggle-button-container'>
              <button
                className={!lightMode ? 'toggle-light-button filled' : 'toggle-light-button'}
                onClick={() => setLightMode(false)}
                aria-label='Toggle Dark'
              />
              <p>Dark</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .controls {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .light {
          background: ${theme.colors.white};
          color: ${theme.colors.black};
        }
        .toggle-button-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 20px;
        }
        .dark-light-buttons {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        button,
        p {
          display: inline;
        }
        p {
          font-weight: 100;
          margin: 0;
        }
        .toggle-light-button {
          border-radius: 10px;
          height: 20px;
          width: 20px;
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.black};
          margin-right: 5px;
        }
        .toggle-animated-button {
          padding: 5px 10px;
          border-radius: 22px;
          min-width: 150px;
          font-size: 1rem;
          line-height: 1rem;
          letter-spacing: 0.2em;
          font-weight: 500;
          margin-right: 20px;
          border: 1px solid ${theme.colors.black};
          background: ${theme.colors.white};
        }
        .filled {
          border: 1px solid ${theme.colors.white};
          background: ${theme.colors.black};
          color: ${theme.colors.white};
        }
        @media (max-width: 640px) {
          .dark-light-buttons,
          .animated-buttons {
            min-height: 102px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }
      `}</style>
    </>
  );
};

export default ModelViewerController;
