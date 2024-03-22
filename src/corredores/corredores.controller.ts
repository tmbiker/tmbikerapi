import { Controller, Body, Post } from '@nestjs/common';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto';
import { CorredoresService } from './corredores.service';

@Controller('corredores')
export class CorredoresController {
    constructor(private readonly corredoresService: CorredoresService){ 

    }

    @Post('/nuevo')
    nuevoCorredores(@Body() nuevoCorredores: NuevoCorredoresDto){
//        return this.corredoresService.nuevoCorredores(nuevoCorredores);
        return {data: nuevoCorredores};
    }
}