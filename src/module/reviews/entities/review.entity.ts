import { Booking } from "src/module/booking/entities/booking.entity";
import { User } from "src/module/users/entities/user.entity";
import { Column, Entity, Generated, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    reviewId: string;

    @Column({ type: "int", })
    rating: number;

    @Column({ type: "text", })
    comment: string;

    @OneToOne(() => Booking, booking => booking.review,{ onDelete: 'SET NULL', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'bookingId' })
    booking: Booking;

    @ManyToOne(() => User, user => user.review,{ onDelete: 'SET NULL', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;
}
