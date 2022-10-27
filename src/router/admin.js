import LoginPage from '@/pages/Admin/LoginPage';

export default [
    {
        name: 'admin',
        children: [
            {
                name: 'admin.login',
                path: '/login',
                component: LoginPage
            }
        ]
    }
];
