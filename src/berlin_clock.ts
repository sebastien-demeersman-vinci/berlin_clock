export function getSingleMinutesRow(minutes: number): string {
    const singleMinutes = minutes;
    if (singleMinutes == 1)
        return '1000';
    if (singleMinutes == 2)
        return '1100';
    if (singleMinutes == 3)
        return '1110';
    return '0000';
};