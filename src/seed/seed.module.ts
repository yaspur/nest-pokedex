import { Module } from '@nestjs/common';
import { PokemonModule } from '../pokemon/pokemon.module';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    PokemonModule, 
    CommonModule
  ]
})
export class SeedModule {}
