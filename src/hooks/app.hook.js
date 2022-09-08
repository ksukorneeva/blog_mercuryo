import { useState } from 'react';

export const useApp = () => {
    const [search, setSearch] = useState('');

    return { search, setSearch };
};
