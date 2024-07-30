import { useState, useEffect } from 'react';
import axios from 'axios';


// Define your custom hook
function useCustomHooks(keyWord) {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    // URL based on the provided keyWord
    const Url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

    // Fetch data from the Giphy API
    async function fetchData(keyWord) {
        try {
            setLoading(true);
            const url = keyWord ? `${Url}&tag=${keyWord}` : Url; // Choose URL based on keyWord
            const response = await axios.get(url);
            const gifUrl = response.data.data.images.downsized_large.url; // Get the GIF URL
            setGif(gifUrl); // Update the state with the new GIF URL
        } catch (error) {
            console.error('Error fetching the GIF:', error);
        } finally {
            setLoading(false);
        }
    }

    // Call fetchData when the keyWord changes
    useEffect(() => {
        fetchData('RickRoll');
    }, []); // Dependency array includes keyWord

    return { gif, loading, fetchData };
}

export default useCustomHooks;
