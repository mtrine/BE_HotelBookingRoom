import { Expose } from "class-transformer";
import { MetaResponseDto } from "src/core/meta-response.dto";
import { DiscountStatus } from "src/enum/discountStatus.enum";

export class DiscountResponseDto {
    @Expose()
    discountId: string;

    @Expose()
    discountCode: string;

    @Expose()
    discountName: string;

    @Expose()
    discountPercentage: number;

    @Expose()
    discountStatus: DiscountStatus;

    @Expose()
    validFrom: Date;

    @Expose()
    validTo: Date;
}


export class DiscountsResponseDto {
    @Expose()
    meta: MetaResponseDto;

    @Expose()
    discounts: DiscountResponseDto[];
    
}

