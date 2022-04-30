export interface IRouter {
    path?: string
    name?: string
    component?: any
    children?: IRouter[]
    redirect?: string
}