import { Body, Controller, Post } from '@nestjs/common';
import { AddressEntity } from './interfaces/address.entity';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/createAddress.dto';

@Controller('address')
export class AddressController {

    constructor(private readonly addressService: AddressService) { }

    @Post()
    async createAddress(@Body() createAddressDto: CreateAddressDto): Promise<AddressEntity> {
        return this.addressService.createAddress(createAddressDto);
    }

}
