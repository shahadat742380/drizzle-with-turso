// import third party package
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
}
