import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function DialogDemo() {
  return (
    <Dialog>
      <div>
        <DialogTrigger className="py-3 cursor-pointer px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          <p>Book your repair</p>
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a Phone Repair</DialogTitle>
            <DialogDescription>
              Submit your details below and we'll get your device back in working order.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Full Name</Label>
              <Input id="name-1" name="name" placeholder="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Phone Number</Label>
              <Input id="username-1" name="username" placeholder="(+267) 745 522 406" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Device Brand</Label>
              <Input id="username-1" name="username" placeholder="Apple, Samsung, Huawei, etc." />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Device Model</Label>
              <Input id="username-1" name="username" placeholder="e.g., iPhone 12, Galaxy S21" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">What problem are you experiencing?</Label>
              <Textarea placeholder="Type your message. Options like: cracked screen, battery issue, water damage, charging problem, software issue, other" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Has the device been repaired before?</Label>
              <Textarea placeholder="Type your message. If YES, state what was the issue and when was the work done" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send request</Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  )
}
