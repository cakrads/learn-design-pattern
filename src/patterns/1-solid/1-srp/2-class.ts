/**
 * Not Use SRP
 * 
 */
export class Auth {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  async login() {
    try {
      const result = await fetch("API");
      return result;
    } catch (error: any) {
      this.errorLog(error.message);
    }
  }

  errorLog(message: string) {
    console.log(message);
  }
}

// use SRP
// split responsibility logging and login
export class ErrorLog {
  static log(message: string) {
    console.log(message);
  }
}

export class AuthSRP {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  async login() {
    try {
      const result = await fetch("API");
      return result;
    } catch (error: any) {
      ErrorLog.log(error.message);
    }
  }
}