export interface IState {
    admin: IAdminState
}

export interface IAdmin {
    id: string,
    name: string,
    login: string,
    email: string,
    status: ADMIN_STATUS
}

export interface IAdminState {
    admin: IAdmin | null,
    isLoggedIn: boolean,
    isLoading: boolean,
}

export interface IAdminLogin {
    login: string,
    password: string
}

type ADMIN_STATUS = 'pro' | 'basic';
