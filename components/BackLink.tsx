import Link from "next/link";

interface Props {
  href?: string;
  msg?: string;
}

export function BackLink({ href, msg }: Props) {
  return (
    <div style={{ margin: "15px 0", fontWeight: "bold" }}>
      <Link href={href ? href : "/"}>
        <a>← {msg ? msg : "Back to home"}</a>
      </Link>
    </div>
  );
}

export default BackLink;
