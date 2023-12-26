import { auth, currentUser, UserButton } from "@clerk/nextjs";

const ProtectedPage = async() => {

    const user = await currentUser();
    const {userId} = auth()

    return (
        <div>User: {user?.firstName}  {userId} <UserButton afterSignOutUrl="/"/></div>
    );
};

export default ProtectedPage;
