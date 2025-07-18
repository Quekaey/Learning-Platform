import React, { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import axios from "axios";

function AddNewCourseDialog({ children }) {
  // This component renders a dialog for creating a new course using AI.
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: false,
    noOfChapters: 1,
    category: "",
    level: "",
  });

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formData);
  };

  const onGenerate = async () => {
    console.log(formData);
    try {
      setLoading(true);
      const result = await axios.post("/api/generate-course-layout", {
        ...formData,
      });
      console.log(result.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  // Render the dialog with input fields for course details

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
                <Input
                  placeholder="Name"
                  onChange={(event) =>
                    onHandleInputChange("name", event?.target.value)
                  }
                />
              </div>
              <div>
                <label>Course Description (Optional)</label>
                <Textarea
                  placeholder="Description"
                  onChange={(event) =>
                    onHandleInputChange("description", event?.target.value)
                  }
                />
              </div>
              <div>
                <label>No. Of Chapters</label>
                <Input
                  placeholder="No. Of Chapter"
                  type="number"
                  onChange={(event) =>
                    onHandleInputChange(
                      "noOfChapters",
                      Number(event?.target.value)
                    )
                  }
                />
              </div>
              <div className="flex items-center gap-3">
                <label>Include Video</label>
                <Switch
                  onCheckedChange={(checked) =>
                    onHandleInputChange("includeVideo", checked)
                  }
                />
              </div>
              <div>
                <label>Difficulty Level</label>
                <Select
                  onValueChange={(value) => onHandleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label>Category</label>
                <Input
                  placeholder="Category (Separated by Comma)"
                  onChange={(event) =>
                    onHandleInputChange("category", event?.target.value)
                  }
                />
              </div>

              <div className="mt-5">
                <Button
                  className={"w-full"}
                  onClick={onGenerate}
                  disabled={loading}
                >
                  {" "}
                  {loading ? <Loader2Icon className="animate-spin" /> : null}
                  <SparkleIcon /> Generate Course{" "}
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCourseDialog;
