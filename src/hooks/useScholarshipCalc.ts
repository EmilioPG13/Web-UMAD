import { useMemo, useState } from 'react';
import type { CalculatorInput, CalculatorResult, SpecialCondition } from '../types';
import { calculateScholarship } from '../utils/scholarshipEngine';

export function useScholarshipCalc() {
  const [gpa, setGpa] = useState(8.5);
  const [conditions, setConditions] = useState<SpecialCondition[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const input: CalculatorInput = { gpa, conditions };

  const result: CalculatorResult = useMemo(
    () => calculateScholarship(input),
    [gpa, conditions] // eslint-disable-line react-hooks/exhaustive-deps
  );

  function toggleCondition(c: SpecialCondition) {
    setConditions(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    );
  }

  function calculate() {
    setHasCalculated(true);
  }

  function reset() {
    setGpa(8.5);
    setConditions([]);
    setHasCalculated(false);
  }

  return { gpa, setGpa, conditions, toggleCondition, result, hasCalculated, calculate, reset };
}
