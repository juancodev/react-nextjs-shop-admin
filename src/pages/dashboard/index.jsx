import useFetch from '@/hooks/useFetch';
import endPoints from '@/api/api.escuelajs';
import { Chart } from '@/common/Chart';

const PRODUCT_LIMIT = 20;
const PRODUCT_OFFSET = 0;

export default function Dashboard() {
  const products = useFetch(
    endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)
  );

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);
  const countOcurrences = (arr) =>
    arr.reduce(
      (previous, current) => (
        (previous[current] = ++previous[current] || 1), previous
      ),
      {}
    );

  const data = {
    type: 'bar',
    data: {
      datasets: [
        {
          label: 'Categories',
          data: countOcurrences(categoryCount),
          borderWidth: 2,
          backgroundColor: [
            '#ffbb11',
            '#c0c0c0',
            '#50AF95',
            '#f3ba2f',
            '#2a71d0',
          ],
        },
      ],
    },
  };
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data.data} />
    </>
  );
}
