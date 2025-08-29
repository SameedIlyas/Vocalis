import { DashboardLayout } from "@/modules/dashboard/ui/layouts/dashboardLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default Layout;