interface authorProps {
  name?: string;
}

export const getDataNames = (authors?: object[]) => {
  const ss = authors?.map((author: authorProps) => author.name);
  return ss?.length && ss?.length > 1
    ? ss?.join(", ")
    : ss?.length
    ? ss![0]
    : "";
};

export const delayApiCall = (func: () => void, handler: any, delay: any) => {
  clearTimeout(handler);
  return setTimeout(func, delay);
};

export const mapObjectToOneArray = (data: object, propertyName: string) => {
  const mapedData: object[] = [];
  Object.entries(data).forEach(([key, value]) => {
    mapedData.push(...value);
  });
  return { [propertyName]: mapedData };
};

interface itemProps {
  id?: any;
  available_copies?: any;
}

export const updateItemAvailablity = (
  data: Array<{}>,
  id: any,
  action: string
) => {
  if (action === "decrease") {
    return data.map((item: itemProps) =>
      item.id === id
        ? { ...item, available_copies: item.available_copies - 1 }
        : { ...item }
    );
  }
  return data.map((item: itemProps) =>
    item.id === id
      ? { ...item, available_copies: item.available_copies + 1 }
      : { ...item }
  );
};
