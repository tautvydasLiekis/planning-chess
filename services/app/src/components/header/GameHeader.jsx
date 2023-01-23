import React from 'react';
import Header from './Header';
import RippleButton from '../rippleButton/RippleButton';
import Separator from "../../static/svg/SolidSeparator.svg";
import CopyLink from "../../static/svg/CopyLink.svg";
import { rgbToColor } from '../../helpers/rgbToColor';
import './header.css';
import { useChessBoardContext } from '../../contexts/ChessBoardContext';

const GameHeader = () => {
  const { currentPlayer } = useChessBoardContext();

  const avatarLetter = currentPlayer?.name[0];

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
  }

  return (
    <Header>
      <div 
        className='f-row align-c gap-m header-info'
      >
        <img src={Separator} alt="separator" />

        <div className="copy-section">
          <RippleButton onClick={copyUrl} data-testid="copy-link-btn">
            <img src={CopyLink} alt="copy link" className="copy-icon" />
          </RippleButton>
        </div>
      </div>

      {currentPlayer && (
        <div className="f-1 justify-end align-c gap-s">
          <span
            className="f-center avatar font-size-m weight-500"
            style={{
              color: rgbToColor(currentPlayer.color.text),
              backgroundColor: rgbToColor(currentPlayer.color.background),
            }}
          >
            {avatarLetter}
          </span>
          <span id="username">{currentPlayer.name}</span>
        </div>
      )}
    </Header>
    
  );
};

export default GameHeader;
