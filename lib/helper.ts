export const createPagination = ({
  page,
  total_data,
  perPage,
}: {
  page: number;
  total_data: number;
  perPage: number;
}) => {
  return {
    currentPage: page,
    totalData: total_data,
    totalPage: Math.ceil(total_data / perPage),
  };
};
