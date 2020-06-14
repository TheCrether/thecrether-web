import Link from "next/link";

interface Props {
  href?: string;
  msg?: string;
}

export function BackLink({ href, msg }: Props) {
  return (
    <div>
      <Link href={href ? href : "/"}>
        <a>← {msg ? msg : "Back to home"}</a>
      </Link>
    </div>
  );
}

export default BackLink;
