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

type ADMIN_STATUS = 'pro' | 'basic';
