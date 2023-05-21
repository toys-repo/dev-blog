import { ISeries } from '@app/interfaces';

import Series from '@app/components/series';

interface SeriesListProps {
  series: ISeries[];
}

const SeriesList = ({ series }: SeriesListProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {series.map((seriesItem) => (
        <Series key={seriesItem.name} seriesItem={seriesItem} />
      ))}
    </div>
  );
};

export default SeriesList;
