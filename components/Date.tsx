import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

export function Date({ dateString }: Props) {
  const date = parseISO(dateString);
  return (
    <time style={{ margin: "0 10px" }} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}

export default Date;
