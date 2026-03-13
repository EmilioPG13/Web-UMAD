import type { SpecialCondition } from '../../types';
import { conditionLabels } from '../../data/scholarships';

interface Props {
  gpa: number;
  setGpa: (v: number) => void;
  conditions: SpecialCondition[];
  toggleCondition: (c: SpecialCondition) => void;
  onCalculate: () => void;
}

const allConditions = Object.keys(conditionLabels) as SpecialCondition[];

export default function CalculatorForm({ gpa, setGpa, conditions, toggleCondition, onCalculate }: Props) {
  return (
    <div className="space-y-8">
      {/* GPA slider */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="font-semibold text-umad-navy text-sm">Promedio general</label>
          <span className="font-display font-bold text-2xl text-umad-red">{gpa.toFixed(1)}</span>
        </div>
        <input
          type="range"
          min={6}
          max={10}
          step={0.1}
          value={gpa}
          onChange={e => setGpa(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-umad-red"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>6.0</span>
          <span>7.0</span>
          <span>8.0</span>
          <span>9.0</span>
          <span>10.0</span>
        </div>
      </div>

      {/* Conditions */}
      <div>
        <p className="font-semibold text-umad-navy text-sm mb-3">Condiciones adicionales (opcional)</p>
        <div className="space-y-2">
          {allConditions.map(c => (
            <label
              key={c}
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                conditions.includes(c)
                  ? 'border-umad-navy bg-umad-navy/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="checkbox"
                checked={conditions.includes(c)}
                onChange={() => toggleCondition(c)}
                className="accent-umad-navy w-4 h-4"
              />
              <span className="text-sm text-gray-700">{conditionLabels[c]}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={onCalculate}
        className="w-full bg-umad-red hover:bg-umad-red-dark text-white font-bold py-4 rounded-xl transition-colors text-base"
      >
        Calcular mi beca
      </button>
    </div>
  );
}
