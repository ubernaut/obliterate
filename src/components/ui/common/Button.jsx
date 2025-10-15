import { useAudio } from '../../../hooks/useAudio';
import './Button.css';

/**
 * Reusable Button Component
 * Plays sound effect on click
 */
export default function Button({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...props 
}) {
  const audio = useAudio();

  const handleClick = (e) => {
    if (disabled) return;
    audio.playSFX('ui-click', { volume: 0.2 });
    onClick?.(e);
  };

  return (
    <button
      className={`game-button game-button-${variant} game-button-${size} ${fullWidth ? 'full-width' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}