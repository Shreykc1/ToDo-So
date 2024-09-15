export const formatDate = (dateInput: string): string => {
    const date = new Date(dateInput);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};


export const getRandomValue = (list: any[]) => {
    const randomIndex = Math.floor(Math.random() * (list.length - 0 + 1) + 0);
    return list[randomIndex]
}


export const Interval = (func:()=>string) => {
    return setInterval(() => func, 2000);
}
