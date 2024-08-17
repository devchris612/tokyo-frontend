import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getHistory } from "@/services/history";
import History from "./History";
import clearHistoryAction from "@/app/actions/clearHistoryAction";
import HistoryClearButton from "./HistoryClearButton";

export default async function HistoryDialog() {
  const history = await getHistory();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Lịch sử</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Lịch sử</DialogTitle>
          <DialogDescription>Những bài hát bạn đã nghe qua</DialogDescription>
        </DialogHeader>
        <History songs={history.songs} />
        <DialogFooter>
          <HistoryClearButton userId={history._id} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
