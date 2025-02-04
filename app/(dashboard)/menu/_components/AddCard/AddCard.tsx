'use client'

import './AddCard.css';

interface AddCardWidgetProps {
    onSubmit?: (cardData: { number: string; holderName: string; expiryDate: string; securityCode: string }) => void;
}

const AddCard: React.FC<AddCardWidgetProps> = ({ onSubmit }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const cardData = {
            number: formData.get('number') as string,
            holderName: formData.get('holderName') as string,
            expiryDate: formData.get('expiryDate') as string,
            securityCode: formData.get('securityCode') as string,
        };
        onSubmit?.(cardData);
    };

    return (
        <div className={'add-card'}>
            <h2 className={'title'}>Agregar tarjeta</h2>
            <p className={'title'}>Añade tu tarjeta de crédito/débito</p>
            <form className={'form'} onSubmit={handleSubmit}>
                <input type="text" name="number" placeholder="Número de tarjeta" className={'input'} />
                <input type="text" name="holderName" placeholder="Nombre del titular" className={'input'} />
                <div className={'buttonGroup'}>
                    <input type="text" name="expiryDate" placeholder="Fecha de expiración" className={'button'} />
                    <input type="text" name="securityCode" placeholder="Código de seguridad" className={'button'} />
                </div>
                <button type="submit" className={'confirmButton'}>
                    Confirmar
                </button>
            </form>
        </div>
    );
};

export default AddCard;