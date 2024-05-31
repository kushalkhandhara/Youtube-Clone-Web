export const API_key ="AIzaSyBN1VsOi5vX3FiItVxXgUXxIrTdbU8zmSI";

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/100000) +"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+ "K";
    }
    else
    {
        return value;
    }
}

export const time_converter = (value)=>
{
        const date = new Date(value);
        const day = date.getUTCDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate
}

