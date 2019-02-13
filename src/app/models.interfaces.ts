export interface Certificate{
    serialNumber: string;
    notAfer: string;
    subject: string;
    issuer: string;
    file64: string;
    alias: string;
    nomCliente: string;
    repositorio: string;
    observaciones: string;
}

export interface User{
    id: number;
    username: string;
    password: string;
    admin: string;
}