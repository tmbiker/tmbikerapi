import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto';
import { Corredores } from './corredores.entity';


@Injectable()
export class CorredoresService {

    constructor(@InjectRepository(Corredores) private corredoresRepository: Repository<Corredores>){}

    async nuevoCorredores(corredores: NuevoCorredoresDto){
        const corredoresFound = await this.corredoresRepository.findOne({
            where: {
                doc_numero: corredores.doc_numero
            }
        })
        if (corredoresFound){
            return new HttpException("Corredor ya Existe", HttpStatus.CONFLICT)
        }
        const nuevoCorredores = this.corredoresRepository.create(corredores);
        return this.corredoresRepository.save(nuevoCorredores)
    }
}