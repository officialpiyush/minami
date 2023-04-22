import { SignIn, SignedOut, currentUser } from "@clerk/nextjs/app-beta";

export default async function AuthPage() {
    const user = await currentUser();

    return (
        <div className="flex flex-1 items-center justify-center">
            {
                user ? (
                    <SignedOut />
                ) : (
                    <SignIn />
                )
            }
        </div>

    )
}