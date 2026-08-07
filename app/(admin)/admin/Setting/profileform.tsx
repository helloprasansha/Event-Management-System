"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import { useRef, useState } from "react";

export default function ProfileForm() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

const uploadImage = async () => {
  if (!image) {
    alert("Please select an image first.");
    return;
  }

  try {
    const formData = new FormData();

    formData.append("file", image);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      alert("Image uploaded successfully!");

      console.log("Image URL:", data.imageUrl);
    } else {
      alert(data.message || "Upload failed");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong while uploading.");
  }
};

const uploadImage2 = async () => {
  if (!image) {
    alert("Please select an image first.");
    return;
  }

  const formData = new FormData();

  formData.append("file", image);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  console.log(data);
};
  
  return ( 
    <div className="space-y-6">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your personal information.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">

            <div className="space-y-4">
  <Label>Profile Picture</Label>

  <div className="flex items-center gap-4">
    <div className="relative h-24 w-24 overflow-hidden rounded-full border">
      {preview ? (
        <Image
          src={preview}
          alt="Profile Preview"
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
          No Image
        </div>
      )}
    </div>

    <Input
      type="file"
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (!file) return;``

        setImage(file);
        setPreview(URL.createObjectURL(file));
      }}
    />
  </div>
</div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Yuras Pokharel"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@yuras.com"
            /> 
          </div>    

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+977-98XXXXXXXX"
            />
          </div>

          <Button onClick={uploadImage}>
  Save Changes
</Button>
        </CardContent>
      </Card>

    
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your password.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">
              Current Password
            </Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="Current password"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">
              New Password
            </Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <Button>Update Password</Button>
        </CardContent>
      </Card>
    </div>
  );
}