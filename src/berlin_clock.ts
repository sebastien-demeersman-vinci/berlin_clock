export function getSingleMinutesRow(minutes: number): string {
    const singleMinutes = minutes % 5;
    return '1'.repeat(singleMinutes) + '0'.repeat(4 - singleMinutes);
};

export function getFiveMinutesRow(minutes: number): string {
    if (minutes == 5)
        return '10000000000'
    return '00000000000';
}