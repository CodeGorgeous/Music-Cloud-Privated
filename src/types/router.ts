export interface IRouter {
    path?: string
    name?: string
    element?: any
    children?: IRouter[]
    redirect?: string
}