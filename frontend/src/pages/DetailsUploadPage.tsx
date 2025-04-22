
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailsUploadPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate upload flow.
    console.log("Upload details", { title, desc, file });
    // Redirect or show toast on successful submission.
    navigate(-1); // Go back after uploading
  };

  return (
    <MainLayout>
      <div className="max-w-lg mx-auto py-12 px-4 sm:px-0 animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-eco-leaf/10 rounded-full p-4 mb-2">
            <Upload className="h-8 w-8 text-eco-leaf" />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-center">
            Upload Details
          </h1>
          <p className="text-muted-foreground text-center max-w-sm">
            Share a new forum thread, resource, project, or event with the community. Fill out the details below and upload relevant files (optional).
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter a descriptive title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              placeholder="Describe the thread, resource, project or event"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="file">Upload File (optional)</Label>
            <Input
              id="file"
              type="file"
              accept="image/*,video/*,application/pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
              onChange={handleFileChange}
            />
            {file && (
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                {file.name}
              </div>
            )}
          </div>
          <Button type="submit" className="w-full flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Submit
          </Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default DetailsUploadPage;
