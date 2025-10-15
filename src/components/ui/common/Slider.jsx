import './Slider.css';

/**
 * Reusable Slider Component
 * For adjusting numeric values with visual feedback
 */
export default function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  showValue = true,
  disabled = false,
  ...props
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`game-slider ${disabled ? 'disabled' : ''}`}>
      <div className="slider-header">
        <label className="slider-label">{label}</label>
        {showValue && (
          <span className="slider-value">
            {value}{unit}
          </span>
        )}
      </div>
      <div className="slider-track-container">
        <div className="slider-track">
          <div
            className="slider-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          className="slider-input"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
          {...props}
        />
      </div>
    </div>
  );
}