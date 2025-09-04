import { ConversationsLayout } from "@/modules/dashboard/ui/layouts/conversationsLayout";

const Layout = ({
    children
}: { children: React.ReactNode; }) => {
    return <ConversationsLayout>{children}</ConversationsLayout>
};

export default Layout;