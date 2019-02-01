export interface Certificate{
    id: number;
    alias: string;
    issuingEntity: string;
    serialNumber: string;
    subject: string;
    expirationDate: Date;
    password: string;
    idOrganism: string;
    clientName: string;
    //integrationsList: Array<string>;
    contactUser: string;
    repository: string;
    observations: string;
}