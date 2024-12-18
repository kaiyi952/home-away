import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Rating from './Rating';
import Comment from './Comment';
import { FC, PropsWithChildren } from 'react';
type ReviewCardProps = {
    reviewInfo: {
        comment: string;
        rating: number;
        name: string;
        image: string;
    };
};

const ReviewCard: FC<PropsWithChildren<ReviewCardProps>> = ({ reviewInfo, children }) => {
    // function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
    return <Card>
        <CardHeader>
            <div className='flex items-center'>
                <img src={reviewInfo.image} alt='profile' className='w-12 h-12 rounded-full object-cover' />
                <div className='ml-4'>
                    <h3 className='text-sm font-bold capitalize mb-1'>
                        {reviewInfo.name}
                    </h3>
                    <Rating rating={reviewInfo.rating} />
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Comment comment={reviewInfo.comment} />
        </CardContent>
        {/* delete button later*/}
        <div className='absolute top-3 right-3'>{children}</div>
    </Card>
}

export default ReviewCard