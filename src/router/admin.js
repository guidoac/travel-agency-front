import LoginPage from '@/pages/Admin/LoginPage';
import RegisterPage from '@/pages/Admin/RegisterPage';
import HomePage from '@/pages/Admin/HomePage';

export default [
    {
        path: '/admin',
        redirect: '/admin/home',
        children: [
            {
                name: 'admin.login',
                path: 'login',
                component: LoginPage
            },
            {
                name: 'admin.register',
                path: 'register',
                component: RegisterPage
            },
            {
                name: 'admin.home',
                path: 'home',
                component: HomePage
            }
        ]
    }
];
