import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Monitor } from 'lucide-react';
import type { Program } from '../../types';
import Badge from '../ui/Badge';

interface Props {
  program: Program;
  delay?: number;
}

export default function FlipCard({ program, delay = 0 }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-72 perspective-1000 cursor-pointer group"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(v => !v)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`relative w-full h-full transform-style-preserve transition-transform duration-500 ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <div className={`absolute inset-0 ${program.accentColor} opacity-90`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <Badge label={program.faculty} colorClass="bg-white/20 backdrop-blur-sm mb-2" />
            <h3 className="font-display font-bold text-white text-lg leading-snug">
              {program.shortName}
            </h3>
            <p className="text-white/70 text-xs mt-1 capitalize">{program.level}</p>
          </div>
          {/* Flip hint */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
            <ArrowRight className="w-3 h-3 text-white rotate-45" />
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white border border-gray-100 shadow-xl p-6 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display font-bold text-umad-navy text-base leading-snug">
              {program.shortName}
            </h3>
            <Badge label={program.level} colorClass={program.accentColor} />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            {program.description}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {program.durationSemesters} sem.
              </span>
              <span className="flex items-center gap-1">
                <Monitor className="w-3.5 h-3.5" />
                {program.modalities[0]}
              </span>
            </div>
            <Link
              to="/carreras"
              className="text-umad-red text-xs font-semibold hover:underline flex items-center gap-1"
              onClick={e => e.stopPropagation()}
            >
              Más info <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
