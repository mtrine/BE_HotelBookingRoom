import { IsNotEmpty, Min } from "class-validator";
import { BookingStatus } from "src/enum/bookingStatus.enum";
import { TypeBooking } from "src/enum/typeBooking.enum";

export class CreateBookingDto {
    
    @IsNotEmpty()
    startTime: Date;

    @IsNotEmpty()
    endTime: Date;

    @IsNotEmpty()
    bookingType: TypeBooking;

    @IsNotEmpty()
    @Min(1, { message: 'The number of persons must be greater than 0' })
    numberOfPerson: number;

    @IsNotEmpty()
    userId: string;  

    @IsNotEmpty()
    roomId: number;  
}
