import {
  ICreateUserCmd,
  IUpdateUserCmd,
  IUpdateUserDocumentCmd,
  IUser,
  IUserStatus,
} from './model';

export class User implements IUser {
  // @prop ('pk')
  id: string;
  documentType: 'DNI' | 'PASSPORT';
  // @prop ('dn', nullable, regex)
  documentNumber: string;
  name: string;
  lastname: string;
  status: IUserStatus;

  constructor(cmd: ICreateUserCmd) {
    this.documentNumber = cmd.documentNumber;
    this.documentType = cmd.documentType;
    this.lastname = cmd.lastname;
    this.name = cmd.name;
    // invariante => regla negocio
    this.status = 'ACTIVE';
  }

  updateCmd(cmd: IUpdateUserCmd) {
    //
    if (this.status !== 'ACTIVE') throw { code: 'IllegalState' };
    this.lastname = cmd.lastname;
    this.name = cmd.name;
    //
  }
  updateDocumentCmd(cmd: IUpdateUserDocumentCmd) {
    //
    if (this.status !== 'ACTIVE') throw { code: 'IllegalState' };
    //
  }
}
