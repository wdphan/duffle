import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      Made with &hearts; by <a className="ml-1"></a>{" "}
      <Link href="https://github.com/erhant"> Will</Link>
    </div>
  );
};

export default Footer;
