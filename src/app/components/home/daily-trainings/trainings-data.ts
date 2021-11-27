export const traininsData: TrainingsData[] = [
  {
    id: 1,
    exercise: 'running, 6.5 km/h',
    met: 6.0,
    type: 'running'
  },
  {
    id: 2,
    exercise: 'running, 8 km/h',
    met: 8.3,
    type: 'running'
  },
  {
    id: 3,
    exercise: 'bicycling, mountain, competitive, racing',
    met: 16.0,
    type: 'bicycling'
  },
  {
    id: 4,
    exercise: 'pilates, general',
    met: 3.0,
    type: 'conditioning exercise'
  },
  {
    id: 5,
    exercise: 'aerobic, high impact',
    met: 7.3,
    type: 'dancing'
  },
  {
    id: 6,
    exercise: 'cleaning windows general',
    met: 3.2,
    type: 'home activities'
  },
  {
    id: 7,
    exercise: 'hockey, ice, general',
    met: 8.0,
    type: 'sports'
  },
  {
    id: 8,
    exercise: 'climbing hills, no load',
    met: 6.3,
    type: 'walking'
  },
  {
    id: 9,
    exercise: 'canoeing, portaging',
    met: 7.0,
    type: 'water activities'
  }
];

export interface TrainingsData {
  id: number;
  exercise: string;
  met: number;
  type: string;
}
