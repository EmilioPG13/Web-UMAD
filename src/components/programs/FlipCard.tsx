import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl">
          <div className={`absolute inset-0 ${program.accentColor}`} />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 p-6 flex flex-col">
            <h3 className="font-display font-bold text-white text-base leading-snug mb-3">
              {program.shortName}
            </h3>
            <p className="text-white/85 text-sm leading-relaxed flex-1">
              {program.description}
            </p>
            <Link
              to="/carreras"
              className="mt-4 inline-flex items-center gap-1.5 text-white font-semibold text-sm border border-white/50 rounded-lg px-4 py-2 hover:bg-white/20 transition-colors self-start"
              onClick={e => e.stopPropagation()}
            >
              Ver carrera <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
