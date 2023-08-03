import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CategoryADMIN from "@/Components/CategoryCRUD";

const Category = ({ auth, token,success,category }) => {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Category" />
                <CategoryADMIN token={token} success={success} category={category}/>
            </AuthenticatedLayout>
        </>
    )
}

export default Category;