import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Kelompok 2 PMSI terbaik!',
    };
  }
}
