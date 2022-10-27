export type IUserStatus = 'ACTIVE' | 'INACTIVE';

export interface IUser {
  // source of truth

  id: string; // get id | set id
  documentType: 'DNI' | 'PASSPORT';
  documentNumber: string;
  name: string;
  lastname: string;
  status: IUserStatus;
  //   sumar: (a: number, b: number) => number;
}
//  comando => instruccion imperativa =>  verbo + sujeto(sutantivo)
// interface contrato     client(consume) | servidor(implemtar)

// export interface ICreateUserCmd {
//   documentType: 'DNI' | 'PASSPORT';
//   documentNumber: string;
//   name: string;
//   lastname: string;
// }
export interface ICreateUserCmd extends Omit<IUser, 'id' | 'status'> {}

export interface IUpdateUserCmd
  extends Pick<IUser, 'id' | 'name' | 'lastname'> {}

export interface IUpdateUserDocumentCmd
  extends Pick<IUser, 'id' | 'documentType' | 'documentNumber'> {}

// const a: ICreateUserCmd = {
//   documentNumber: '23423',
//   documentType: 'DNI',
//   lastname: 'ddd',
//   name: 'dd',
// };
