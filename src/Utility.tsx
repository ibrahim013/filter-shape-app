// Helper function  to  check for items selected for filtering
const buildFilter = (filter: any) => {
  let query: any = {};
  for (let keys in filter) {
    if (filter[keys].constructor === Array && filter[keys].length > 0) {
      query[keys] = filter[keys];
    }
  }
  return query;
}

//Filtering function
export const filterData = (data: any, filter: any) => {

  const query = buildFilter(filter)

  // update color array with selected filtered color
  if (Array.isArray(query['color']) && query['color'].length) {
    data = data.map((d: any) => {
      return {
        ...d,
        color: query['color']
      }
    })
  }

  if (query["shape"] === undefined) {
    return data;
  }

  const filteredData = data.filter((item: any) => {
    if (item['shape'] === undefined || !query["shape"].includes(item["shape"])) {
      return false;
    }
    return true;
  });

  return filteredData;
};

export const updateFilterState = (state: string[], data: any) => {
  if (state.includes(data)) {
    return state.filter((s: string) => {
      return s !== data;
    });
  }
  return [...state, data]
}


//utility function for selecting the correct grid title
export const setGridTitle = (shapes: any, filterData: any) => {
  let message = ''
  if ((filterData?.shape.length < 1 && shapes.length > 0) && filterData?.color.length < 1) {
    return message = "All Items"
  }
  if (!filterData?.shape.length && filterData?.color.length === 1) {
    return message = `All ${filterData?.color[0]} Items`
  }
  if (filterData?.shape.length === 1 && !filterData?.color.length) {
    return message = `All ${filterData?.shape[0]} Items`
  }
  if (filterData?.shape.length === 1 && filterData?.color.length > 1) {
    return message = `Multiple ${filterData?.shape[0]} Items`
  }
  if (filterData?.shape.length === 1 && filterData?.color.length === 1) {
    return message = `${filterData?.color[0]} ${filterData?.shape[0]} selected`
  }
  if ((!filterData?.shape.length || filterData?.shape.length > 1) &&
    filterData?.color.length === 1) {
    return message = `Multiple ${filterData?.color[0]} Items`
  }
  if ((!filterData?.color.length && filterData?.shape.length > 0) ||
    (!filterData.shape.length && filterData?.color.length > 0) ||
    (filterData.color.length > 1 && filterData?.shape.length > 1)) {
    return message = "Multiple Items"
  }
  return message
}