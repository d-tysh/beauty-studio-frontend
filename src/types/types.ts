export interface IState {
    admin: IAdminState
}

export interface IAdmin {
    _id?: string,
    id: string,
    name: string,
    login: string,
    email: string,
    status: ADMIN_STATUS
}

export interface IAdminState {
    currentAdmin: IAdmin | null,
    isLoggedIn: boolean,
    isLoading: boolean,
}

export interface IAdminLogin {
    login: string,
    password: string
}

type ADMIN_STATUS = 'pro' | 'basic';
