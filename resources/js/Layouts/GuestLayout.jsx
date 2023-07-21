import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Pages/footer';
import Header from '@/Pages/header';
import { Link } from '@inertiajs/react';

export default function Guest({ auth, children ,category}) {
    return (
        <>
            <Header auth={auth} categorys={category} />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

                <div className='container relative pt-10 pb-16 lg:pt-20 lg:pb-28'>
                    {children}
                </div>

            </div>
            <Footer />
        </>
    );
}
