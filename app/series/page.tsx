import BlogService from '@app/services';

import Container from '@components/Container';
import MessageBox from '@components/MessageBox';
import SeriesList from '@components/series/SeriesList';

export const metadata = {
  title: 'Series',
  description: 'Series',
};

const getSeries = async () => {
  try {
    const series = await BlogService.getSeries();
    return {
      series,
    };
  } catch (e) {
    return {
      hasError: true,
    };
  }
};

const Series = async () => {
  const { series, hasError } = await getSeries();

  return (
    <Container>
      {hasError && <MessageBox message="Oops!! Server error is occurred." />}
      {!hasError &&
        series &&
        (series.length === 0 ? <MessageBox message="There is no series." /> : <SeriesList series={series} />)}
    </Container>
  );
};

export default Series;
