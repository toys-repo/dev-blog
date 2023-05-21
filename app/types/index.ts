export type CategoryStats = Record<string, number>;

export type PostSummary = { title: string; createdAt: string };

export type SeriesStats = Record<string, PostSummary[]>;

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
