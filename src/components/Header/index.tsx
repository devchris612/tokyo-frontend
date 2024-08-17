import Image from "next/image";
import styles from "./index.module.scss";
import { Button } from "../ui/button";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { getUser } from "@/services/users";
import HistoryDialog from "./HistoryDialog";

type Props = {};

async function Header({}: Props) {
  const user = await getUser();

  return (
    <div className={styles.page_header}>
      <div className={styles.page_header_left_panel}>
        <Image
          src="/logo.svg"
          alt="logo"
          width="207"
          height="32"
          className={styles.page_header_image}
        />
        {user && <Searchbar />}
      </div>
      <div className="flex items-center gap-4">
        {user && <HistoryDialog />}
        <Button>
          <Link href={user ? "/api/logout" : "/login"}>
            {user ? "Đăng xuất" : "Đăng nhập"}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Header;
