import ProfileForm from "./profileform";

const Page = async () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <p className="text-muted-foreground mb-6">
        Manage your account settings.
      </p>

      <ProfileForm />
    </div>
  );
};

export default Page;