const fmt = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });

export const fmtRange = (start: Date, end: Date | null) =>
  `${fmt(start)} - ${end ? fmt(end) : 'present'}`;

export const fmtTeam = (team: 'solo' | number) =>
  team === 'solo' ? 'solo' : `team of ${team}`;
