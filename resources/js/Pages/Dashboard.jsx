import HomeAdmin from '@/Components/HomePageAdmin';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth ,blog,token}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
            <Head title="Dashboard" />

          <HomeAdmin Blog={blog} token={token}/>
        </AuthenticatedLayout>
    );
}
