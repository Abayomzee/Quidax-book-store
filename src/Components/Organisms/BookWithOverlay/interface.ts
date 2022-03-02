type dataProps = {
  id?: string;
  image_url?: string;
  available_copies?: number;
  title?: string;
  authors?: object[];
  genres?: object[];
  likes?: number;
  rating?: number;
};

export type Props = {
  className?: string;
  data: dataProps;
};
