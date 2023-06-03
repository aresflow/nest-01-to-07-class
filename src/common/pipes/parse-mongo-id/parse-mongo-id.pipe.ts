import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    
    if ( !isValidObjectId(value) ) throw new Error(`Invalid MongoID: ${value}`);

    return value;
  }
}
