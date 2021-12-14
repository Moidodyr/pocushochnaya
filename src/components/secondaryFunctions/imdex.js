export const formatCurrency = value => {
    return value.toLocaleString('ru-Ru', 
        {style: 'currency',
        currency: 'RUB'
    }
)}