import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

export function Date({ dateString }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

export default Date;
