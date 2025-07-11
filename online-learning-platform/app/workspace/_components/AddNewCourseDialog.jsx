import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

function AddNewCourseDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-3 mt-4">
              <div>
                <label>Course Name</label>
                <Input placeholder="Course Name" />
              </div>
              <div>
                <label>Course Description (Optional)</label>
                <Textarea placeholder="Course Description" />
              </div>
              <div>
                <label>No. Of Chapters</label>
                <Input placeholder="No. Of Chapter" type="number" />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCourseDialog;
