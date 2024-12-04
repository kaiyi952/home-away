'use client';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { toggleFavoriteAction } from '@/utils/actions';
import { CardSubmitButton } from '../form/Buttons';

type FavoriteToggleFormProps = {
    propertyId: string;
    favoriteId: string | null;
};


function FavoriteToggleForm({ propertyId, favoriteId }: FavoriteToggleFormProps) {
    const pathname = usePathname()
    return (
        <FormContainer action={ }>
            <CardSubmitButton isFavorite={favoriteId ? true : false}
        </FormContainer>
    )
}

export default FavoriteToggleForm