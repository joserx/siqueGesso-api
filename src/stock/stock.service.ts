import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {


  constructor(
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock> 
  ) {}

  select: any = [
    'id',
    'min',
    'max',
    'current'
  ]

  relations: any = [

  ]

  async create(createStockDto: CreateStockDto) {

    let { min, max, current } = createStockDto;

    if (min < 0)
      throw new HttpException('Número minímo não deve ser negativo', HttpStatus.BAD_REQUEST)
    
    if (current < min || current > max)
      throw new HttpException('Estoque atual deve estar entre Min e Max', HttpStatus.BAD_REQUEST)
    
    const stockObj = this.stockRepository.create(createStockDto)
    return this.stockRepository.save(stockObj).catch(e => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
    })
  }

  async findAll() {
    return this.stockRepository.find({
      select: this.select,
      relations: this.relations
    }).catch(e => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
    })
  }

  async findOne(id: number) {
    return this.stockRepository.findOne(id, {
      select: this.select
    }).catch(e => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
    })
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    let { min, max, current } = updateStockDto;

    if (min < 0)
      throw new HttpException('Número minímo não deve ser negativo', HttpStatus.BAD_REQUEST)
    
    if (current < min || current > max)
      throw new HttpException('Estoque atual deve estar entre Min e Max', HttpStatus.BAD_REQUEST)

    this.stockRepository.update(id, updateStockDto).catch(e => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
    })
    
  }

}
