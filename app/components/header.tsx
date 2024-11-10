// Components help kerta hai code ko distribute kerne me
import Link from "next/link"
export default function Header () {
  return(
    <div className="headerfirst">
      <div className="headersecond">
        <ul className="Header-button">
            <Link href={"/"}> <li> Home </li> </Link>
            <Link href={"/contact"}> <li> contact me </li> </Link>
            <Link href={"/portfolio"}> <li> protfolio </li> </Link>
      </ul>
        </div>
    </div>
  );
}