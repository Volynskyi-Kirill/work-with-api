async function getData(API) {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            alert(`Ошибка HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { getData };
