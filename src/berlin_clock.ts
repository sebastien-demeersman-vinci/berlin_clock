export function getSingleMinutesRow(minutes: number): string {
    const singleMinutes = minutes;
    if (singleMinutes > 1)
        return '1000';
    return '0000';
};